
import React from 'react';
import { Target, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-0 pb-20">
      {/* 1. HERO - ATTENTION (Full-width image background) */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="OptiScale Team Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="text-indigo-400 font-bold uppercase tracking-wider text-sm">Our Story</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mt-4 mb-6">
              Empowering the UK's <br /><span className="text-indigo-400">Digital Vanguard.</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
              We help UK SMEs turn mediocre digital infrastructure into high-performance growth engines.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISSION DETAIL */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Bridging the Gap Between Innovation and Implementation</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Founded in London, OptiScale Digital was born from a simple observation: most UK SMEs have incredible products but are held back by mediocre digital infrastructure and manual bottlenecks.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We don't just "make websites"—we engineer high-conversion ecosystems that allow entrepreneurs to focus on what they do best: leading their business.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/400/500?random=150" alt="Team 1" className="rounded-2xl shadow-xl transform translate-y-8" />
               <img src="https://picsum.photos/400/500?random=151" alt="Team 2" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Values: Interest */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our DNA</h2>
            <p className="text-xl text-slate-400">The core principles that guide every project we undertake.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Precision First</h3>
              <p className="text-slate-400">We don't guess. We use data, heatmaps, and analytics to drive every design and marketing decision.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Relentless Innovation</h3>
              <p className="text-slate-400">AI isn't a buzzword to us; it's a tool we use daily to give our clients an unfair competitive advantage.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Human Partnership</h3>
              <p className="text-slate-400">Behind the code, we're a team of humans dedicated to your success. We win only when you win.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Action */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-8">Looking for a long-term growth partner?</h2>
           <p className="text-lg text-slate-600 mb-10">
             We don't take on every project. We work with ambitious founders who are ready to scale and value high-level expertise. If that's you, let's talk.
           </p>
           <Link to="/contact" className="bg-indigo-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-indigo-700 transition-all inline-block shadow-lg shadow-indigo-100">
             Join the OptiScale Vanguard
           </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
