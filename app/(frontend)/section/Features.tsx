"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { Code2, Sparkles, Workflow, ArrowRight, Zap, Target, Activity } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import React, { useRef, useState, useEffect } from "react";

// 1. Advanced Parallax Mockup Component
const ParallaxMockup = ({ image, tag, color, title }: { image: string; tag: string; color: string; title: string }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    // Parallax layers
    const layer2X = useTransform(mouseXSpring, [-0.5, 0.5], ["-30px", "30px"]);
    const layer2Y = useTransform(mouseYSpring, [-0.5, 0.5], ["-30px", "30px"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full aspect-[4/3] perspective-[2000px] group cursor-none"
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-full h-full transition-shadow duration-500"
            >
                {/* Layer 1: Base Dashboard */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#050505] shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
                    <Image
                        src={image}
                        alt="Dashboard Base"
                        fill
                        className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
                    />
                </div>

                {/* Layer 2: Floating Action Card */}
                {/* <motion.div
                    style={{ x: layer2X, y: layer2Y, translateZ: "80px" }}
                    className="absolute top-1/4 right-[-10%] w-2/3 aspect-video rounded-2xl bg-black/60 backdrop-blur-3xl border border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.8)] p-6 overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />
                    <div className="flex flex-col h-full justify-between">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-green-400 font-bold uppercase tracking-tighter shadow-green-500/50">
                                active_analysis_v2
                            </span>
                            <Zap size={14} className="text-green-500 animate-pulse" />
                        </div>
                        <div className="space-y-3">
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ width: ["0%", "85%", "70%", "95%"] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                                />
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                                <span>REFACTORING...</span>
                                <span>98.4%</span>
                            </div>
                        </div>
                    </div>
                </motion.div> */}

                {/* Layer 3: Secondary Badge */}
                <motion.div
                    style={{ x: useTransform(mouseXSpring, [-0.5, 0.5], ["20px", "-20px"]), y: useTransform(mouseYSpring, [-0.5, 0.5], ["20px", "-20px"]), translateZ: "120px" }}
                    className="absolute bottom-1/4 left-[-5%] p-4 rounded-xl bg-green-500 text-black font-bold shadow-2xl flex items-center gap-3 scale-90"
                >
                    <Target size={20} />
                    <span className="text-xs">OPTIMAL PATH FOUND</span>
                </motion.div>
            </motion.div>

            {/* Global Cursor Spotlight Follower inside the card */}
            {/* <motion.div
                style={{ x: useSpring(useMotionValue(0)), y: useSpring(useMotionValue(0)) }}
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-green-400 shadow-[0_0_30px_#22c55e] pointer-events-none opacity-0 group-hover:opacity-100 z-50 mix-blend-screen"
            /> */}
        </div>
    );
};

export default function Features() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const features = [
        {
            title: t.features.f1.title,
            desc: t.features.f1.desc,
            image: "/images/feature1.png",
            icon: Code2,
            tag: t.features.f1.tag,
            color: "from-green-500/20",
        },
        {
            title: t.features.f2.title,
            desc: t.features.f2.desc,
            image: "/images/feature2.png",
            icon: Sparkles,
            tag: t.features.f2.tag,
            color: "from-blue-500/20",
        },
        {
            title: t.features.f3.title,
            desc: t.features.f3.desc,
            image: "/images/feature3.png",
            icon: Workflow,
            tag: t.features.f3.tag,
            color: "from-purple-500/20",
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="features"
            className="relative bg-black text-white py-48 overflow-hidden"
        >
            {/* 1. Neural Spotlight Overlay */}
            <div
                className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,255,136,0.04), transparent 80%)`
                }}
            />

            {/* 2. Cyberpunk Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

            <div className="max-w-7xl mx-auto px-6 relative z-20">

                {/* 3. Neural Connecting Line (SVG Animated) */}
                <div className="absolute left-1/2 top-40 bottom-40 w-px hidden lg:block overflow-visible">
                    <div className="h-full w-full bg-white/[0.05]" />
                    <motion.div
                        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                        className="absolute inset-0 bg-gradient-to-b from-green-500 via-emerald-400 to-blue-500 shadow-[0_0_20px_#22c55e]"
                    />
                </div>

                <div className="space-y-64 md:space-y-80">
                    {features.map((f, index) => {
                        const isReverse = index % 2 === 1;
                        const stepNumber = (index + 1).toString().padStart(2, '0');

                        return (
                            <div key={index} className="relative">
                                {/* Large background text */}
                                <motion.div
                                    style={{
                                        opacity: useTransform(scrollYProgress, [0 + index * 0.3, 0.2 + index * 0.3], [0, 0.05]),
                                        x: isReverse ? -100 : 100
                                    }}
                                    className="absolute -top-32 left-0 right-0 flex justify-center pointer-events-none select-none uppercase"
                                >
                                    <span className="text-[25rem] font-black tracking-tighter font-inter">{stepNumber}</span>
                                </motion.div>

                                <div className={`flex flex-col lg:flex-row items-center gap-20 lg:gap-40 ${isReverse ? "lg:flex-row-reverse" : ""}`}>

                                    {/* Advanced Parallax Image */}
                                    <div className="w-full lg:w-3/5">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, rotateY: isReverse ? 20 : -20 }}
                                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                                            viewport={{ once: true, margin: "-100px" }}
                                        >
                                            <ParallaxMockup
                                                image={f.image}
                                                tag={f.tag}
                                                color={f.color}
                                                title={f.title}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Hyper-styled Text Side */}
                                    <div className="w-full lg:w-2/5 space-y-10 relative">
                                        <motion.div
                                            initial={{ opacity: 0, x: isReverse ? 40 : -40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3, duration: 1 }}
                                            className="space-y-8"
                                        >
                                            <div className="flex flex-col gap-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-green-400 shadow-inner">
                                                        <Activity size={24} />
                                                    </div>
                                                    <span className="text-xs font-mono font-bold text-green-500 tracking-[0.3em] uppercase">
                                                        {`> system_ready: ${f.tag}`}
                                                    </span>
                                                </div>
                                                <div className="h-px w-full bg-gradient-to-r from-green-500/40 to-transparent" />
                                            </div>

                                            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight hover:text-green-400 transition-colors duration-500">
                                                {f.title}
                                            </h2>

                                            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light font-inter max-w-xl opacity-80 border-l-2 border-white/5 pl-8 italic">
                                                {`"${f.desc}"`}
                                            </p>

                                            <div className="pt-4">
                                                <button className="relative px-10 py-5 group/btn bg-white text-black font-black text-sm uppercase tracking-widest clip-path-polygon-[0_0,100%_0,90%_100%,0_100%] overflow-hidden transition-transform hover:-translate-y-1 active:scale-95">
                                                    <div className="absolute inset-0 bg-green-500 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out" />
                                                    <span className="relative z-10 flex items-center gap-3">
                                                        Deploy Intelligence
                                                        <ArrowRight size={20} />
                                                    </span>
                                                </button>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}