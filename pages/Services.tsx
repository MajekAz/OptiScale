
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, BarChart, Smartphone, ShieldCheck, Zap, Bot, Workflow, Settings, TrendingUp, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-0 pb-20">
      {/* 1. HERO - ATTENTION (Full-width image background) */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000" 
            alt="Services Strategy Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <span className="text-indigo-400 font-bold uppercase tracking-wider text-sm">Our Expertise</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mt-4 mb-6">
              Growth-Focused <br /><span className="text-indigo-400">Solutions.</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
              We install comprehensive scaling infrastructure tailored for UK startups and SMEs.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Feature Grid */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto -mt-24 relative z-20">
            <div className="p-6 bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center space-y-2">
              <Zap className="w-8 h-8 text-indigo-500 mb-2" />
              <span className="font-bold text-slate-900">Performance</span>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center space-y-2">
              <ShieldCheck className="w-8 h-8 text-indigo-500 mb-2" />
              <span className="font-bold text-slate-900">Security</span>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center space-y-2">
              <BarChart className="w-8 h-8 text-indigo-500 mb-2" />
              <span className="font-bold text-slate-900">Conversion</span>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center space-y-2">
              <Smartphone className="w-8 h-8 text-indigo-500 mb-2" />
              <span className="font-bold text-slate-900">Responsive</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Service Sections */}
      {SERVICES.map((s, index) => (
        <section key={s.id} id={s.id} className={`py-24 ${index % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                <div className="mb-6">{s.icon}</div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">{s.title}</h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  {s.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-lg font-bold text-indigo-600 mb-4 flex items-center gap-2">
                      <Settings className="w-4 h-4" /> Core Features
                    </h3>
                    <ul className="space-y-4">
                      {s.features.map((f, i) => (
                        <li key={i} className="flex items-start text-slate-700">
                          <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo-600 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" /> Business Outcomes
                    </h3>
                    <ul className="space-y-4">
                      {s.benefits.map((b, i) => (
                        <li key={i} className="flex items-start text-slate-700">
                          <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-12">
                  <Link to="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all inline-block shadow-lg">
                    Enquire about {s.title}
                  </Link>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                <img 
                  src={`https://picsum.photos/800/600?random=${index + 100}`} 
                  alt={s.title} 
                  className="rounded-3xl shadow-2xl border border-slate-200"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 4. AI Automation Spotlight */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-sm mb-6 border border-indigo-500/30">
                AI SPECIALISM
              </div>
              <h2 className="text-4xl font-bold mb-8">The AI Advantage for UK SMEs</h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Most agencies just build websites. We build <span className="text-white font-bold">intelligent systems</span>. Our AI automation solutions help you handle 10x the traffic without 10x the staff.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="p-3 bg-slate-800 rounded-xl">
                    <Bot className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Intelligent Lead Triage</h4>
                    <p className="text-slate-400">Bots that qualify leads instantly based on your specific criteria.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="p-3 bg-slate-800 rounded-xl">
                    <Workflow className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Cross-Platform Sync</h4>
                    <p className="text-slate-400">Keep your CRM, Calendar, and Slack in perfect harmony automatically.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-3xl">
               <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-sm font-bold text-indigo-400">
                    <span>Efficiency Gain</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-indigo-500 h-3 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold text-green-400">
                    <span>Lead Response Time</span>
                    <span>-98%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{width: '98%'}}></div>
                  </div>
               </div>
               <div className="bg-slate-900 rounded-xl p-6 border border-indigo-500/20">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-xs font-bold text-slate-400 uppercase">Live AI Assistant Demo</span>
                 </div>
                 <p className="text-sm text-slate-300 italic mb-4">"Hi! I see you're looking for web design. Would you like a price estimate based on your goals?"</p>
                 <div className="flex gap-2">
                   <button className="bg-indigo-600 text-xs px-4 py-2 rounded-lg font-bold">Yes, please</button>
                   <button className="bg-slate-800 text-xs px-4 py-2 rounded-lg font-bold border border-slate-700">Not now</button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Unsure where to start?</h2>
          <p className="text-lg text-slate-600 mb-10">
            We offer a free 30-minute growth strategy audit. We'll look at your current site, your SEO, and your workflows—then tell you exactly where your biggest opportunities are.
          </p>
          <Link to="/contact" className="bg-indigo-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-indigo-700 transition-all inline-flex items-center gap-3">
            Book My Audit Call <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
