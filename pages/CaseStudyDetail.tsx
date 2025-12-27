
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Zap, Clock, Users, Target, BarChart } from 'lucide-react';

const CaseStudyDetail: React.FC = () => {
  return (
    <div className="pt-0">
      {/* 1. HERO - ATTENTION (Full-width background image) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="NexFlow Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-bold mb-8 border border-indigo-500/30">
            Case Study: NexFlow SaaS
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
            How NexFlow Scaled Qualified <br />
            <span className="text-indigo-400 text-gradient">Leads by 40%</span> in 90 Days.
          </h1>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">+40%</div>
              <div className="text-indigo-200 text-sm font-bold uppercase tracking-wider">Qualified Leads</div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">+15%</div>
              <div className="text-indigo-200 text-sm font-bold uppercase tracking-wider">Conversion Rate</div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">20h</div>
              <div className="text-indigo-200 text-sm font-bold uppercase tracking-wider">Time Saved / Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHALLENGE - INTEREST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">The Challenge: Manual Chaos & Stagnant Growth</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                NexFlow, a rising UK automation startup, had a product the market loved. However, their digital storefront wasn't reflecting their innovation. 
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Their sales team was drowning in "noise"—spending 70% of their day answering basic questions and manually qualifying leads that weren't a fit. Meanwhile, their legacy website had a high bounce rate, failing to communicate their value proposition within the first 3 seconds.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                  <Target className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 font-medium">Poor Lead Quality: 80% of enquiries were unqualified tire-kickers.</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                  <BarChart className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 font-medium">Friction-Heavy Funnel: High drop-off at the "Book a Demo" page.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                alt="Data Analysis" 
                className="rounded-3xl shadow-2xl border border-slate-100"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 hidden md:block">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Pre-OptiScale Bounce Rate</span>
                  <span className="text-2xl font-extrabold text-red-500">68.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION - DESIRE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">The Integrated Growth Engine</h2>
            <p className="text-xl text-slate-600">
              OptiScale Digital deployed a two-pronged strategy to fix the leak and automate the filter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Strategy 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Conversion-First UI Redesign</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We replaced the confusing legacy site with a high-performance, mobile-first platform. We utilized psychological "anchoring" to guide users toward the Demo CTA and optimized load speeds to under 1 second.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Strategic "Above-the-Fold" Value Prop</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Frictionless 2-Step Lead Capture</span>
                </li>
              </ul>
            </div>

            {/* Strategy 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">AI Lead Triage & Bot</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We implemented a custom AI chatbot that interacts with visitors in real-time. It qualifies prospects based on budget and urgency, then automatically schedules "Hot Leads" into the sales team's calendar.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>24/7 Automated Qualification</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Direct CRM & Calendar Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESULTS - ACTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-32"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8">Measurable Transformation</h2>
                <p className="text-xl text-indigo-100 mb-10">
                  The results exceeded all initial projections. NexFlow went from chasing leads to closing them.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="text-5xl font-bold">+40%</div>
                    <div className="text-lg text-indigo-200">Increase in high-intent SQLs (Sales Qualified Leads)</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-5xl font-bold">15%</div>
                    <div className="text-lg text-indigo-200">Total lift in site-wide conversion rate</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-5xl font-bold">20h</div>
                    <div className="text-lg text-indigo-200">Weekly manual work eliminated via AI automation</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20 text-center">
                <TrendingUp className="w-16 h-16 text-indigo-300 mx-auto mb-6" />
                <blockquote className="text-2xl font-medium mb-8 leading-relaxed italic">
                  "OptiScale Digital didn't just give us a facelift; they re-engineered how we acquire customers. The ROI was visible in week 3."
                </blockquote>
                <div className="font-bold text-xl">— Mark Henderson</div>
                <div className="text-indigo-200 uppercase tracking-widest text-sm">COO, NexFlow SaaS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - ACTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Ready to achieve these results <br />
            for your business?
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            NexFlow started with a free Growth Audit. In 30 minutes, we identified the gaps in their funnel that were costing them thousands. 
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-indigo-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 shadow-xl">
              Book Your Free Growth Audit <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
          <p className="mt-8 text-slate-400 text-sm font-medium">
            Limited slots available. We only take on 3 new growth partners per month.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
