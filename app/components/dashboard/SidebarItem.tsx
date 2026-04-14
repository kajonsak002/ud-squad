"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
    isActive: boolean;
}

export default function SidebarItem({ icon: Icon, label, href, isActive }: SidebarItemProps) {
    return (
        <Link
            href={href}
            className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${isActive
                ? "bg-white/[0.08] text-white shadow-[0_0_20px_rgba(255,255,255,0.03)]"
                : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                }`}
        >
            <Icon size={18} className={isActive ? "text-emerald-400" : "group-hover:text-emerald-400 transition-colors"} />
            <span className="text-[14px] font-medium tracking-wide">
                {label}
            </span>

            {isActive && (
                <motion.div
                    layoutId="activeSide"
                    className="absolute left-0 w-1 h-5 bg-emerald-500 rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
        </Link>
    );
}
