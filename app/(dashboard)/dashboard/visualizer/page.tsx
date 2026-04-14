"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { Network, ChevronRight, Maximize2, RefreshCw } from "lucide-react";

export default function VisualizerPage() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8 h-full flex flex-col">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span>{t.dashboard.menu.moreTools}</span>
                <ChevronRight size={12} />
                <span className="text-emerald-400">{t.dashboard.menu.dependencyVisualizer}</span>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                        <Network size={24} />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">{t.dashboard.menu.dependencyVisualizer}</h1>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                    Explore and navigate complex system architectures through interactive visual graphs.
                    Understand relationship flows and identify bottleneck clusters.
                </p>
            </motion.div>

            {/* Visualizer Canvas Placeholder */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-1 relative rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-black/40 backdrop-blur-3xl overflow-hidden min-h-[300px] md:min-h-[500px] group border-dashed"
            >
                {/* Controls */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 flex flex-col gap-2 md:gap-3 z-20">
                    <button className="p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-emerald-500 hover:text-black transition-all shadow-xl backdrop-blur-xl">
                        <Maximize2 size={16} />
                    </button>
                    <button className="p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-emerald-500 hover:text-black transition-all shadow-xl backdrop-blur-xl">
                        <RefreshCw size={16} />
                    </button>
                </div>

                {/* Empty State / Canvas Simulation */}
                <div className="absolute inset-0 p-12">
                    <div className="relative w-full h-full">
                        {/* Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full opacity-20">
                            <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" />
                            <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="#10b981" strokeWidth="1" />
                            <line x1="40%" y1="80%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="1" />
                            <line x1="70%" y1="70%" x2="50%" y2="50%" stroke="#ef4444" strokeWidth="1" />
                        </svg>

                        {/* Nodes */}
                        {[
                            { x: "20%", y: "30%", color: "bg-emerald-500", label: "AuthService" },
                            { x: "80%", y: "20%", color: "bg-emerald-500", label: "UserDB" },
                            { x: "50%", y: "50%", color: "bg-white", label: "Gateway", core: true },
                            { x: "40%", y: "80%", color: "bg-blue-500", label: "Cache_L1" },
                            { x: "70%", y: "70%", color: "bg-red-500", label: "Logger_X" }
                        ].map((node, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className={`absolute -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl border backdrop-blur-xl transition-all cursor-pointer group ${node.core ? 'bg-emerald-500 text-black border-transparent shadow-[0_0_30px_rgba(16,185,129,0.5)]' : 'bg-black/40 border-white/10 hover:border-emerald-500/50'}`}
                                style={{ left: node.x, top: node.y }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${node.core ? 'bg-black' : node.color}`} />
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${node.core ? 'text-black' : 'text-white'}`}>{node.label}</span>
                                </div>
                                <div className="mt-2 text-[8px] text-gray-500 hidden group-hover:block uppercase tracking-tighter">
                                    Latency: 4ms • Status: Up
                                </div>
                            </motion.div>
                        ))}

                        {/* Analysis Overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                className="w-64 h-64 border border-emerald-500/10 rounded-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 flex flex-wrap gap-4 md:gap-6 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl bg-black/80 border border-white/5 backdrop-blur-xl max-w-[calc(100%-2rem)]">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Dep</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Broken</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
