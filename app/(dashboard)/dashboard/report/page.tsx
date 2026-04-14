"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { FileText, ChevronRight, Download, Share2, BarChart3 } from "lucide-react";

export default function ReportPage() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span>{t.dashboard.menu.moreTools}</span>
                <ChevronRight size={12} />
                <span className="text-emerald-400">{t.dashboard.menu.assessmentReport}</span>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                        <FileText size={24} />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">{t.dashboard.menu.assessmentReport}</h1>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                    Generate comprehensive reports on codebase health, security posture, and architectural quality. 
                    Perfect for executive summaries and team alignment.
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden"
            >
                <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                    <h3 className="font-bold text-white uppercase text-xs tracking-[0.2em] text-gray-500">Available Reports</h3>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all"><Download size={16} /></button>
                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all"><Share2 size={16} /></button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Historical Reports */}
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                        <FileText size={16} className="text-purple-400" />
                        Report History
                    </h3>
                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden">
                        <table className="w-full text-left text-xs border-collapse">
                            <thead>
                                <tr className="bg-white/[0.03] text-gray-500 uppercase font-black tracking-widest border-b border-white/5">
                                    <th className="px-6 py-4">Assessment Period</th>
                                    <th className="px-6 py-4 text-center">Score</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { period: "Q2 Full Architecture Review", score: 84, trend: "up", date: "Apr 10, 2024" },
                                    { period: "Monthly Security Audit", score: 92, trend: "stable", date: "Mar 15, 2024" },
                                    { period: "Legacy Debt Assessment", score: 42, trend: "down", date: "Feb 28, 2024" }
                                ].map((report, i) => (
                                    <tr key={i} className="hover:bg-white/[0.01] transition-colors group">
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-white group-hover:text-purple-400 transition-colors uppercase">{report.period}</p>
                                            <p className="text-[10px] text-gray-500 mt-1 uppercase font-black">{report.date}</p>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`text-lg font-black ${report.score > 80 ? 'text-emerald-400' : report.score > 50 ? 'text-amber-400' : 'text-red-400'}`}>
                                                {report.score}
                                            </span>
                                            <span className="text-[9px] text-gray-600 block uppercase font-mono">/ 100</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 rounded-xl bg-white/5 hover:bg-purple-500 transition-all group-hover:text-black">
                                                <Download size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Latest Insights Prototype */}
                <div className="space-y-6">
                    <h3 className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                        <BarChart3 size={16} className="text-purple-400" />
                        Executive Summary
                    </h3>
                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 relative overflow-hidden group">
                        <div className="relative z-10">
                            <p className="text-purple-400 font-black text-[10px] uppercase tracking-[0.2em] mb-4">Latest Insights</p>
                            <h4 className="text-lg font-bold text-white mb-4 italic">"Overall system stability has increased by 14% since the last refactoring sprint."</h4>
                            <div className="space-y-4 pt-4 border-t border-white/5">
                                {[
                                    { label: "Stability", val: 88 },
                                    { label: "Security", val: 94 },
                                    { label: "Complexity", val: 32 }
                                ].map((stat, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="flex justify-between text-[10px] uppercase font-black text-gray-500">
                                            <span>{stat.label}</span>
                                            <span>{stat.val}%</span>
                                        </div>
                                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-purple-500" style={{ width: `${stat.val}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-8 w-full py-4 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-purple-400 transition-all">
                                EXPORT FULL PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    );
}
