"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { Layers, ChevronRight, Sparkles, ArrowUpRight } from "lucide-react";

export default function PlannerPage() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span>{t.dashboard.menu.modernization}</span>
                <ChevronRight size={12} />
                <span className="text-emerald-400">{t.dashboard.menu.refactoringPlanner}</span>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                        <Layers size={24} />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">{t.dashboard.menu.refactoringPlanner}</h1>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                    Transform legacy code into modern, maintainable architectures. Use AI to plan your migration steps 
                    and estimate effort with precision.
                </p>
            </motion.div>

            <div className="space-y-6">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:scale-110 transition-transform duration-700">
                        <Sparkles size={120} className="text-purple-400" />
                    </div>
                    
                    <div className="relative z-10 max-w-xl">
                        <h3 className="text-2xl font-bold text-white mb-4">Start New Refactor Plan</h3>
                        <p className="text-gray-500 leading-relaxed mb-8">
                            Select a legacy module or directory to begin the AI-driven modernization planning process. 
                            Our system will analyze dependencies and suggest the best refactoring strategy.
                        </p>
                        <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white text-black font-black text-sm hover:bg-purple-400 transition-all active:scale-95">
                            New Analysis <ArrowUpRight size={18} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
