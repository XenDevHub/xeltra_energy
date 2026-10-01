"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Solar Rooftop Installation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "Solar Rooftop Installation", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/80 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
            📞 Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Let&apos;s Build a <span className="text-green-400">Greener Future</span> Together
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Interested in Solar installation, battery swapping hub partnerships, or EcoTrike dealership? Reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Corporate Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-xl">
              <h3 className="text-2xl font-black text-white mb-6">Corporate Office</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center text-xl shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Headquarters Address</h4>
                    <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                      Xeltra Energy Ltd.<br />
                      House 12, Road 5, Block B, Niketan, Gulshan-1, Dhaka-1212, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center text-xl shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Phone & Support</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      <a href="tel:+8801703063331" className="hover:text-green-400 transition-colors">
                        +880 1703-063331
                      </a>
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">Sat – Thu: 9:00 AM – 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center text-xl shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Email Inquiry</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      <a href="mailto:info@xeltraenergy.com" className="hover:text-green-400 transition-colors">
                        info@xeltraenergy.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Chat */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="https://wa.me/8801703063331?text=Hello%20Xeltra%20Energy,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-lg shadow-emerald-950/50 hover:-translate-y-0.5"
                >
                  <span>💬 Chat Directly on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-2xl shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-6">Send Us a Message</h3>

              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 text-center text-green-400 font-bold">
                  🎉 Thank you! Your message has been sent successfully. Our representative will contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tanvir Ahmed"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 1700-000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                      >
                        <option value="Solar Rooftop Installation">Rooftop Solar + ESS Installation</option>
                        <option value="Battery Swapping Hub Partnership">Battery Swapping Hub Partnership</option>
                        <option value="EcoTrike Dealership">EcoTrike Dealership / Purchase</option>
                        <option value="Corporate Fleet Consultation">Corporate Fleet Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Message / Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please describe your requirements, site location, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-4 rounded-xl shadow-xl shadow-green-950/60 hover:-translate-y-0.5 transition-all text-sm tracking-wider uppercase"
                  >
                    🚀 Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
