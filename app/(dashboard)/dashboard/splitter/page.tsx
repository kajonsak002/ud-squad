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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center text-center min-h-[300px] group"
                >
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-orange-500/30 flex items-center justify-center mb-6 group-hover:border-orange-500 group-hover:scale-110 transition-all duration-500">
                        <Share2 size={32} className="text-orange-500/50" />
                    </div>
                    <h3 className="text-white font-bold mb-2">Service Mapping</h3>
                    <p className="text-gray-500 text-sm max-w-[240px]">
                        Visualize bounded contexts and domain-driven design aggregates.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center text-center min-h-[300px] group"
                >
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-blue-500/30 flex items-center justify-center mb-6 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-500">
                        <Split size={32} className="text-blue-500/50" />
                    </div>
                    <h3 className="text-white font-bold mb-2">Extraction Wizard</h3>
                    <p className="text-gray-500 text-sm max-w-[240px]">
                        Guided workflow to extract logic into a new microservice.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
