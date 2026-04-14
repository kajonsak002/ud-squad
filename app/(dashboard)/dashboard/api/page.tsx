"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { Smartphone, ChevronRight, Zap, Box } from "lucide-react";

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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

            <div className="flex flex-wrap gap-4">
                {["REST", "GraphQL", "gRPC", "SOAP", "Webhooks"].map((tech) => (
                    <div key={tech} className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-gray-400 text-xs font-bold hover:border-teal-400 transition-colors cursor-default">
                        {tech}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-teal-500/5 to-transparent relative group"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-teal-500 flex items-center justify-center text-black">
                            <Zap size={24} />
                        </div>
                        <h3 className="font-bold text-white text-lg">Instant SDK Generation</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        Upload your Swagger/OpenAPI spec and get a fully typed SDK in TypeScript, Go, or Python.
                    </p>
                    <button className="w-full py-4 rounded-2xl border border-teal-500/20 text-teal-400 font-bold text-sm hover:bg-teal-500 hover:text-black transition-all">
                        Upload Specification
                    </button>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-blue-500/5 to-transparent relative group"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-black">
                            <Box size={24} />
                        </div>
                        <h3 className="font-bold text-white text-lg">Mocking Service</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        Automatically spin up a local mock server based on your API contracts for rapid development.
                    </p>
                    <button className="w-full py-4 rounded-2xl border border-blue-500/20 text-blue-400 font-bold text-sm hover:bg-blue-500 hover:text-black transition-all">
                        Launch Mock Server
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
