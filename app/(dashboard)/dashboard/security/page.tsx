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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Threat List */}
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                        <ShieldAlert size={16} className="text-emerald-400" />
                        Recent Security Events
                    </h3>
                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden">
                        <table className="w-full text-left text-xs border-collapse">
                            <thead>
                                <tr className="bg-white/[0.03] text-gray-500 uppercase font-black tracking-widest border-b border-white/5">
                                    <th className="px-6 py-4">Threat Type</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Severity</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { type: "Hardcoded API Key", status: "Detected", severity: "Critical", color: "text-red-400" },
                                    { type: "Insecure Dependencies", status: "Resolved", severity: "High", color: "text-orange-400" },
                                    { type: "XSS Vulnerability", status: "Review Required", severity: "Medium", color: "text-amber-400" },
                                    { type: "Unprotected Endpoint", status: "Automated Fix", severity: "Low", color: "text-blue-400" }
                                ].map((threat, i) => (
                                    <tr key={i} className="hover:bg-white/[0.01] transition-colors group">
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-white group-hover:text-emerald-400 transition-colors">{threat.type}</p>
                                            <p className="text-[10px] text-gray-500 mt-1 uppercase font-mono">src/api/auth.ts:24</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-0.5 rounded-md bg-white/5 text-gray-400 font-bold uppercase text-[9px]">
                                                {threat.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right font-black uppercase tracking-tighter">
                                            <span className={threat.color}>{threat.severity}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Configuration Panel */}
                <div className="space-y-6">
                    <h3 className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                        <Lock size={16} className="text-emerald-400" />
                        Active Protection
                    </h3>
                    <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 space-y-6">
                        {[
                            { name: "Real-time Secret Scanning", enabled: true, desc: "Detects passwords and keys in code." },
                            { name: "WAF Intelligence Layer", enabled: true, desc: "Adaptive firewall for API endpoints." },
                            { name: "Zero-Trust Mesh", enabled: false, desc: "Enforce strict identity validation." }
                        ].map((setting, i) => (
                            <div key={i} className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-white text-[13px] font-bold mb-1">{setting.name}</p>
                                    <p className="text-gray-500 text-[10px] leading-relaxed">{setting.desc}</p>
                                </div>
                                <div className={`w-10 h-6 p-1 rounded-full border border-white/10 transition-colors ${setting.enabled ? 'bg-emerald-500/20 border-emerald-500/30' : 'bg-white/5'}`}>
                                    <div className={`w-3.5 h-3.5 rounded-full transition-all ${setting.enabled ? 'bg-emerald-500 translate-x-4' : 'bg-gray-600'}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20">
                        <p className="text-indigo-400 font-black text-[10px] uppercase tracking-widest mb-2">Pro Tip</p>
                        <p className="text-gray-400 text-xs leading-relaxed italic">
                            Enable the Zero-Trust mesh to automatically rotate credentials every 24 hours.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
