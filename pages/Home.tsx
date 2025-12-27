
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Zap, Star, Target, BarChart } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-0">
      {/* 1. HERO - ATTENTION (Full-width image background) */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Digital Growth Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-bold mb-6 border border-indigo-500/30">
              <Star className="w-4 h-4 mr-2" /> Top Rated UK Agency
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Scale Your Business <br />
              with <span className="text-indigo-400">Precision.</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-xl">
              We design conversion-focused websites and deploy AI automation that drives real growth for UK startups and SMEs. Stop guessing, start scaling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-900/40">
                Book Free Audit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/portfolio" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center">
                View Our Work
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-400 mr-2" /> 100+ Projects</div>
              <div className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-400 mr-2" /> UK Registered</div>
              <div className="flex items-center"><CheckCircle className="w-4 h-4 text-indigo-400 mr-2" /> Guaranteed ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMS & OPPORTUNITIES - INTEREST */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Is your current digital presence holding you back?</h2>
            <p className="text-lg text-slate-400">
              Most businesses struggle with low website conversions, inefficient manual workflows, and wasted marketing budgets. We solve that by aligning technology with your business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Slow Load Times</h3>
              <p className="text-slate-400 italic">"Every second of delay reduces customer satisfaction by 16%."</p>
              <div className="mt-4 text-indigo-400 font-semibold">Our Solution: 0.8s load speeds.</div>
            </div>
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Weak Lead Quality</h3>
              <p className="text-slate-400 italic">"Many leads are noise. Your team spends 80% of their time on the wrong people."</p>
              <div className="mt-4 text-indigo-400 font-semibold">Our Solution: AI-Powered qualification.</div>
            </div>
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Invisible to SEO</h3>
              <p className="text-slate-400 italic">"91% of content gets zero traffic from Google."</p>
              <div className="mt-4 text-indigo-400 font-semibold">Our Solution: ROI-driven SEO.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES - DESIRE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Services</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4">Growth-Focused Solutions</h2>
            </div>
            <Link to="/services" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Explore All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="group p-10 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-indigo-100">
                <div className="mb-8">{s.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{s.description}</p>
                <ul className="space-y-3 mb-8">
                  {s.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" /> {benefit}
                    </li>
                  ))}
                </ul>
                <Link to={`/services#${s.id}`} className="inline-flex items-center font-bold text-indigo-600 group-hover:underline">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOCIAL PROOF & TRUST */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">Trusted by Innovative UK Businesses</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="text-2xl font-bold text-slate-900">BRIT-TECH</div>
            <div className="text-2xl font-bold text-slate-900">CITYGROW</div>
            <div className="text-2xl font-bold text-slate-900">VANTAGE</div>
            <div className="text-2xl font-bold text-slate-900">NEXUS UK</div>
            <div className="text-2xl font-bold text-slate-900">ALTO</div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg relative">
              <div className="absolute -top-4 -right-4 bg-indigo-600 text-white p-2 rounded-lg">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg text-slate-700 mb-8 italic">"{t.content}"</p>
              <div className="flex items-center">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA - ACTION */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to grow your revenue?</h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Get a free digital performance audit and discovery call. No strings attached, just pure value for your business.
          </p>
          <Link to="/contact" className="bg-white text-indigo-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-50 transition-all inline-flex items-center gap-3 shadow-2xl">
            Book My Free Consultation <ArrowRight className="w-6 h-6" />
          </Link>
          <div className="mt-8 text-indigo-200 text-sm">
            Only 2 slots left for discovery calls this week.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
