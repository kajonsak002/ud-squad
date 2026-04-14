"use client";

import { Menu, Search, Bell } from "lucide-react";
import Link from "next/link";

interface MobileHeaderProps {
    onOpenSidebar: () => void;
}

export default function MobileHeader({ onOpenSidebar }: MobileHeaderProps) {
    return (
        <header className="lg:hidden h-16 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <button 
                    onClick={onOpenSidebar}
                    className="p-2 -ml-2 text-gray-400 hover:text-white transition-colors"
                >
                    <Menu size={24} />
                </button>
                <Link href="/" className="group flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <span className="text-black font-black text-lg">U</span>
                    </div>
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 text-gray-500 hover:text-white transition-colors">
                    <Search size={20} />
                </button>
                <button className="p-2 text-gray-500 hover:text-white transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                </button>
            </div>
        </header>
    );
}
