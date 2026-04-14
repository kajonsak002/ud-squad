"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { TrendingUp, AlertTriangle, Cpu, Zap } from "lucide-react";

export default function DashboardPage() {
    const { t } = useLanguage();

    const stats = [
        { 
            label: t.dashboard.overview.stats.totalAnalyses, 
            value: "1,284", 
            change: "+12.5%", 
            icon: Cpu, 
            color: "text-blue-400",
            bg: "bg-blue-500/10"
        },
        { 
            label: t.dashboard.overview.stats.criticalIssues, 
            value: "14", 
            change: "-2", 
            icon: AlertTriangle, 
            color: "text-amber-400",
            bg: "bg-amber-500/10"
        },
        { 
            label: t.dashboard.overview.stats.uptime, 
            value: "99.98%", 
            change: "Stable", 
            icon: Zap, 
            color: "text-emerald-400",
            bg: "bg-emerald-500/10"
        },
        { 
            label: t.dashboard.overview.stats.efficiency, 
            value: "84%", 
            change: "+4.2%", 
            icon: TrendingUp, 
            color: "text-purple-400",
            bg: "bg-purple-500/10"
        },
    ];

    return (
        <div className="space-y-10">
            {/* Header */}
            <div>
                <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-bold tracking-tight"
                >
                    {t.dashboard.overview.welcome}, <span className="text-emerald-400">John</span>
                </motion.h1>
                <p className="text-gray-500 mt-1 text-sm tracking-wide uppercase">
                    UD-Squad AI Intelligence Hub
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-2 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon size={20} />
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                stat.change.startsWith("+") ? "bg-emerald-500/10 text-emerald-400" : 
                                stat.change.startsWith("-") ? "bg-red-500/10 text-red-400" : "bg-gray-500/10 text-gray-400"
                            }`}>
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-gray-500 text-xs font-medium mb-1 uppercase tracking-wider">{stat.label}</h3>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* System Analytics Simulation */}
                <div className="lg:col-span-2 rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-8 relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">System Intelligence Traffic</h3>
                            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Real-time processing load</p>
                        </div>
                        <div className="flex gap-2">
                            {['1H', '1D', '1W'].map((t) => (
                                <button key={t} className={`px-3 py-1 rounded-lg text-[10px] font-black tracking-widest transition-all ${t === '1H' ? 'bg-emerald-500 text-black' : 'bg-white/5 text-gray-500 hover:text-white'}`}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Simulated SVG Area Chart */}
                    <div className="h-[200px] w-full relative">
                        <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <motion.path
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                d="M0,80 Q50,40 100,70 T200,30 T300,60 T400,20 L400,100 L0,100 Z"
                                fill="url(#gradient)"
                            />
                            <motion.path
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                d="M0,80 Q50,40 100,70 T200,30 T300,60 T400,20"
                                fill="none"
                                stroke="#10b981"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
                        {[
                            { label: "LATENCY", value: "24ms", status: "optimal" },
                            { label: "NODES", value: "148 Active", status: "stable" },
                            { label: "BANDWIDTH", value: "1.2 GB/s", status: "active" }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <p className="text-[10px] text-gray-500 font-black tracking-[0.2em] mb-1 uppercase">{item.label}</p>
                                <p className="text-white font-bold">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activities Prototype */}
                <div className="rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-8 flex flex-col">
                    <h3 className="text-white font-bold mb-8 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Live Intelligence stream
                    </h3>
                    <div className="space-y-8 flex-1">
                        {[
                            { user: "AI-Bot", action: "Completed Scan", target: "auth.py", time: "2m ago", color: "bg-emerald-500" },
                            { user: "John", action: "Initiated Refactor", target: "Sidebar.tsx", time: "14m ago", color: "bg-blue-500" },
                            { user: "Security", action: "Blocked Access", target: "192.168.1.1", time: "1h ago", color: "bg-red-500" },
                            { user: "System", action: "Report Generated", target: "Q2 Assessment", time: "3h ago", color: "bg-purple-500" },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start group">
                                <div className={`w-8 h-8 rounded-xl ${item.color} flex-shrink-0 flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity`}>
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white text-xs font-bold leading-none">
                                        <span className="text-gray-400 font-medium">{item.user}</span> {item.action}
                                    </p>
                                    <p className="text-[10px] text-gray-500 font-mono tracking-tighter">
                                        {item.target} • <span className="text-emerald-500/50">{item.time}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-8 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-black tracking-widest uppercase hover:bg-white/10 transition-all">
                        VIEW ALL ACTIVITY
                    </button>
                </div>
            </div>
        </div>
    );
}
