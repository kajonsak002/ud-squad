"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t, locale, setLocale } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLocale(locale === "en" ? "th" : "en");
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                        <span className="text-black font-black text-lg">U</span>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tighter">
                        UD<span className="text-green-400 group-hover:text-green-300 transition-colors">Squad</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10 text-[13px] font-bold tracking-wide uppercase">
                    <Link href="/#features" className="text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">
                        {t.nav.features}
                    </Link>
                    <Link href="/#pricing" className="text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">
                        {t.nav.pricing}
                    </Link>
                    <Link href="/docs" className="text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">
                        {t.nav.docs}
                    </Link>
                    <Link href="/contact" className="text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all text-green-400/80">
                        {t.nav.contact}
                    </Link>

                    <div className="flex items-center gap-6 pl-6 border-l border-white/10">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 text-white/70 hover:text-white transition-all px-3 py-1.5 rounded-full border border-white/10 hover:border-green-500/30 bg-white/[0.03]"
                        >
                            <Globe size={14} className="text-green-400" />
                            <span>{locale.toUpperCase()}</span>
                            <ChevronDown size={12} className="opacity-50" />
                        </button>

                        <button className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-green-400 transition-all font-black text-xs shadow-xl active:scale-95">
                            {t.nav.getStarted}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Trigger */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        className="p-2 text-white/70 hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-3xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="px-6 py-10 space-y-6 flex flex-col items-center text-center">
                            <Link href="/#features" onClick={() => setIsOpen(false)} className="text-xl font-bold text-white transition-all">
                                {t.nav.features}
                            </Link>
                            <Link href="/#pricing" onClick={() => setIsOpen(false)} className="text-xl font-bold text-white transition-all">
                                {t.nav.pricing}
                            </Link>
                            <Link href="/docs" onClick={() => setIsOpen(false)} className="text-xl font-bold text-white transition-all">
                                {t.nav.docs}
                            </Link>
                            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-bold text-green-400">
                                {t.nav.contact}
                            </Link>

                            <div className="pt-6 w-full flex flex-col gap-4">
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center justify-center gap-2 py-4 w-full rounded-2xl border border-white/10 text-white font-bold"
                                >
                                    <Globe size={18} className="text-green-400" />
                                    Change to {locale === "en" ? "Thai" : "English"}
                                </button>
                                <button className="py-5 w-full bg-green-500 text-black rounded-2xl font-black text-lg">
                                    {t.nav.getStarted}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
