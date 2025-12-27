
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, ShieldCheck, Star } from 'lucide-react';
import { FAQS } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-0 pb-20">
      {/* 1. HERO - ATTENTION (Full-width image background) */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact & Strategy Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="text-indigo-400 font-bold uppercase tracking-wider text-sm">Get In Touch</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mt-4 mb-6">
              Let's Build Your <br /><span className="text-indigo-400">Sales Engine.</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
              Ready to stop plateauing and start scaling? Choose a contact method below or use our quick enquiry form.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* 1. Contact Info Column */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white text-indigo-600 rounded-xl shadow-sm border border-slate-100">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase">Email Us</div>
                      <div className="text-lg font-semibold text-slate-900">hello@optiscale.digital</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white text-indigo-600 rounded-xl shadow-sm border border-slate-100">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase">Call Our Team</div>
                      <div className="text-lg font-semibold text-slate-900">+44 20 8123 4567</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white text-indigo-600 rounded-xl shadow-sm border border-slate-100">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase">Visit Our Office</div>
                      <div className="text-lg font-semibold text-slate-900 text-sm">Level 4, 125 Old Broad St<br />London EC2N 1AR, UK</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-xl">
                <h4 className="text-xl font-bold mb-4">Why Book a Call?</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-200 mt-1 flex-shrink-0" />
                    <span>Free Digital Strategy Audit (Value £499)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-200 mt-1 flex-shrink-0" />
                    <span>Personalized ROI Projection</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-200 mt-1 flex-shrink-0" />
                    <span>Workflow Bottleneck Analysis</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Contact Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden -mt-32 z-20">
                {submitted ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Received!</h2>
                    <p className="text-slate-600 mb-8">One of our growth specialists will review your enquiry and get back to you within 24 business hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-indigo-600 font-bold underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Your Free Audit</h3>
                      <p className="text-slate-500">Tell us a bit about your business goals.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Full Name *</label>
                          <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="John Smith" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Work Email *</label>
                          <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="john@company.co.uk" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Company Website</label>
                          <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="www.yourcompany.com" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">Service Required</label>
                          <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                            <option>Website Design & Dev</option>
                            <option>Digital Marketing / SEO</option>
                            <option>AI & Automation</option>
                            <option>Full Growth Package</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Tell us about your biggest growth challenge</label>
                        <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="e.g. We have traffic but nobody is buying..."></textarea>
                      </div>
                      <div className="flex items-center gap-4 py-4">
                        <ShieldCheck className="w-10 h-10 text-slate-300" />
                        <p className="text-xs text-slate-400">Your data is secure. By submitting, you agree to our privacy policy and consent to being contacted regarding your growth audit.</p>
                      </div>
                      <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-100">
                        Request Discovery Call <Send className="w-5 h-5" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl">
              <Clock className="w-8 h-8 text-indigo-600" />
              <div>
                <h4 className="font-bold">24hr Response</h4>
                <p className="text-sm text-slate-500 text-nowrap">Rapid feedback guaranteed</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl">
              <Star className="w-8 h-8 text-indigo-600" />
              <div>
                <h4 className="font-bold">5.0 Star Rating</h4>
                <p className="text-sm text-slate-500">Based on 50+ UK clients</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-indigo-600" />
              <div>
                <h4 className="font-bold">UK Registered</h4>
                <p className="text-sm text-slate-500">Fully insured and compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Common Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
