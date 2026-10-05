import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

// In-memory OTP storage mapping email -> OTP record
interface StoredOtp {
  code: string;
  expiresAt: number; // Unix timestamp in ms (10 minutes limit)
  purpose: string;
  attempts: number;
  createdAt: number;
}

const otpStore = new Map<string, StoredOtp>();

// Periodic cleanup of expired OTPs every 2 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of otpStore.entries()) {
    if (record.expiresAt < now) {
      otpStore.delete(key);
    }
  }
}, 2 * 60 * 1000);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Health Check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Helper to create Nodemailer Gmail transport
  const getGmailTransporter = () => {
    const user = (process.env.GMAIL_USER || process.env.GMAIL_EMAIL || 'haswanth944@gmail.com').trim().replace(/^["']|["']$/g, '');
    const pass = (process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS || process.env.GMAIL_PASSWORD || '').trim().replace(/^["']|["']$/g, '').replace(/\s+/g, '');

    if (!user || !pass) {
      return { transporter: null, user, passConfigured: false };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });

    return { transporter, user, passConfigured: true };
  };

  // API Route: Check Email Dispatch Provider Status (Gmail via Nodemailer)
  app.get('/api/email-status', (req, res) => {
    const { user, passConfigured } = getGmailTransporter();

    res.json({
      configured: passConfigured,
      provider: 'Gmail',
      sender: `ProcureEase <${user}>`,
      activeOtpsCount: otpStore.size,
      notice: passConfigured 
        ? `Gmail SMTP is configured with ${user} and ready to dispatch OTP emails directly.` 
        : `Gmail dispatch is configured for ${user}. Please configure GMAIL_APP_PASSWORD (16-character Google App Password) in environment variables for live inbox delivery.`
    });
  });

  // API Route: Dispatch Email OTP (Gmail via Nodemailer)
  // Generates a 6-digit code, stores it with 10 minutes expiration, and emails it via Gmail
  app.post('/api/send-otp', async (req, res) => {
    try {
      const { email, purpose, otp: clientOtp } = req.body;

      if (!email || typeof email !== 'string' || !email.includes('@')) {
        return res.status(400).json({ success: false, error: 'Valid email address is required' });
      }

      const normalizedEmail = email.trim().toLowerCase();

      // Generate 6-digit code (or use client provided 6-digit code if present)
      const otp = (typeof clientOtp === 'string' && /^\d{6}$/.test(clientOtp.trim()))
        ? clientOtp.trim()
        : Math.floor(100000 + Math.random() * 900000).toString();

      // Store with expiration timestamp (10 minutes)
      const expiresAtMs = Date.now() + 10 * 60 * 1000;
      otpStore.set(normalizedEmail, {
        code: otp,
        expiresAt: expiresAtMs,
        purpose: purpose || 'user_signup',
        attempts: 0,
        createdAt: Date.now()
      });

      const purposeTitle = purpose === 'staff_login' 
        ? 'Staff Two-Factor Authentication (2FA)' 
        : purpose === 'user_login'
        ? 'Farmer / Citizen Login OTP Verification'
        : purpose === 'admin_login'
        ? 'Apex Administrator Security OTP Verification'
        : purpose === 'staff_signup'
        ? 'Official APMC Staff Registration Verification'
        : 'Farmer / Citizen Registration Verification';

      const subject = `[ProcureEase] Your Security Code: ${otp}`;
      
      const htmlBody = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; }
            .card { max-width: 520px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; }
            .header { background: #065f46; color: #ffffff; padding: 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 20px; letter-spacing: -0.5px; }
            .header p { margin: 4px 0 0; font-size: 12px; opacity: 0.85; }
            .content { padding: 28px 24px; color: #1e293b; }
            .title { font-size: 15px; font-weight: bold; margin-bottom: 12px; }
            .otp-box { background: #f0fdf4; border: 2px dashed #059669; border-radius: 8px; padding: 18px; text-align: center; margin: 20px 0; }
            .otp-code { font-family: monospace; font-size: 32px; font-weight: 800; letter-spacing: 8px; color: #065f46; }
            .expiry { font-size: 12px; color: #64748b; margin-top: 8px; }
            .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px; font-size: 11px; color: #64748b; text-align: center; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>ProcureEase Agricultural Portal</h1>
              <p>Government of Andhra Pradesh • APMC Procurement System</p>
            </div>
            <div class="content">
              <div class="title">${purposeTitle}</div>
              <p style="font-size: 13px; line-height: 1.5; color: #475569;">
                A request was made to authenticate your account with email address <strong>${normalizedEmail}</strong>. 
                Please use the one-time security code below to complete verification:
              </p>
              <div class="otp-box">
                <div class="otp-code">${otp}</div>
                <div class="expiry">Expires in 10 minutes • Do not share this code with anyone</div>
              </div>
              <p style="font-size: 12px; line-height: 1.4; color: #64748b;">
                If you did not request this code, please ignore this email or notify your system administrator immediately.
              </p>
            </div>
            <div class="footer">
              This is an automated notification from ProcureEase APMC Portal. Sent via Gmail. Please do not reply directly to this email.
            </div>
          </div>
        </body>
        </html>
      `;

      const textBody = `[ProcureEase] Security Code: ${otp}\n\nPurpose: ${purposeTitle}\nEmail: ${normalizedEmail}\n\nYour 6-digit verification code is: ${otp}\nThis code will expire in 10 minutes.\n\nDo not share this code with anyone.`;

      // Dispatch via Gmail SMTP (Nodemailer)
      const { transporter, user: gmailSender, passConfigured } = getGmailTransporter();

      let emailDelivered = false;
      let deliveryNotice = '';
      let deliveryError = '';
      let messageId = '';

      if (transporter && passConfigured) {
        try {
          const info = await transporter.sendMail({
            from: `"ProcureEase APMC Portal" <${gmailSender}>`,
            to: normalizedEmail,
            subject,
            text: textBody,
            html: htmlBody,
          });

          emailDelivered = true;
          messageId = info.messageId || '';
          deliveryNotice = `Verification code dispatched to ${normalizedEmail} via Gmail (${gmailSender}).`;
          console.log(`[Gmail Dispatch] Successfully sent OTP to ${normalizedEmail} via Gmail. Message ID: ${info.messageId}`);
        } catch (mailErr: unknown) {
          const error = mailErr as { message?: string; code?: string };
          console.error('[Gmail Dispatch] Error sending email via Gmail SMTP:', error);
          deliveryError = error.message || 'Failed to dispatch email via Gmail SMTP';
          deliveryNotice = `Gmail SMTP notice: ${deliveryError}`;
        }
      } else {
        console.warn(`[Gmail Dispatch] GMAIL_APP_PASSWORD is not configured for ${gmailSender}.`);
        deliveryNotice = `Gmail is configured for ${gmailSender}. Set GMAIL_APP_PASSWORD in environment variables for live inbox delivery.`;
      }

      if (emailDelivered) {
        return res.json({ 
          success: true, 
          emailDelivered: true, 
          provider: 'Gmail',
          sender: gmailSender,
          expiresAt: new Date(expiresAtMs).toISOString(),
          messageId,
          message: `Verification code sent to ${normalizedEmail}. Please check your email inbox.` 
        });
      } else {
        return res.json({ 
          success: true, 
          emailDelivered: false, 
          provider: 'Gmail',
          sender: gmailSender,
          expiresAt: new Date(expiresAtMs).toISOString(),
          error: deliveryError || undefined,
          message: deliveryNotice
        });
      }

    } catch (err: unknown) {
      const error = err as { message?: string };
      console.error('[Gmail Dispatch] Unexpected server error:', error);
      return res.status(500).json({ success: false, error: error.message || 'Failed to dispatch email' });
    }
  });

  // API Route: Verify OTP endpoint
  // Validates the code against the stored value before allowing account creation
  app.post('/api/verify-otp', async (req, res) => {
    try {
      const { email, otp, purpose } = req.body;

      if (!email || !otp) {
        return res.status(400).json({ 
          valid: false, 
          success: false, 
          error: 'Email and 6-digit verification code are required.' 
        });
      }

      const normalizedEmail = String(email).trim().toLowerCase();
      const enteredCode = String(otp).trim();

      if (enteredCode.length !== 6 || !/^\d{6}$/.test(enteredCode)) {
        return res.status(400).json({ 
          valid: false, 
          success: false, 
          error: 'Please provide a valid 6-digit verification code.' 
        });
      }

      const record = otpStore.get(normalizedEmail);

      // Check if an active OTP was issued for this email
      if (!record) {
        return res.status(400).json({ 
          valid: false, 
          success: false, 
          error: 'No active OTP verification session found for this email. Please request a new code.' 
        });
      }

      // Check 10-minute expiration
      if (Date.now() > record.expiresAt) {
        otpStore.delete(normalizedEmail);
        return res.status(400).json({ 
          valid: false, 
          success: false, 
          error: 'This verification code has expired (10 minutes limit). Please request a new OTP.' 
        });
      }

      // Check security attempts limit (max 5)
      if (record.attempts >= 5) {
        otpStore.delete(normalizedEmail);
        return res.status(400).json({ 
          valid: false, 
          success: false, 
          error: 'Too many incorrect attempts. For security reasons, please request a new verification code.' 
        });
      }

      // Validate purpose if supplied
      if (purpose && record.purpose && record.purpose !== purpose) {
        return res.status(400).json({
          valid: false,
          success: false,
          error: 'Verification purpose mismatch. Please request a new code.'
        });
      }

      // Validate code against stored value
      if (record.code !== enteredCode) {
        record.attempts += 1;
        const remaining = 5 - record.attempts;
        return res.status(400).json({ 
          valid: false, 
          success: false, 
          error: `Incorrect verification code. ${remaining} attempt(s) remaining.` 
        });
      }

      // Success: Consume OTP so it cannot be re-used
      otpStore.delete(normalizedEmail);

      console.log(`[OTP Verification] Successfully validated OTP for ${normalizedEmail}. Account creation permitted.`);

      return res.status(200).json({ 
        valid: true, 
        success: true, 
        message: 'OTP verified successfully. Account creation permitted.' 
      });

    } catch (err: unknown) {
      const error = err as { message?: string };
      console.error('[Verify OTP] Unexpected server error:', error);
      return res.status(500).json({ 
        valid: false, 
        success: false, 
        error: error.message || 'Internal server error during OTP verification' 
      });
    }
  });

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`ProcureEase server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
