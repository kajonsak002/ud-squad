"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { User, Mail, Lock, ArrowRight, GitBranch, Globe } from "lucide-react";

export default function RegisterPage() {
    const { t } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden text-white">
            {/* Background Orbs */}
            <div className="absolute top-1/4 right-1/4 w-[35rem] h-[35rem] bg-emerald-500/5 rounded-full blur-[140px] -z-10" />
            <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-teal-500/10 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                {/* Logo */}
                <div className="flex flex-col items-center mb-8">
                    <Link href="/" className="group flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                            <span className="text-black font-black text-2xl">U</span>
                        </div>
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight">{t.auth.register.title}</h1>
                    <p className="text-gray-500 mt-2 text-sm text-center font-light leading-relaxed max-w-[280px]">
                        {t.auth.register.subtitle}
                    </p>
                </div>

                {/* Register Card */}
                <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-4">
                            {/* Name */}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-1">
                                    {t.auth.register.name}
                                </label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors" size={18} />
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-black/40 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none"
                                        placeholder="John Squad"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-1">
                                    {t.auth.register.email}
                                </label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors" size={18} />
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-black/40 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none"
                                        placeholder="you@company.com"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-1">
                                    {t.auth.register.password}
                                </label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors" size={18} />
                                    <input
                                        type="password"
                                        required
                                        className="w-full bg-black/40 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black py-4 rounded-2xl shadow-xl shadow-emerald-500/10 active:scale-[0.98] transition-all disabled:opacity-70 flex items-center justify-center gap-2 group mt-4"
                        >
                            {isLoading ? t.auth.register.signingUp : t.auth.register.signUp}
                            {!isLoading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                        </button>

                        <div className="relative py-1 text-center">
                            <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5" />
                            <span className="relative z-10 bg-[#0c0c0c] px-4 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                                Quick Sign up
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 py-3 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] text-white text-[13px] font-bold transition-all group">
                                <Globe size={16} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] text-white text-[13px] font-bold transition-all group">
                                <GitBranch size={16} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                                GitHub
                            </button>
                        </div>
                    </form>
                </div>

                <p className="mt-8 text-center text-gray-500 text-sm">
                    {t.auth.register.hasAccount}{" "}
                    <Link href="/login" className="text-emerald-400 font-bold hover:underline underline-offset-4">
                        {t.auth.register.login}
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}
