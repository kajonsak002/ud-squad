"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Terminal, Book, Rocket, Shield, Cpu, Workflow } from "lucide-react";

export default function DocsPage() {
    const { t } = useLanguage();

    const sections = [
        { icon: Rocket, title: t.docs.introduction, id: "intro" },
        { icon: Cpu, title: t.docs.install, id: "install" },
        { icon: Shield, title: t.docs.auth, id: "auth" },
        { icon: Rocket, title: t.docs.usage, id: "usage" },
        { icon: Workflow, title: t.docs.cicd, id: "cicd" },
    ];

    return (
        <main className="bg-black min-h-screen">
            <NavBar />

            <div className="relative pt-32 pb-20">
                {/* 1. Background System */}
                <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.08),transparent_60%)] pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.05),transparent_60%)] pointer-events-none -z-10 -translate-x-1/4 translate-y-1/4" />

                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16">

                    {/* Sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-32 space-y-10">
                            <div>
                                <h3 className="text-white font-bold mb-6 flex items-center gap-2 tracking-tight uppercase text-xs opacity-50">
                                    {t.docs.getStarted}
                                </h3>
                                <ul className="space-y-4">
                                    {sections.map((s) => (
                                        <li key={s.id}>
                                            <a href={`#${s.id}`} className="group text-gray-400 hover:text-white transition-all text-[15px] flex items-center gap-3">
                                                <div className="p-1.5 rounded-md bg-white/[0.03] border border-white/5 group-hover:border-green-500/50 group-hover:bg-green-500/10 group-hover:text-green-400 transition-all">
                                                    <s.icon size={14} />
                                                </div>
                                                {s.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="lg:col-span-3 space-y-24">
                        {/* Introduction */}
                        <section id="intro" className="scroll-mt-32">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">
                                    {t.docs.title}
                                </h1>
                                <p className="text-xl text-gray-400 leading-relaxed font-light max-w-2xl">
                                    {t.docs.desc}
                                </p>
                            </motion.div>
                        </section>

                        {/* Installation */}
                        <section id="install" className="scroll-mt-32 space-y-8">
                            <h2 className="text-3xl font-bold text-white flex items-center gap-4 tracking-tight">
                                <div className="p-2 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_15px_rgba(0,255,136,0.1)]">
                                    <Cpu size={24} />
                                </div>
                                {t.docs.install}
                            </h2>
                            <div className="group relative rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <Terminal size={40} className="text-green-400" />
                                </div>

                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                                </div>

                                <code className="block font-mono text-green-400 text-lg md:text-xl selection:bg-green-500/30">
                                    {t.docs.installCode}
                                </code>
                                <p className="mt-6 text-gray-400 font-light leading-relaxed">
                                    {t.docs.installDesc}
                                </p>
                            </div>
                        </section>

                        {/* Authentication */}
                        <section id="auth" className="scroll-mt-32 space-y-8">
                            <h2 className="text-3xl font-bold text-white flex items-center gap-4 tracking-tight">
                                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(0,180,255,0.1)]">
                                    <Shield size={24} />
                                </div>
                                {t.docs.auth}
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed font-light">
                                {t.docs.authDesc}
                            </p>
                            <div className="p-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 text-yellow-200/90 text-[15px] flex gap-4 items-start shadow-xl">
                                <div className="mt-1 p-1 rounded-md bg-yellow-500/10 text-yellow-500">
                                    <Shield size={16} />
                                </div>
                                <div>
                                    <strong className="block mb-1 text-yellow-500">Security Warning</strong>
                                    Never commit your API key to public repositories. Always use environment variables or secret managers in your CI/CD settings.
                                </div>
                            </div>
                        </section>

                        {/* Usage */}
                        <section id="usage" className="scroll-mt-32 space-y-8">
                            <h2 className="text-3xl font-bold text-white flex items-center gap-4 tracking-tight">
                                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                                    <Rocket size={24} />
                                </div>
                                {t.docs.usageTitle}
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed font-light">
                                {t.docs.usageDesc}
                            </p>
                            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-8 shadow-2xl backdrop-blur-md">
                                <code className="block font-mono text-blue-400 text-lg md:text-xl">
                                    {t.docs.usageCode}
                                </code>
                            </div>
                        </section>

                        {/* CI/CD */}
                        <section id="cicd" className="scroll-mt-32 space-y-8">
                            <h2 className="text-3xl font-bold text-white flex items-center gap-4 tracking-tight">
                                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                    <Workflow size={24} />
                                </div>
                                {t.docs.cicdTitle}
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed font-light">
                                {t.docs.cicdDesc}
                            </p>
                            <div className="rounded-2xl border border-white/10 bg-[#010101] p-0 shadow-2xl overflow-hidden">
                                <div className="px-6 py-3 bg-white/[0.03] border-b border-white/5 flex items-center justify-between">
                                    <span className="text-[11px] font-mono text-gray-500 tracking-wider">.github/workflows/scan.yml</span>
                                </div>
                                <pre className="p-8 text-[14px] md:text-[15px] font-mono leading-relaxed overflow-x-auto selection:bg-green-500/20">
                                    <code className="text-gray-300">
                                        <span className="text-purple-400">jobs:</span>{"\n"}
                                        <span className="text-purple-400">  analyze:</span>{"\n"}
                                        <span className="text-purple-400">    runs-on:</span> ubuntu-latest{"\n"}
                                        <span className="text-purple-400">    steps:</span>{"\n"}
                                        <span className="text-blue-400">      - uses:</span> actions/checkout@v3{"\n"}
                                        <span className="text-blue-400">      - name:</span> {t.docs.cicdTitle}{"\n"}
                                        <span className="text-blue-400">        run:</span> |{"\n"}
                                        <span className="text-green-300">          npm install -g @udsquad/cli</span>{"\n"}
                                        <span className="text-green-300">          ud-squad scan --api-key=${"{"}${"{"} secrets.UD_SQUAD_API_KEY {"}"}${"}"}</span>
                                    </code>
                                </pre>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
