
import React from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import { ArrowUpRight, CheckCircle } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-0 pb-20">
      {/* 1. HERO - ATTENTION (Full-width image background) */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" 
            alt="Portfolio Showcase Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="text-indigo-400 font-bold uppercase tracking-wider text-sm">Our Work</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mt-4 mb-6">
              Proven <br /><span className="text-indigo-400">Results.</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
              Explore how we've helped UK businesses transform their digital presence and automate their growth.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {CASE_STUDIES.map((study, index) => (
              <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{study.category}</span>
                    <span className="text-slate-400 font-bold text-sm">— {study.client}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">{study.title}</h2>
                  
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {study.results.map((r, i) => (
                      <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="text-2xl font-bold text-indigo-600">{r.value}</div>
                        <div className="text-xs font-bold text-slate-500 uppercase">{r.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6 mb-10">
                    <div>
                      <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-indigo-500" /> The Challenge
                      </h4>
                      <p className="text-slate-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-indigo-500" /> Our Solution
                      </h4>
                      <p className="text-slate-600">{study.solution}</p>
                    </div>
                  </div>

                  <Link to="/contact" className="group inline-flex items-center gap-2 font-bold text-indigo-600 hover:text-indigo-700">
                    Replicate these results <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                  <div className="relative group overflow-hidden rounded-3xl">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-indigo-600/0 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to be our next success story?</h2>
          <p className="text-xl text-slate-400 mb-12">
            Every business is unique. We take the time to understand your specific market dynamics before we write a single line of code.
          </p>
          <Link to="/contact" className="bg-indigo-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-indigo-700 transition-all inline-block shadow-2xl">
            Start Your Transformation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
