"use client";

import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import MobileHeader from "../components/dashboard/MobileHeader";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row bg-[#050505] min-h-screen text-white font-sans overflow-hidden">
            {/* Mobile Header */}
            <MobileHeader onOpenSidebar={() => setIsSidebarOpen(true)} />

            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Main Content */}
            <main className="flex-1 relative overflow-y-auto min-h-screen">
                {/* Subtle Background Effects */}
                <div className="absolute top-0 right-0 w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.03),transparent_70%)] pointer-events-none -z-10" />
                <div className="absolute bottom-0 left-0 w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none -z-10" />
                
                {/* Content Container */}
                <div className="relative z-10 p-4 md:p-8 pt-6 md:pt-10">
                    {children}
                </div>
            </main>
        </div>
    );
}
