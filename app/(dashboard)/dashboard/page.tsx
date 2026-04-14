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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
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

            {/* Placeholder for Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 aspect-video rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="text-gray-600 font-mono text-xs tracking-widest uppercase">System Analytics Visualization</p>
                </div>
                <div className="aspect-square lg:aspect-auto rounded-3xl bg-white/[0.02] border border-white/5 p-8">
                    <h3 className="text-white font-bold mb-6 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Recent Activities
                    </h3>
                    <div className="space-y-6">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex-shrink-0" />
                                <div className="space-y-1">
                                    <div className="h-2 w-32 bg-white/10 rounded-full" />
                                    <div className="h-1.5 w-20 bg-white/5 rounded-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
