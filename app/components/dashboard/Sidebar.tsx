"use client";

import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Code2,
    Lock,
    Layers,
    GitBranch,
    Clock,
    Database,
    Smartphone,
    FileText,
    Network,
    X
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import SidebarItem from "./SidebarItem";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const { t } = useLanguage();
    const pathname = usePathname();

    const sections = [
        {
            title: t.dashboard.menu.main,
            items: [
                { icon: LayoutDashboard, label: t.dashboard.menu.dashboard, href: "/dashboard" },
                { icon: Code2, label: t.dashboard.menu.codeInterpreter, href: "/dashboard/interpreter" },
                { icon: Lock, label: t.dashboard.menu.securityGuard, href: "/dashboard/security" },
            ]
        },
        {
            title: t.dashboard.menu.modernization,
            items: [
                { icon: Layers, label: t.dashboard.menu.refactoringPlanner, href: "/dashboard/planner" },
                { icon: GitBranch, label: t.dashboard.menu.microservicesSplitter, href: "/dashboard/splitter" },
            ]
        },
        {
            title: t.dashboard.menu.moreTools,
            items: [
                { icon: Clock, label: t.dashboard.menu.onboardingTimeMachine, href: "/dashboard/time-machine" },
                { icon: Database, label: t.dashboard.menu.databaseBridge, href: "/dashboard/database" },
                { icon: Smartphone, label: t.dashboard.menu.apiAdapter, href: "/dashboard/api" },
                { icon: FileText, label: t.dashboard.menu.assessmentReport, href: "/dashboard/report" },
                { icon: Network, label: t.dashboard.menu.dependencyVisualizer, href: "/dashboard/visualizer" },
            ]
        }
    ];

    const sidebarContent = (
        <aside className="w-64 h-full bg-[#050505] border-r border-white/5 flex flex-col pt-8 pb-4 relative">
            {/* Close Button Mobile */}
            <button
                onClick={onClose}
                className="lg:hidden absolute top-6 right-6 p-2 text-gray-500 hover:text-white"
            >
                <X size={20} />
            </button>

            {/* Logo */}
            <div className="px-6 mb-10">
                <Link href="/" className="group flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                        <span className="text-black font-black text-lg">U</span>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tighter">
                        UD<span className="text-emerald-400">Squad</span>
                    </span>
                </Link>
            </div>

            {/* Menu Sections */}
            <div className="flex-1 overflow-y-auto px-3 space-y-8 scrollbar-thin scrollbar-thumb-white/5">
                {sections.map((section, idx) => (
                    <div key={idx} className="space-y-1.5">
                        <h3 className="px-4 text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">
                            {section.title}
                        </h3>
                        {section.items.map((item) => (
                            <SidebarItem
                                key={item.href}
                                icon={item.icon}
                                label={item.label}
                                href={item.href}
                                isActive={pathname === item.href}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* User Profile */}
            <div className="px-4 pt-4 border-t border-white/5 mt-auto">
                <div className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-black font-bold text-xs">
                        JS
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-white">John Squad</span>
                        <span className="text-[10px] text-gray-500">Pro Account</span>
                    </div>
                </div>
            </div>
        </aside>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden lg:flex min-h-screen">
                {sidebarContent}
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-40 lg:hidden">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute inset-y-0 left-0"
                        >
                            {sidebarContent}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
