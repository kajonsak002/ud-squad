"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex items-center">

            {/* Full Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero_brain.png"
                    alt="AI Core Background"
                    fill
                    className="object-cover object-center scale-110"
                    priority
                />
                {/* Dark gradient overlay — heavier on left for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
                {/* Top & bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16 py-32">
                <div className="max-w-xl">

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.1] tracking-tight"
                    >
                        {t.hero.title1}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                            {t.hero.title2}
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mt-7 text-[15px] md:text-base leading-[1.75] text-gray-300/80 max-w-md"
                    >
                        {t.hero.desc}
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="mt-10"
                    >
                        <Link
                            href="#"
                            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/20 hover:border-emerald-400/50 bg-white/[0.04] hover:bg-emerald-500/[0.1] text-sm font-medium tracking-wide text-white transition-all duration-300 backdrop-blur-sm"
                        >
                            {t.hero.startBtn}
                            <ArrowRight size={15} className="text-emerald-400 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Bottom fade line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>
    );
}
