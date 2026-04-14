"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { Clock, ChevronRight, History, PlayCircle, Link, ChevronLeft } from "lucide-react";

export default function TimeMachinePage() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span>{t.dashboard.menu.moreTools}</span>
                <ChevronRight size={12} />
                <span className="text-emerald-400">{t.dashboard.menu.onboardingTimeMachine}</span>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-400 border border-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.1)]">
                        <Clock size={24} />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">{t.dashboard.menu.onboardingTimeMachine}</h1>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                    Walk through the history of any codebase module. Understand how architectural decisions evolved
                    and onboard new developers faster with interactive timelines.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Evolution Timeline Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <h3 className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                        <History size={16} className="text-pink-400" />
                        Milestones
                    </h3>
                    <div className="space-y-4">
                        {[
                            { version: "v4.2.0", label: "Tailwind v4 Migration", date: "Apr 12" },
                            { version: "v4.0.0", label: "App Router Rewrite", date: "Mar 15" },
                            { version: "v3.8.2", label: "Supabase Integration", date: "Feb 28" }
                        ].map((m, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-pink-500/30 transition-all cursor-pointer group">
                                <p className="text-pink-400 text-[10px] font-black uppercase mb-1">{m.version}</p>
                                <p className="text-white text-xs font-bold group-hover:text-pink-400">{m.label}</p>
                                <p className="text-gray-500 text-[9px] mt-2">{m.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Interactive Player Prototype */}
                <div className="lg:col-span-3 space-y-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="min-h-[500px] rounded-3xl border border-white/5 bg-white/[0.01] flex flex-col overflow-hidden"
                    >
                        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/[0.02]">
                            <div className="flex items-center gap-4">
                                <Link size={18} className="text-pink-400" />
                                <div>
                                    <h3 className="font-bold text-white uppercase text-xs tracking-widest">Temporal Replay</h3>
                                    <p className="text-gray-500 text-[10px] uppercase font-black">Active Context: <span className="text-gray-300">app/(dashboard)/layout.tsx</span></p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all"><ChevronLeft size={16} /></button>
                                <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-pink-500 text-black font-black text-xs shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:bg-pink-400 transition-all">
                                    <PlayCircle size={16} /> REPLAY EVOLUTION
                                </button>
                                <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all"><ChevronRight size={16} /></button>
                            </div>
                        </div>

                        <div className="flex-1 relative p-8">
                            {/* Visual Timeline Diagram Simulation */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                <div className="w-[80%] h-px bg-dashed border-t border-dashed border-white/20 relative">
                                    {[20, 40, 60, 80].map(p => (
                                        <div key={p} className="absolute -top-1 w-2 h-2 rounded-full bg-white" style={{ left: `${p}%` }} />
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                <div className="p-6 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md">
                                    <h4 className="text-gray-500 text-[10px] font-black uppercase mb-4 tracking-[0.2em]">State Alpha (Mar 10)</h4>
                                    <div className="space-y-2 opacity-40">
                                        <div className="h-2 w-full bg-white/5 rounded-full" />
                                        <div className="h-2 w-4/5 bg-white/5 rounded-full" />
                                        <div className="h-2 w-3/5 bg-white/10 rounded-full" />
                                    </div>
                                    <div className="mt-6 aspect-video rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center">
                                        <span className="text-blue-500/20 font-black">LEGACY_V3</span>
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="p-6 rounded-2xl bg-pink-500/[0.03] border border-pink-500/20 backdrop-blur-md shadow-2xl shadow-pink-500/5 relative"
                                >
                                    <div className="absolute -top-2 -right-2 px-3 py-1 bg-pink-500 text-black rounded-lg text-[10px] font-black uppercase">Selected</div>
                                    <h4 className="text-pink-400 text-[10px] font-black uppercase mb-4 tracking-[0.2em]">State Beta (Today)</h4>
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-white/10 rounded-full" />
                                        <div className="h-2 w-4/5 bg-white/10 rounded-full" />
                                        <div className="h-2 w-3/5 bg-pink-500/20 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.3)]" />
                                    </div>
                                    <div className="mt-6 aspect-video rounded-xl bg-pink-500/10 border border-pink-500/10 flex items-center justify-center">
                                        <span className="text-pink-400 font-black">NEXT_V16</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
