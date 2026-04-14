"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { Database, ChevronRight, HardDrive, ShieldCheck } from "lucide-react";

export default function DatabasePage() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span>{t.dashboard.menu.moreTools}</span>
                <ChevronRight size={12} />
                <span className="text-emerald-400">{t.dashboard.menu.databaseBridge}</span>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                        <Database size={24} />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">{t.dashboard.menu.databaseBridge}</h1>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                    Analyze, migrate, and optimize your database schemas across different providers. 
                    Ensure data integrity during transitions with AI validation.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: HardDrive, label: "Schema Analysis", desc: "Identify suboptimal indices and redundant tables." },
                    { icon: Database, label: "Migration Engine", desc: "Generate SQL and scripts for zero-downtime migrations." },
                    { icon: ShieldCheck, label: "Data Integrity", desc: "Verify data consistency across bridge connections." }
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                            <item.icon size={20} />
                        </div>
                        <h4 className="text-white font-bold mb-2 tracking-tight">{item.label}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
