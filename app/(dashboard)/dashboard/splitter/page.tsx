"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { GitBranch, ChevronRight, Share2, Split } from "lucide-react";

export default function SplitterPage() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span>{t.dashboard.menu.modernization}</span>
                <ChevronRight size={12} />
                <span className="text-emerald-400">{t.dashboard.menu.microservicesSplitter}</span>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
                        <GitBranch size={24} />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">{t.dashboard.menu.microservicesSplitter}</h1>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                    Decompose monolithic applications into scalable microservices. Identify service boundaries 
                    and shared entities with AI analysis.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Domain Analysis */}
                <div className="lg:col-span-1 space-y-6">
                    <h3 className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                        <Share2 size={16} className="text-orange-400" />
                        Identified Domains
                    </h3>
                    <div className="space-y-3">
                        {["UserIdentity", "BillingEngine", "OrderService", "NotifyBridge"].map((domain, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all cursor-pointer group">
                                <div className="flex justify-between items-center">
                                    <span className="text-white text-xs font-bold group-hover:text-orange-400">{domain}</span>
                                    <span className="text-[10px] text-gray-500 font-black">94% Core</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Extraction Workbench */}
                <div className="lg:col-span-3 space-y-6">
                    <h3 className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                        <Split size={16} className="text-blue-400" />
                        Splitting Strategy: <span className="text-gray-500 font-medium">BillingEngine</span>
                    </h3>
                    <div className="rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-8 relative overflow-hidden group">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
                            {/* Monolith Node */}
                            <div className="w-32 h-32 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center relative">
                                <div className="absolute -top-3 px-3 py-1 bg-white/10 rounded-lg text-[9px] font-black text-gray-400 uppercase tracking-widest">Monolith</div>
                                <div className="grid grid-cols-2 gap-2">
                                    {[1, 2, 3, 4].map(n => <div key={n} className={`w-4 h-4 rounded-sm ${n === 2 ? 'bg-orange-500 animate-pulse' : 'bg-white/10'}`} />)}
                                </div>
                            </div>

                            {/* Connection */}
                            <div className="flex-1 h-px bg-dashed border-t border-dashed border-white/10 relative hidden md:block">
                                <motion.div 
                                    animate={{ left: ["0%", "100%"] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                    className="absolute -top-1 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"
                                />
                            </div>

                            {/* New Microservice Node */}
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="w-40 h-40 rounded-full bg-orange-500/10 border border-orange-500/30 flex flex-col items-center justify-center relative shadow-[0_0_50px_rgba(249,115,22,0.1)]"
                            >
                                <div className="absolute -top-3 px-3 py-1 bg-orange-500 text-black rounded-lg text-[9px] font-black uppercase tracking-widest">New Service</div>
                                <Split size={32} className="text-orange-400 mb-2" />
                                <span className="text-white text-xs font-bold tracking-tight text-center px-4">Billing Service V1</span>
                            </motion.div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-widest">Extraction Analysis</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                                    <p className="text-gray-500 text-[10px] font-black uppercase mb-1">Files Involved</p>
                                    <p className="text-white font-mono text-xs">14 core files, 32 dependencies</p>
                                </div>
                                <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                                    <p className="text-gray-500 text-[10px] font-black uppercase mb-1">State Decoupling</p>
                                    <p className="text-orange-400 font-mono text-xs">3 cross-domain db joins detected</p>
                                </div>
                            </div>
                            <button className="mt-8 w-full py-4 rounded-2xl bg-orange-500 text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-orange-400 transition-all active:scale-95 shadow-[0_20px_40px_rgba(249,115,22,0.1)]">
                                PREVIEW DATA MIGRATION
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
