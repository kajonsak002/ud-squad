"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, X, FileText, Code, Shield, Network } from "lucide-react";
import { useEffect, useState } from "react";

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [search, setSearch] = useState("");

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    const results = [
        { icon: Code, title: "interpreter.py", type: "File", path: "app/(dashboard)/dashboard/interpreter", color: "text-blue-400" },
        { icon: Shield, title: "Vulnerability Report", type: "Assessment", path: "app/(dashboard)/dashboard/report", color: "text-pink-400" },
        { icon: Network, title: "Service Mesh Split", type: "Blueprint", path: "app/(dashboard)/dashboard/splitter", color: "text-orange-400" },
        { icon: FileText, title: "Design System Guidelines", type: "Docs", path: "DESIGN.md", color: "text-emerald-400" },
    ].filter(i => i.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 md:px-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden"
                    >
                        <div className="p-6 border-b border-white/5 flex items-center gap-4">
                            <Search className="text-gray-500" size={20} />
                            <input 
                                autoFocus
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search tools, files, or reports..."
                                className="bg-transparent border-none outline-none text-white text-lg w-full placeholder:text-gray-600 font-light"
                            />
                            <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-gray-500 tracking-widest">
                                <Command size={10} /> ESC
                            </div>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
                            {results.length > 0 ? (
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] px-4 py-2">Quick Results</p>
                                    {results.map((res, i) => (
                                        <button 
                                            key={i} 
                                            className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all text-left group"
                                            onClick={onClose}
                                        >
                                            <div className={`p-2.5 rounded-xl bg-white/5 ${res.color}`}>
                                                <res.icon size={18} />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white text-sm font-bold group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{res.title}</p>
                                                <p className="text-[10px] text-gray-500 font-mono mt-0.5">{res.path}</p>
                                            </div>
                                            <span className="text-[9px] font-black text-gray-600 uppercase border border-white/5 px-2 py-1 rounded-md">{res.type}</span>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-20 text-center">
                                    <p className="text-gray-600 font-medium italic">No matches found for "{search}"</p>
                                </div>
                            )}
                        </div>

                        <div className="p-6 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                            <div className="flex gap-6">
                                <div className="flex items-center gap-2 text-[9px] font-black text-gray-600 uppercase">
                                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↵</span> Select
                                </div>
                                <div className="flex items-center gap-2 text-[9px] font-black text-gray-600 uppercase">
                                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↑↓</span> Navigate
                                </div>
                            </div>
                            <p className="text-[9px] font-black text-gray-700 uppercase">UD-SQUAD v4.2</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
