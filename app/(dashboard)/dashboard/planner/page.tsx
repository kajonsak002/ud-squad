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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Refactoring Targets */}
                <div className="space-y-6">
                    <h3 className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                        <Layers size={16} className="text-purple-400" />
                        Analysis Queue
                    </h3>
                    <div className="space-y-4">
                        {[
                            { name: "LegacyAuthModule", complexity: "High", savings: "2.4h/wk", progress: 65 },
                            { name: "ProductCatalogV1", complexity: "Extreme", savings: "8.1h/wk", progress: 12 },
                            { name: "PaymentGateway_Fix", complexity: "Medium", savings: "0.5h/wk", progress: 100 }
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-white font-bold group-hover:text-purple-400 transition-colors uppercase tracking-tight">{item.name}</p>
                                        <p className="text-[10px] text-gray-500 font-black tracking-widest uppercase mt-1">Complexity: <span className="text-gray-300">{item.complexity}</span></p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-emerald-400 text-xs font-black tracking-tighter">Est. Savings</p>
                                        <p className="text-white text-lg font-black">{item.savings}</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] text-gray-500 font-black uppercase">
                                        <span>Progress</span>
                                        <span>{item.progress}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full ${item.progress === 100 ? 'bg-emerald-500' : 'bg-purple-500'}`}
                                            style={{ width: `${item.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strategy Roadmap Prototype */}
                <div className="space-y-6">
                    <h3 className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                        <Sparkles size={16} className="text-purple-400" />
                        Recommended Strategy
                    </h3>
                    <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:scale-110 transition-transform duration-700">
                            <Sparkles size={120} className="text-purple-400" />
                        </div>
                        
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold text-white mb-6">Phase 1: Encapsulation</h4>
                            <div className="space-y-6 relative ml-4 border-l border-white/10 pl-8 pb-8">
                                {[
                                    { title: "Identify Side Effects", done: true },
                                    { title: "Extract Pure Logic", done: true },
                                    { title: "Implement Unit Tests", done: false },
                                    { title: "Replace Legacy Calls", done: false }
                                ].map((step, i) => (
                                    <div key={i} className="relative">
                                        <div className={`absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-[#050505] shadow-[0_0_10px_rgba(168,85,247,0.3)] ${step.done ? 'bg-purple-500' : 'bg-white/10'}`} />
                                        <p className={`text-sm font-bold ${step.done ? 'text-white' : 'text-gray-500'}`}>{step.title}</p>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full py-4 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-purple-400 transition-all active:scale-95 shadow-[0_20px_40px_rgba(168,85,247,0.1)]">
                                GENERATE CODE PLAN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
