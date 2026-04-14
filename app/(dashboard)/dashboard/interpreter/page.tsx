"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { Code2, Play, ChevronRight } from "lucide-react";

export default function InterpreterPage() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span>{t.dashboard.menu.main}</span>
                <ChevronRight size={12} />
                <span className="text-emerald-400">{t.dashboard.menu.codeInterpreter}</span>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                        <Code2 size={24} />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">{t.dashboard.menu.codeInterpreter}</h1>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                    Execute and analyze snippets of code in a secure, AI-powered sandbox environment. 
                    Get real-time feedback and optimization suggestions.
                </p>
            </motion.div>

            {/* Sandbox Placeholder */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative rounded-3xl border border-white/5 bg-black/40 backdrop-blur-md overflow-hidden min-h-[400px] flex flex-col"
            >
                <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                        <span className="ml-4 text-[11px] font-mono text-gray-500 uppercase tracking-wider">main.py</span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-emerald-500 text-black font-black text-[11px] active:scale-95 transition-all">
                        <Play size={12} /> RUN CODE
                    </button>
                </div>
                <div className="flex-1 p-8 font-mono text-sm text-gray-400 leading-relaxed">
                    <p className="text-emerald-400"># AI-Powered Interpreter initialized...</p>
                    <p className="mt-4 opacity-50">Waiting for input...</p>
                </div>
            </motion.div>
        </div>
    );
}
