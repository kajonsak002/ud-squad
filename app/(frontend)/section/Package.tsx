"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { Check, Sparkles, Zap, Shield } from "lucide-react";

export default function Package() {
    const { t } = useLanguage();

    const plans = [
        {
            name: t.pricing.starter.name,
            price: "$0",
            desc: t.pricing.starter.desc,
            features: t.pricing.starter.features,
            icon: Shield,
            color: "from-blue-500/10",
        },
        {
            name: t.pricing.pro.name,
            price: "$19/mo",
            desc: t.pricing.pro.desc,
            features: t.pricing.pro.features,
            highlight: true,
            icon: Sparkles,
            color: "from-green-500/20",
        },
        {
            name: t.pricing.enterprise.name,
            price: t.pricing.enterprise.price,
            desc: t.pricing.enterprise.desc,
            features: t.pricing.enterprise.features,
            icon: Zap,
            color: "from-purple-500/10",
        },
    ];

    return (
        <section id="pricing" className="relative bg-black text-white py-32 md:py-48 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-green-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-bold tracking-widest text-green-400 uppercase mb-6"
                    >
                        Pricing Plans
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8"
                    >
                        {t.pricing.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 font-light leading-relaxed"
                    >
                        {t.pricing.desc}
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] border transition-all duration-700 group hover:-translate-y-3 ${
                                    plan.highlight
                                        ? "border-green-500/30 bg-white/[0.04] md:scale-105 shadow-[0_40px_100px_rgba(0,0,0,0.6)] z-20"
                                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-green-500 text-black text-[10px] font-black tracking-widest uppercase rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-10">
                                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} to-transparent border border-white/10 flex items-center justify-center mb-8`}>
                                        <Icon size={24} className={plan.highlight ? "text-green-400" : "text-gray-400"} />
                                    </div>
                                    <h3 className="text-2xl font-black mb-3 text-white tracking-tight uppercase">
                                        {plan.name}
                                    </h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-5xl font-black tracking-tighter text-white">{plan.price}</span>
                                        {plan.price !== t.pricing.enterprise.price && <span className="text-gray-500 text-sm font-bold uppercase tracking-widest">/mo</span>}
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                        {plan.desc}
                                    </p>
                                </div>

                                <ul className="space-y-5 mb-12 flex-grow">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-4 text-gray-400 group-hover:text-gray-200 transition-colors">
                                            <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-green-500/10 flex items-center justify-center ring-1 ring-green-500/20">
                                                <Check size={10} className="text-green-400" strokeWidth={4} />
                                            </div>
                                            <span className="text-[13px] leading-tight font-medium">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase transition-all active:scale-95 ${
                                        plan.highlight
                                            ? "bg-green-500 text-black shadow-[0_20px_40px_rgba(34,197,94,0.2)] hover:bg-green-400 hover:shadow-[0_20px_40px_rgba(34,197,94,0.4)]"
                                            : "border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-white"
                                        }`}
                                >
                                    {t.pricing.getStarted}
                                </button>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}