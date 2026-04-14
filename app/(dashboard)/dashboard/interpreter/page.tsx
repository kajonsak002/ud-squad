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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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

            {/* Interpreter Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Snippets Sidebar */}
                <div className="lg:col-span-1 space-y-4">
                    <h3 className="text-gray-500 text-[10px] font-black tracking-widest uppercase px-2">Templates</h3>
                    {[
                        { name: "security_audit.py", lang: "Python" },
                        { name: "refactor_logic.ts", lang: "TypeScript" },
                        { name: "db_sync.sql", lang: "SQL" }
                    ].map((s, i) => (
                        <button key={i} className="w-full p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all text-left group">
                            <p className="text-white text-xs font-bold mb-1 group-hover:text-emerald-400">{s.name}</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest">{s.lang}</p>
                        </button>
                    ))}
                </div>

                {/* Terminal / Editor Prototype */}
                <div className="lg:col-span-3 space-y-6">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative rounded-3xl border border-white/5 bg-black/40 backdrop-blur-md overflow-hidden min-h-[500px] flex flex-col"
                    >
                        <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                                <span className="ml-4 text-[11px] font-mono text-gray-400 uppercase tracking-widest italic">refactor_logic.ts</span>
                            </div>
                            <button className="flex items-center gap-2 px-6 py-2 rounded-xl bg-emerald-500 text-black font-black text-[11px] active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-400">
                                <Play size={14} /> RUN ANALYSIS
                            </button>
                        </div>
                        <div className="flex-1 p-8 font-mono text-sm leading-relaxed overflow-y-auto">
                            <div className="space-y-2">
                                <p className="text-emerald-500/80">$ ud-squad --init-interpreter</p>
                                <p className="text-gray-500">Initializing secure environment...</p>
                                <p className="text-gray-500">Mounting repository at /workspace/ud-squad</p>
                                <p className="text-blue-400 mt-4">Loaded 124 files across 14 directories.</p>
                                <div className="mt-8 pt-8 border-t border-white/5">
                                    <p className="text-white"><span className="text-emerald-500">export</span> <span className="text-purple-400">function</span> <span className="text-yellow-400">analyzeArchitecture</span>() {"{"}</p>
                                    <p className="pl-4 text-white">  <span className="text-emerald-500">const</span> modules = <span className="text-purple-400">await</span> <span className="text-yellow-400">scanPath</span>(<span className="text-orange-400">"./app"</span>);</p>
                                    <p className="pl-4 text-white">  <span className="text-emerald-500">return</span> modules.<span className="text-yellow-400">map</span>(m ={">"} m.<span className="text-yellow-400">evaluateComplexity</span>());</p>
                                    <p className="text-white">{"}"}</p>
                                </div>
                                <div className="w-2 h-4 bg-emerald-500 inline-block ml-1 align-middle" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
