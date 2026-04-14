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

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Database Source List */}
                <div className="lg:col-span-1 space-y-6">
                    <h3 className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                        <HardDrive size={16} className="text-blue-400" />
                        Connections
                    </h3>
                    <div className="space-y-3">
                        {[
                            { name: "Production_Postgres", status: "Connected", type: "Source" },
                            { name: "Analytics_Warehouse", status: "Idle", type: "Target" },
                            { name: "Legacy_MySQL", status: "Syncing", type: "Bridge" }
                        ].map((conn, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer group">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-white text-xs font-bold group-hover:text-blue-400">{conn.name}</span>
                                    <div className={`w-1.5 h-1.5 rounded-full ${conn.status === 'Syncing' ? 'bg-blue-400 animate-pulse' : 'bg-green-500'}`} />
                                </div>
                                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{conn.type} • {conn.status}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Schema Bridge Prototype */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                            <Database size={16} className="text-blue-400" />
                            Schema Alignment Workbench
                        </h3>
                        <button className="px-6 py-2 rounded-xl bg-blue-500 text-black font-black text-xs shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-blue-400 transition-all active:scale-95">
                            SYNC SCHEMAS
                        </button>
                    </div>
                    
                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden">
                        <table className="w-full text-left text-xs border-collapse">
                            <thead>
                                <tr className="bg-white/[0.03] text-gray-500 uppercase font-black tracking-widest border-b border-white/5">
                                    <th className="px-6 py-4">Source Table</th>
                                    <th className="px-6 py-4">Transform Logic</th>
                                    <th className="px-6 py-4 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { src: "users_raw", logic: "CamelCase -> camel_case", status: "Aligned", color: "text-emerald-400" },
                                    { src: "orders_2023", logic: "Normalize Dates", status: "Auto-Match", color: "text-blue-400" },
                                    { src: "billing_details", logic: "Regex: Mask CSV", status: "Conflict", color: "text-red-400" },
                                    { src: "auth_sessions", logic: "Direct Link", status: "Aligned", color: "text-emerald-400" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/[0.01] transition-colors group">
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-white group-hover:text-blue-400 transition-colors uppercase">{row.src}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <code className="px-2 py-1 rounded bg-black/40 text-blue-300 font-mono text-[10px]">
                                                {row.logic}
                                            </code>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <span className={`font-black uppercase tracking-tighter ${row.color}`}>{row.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
