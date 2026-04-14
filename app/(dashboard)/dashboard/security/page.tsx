"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { Lock, ShieldAlert, ChevronRight, Eye } from "lucide-react";

export default function SecurityPage() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span>{t.dashboard.menu.main}</span>
                <ChevronRight size={12} />
                <span className="text-emerald-400">{t.dashboard.menu.securityGuard}</span>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                        <Lock size={24} />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">{t.dashboard.menu.securityGuard}</h1>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                    Monitor and protect your codebase with AI vision. Detect vulnerabilities, secrets leakage, 
                    and unauthorized access patterns automatically.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] relative group overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <ShieldAlert size={80} className="text-emerald-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                        <ShieldAlert size={18} className="text-emerald-400" />
                        Vulnerability Scanner
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        No critical vulnerabilities detected in the last scan. System status is currently optimal.
                    </p>
                    <button className="px-6 py-2.5 rounded-xl border border-white/10 text-white font-bold text-xs hover:bg-white/5 transition-all">
                        Run Full Scan
                    </button>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] relative group overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Eye size={80} className="text-blue-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                        <Eye size={18} className="text-blue-400" />
                        Access Logs
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        Real-time monitoring of all file access and modifications within the repository.
                    </p>
                    <button className="px-6 py-2.5 rounded-xl border border-white/10 text-white font-bold text-xs hover:bg-white/5 transition-all">
                        View Logs
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
