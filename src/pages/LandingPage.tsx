import React from 'react';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../i18n/translations';
import { 
  Calendar, 
  Clock, 
  FileCheck, 
  CreditCard, 
  CheckCircle2, 
  Users, 
  Building2, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  Scale, 
  Smartphone, 
  Search, 
  QrCode, 
  Activity, 
  Award,
  Zap,
  Lock,
  ShieldAlert,
  Sprout
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { language, navigate } = useApp();
  const t = getTranslation(language);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-850 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/80 px-3.5 py-1.5 text-xs font-semibold text-emerald-200 border border-emerald-700/60 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Ministry of Consumer Affairs, Food & Public Distribution</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-tight font-heading">
                Sell Your Produce Without the <span className="text-emerald-300 underline decoration-amber-400 decoration-wavy decoration-2">Long Wait.</span>
              </h1>

              <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl leading-relaxed font-normal">
                Book your procurement slot, track your queue in real time, monitor procurement status, and stay informed about your payment — all from one transparent platform.
              </p>

              {/* Call-To-Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => navigate('/login')}
                  className="flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-7 py-3.5 rounded-2xl shadow-lg shadow-emerald-950/40 transition hover:-translate-y-0.5 active:scale-95 text-base"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Farmer Portal Login</span>
                </button>

                <button
                  onClick={() => navigate('/register')}
                  className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-2xl border border-white/20 backdrop-blur-xs transition active:scale-95 text-base"
                >
                  <Sprout className="w-5 h-5 text-emerald-300" />
                  <span>Register as Farmer</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-emerald-800/80 flex flex-wrap items-center gap-6 text-xs text-emerald-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero Middlemen</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Digital Weight Slips</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct PFMS Bank Transfer</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Agriculture & Procurement Concept Graphic */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-3xl bg-gradient-to-b from-emerald-800/90 to-emerald-900/90 p-6 border border-emerald-700/60 shadow-2xl backdrop-blur-md">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-emerald-700/50">
                  <div className="flex items-center gap-2">
                    <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                      LIVE CENTRE STREAM
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-700">
                    Mylavaram APMC
                  </span>
                </div>

                {/* Digital Token Preview Card */}
                <div className="mt-5 rounded-2xl bg-white text-slate-900 p-5 shadow-xl border border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                        OFFICIAL DIGITAL TOKEN
                      </span>
                      <p className="text-3xl font-black text-slate-900 mt-1 font-heading">
                        A-105
                      </p>
                    </div>
                    <div className="h-14 w-14 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200">
                      <QrCode className="w-9 h-9 text-slate-800" />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Serving Currently</span>
                      <span className="font-bold text-emerald-700 text-sm">A-097 (Counter 2)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Estimated Wait</span>
                      <span className="font-bold text-amber-600 text-sm">~ 35 Minutes</span>
                    </div>
                  </div>

                  {/* Visual Queue Mini-Track */}
                  <div className="mt-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <span className="font-medium text-slate-600">Queue Movement</span>
                      <span className="font-bold text-emerald-700">7 farmers ahead</span>
                    </div>
                    <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                      <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-mono text-[10px] font-bold">A-097</span>
                      <span className="text-slate-300">→</span>
                      <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-mono text-[10px]">A-098</span>
                      <span className="text-slate-300">→</span>
                      <span className="px-2 py-0.5 rounded bg-amber-500 text-white font-mono text-[10px] font-bold ring-2 ring-amber-300">A-105</span>
                    </div>
                  </div>
                </div>

                {/* Live Field & Weighbridge Snapshot */}
                <div className="mt-4 rounded-2xl bg-emerald-950/60 p-3.5 border border-emerald-700/50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-emerald-800 text-emerald-300 flex items-center justify-center">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Digital Weighbridge #2</p>
                      <p className="text-[11px] text-emerald-300">Gross: 25.40 Q • Net: 25.00 Q</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-900/80 px-2 py-1 rounded-md border border-emerald-600">
                    Calibrated ✓
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Based Authentication Gateways Section (Section 11 requirement) */}
      <section className="relative -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Farmer Card */}
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-emerald-200 flex flex-col justify-between hover:shadow-2xl transition">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Primary Portal
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-heading mt-2">
                Farmer Login
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Book appointment slots, track your digital token queue position, view certified weights, and monitor DBT disbursements.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => navigate('/login')}
                className="w-full py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-2"
              >
                <span>Login as Farmer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => navigate('/register')}
                className="w-full py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs rounded-xl transition"
              >
                New Farmer Registration
              </button>
            </div>
          </div>

          {/* Staff Card */}
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-amber-200 flex flex-col justify-between hover:shadow-2xl transition">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-200">
                Official Staff Access
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-heading mt-2">
                Centre Staff Login
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Dedicated procurement counter portal to manage token queues, call trucks to weighbridge bays, and record moisture readings.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={() => navigate('/login?role=staff')}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-2"
              >
                <span>Staff Portal Login</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2.5">
                Staff accounts are provisioned by district authority
              </p>
            </div>
          </div>

          {/* Admin Card */}
          <div className="bg-slate-950 rounded-3xl p-6 shadow-xl border border-purple-900/60 text-white flex flex-col justify-between hover:shadow-2xl transition">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center font-bold mb-4 shadow-md shadow-purple-900/40">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-950 text-purple-300 px-2.5 py-0.5 rounded-full border border-purple-800">
                Administration
              </span>
              <h3 className="text-xl font-bold text-white font-heading mt-2">
                Admin Login
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                State and district monitoring dashboard for live procurement telemetry, capacity balancing, and treasury PFMS ledger audits.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={() => navigate('/login?role=admin')}
                className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <span>Administrator Login</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[11px] text-purple-300/80 text-center mt-2.5">
                Authorized government administrators only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Statistics Counter Banner */}
      <section className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 font-heading">12,450+</p>
              <p className="text-xs text-slate-500 font-medium">Registered Farmers</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 font-heading">42 Centres</p>
              <p className="text-xs text-slate-500 font-medium">Active Procurement Centers</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 font-heading">1,240</p>
              <p className="text-xs text-slate-500 font-medium">Today's Scheduled Slots</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 font-heading">₹42.8 Cr</p>
              <p className="text-xs text-slate-500 font-medium">Transferred via Direct DBT</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Feature Cards (Section id: features) */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
            CORE PLATFORM CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 font-heading">
            {t.features.title}
          </h2>
          <p className="text-base text-slate-600 mt-3">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div 
            onClick={() => navigate('/login')}
            className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:border-emerald-400 hover:shadow-md transition duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 group-hover:scale-110 transition">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-4 font-heading">
                {t.features.f1_title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {t.features.f1_desc}
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-800 group-hover:text-emerald-900">
              <span>Book Slot Now</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Feature 2 */}
          <div 
            onClick={() => navigate('/login')}
            className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:border-emerald-400 hover:shadow-md transition duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-800 group-hover:scale-110 transition">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-4 font-heading">
                {t.features.f2_title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {t.features.f2_desc}
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-sky-800 group-hover:text-sky-900">
              <span>Track Live Queue</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Feature 3 */}
          <div 
            onClick={() => navigate('/login')}
            className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:border-emerald-400 hover:shadow-md transition duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800 group-hover:scale-110 transition">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-4 font-heading">
                {t.features.f3_title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {t.features.f3_desc}
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-amber-800 group-hover:text-amber-900">
              <span>Inspect Records</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Feature 4 */}
          <div 
            onClick={() => navigate('/login')}
            className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:border-emerald-400 hover:shadow-md transition duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-800 group-hover:scale-110 transition">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-4 font-heading">
                {t.features.f4_title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {t.features.f4_desc}
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-purple-800 group-hover:text-purple-900">
              <span>View DBT Status</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (6 Steps) (Section id: how-it-works) */}
      <section id="how-it-works" className="py-16 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-900 px-3 py-1 rounded-full">
              SIMPLE & ACCESSIBLE PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 font-heading">
              How It Works
            </h2>
            <p className="text-sm text-emerald-200 mt-2">
              From harvest to guaranteed bank deposit in 6 hassle-free steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { num: '01', title: 'Register', desc: 'Sign up with mobile & passbook info in 2 minutes', icon: Smartphone },
              { num: '02', title: 'Choose Centre', desc: 'Select nearest centre with low waiting queue', icon: Building2 },
              { num: '03', title: 'Book Slot', desc: 'Pick your preferred date and 30-min unloading window', icon: Calendar },
              { num: '04', title: 'Get Token', desc: 'Receive instant digital QR token on mobile', icon: QrCode },
              { num: '05', title: 'Track Queue', desc: 'Check live token serving and arrive just in time', icon: Clock },
              { num: '06', title: 'DBT Payment', desc: 'Complete weighing and receive payment in bank', icon: Award },
            ].map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.num} className="rounded-2xl bg-emerald-900/60 p-5 border border-emerald-800 relative">
                  <span className="text-2xl font-black text-emerald-400 font-mono">
                    {step.num}
                  </span>
                  <div className="h-10 w-10 rounded-xl bg-emerald-800 text-emerald-300 flex items-center justify-center my-3">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs text-emerald-200/80 mt-1.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why ProcureEase Comparison & Benefits */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              SOLVING REAL FARMER PAIN POINTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
              Why ProcureEase?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Before ProcureEase, farmers waited 24 to 72 hours in tractor queues outside APMC yards, exposing harvested grain to sudden rain and distress selling.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { title: 'Reduced Waiting Times', desc: 'Average center wait time reduced from 36 hours to under 45 minutes.' },
                { title: 'Queue & Slot Transparency', desc: 'No queue jumping; first-come algorithmic token scheduling.' },
                { title: 'Moisture & Weighing Integrity', desc: 'Direct digital weighbridge capture into the e-procurement ledger.' },
                { title: 'Direct Benefit Transfer (DBT)', desc: 'Direct treasury release to bank accounts within 48 hours.' },
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{b.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            {/* Smart Procurement Intelligence Spotlight Card */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 p-8 text-white shadow-2xl border border-emerald-800">
              <div className="flex items-center justify-between pb-5 border-b border-emerald-800">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">Smart Procurement Automation</h3>
                    <p className="text-xs text-emerald-300">Dynamic Centre Load Balancing</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-emerald-900/50 p-4 rounded-2xl border border-emerald-700/60">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-amber-300">DYNAMIC CAPACITY ALLOCATION</span>
                    <span className="text-emerald-300">Saved: ~ 45 mins</span>
                  </div>
                  <p className="text-sm text-slate-100">
                    High demand detected at <strong>Mylavaram Centre</strong> (72% capacity, 35 min wait). Algorithm recommends <strong>Gollapudi Centre</strong> (45% capacity, only 22 min wait).
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-emerald-800/80">
                    <span className="text-slate-400 block text-[11px]">Dynamic Wait Estimate</span>
                    <span className="text-lg font-bold text-white font-mono mt-1 block">5 min / tractor</span>
                    <span className="text-[10px] text-emerald-400">Based on moisture check throughput</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-emerald-800/80">
                    <span className="text-slate-400 block text-[11px]">Weather Advisory Guard</span>
                    <span className="text-lg font-bold text-amber-400 font-mono mt-1 block">Auto Expedited</span>
                    <span className="text-[10px] text-slate-300">Monsoon weather API synced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
