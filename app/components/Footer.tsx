"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { Terminal, Send, Briefcase, MessageSquare, ExternalLink } from "lucide-react";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="w-full bg-black text-gray-400 border-t border-white/5 relative z-10 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-12 gap-y-16 gap-x-8 md:gap-12">

                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-4 space-y-8">
                        <div>
                            <Link href="/" className="group flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                                    <span className="text-black font-black text-lg">U</span>
                                </div>
                                <span className="text-white font-bold text-xl tracking-tighter">
                                    UD<span className="text-green-400">Squad</span>
                                </span>
                            </Link>
                            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
                                {t.footer.brandDesc}
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.03] flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all">
                                <Send size={18} className="text-white/80" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.03] flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all">
                                <Terminal size={18} className="text-white/80" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.03] flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all">
                                <Briefcase size={18} className="text-white/80" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.03] flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all">
                                <MessageSquare size={18} className="text-white/80" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em]">{t.footer.product}</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="/#features" className="hover:text-green-400 transition-colors flex items-center gap-2">{t.footer.links.features}</Link></li>
                            <li><Link href="/#pricing" className="hover:text-green-400 transition-colors flex items-center gap-2">{t.footer.links.pricing}</Link></li>
                            <li><Link href="/docs" className="hover:text-green-400 transition-colors flex items-center gap-2">{t.footer.links.docs} <ExternalLink size={12} className="opacity-50" /></Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em]">{t.footer.company}</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="#" className="hover:text-green-400 transition-colors">{t.footer.links.about}</Link></li>
                            <li><Link href="#" className="hover:text-green-400 transition-colors">{t.footer.links.blog}</Link></li>
                            <li><Link href="#" className="hover:text-green-400 transition-colors">{t.footer.links.careers}</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-2 space-y-6">
                        <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em]">{t.footer.support}</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="/contact" className="hover:text-green-400 transition-colors">{t.footer.links.contact}</Link></li>
                            <li><Link href="#" className="hover:text-green-400 transition-colors">{t.footer.links.help}</Link></li>
                            <li><Link href="#" className="hover:text-green-400 transition-colors">{t.footer.links.privacy}</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-medium tracking-wide">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                        <p>© {new Date().getFullYear()} UDSquad. {t.footer.rights}</p>
                        <div className="hidden md:block w-px h-4 bg-white/10" />
                        <Link href="#" className="hover:text-white transition-colors">Term of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookies Policy</Link>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}