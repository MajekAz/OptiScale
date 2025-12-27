
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Search, ArrowRight, Calendar, User } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pt-0 pb-20">
      {/* 1. HERO - ATTENTION (Full-width image background) */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000" 
            alt="Insights & Strategy Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="text-indigo-400 font-bold uppercase tracking-wider text-sm">Industry Insights</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mt-4 mb-6">
              Digital <br /><span className="text-indigo-400">Insights.</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
              Stay ahead of the curve with our latest thinking on AI, high-converting design, and scaling UK businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search/Filter (Visual only) */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search insights..." 
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-sm">All</button>
              <button className="bg-slate-50 text-slate-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-slate-100">AI Automation</button>
              <button className="bg-slate-50 text-slate-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-slate-100">Web Design</button>
              <button className="bg-slate-50 text-slate-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-slate-100">Marketing</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group flex flex-col h-full bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{post.category}</span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-6 text-xs text-slate-400 font-bold uppercase mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link to="#" className="inline-flex items-center gap-2 font-bold text-indigo-600 group-hover:underline">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
            
            {/* Lead Magnet Card */}
            <div className="bg-indigo-600 p-10 rounded-3xl text-white flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-6">Get Our Weekly Scaling Guide</h3>
              <p className="text-indigo-100 mb-8 text-sm">Join 5,000+ UK business owners receiving high-value growth insights every Monday.</p>
              <form className="w-full space-y-4">
                <input type="email" placeholder="Your work email" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder:text-indigo-200 focus:outline-none focus:bg-white/20 transition-all text-white" />
                <button className="w-full bg-white text-indigo-600 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all">Subscribe Now</button>
              </form>
              <p className="text-[10px] text-indigo-300 mt-4 italic">No spam, just scaling. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need expert eyes on your project?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Reading is great, but a custom strategy is better. Let's discuss your specific business requirements.
          </p>
          <Link to="/contact" className="bg-indigo-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-indigo-700 transition-all inline-flex items-center gap-3">
            Book Discovery Call <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
