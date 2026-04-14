"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { FileText, ChevronRight, Download, Share2 } from "lucide-react";

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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                <div className="p-8 space-y-4">
                    {[
                        { title: "Monthly Core Health Security Assessment", date: "April 12, 2026", type: "PDF", size: "2.4 MB" },
                        { title: "Architectural Debt Analysis - Q1", date: "March 30, 2026", type: "XLSX", size: "1.1 MB" },
                        { title: "Dependency Risk Mitigation Report", date: "March 15, 2026", type: "PDF", size: "0.8 MB" }
                    ].map((report, i) => (
                        <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-black/20 border border-white/5 hover:border-indigo-500/30 transition-all group cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-indigo-400 transition-colors">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-sm">{report.title}</h4>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">{report.date} • {report.type}</p>
                                </div>
                            </div>
                            <span className="text-[10px] font-black text-gray-600 group-hover:text-white transition-colors">{report.size}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
