"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <main className="bg-black min-h-screen">
            <NavBar />

            <div className="relative pt-40 pb-24">
                {/* Background effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50rem] bg-[radial-gradient(ellipse_at_top,rgba(0,255,136,0.1),transparent_60%)] pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                        >
                            {t.contact.title}
                        </motion.h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
                            {t.contact.desc}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        
                        {/* Contact Info */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-10"
                        >
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-white">{t.contact.contactInfo}</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">{t.contact.email}</p>
                                            <p className="text-white font-medium">{t.contact.emailStr}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Office</p>
                                            <p className="text-white font-medium leading-relaxed">{t.contact.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Phone</p>
                                            <p className="text-white font-medium">{t.contact.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl"
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">{t.contact.name}</label>
                                        <input 
                                            type="text" 
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">{t.contact.email}</label>
                                        <input 
                                            type="email" 
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">{t.contact.subject}</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors"
                                        placeholder="Partnership inquiry"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">{t.contact.message}</label>
                                    <textarea 
                                        rows={4}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors resize-none"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <button 
                                    type="button"
                                    className="w-full flex items-center justify-center gap-2 py-4 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(0,255,136,0.2)]"
                                >
                                    <Send size={18} />
                                    {t.contact.send}
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
