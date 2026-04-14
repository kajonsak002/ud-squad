"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { Smartphone, ChevronRight, Zap, Box, Search } from "lucide-react";

export default function APIPage() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span>{t.dashboard.menu.moreTools}</span>
                <ChevronRight size={12} />
                <span className="text-emerald-400">{t.dashboard.menu.apiAdapter}</span>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shadow-[0_0_20px_rgba(20,184,166,0.1)]">
                        <Smartphone size={24} />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">{t.dashboard.menu.apiAdapter}</h1>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                    Generate type-safe API clients and adapters for any backend service. 
                    Support REST, GraphQL, and gRPC with automated documentation and mocking.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Method Filter Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <h3 className="text-white font-bold text-sm tracking-tight">Protocols</h3>
                    <div className="flex flex-col gap-2">
                        {["REST", "GraphQL", "gRPC", "Webhooks"].map((tech) => (
                            <div key={tech} className={`px-4 py-3 rounded-xl border transition-all cursor-pointer flex justify-between items-center ${tech === 'REST' ? 'border-teal-400 bg-teal-400/5 text-teal-400' : 'border-white/5 bg-white/[0.02] text-gray-500 hover:text-white hover:border-white/10'}`}>
                                <span className="text-xs font-bold uppercase tracking-widest">{tech}</span>
                                {tech === 'REST' && <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />}
                            </div>
                        ))}
                    </div>

                    <div className="pt-6 border-t border-white/5">
                        <h4 className="text-[10px] font-black uppercase text-gray-600 tracking-widest mb-4">Quick Generation</h4>
                        <div className="space-y-3">
                            {["TypeScript SDK", "Python Client", "Golang Types"].map(sdk => (
                                <button key={sdk} className="w-full py-3 rounded-xl bg-white/5 border border-white/5 text-white text-[10px] font-bold hover:bg-white/10 transition-all">
                                    {sdk}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Endpoint Explorer Prototype */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                            <Smartphone size={16} className="text-teal-400" />
                            Active Endpoint Map
                        </h3>
                        <div className="flex gap-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                                <input 
                                    type="text" 
                                    placeholder="SEARCH ENDPOINTS..." 
                                    className="bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-[10px] font-bold text-white focus:outline-none focus:border-teal-400 w-48"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {[
                            { method: "GET", path: "/v1/users/profile", status: "200 OK", load: "High" },
                            { method: "POST", path: "/v1/auth/login", status: "201 Created", load: "Critical" },
                            { method: "PUT", path: "/v1/billing/subscription", status: "Verify", load: "Normal" },
                            { method: "DELETE", path: "/v1/admin/cache", status: "Protected", load: "Idle" }
                        ].map((api, i) => (
                            <div key={i} className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-teal-400/30 transition-all group flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <span className={`w-16 text-center py-1 rounded-lg text-[10px] font-black border ${
                                        api.method === 'GET' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' :
                                        api.method === 'POST' ? 'border-blue-500/30 text-blue-400 bg-blue-500/5' :
                                        api.method === 'PUT' ? 'border-amber-500/30 text-amber-400 bg-amber-500/5' :
                                        'border-red-500/30 text-red-400 bg-red-500/5'
                                    }`}>
                                        {api.method}
                                    </span>
                                    <div>
                                        <p className="text-white font-mono text-xs font-bold">{api.path}</p>
                                        <p className="text-[10px] text-gray-500 uppercase font-black mt-1 tracking-widest">{api.status} • {api.load} Load</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                    <button className="px-4 py-2 rounded-lg bg-teal-400 text-black font-black text-[9px] uppercase tracking-widest">
                                        Mock
                                    </button>
                                    <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-black text-[9px] uppercase tracking-widest">
                                        Docs
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
