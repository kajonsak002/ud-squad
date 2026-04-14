"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { Clock, ChevronRight, History, PlayCircle } from "lucide-react";

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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="min-h-[400px] rounded-3xl border border-white/5 bg-white/[0.01] flex flex-col"
            >
                <div className="p-8 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <History className="text-pink-400" />
                        <h3 className="font-bold text-white">Interactive Timeline</h3>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all">
                        <PlayCircle size={16} /> Play History
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="p-12 border border-dashed border-white/10 rounded-2xl text-center">
                        <p className="text-gray-600 uppercase text-[10px] font-black tracking-[0.2em] mb-4">No Module Selected</p>
                        <button className="text-pink-400 font-bold hover:underline">Browse Repository</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
