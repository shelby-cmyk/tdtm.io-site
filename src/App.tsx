import { Logo } from "./components/Logo";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Database, TrendingUp, Users, Rocket, CheckCircle2, Network, Fingerprint, Shield, Zap, Activity, Eye, Mail, Phone, Search, RefreshCw, ChevronDown, Lock, Award, Layers, Globe, BarChart3, Star } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { LogoMarquee } from "./components/LogoMarquee";
import { ROICalculator } from "./components/ROICalculator";
import { LiveActivityFeed } from "./components/LiveActivityFeed";
import { ComparisonTable } from "./components/ComparisonTable";
import { SectionDivider } from "./components/SectionDivider";
import { EcosystemVisualization } from "./components/EcosystemVisualization";
import { MobileNav } from "./components/MobileNav";
import { DemoBookingForm } from "./components/DemoBookingForm";
import { PlatformLogo } from "./components/PlatformLogo";
import { FAQSection } from "./components/FAQSection";
import { PricingSection } from "./components/PricingSection";
import { ChatWidget } from "./components/ChatWidget";
import { PixelDashboard } from "./components/PixelDashboard";
import { AudienceBuilder } from "./components/AudienceBuilder";
import { Toaster as SonnerToaster } from "sonner@2.0.3";
import { useState } from "react";

export default function App() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const metrics = [
    { value: 500, suffix: "M+", label: "Identity Records", description: "Activated monthly" },
    { value: 10, suffix: "M+", label: "Leads Generated", description: "For B2B clients" },
    { value: 50, suffix: "%", label: "Pixel Match Rate", description: "Website visitor ID" },
    { value: 48, prefix: "<", suffix: "h", label: "Implementation", description: "Speed to activation" }
  ];

  const caseStudies = [
    {
      client: "Enterprise SaaS",
      industry: "Technology",
      result: "425% increase in qualified leads",
      metric: "Using TDTM identity resolution",
      color: "#00D9FF"
    },
    {
      client: "B2B Marketplace",
      industry: "E-Commerce",
      result: "3.2M new prospects identified",
      metric: "From 500M+ identity records",
      color: "#39FF14"
    },
    {
      client: "Financial Platform",
      industry: "FinTech",
      result: "67% reduction in CAC",
      metric: "Real-time visitor intelligence",
      color: "#FF006E"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Logo 
              variant="velocity" 
              size="sm" 
              showText={true}
              companyName="TALK DATA TO ME"
              layout="horizontal"
              useColor={true}
              customColor="#00D9FF"
            />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-8">
              <a href="#tdtm" className="text-sm text-gray-300 hover:text-[#8B5CF6] transition-colors">TDTM Pixel</a>
              <a href="#ecosystem" className="text-sm text-gray-300 hover:text-[#0066FF] transition-colors">Ecosystem</a>
              <a href="#pricing" className="text-sm text-gray-300 hover:text-[#00D9FF] transition-colors">Pricing</a>
              <Button 
                className="bg-[#00D9FF] hover:bg-[#00A8CC] text-white px-6"
                style={{ fontWeight: 700 }}
                asChild
              >
                <a href="mailto:hello@tdtm.io?subject=Get%20Started">
                  Get Started
                </a>
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Animated background grid with parallax */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#00D9FF 1px, transparent 1px), linear-gradient(90deg, #00D9FF 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            opacity: 0.1
          }} />
        </motion.div>

        {/* Gradient orbs with parallax */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(0,217,255,0.15) 0%, transparent 70%)',
            y: useTransform(scrollY, [0, 500], [0, 100])
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(57,255,20,0.1) 0%, transparent 70%)',
            y: useTransform(scrollY, [0, 500], [0, -80])
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div 
          className="relative z-10 max-w-6xl mx-auto text-center"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1
            className="mb-6"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span style={{ fontWeight: 900 }}>Behind every great</span>
            <br />
            <span style={{ fontWeight: 900 }}>campaign is</span>
            <br />
            <span style={{ fontWeight: 300, color: '#00D9FF' }}>smarter data.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
            style={{ fontWeight: 300, lineHeight: '1.6' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Forget buying software. Get a <span className="text-[#00D9FF]" style={{ fontWeight: 700 }}>performance partner</span> powered by the <span className="text-[#00D9FF]" style={{ fontWeight: 700 }}>Core Data Asset</span>—<span className="text-white" style={{ fontWeight: 600 }}>500M+ living consumer profiles</span> that fuel our entire ecosystem of managed services, enterprise data infrastructure, and revenue-generating products.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg"
              className="bg-[#00D9FF] hover:bg-[#00A8CC] text-white px-8 py-6 text-lg group"
              style={{ fontWeight: 700 }}
              asChild
            >
              <a href="mailto:hello@tdtm.io?subject=Schedule%20a%20Demo">
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/5 px-8 py-6 text-lg"
              asChild
            >
              <a href="mailto:hello@tdtm.io?subject=Explore%20the%20Ecosystem">
                Explore The Ecosystem
              </a>
            </Button>
          </motion.div>

          {/* Floating metrics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-[#00D9FF]/50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
              >
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                  className="text-3xl md:text-4xl mb-2 block"
                  style={{ fontWeight: 900, color: '#00D9FF' }}
                />
                <div className="text-sm md:text-base mb-1" style={{ fontWeight: 600 }}>
                  {metric.label}
                </div>
                <div className="text-xs text-gray-500" style={{ fontWeight: 300 }}>
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Platform Integrations Marquee */}
      <LogoMarquee />

      {/* Talk Data to Me - Three Pillars Section */}
      <section id="tdtm" className="pt-20 pb-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#00D9FF]/5 to-black">
        {/* Animated tech grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#00D9FF 1px, transparent 1px), linear-gradient(90deg, #00D9FF 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-6">
              <span className="text-sm text-[#00D9FF]" style={{ fontWeight: 600 }}>THE TDTM DIFFERENCE</span>
            </div>

            <h2 className="mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: '1.1' }}>
              <span style={{ fontWeight: 300 }}>THREE WAYS TO WIN.</span>
              <br />
              <span className="text-[#00D9FF]">ONE UNFAIR ADVANTAGE.</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontWeight: 300, lineHeight: '1.7' }}>
              The <span className="text-[#0066FF]" style={{ fontWeight: 700 }}>Core Data Asset</span> powers everything: <span className="text-[#00D9FF]" style={{ fontWeight: 600 }}>expert execution</span> when you need hands-on help, <span className="text-[#00D9FF]" style={{ fontWeight: 600 }}>enterprise-grade infrastructure</span> when you need the foundation, and <span className="text-[#00D9FF]" style={{ fontWeight: 600 }}>revenue-ready products</span> when you need instant activation.
            </p>
          </motion.div>

          {/* Three Pillars Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {/* Pillar 1: Managed Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#00D9FF]/20 via-[#00D9FF]/5 to-transparent border border-[#00D9FF]/30 hover:border-[#00D9FF]/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#00D9FF]/20 flex items-center justify-center mb-6 group-hover:bg-[#00D9FF]/30 transition-colors">
                <Rocket className="w-8 h-8 text-[#00D9FF]" />
              </div>
              <h3 className="text-white mb-4" style={{ fontWeight: 900, fontSize: '1.75rem' }}>
                Managed Services
              </h3>
              <p className="text-white/70 mb-6" style={{ fontWeight: 300, lineHeight: '1.7' }}>
                Stop hiring agencies that don't care about your data. Get a performance partner who builds, launches, and optimizes campaigns while your data grows more valuable with every dollar spent.
              </p>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
                  <span style={{ fontWeight: 300 }}>We execute. You grow.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
                  <span style={{ fontWeight: 300 }}>Expert buyers, zero waste</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
                  <span style={{ fontWeight: 300 }}>Affiliates that actually perform</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
                  <span style={{ fontWeight: 300 }}>ROI tracked to the dollar</span>
                </li>
              </ul>
            </motion.div>

            {/* Pillar 2: Data Infrastructure - THE FOUNDATION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#0066FF]/30 via-[#0066FF]/10 to-transparent border-2 border-[#0066FF]/50 hover:border-[#0066FF]/70 transition-all group relative overflow-hidden"
            >
              {/* Pulsing background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 to-transparent"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* "Foundation" badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0066FF]/30 border border-[#0066FF]/50">
                <span className="text-xs text-[#0066FF]" style={{ fontWeight: 700 }}>THE FOUNDATION</span>
              </div>

              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 rounded-xl bg-[#0066FF]/30 flex items-center justify-center mb-6 group-hover:bg-[#0066FF]/40 transition-colors"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(0, 102, 255, 0.3)',
                      '0 0 30px rgba(0, 102, 255, 0.5)',
                      '0 0 20px rgba(0, 102, 255, 0.3)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Layers className="w-8 h-8 text-[#0066FF]" />
                </motion.div>
                <h3 className="text-white mb-2" style={{ fontWeight: 900, fontSize: '1.75rem' }}>
                  Core Data Asset
                </h3>
                <p className="text-[#0066FF] mb-4 text-sm" style={{ fontWeight: 700 }}>
                  The Living Foundation Powering Everything
                </p>
                <p className="text-white/80 mb-6" style={{ fontWeight: 300, lineHeight: '1.7' }}>
                  <span className="text-white" style={{ fontWeight: 600 }}>500M+ living consumer profiles</span> that turn anonymous traffic into known buyers, stale lists into revenue engines, and guesswork into precision targeting.
                </p>
                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                    <span style={{ fontWeight: 300 }}>Real-time identity resolution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                    <span style={{ fontWeight: 300 }}>Continuous data enrichment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                    <span style={{ fontWeight: 300 }}>Bidirectional product integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                    <span style={{ fontWeight: 300 }}>Self-improving intelligence</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Pillar 3: Product Ecosystem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/20 via-[#8B5CF6]/5 to-transparent border border-[#8B5CF6]/30 hover:border-[#8B5CF6]/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center mb-6 group-hover:bg-[#8B5CF6]/30 transition-colors">
                <Network className="w-8 h-8 text-[#8B5CF6]" />
              </div>
              <h3 className="text-white mb-4" style={{ fontWeight: 900, fontSize: '1.75rem' }}>
                Product Ecosystem
              </h3>
              <p className="text-white/70 mb-6" style={{ fontWeight: 300, lineHeight: '1.7' }}>
                Nine interconnected products all drawing from and enriching the <span className="text-[#8B5CF6]" style={{ fontWeight: 600 }}>Core Data Asset</span>—from identity resolution to direct mail to media buying.
              </p>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  <span style={{ fontWeight: 300 }}>8 integrated product lines</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  <span style={{ fontWeight: 300 }}>Bidirectional data enrichment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  <span style={{ fontWeight: 300 }}>Self-improving system</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  <span style={{ fontWeight: 300 }}>Continuous feedback loops</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Core Data Asset Ecosystem Visualization */}
          <motion.div
            id="ecosystem"
            className="mb-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 mb-6">
                <span className="text-sm text-[#0066FF]" style={{ fontWeight: 600 }}>THE CORE DATA ASSET</span>
              </div>
              <h3 className="mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                <span style={{ fontWeight: 300 }}>ONE LIVING</span>
                <br />
                <span className="text-[#0066FF]\">DATA ECOSYSTEM</span>
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12" style={{ fontWeight: 300, lineHeight: '1.7' }}>
                Every product, service, and campaign feeds into and draws from the <span className="text-[#0066FF]" style={{ fontWeight: 600 }}>Core Data Asset</span>—creating a self-improving system where your data gets smarter with every interaction.
              </p>
            </div>

            {/* Desktop: Full size */}
            <div className="hidden lg:block">
              <EcosystemVisualization 
                size="lg"
                coreColor="#0066FF"
                connectionColor="#00D9FF"
                showLabels={true}
                products={[
                  { name: "TDTM Pixel", icon: Fingerprint },
                  { name: "Direct Mail Responder", icon: Mail },
                  { name: "In-Market Signals", icon: Activity },
                  { name: "Keyword Audiences", icon: Search },
                  { name: "Database Activation", icon: Database },
                  { name: "Inbound Call Feed", icon: Phone },
                  { name: "Media Buying", icon: TrendingUp }
                ]}
              />
            </div>

            {/* Mobile & Tablet: Smaller size that fits */}
            <div className="block lg:hidden">
              <EcosystemVisualization 
                size="sm"
                coreColor="#0066FF"
                connectionColor="#00D9FF"
                showLabels={true}
                products={[
                  { name: "TDTM Pixel", icon: Fingerprint },
                  { name: "Direct Mail Responder", icon: Mail },
                  { name: "In-Market Signals", icon: Activity },
                  { name: "Keyword Audiences", icon: Search },
                  { name: "Database Activation", icon: Database },
                  { name: "Inbound Call Feed", icon: Phone },
                  { name: "Media Buying", icon: TrendingUp }
                ]}
              />
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm max-w-2xl mx-auto" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                <span className="text-[#0066FF]" style={{ fontWeight: 600 }}>Bidirectional enrichment:</span> Products don't just use the data—they continuously improve it. Every campaign, every visitor, every signal makes the entire ecosystem more valuable.
              </p>
            </div>
          </motion.div>

          {/* TDTM Pixel Showcase - Now positioned as ONE product within the ecosystem */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[#8B5CF6]/20 via-transparent to-[#00D9FF]/10 border border-[#8B5CF6]/30">
                {/* Pixel visualization */}
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Center core */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#00D9FF]"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        '0 0 20px rgba(139, 92, 246, 0.5)',
                        '0 0 40px rgba(139, 92, 246, 0.8)',
                        '0 0 20px rgba(139, 92, 246, 0.5)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Orbiting data points */}
                  {[0, 1, 2, 3, 4, 5].map((i) => {
                    const angle = (i * 360) / 6;
                    const radius = 120;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;

                    return (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          x: x,
                          y: y,
                        }}
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.3
                        }}
                      >
                        <div className="w-4 h-4 rounded-full bg-[#8B5CF6] shadow-lg shadow-[#8B5CF6]/50" />
                        
                        {/* Connection lines */}
                        <motion.div
                          className="absolute top-1/2 left-1/2 w-px origin-left bg-gradient-to-r from-[#8B5CF6]/50 to-transparent"
                          style={{
                            height: '2px',
                            width: `${radius}px`,
                            x: -x,
                            y: -y,
                          }}
                          animate={{
                            opacity: [0.3, 0.7, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      </motion.div>
                    );
                  })}

                  {/* Pulsing rings */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={`ring-${i}`}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8B5CF6]/30"
                      style={{
                        width: `${100 + i * 60}px`,
                        height: `${100 + i * 60}px`,
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Floating tech indicators */}
                <motion.div
                  className="absolute top-8 right-8 px-3 py-2 rounded-lg bg-black/40 backdrop-blur border border-[#8B5CF6]/30 flex items-center gap-2"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Activity className="w-4 h-4 text-[#39FF14]" />
                  <span className="text-xs text-white/80" style={{ fontWeight: 600 }}>Real-time</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-8 px-3 py-2 rounded-lg bg-black/40 backdrop-blur border border-[#8B5CF6]/30 flex items-center gap-2"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Eye className="w-4 h-4 text-[#00D9FF]" />
                  <span className="text-xs text-white/80" style={{ fontWeight: 600 }}>50% Match Rate</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 mb-6">
                <span className="text-sm text-[#8B5CF6]" style={{ fontWeight: 600 }}>ECOSYSTEM SPOTLIGHT</span>
              </div>

              <h2 className="mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                <span style={{ fontWeight: 300 }}>TDTM</span>
                <br />
                <span className="text-[#8B5CF6]">PIXEL</span>
              </h2>

              <p className="text-xl text-gray-400 mb-8" style={{ fontWeight: 300, lineHeight: '1.7' }}>
                The <span className="text-[#8B5CF6]" style={{ fontWeight: 600 }}>identity resolution pixel</span> at the heart of our ecosystem—transforming anonymous web traffic into verified identities and powering real-time data enrichment across all TDTM products and <span className="text-[#8B5CF6]" style={{ fontWeight: 600 }}>100+ platform integrations</span>.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { icon: Fingerprint, title: "Real-Time Identity Resolution", description: "Instantly match 50% of anonymous visitors to verified consumer profiles" },
                  { icon: Database, title: "Custom Audience Builder", description: "Tap into our entire data ecosystem for easy, streamlined data pulls and audience creation" },
                  { icon: RefreshCw, title: "100+ Platform Integrations", description: "Seamlessly activate audiences across Google, Meta, HubSpot, Salesforce, and more" },
                  { icon: Globe, title: "White Label Ready", description: "Available to white label for agencies—rebrand as your own platform" },
                  { icon: BarChart3, title: "Full-Funnel Attribution", description: "Track the complete customer journey from discovery to conversion" }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>{feature.title}</h4>
                      <p className="text-gray-400 text-sm" style={{ fontWeight: 300 }}>{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-6 group"
                  style={{ fontWeight: 700 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Deploy TDTM Pixel
                  <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/10 px-8 py-6"
                  onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore All Products
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pixel Dashboard Preview */}
      <PixelDashboard />

      {/* Section Divider */}
      <SectionDivider variant="dots" color="#0066FF" />

      {/* Audience Builder Preview */}
      <AudienceBuilder />

      {/* Section Divider */}
      <SectionDivider variant="wave" color="#8B5CF6" />

      {/* Client Logo Marquee */}
      <LogoMarquee />

      {/* Section Divider */}
      <SectionDivider variant="neural" color="#0066FF" />

      {/* Live Activity Feed */}
      <div className="max-w-5xl mx-auto px-6 -mt-16">
        <LiveActivityFeed />
      </div>

      {/* Core Data Asset Hero Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#0066FF]/10 to-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #0066FF 1px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '50px 50px']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          
          {/* Glowing orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.3) 0%, transparent 70%)' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(0,217,255,0.2) 0%, transparent 70%)' }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -50, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 mb-6">
              <span className="text-sm text-[#0066FF]" style={{ fontWeight: 600 }}>YOUR UNFAIR ADVANTAGE</span>
            </div>
            
            <h2 className="mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: '1.1' }}>
              THE ENGINE THAT
              <br />
              <span className="text-[#0066FF]" style={{ fontWeight: 300 }}>COMPOUNDS VALUE</span>
            </h2>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12" style={{ fontWeight: 400, lineHeight: '1.6' }}>
              While competitors rely on stale data and disconnected tools, you'll tap into the <span className="text-[#0066FF]" style={{ fontWeight: 700 }}>Core Data Asset</span>—a perpetual intelligence machine fueled by <span className="text-white" style={{ fontWeight: 600 }}>500M+ living consumer profiles</span> that grows richer with every click, call, and conversion. <span className="text-[#00D9FF]" style={{ fontWeight: 600 }}>Your campaigns don't just run. They multiply.</span>
            </p>
          </motion.div>

          {/* Core Asset Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Compounds While You Sleep",
                description: "Every campaign, call, and customer interaction feeds back into the Core. Your data doesn't age—it appreciates. Wake up to enrichment that didn't exist yesterday.",
                icon: RefreshCw,
                color: "#0066FF"
              },
              {
                title: "Know Everyone, Everywhere",
                description: "500M+ people unified across every channel—email, mobile, mail, web. Stop chasing ghosts. Start activating real humans with real buying power.",
                icon: Fingerprint,
                color: "#00D9FF"
              },
              {
                title: "Strike When They're Ready",
                description: "Real-time purchase intent, in-market signals, behavioral triggers. Reach prospects at the exact moment they're researching solutions like yours.",
                icon: Activity,
                color: "#5CE5FF"
              }
            ].map((prop, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl bg-black/60 backdrop-blur border border-[#0066FF]/30 hover:border-[#0066FF]/60 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0066FF]/20 to-[#00D9FF]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <prop.icon className="w-8 h-8" style={{ color: prop.color }} />
                </div>
                <h3 className="text-white mb-3" style={{ fontWeight: 700, fontSize: '1.25rem' }}>
                  {prop.title}
                </h3>
                <p className="text-gray-400" style={{ fontWeight: 300, lineHeight: '1.7' }}>
                  {prop.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* The Differentiator */}
          <motion.div
            className="p-12 rounded-3xl bg-gradient-to-br from-[#0066FF]/20 via-[#0066FF]/5 to-transparent border border-[#0066FF]/40 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/20 rounded-full blur-3xl" />
            <div className="relative z-10 text-center">
              <Layers className="w-20 h-20 text-[#0066FF] mx-auto mb-6" />
              <h3 className="mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
                STOP FIGHTING WITH
                <br />
                <span className="text-[#0066FF]">DISCONNECTED TOOLS</span>
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontWeight: 400, lineHeight: '1.7' }}>
                Your competitors juggle 12 different platforms that never sync. You get <span className="text-white" style={{ fontWeight: 600 }}>one unified intelligence layer</span> that connects your pixel, your CRM, your ads, your mail, and your phone calls into a <span className="text-[#0066FF]" style={{ fontWeight: 700 }}>self-enriching performance loop.</span> Run one campaign. Enrich nine products. <span className="text-[#00D9FF]" style={{ fontWeight: 700 }}>That's compound marketing ROI.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Portfolio Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* All Products by Category */}
          <motion.div
            className="mt-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h3 className="mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
                COMPLETE PRODUCT
                <br />
                <span className="text-[#0066FF]" style={{ fontWeight: 300 }}>PORTFOLIO</span>
              </h3>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
                Nine fully-integrated product lines powered by our Core Data Asset—driving precision, performance, and profitability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* In-Market Signals */}
              <motion.div
                className="p-6 rounded-2xl bg-black/40 backdrop-blur border border-[#39FF14]/20 hover:border-[#39FF14]/50 transition-all group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(57, 255, 20, 0.3)' }}
                onHoverStart={() => setExpandedCard(null)}
                onHoverEnd={() => setExpandedCard(null)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: expandedCard === null ? 0 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#39FF14]/20 transition-colors"
                  >
                    <Activity className="w-6 h-6 text-[#39FF14]" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                      In-Market Signals
                    </h4>
                    <p className="text-white/60 text-sm mb-3" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                      Capture high-intent prospects at peak buying moments with real-time behavioral intelligence
                    </p>
                    <ul className="space-y-2 text-sm text-white/50">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#39FF14]" />
                        <span style={{ fontWeight: 300 }}>Real-time intent tracking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#39FF14]" />
                        <span style={{ fontWeight: 300 }}>Behavioral pattern analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#39FF14]" />
                        <span style={{ fontWeight: 300 }}>Cross-product signal enrichment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Direct Mail Responder */}
              <motion.div
                className="p-6 rounded-2xl bg-black/40 backdrop-blur border border-[#0066FF]/20 hover:border-[#0066FF]/50 transition-all group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 102, 255, 0.3)' }}
                onHoverStart={() => setExpandedCard(0)}
                onHoverEnd={() => setExpandedCard(null)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: expandedCard === 0 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066FF]/20 transition-colors"
                    animate={{ scale: expandedCard === 0 ? 1.1 : 1 }}
                  >
                    <Mail className="w-6 h-6 text-[#0066FF]" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                      Direct Mail Responder
                    </h4>
                    <p className="text-white/60 text-sm mb-3" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                      Convert offline interest into online revenue—target warm prospects who've engaged with direct mail
                    </p>
                    <motion.ul 
                      className="space-y-2 text-sm text-white/50"
                      animate={{ height: expandedCard === 0 ? 'auto' : 'auto' }}
                    >
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Mail responder data feeds</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Multi-channel follow-up</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Real-time engagement tracking</span>
                      </li>
                      {expandedCard === 0 && (
                        <motion.li 
                          className="flex items-center gap-2 pt-2 border-t border-[#0066FF]/20"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4 text-[#0066FF]" />
                          <span className="text-[#0066FF]" style={{ fontWeight: 600 }}>
                            Click to learn more →
                          </span>
                        </motion.li>
                      )}
                    </motion.ul>
                  </div>
                </div>
              </motion.div>

              {/* Aged Leads Marketplace */}
              <motion.div
                className="p-6 rounded-2xl bg-black/40 backdrop-blur border border-[#0066FF]/20 hover:border-[#0066FF]/50 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066FF]/20 transition-colors">
                    <Users className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                      Aged Leads Marketplace
                    </h4>
                    <p className="text-[#0066FF] text-xs mb-2" style={{ fontWeight: 600 }}>leads.tdtm.io</p>
                    <p className="text-white/60 text-sm mb-3" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                      Monetize dormant leads with surgical precision—reactivate aged inventory when buyers show fresh intent
                    </p>
                    <ul className="space-y-2 text-sm text-white/50">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Lead reactivation campaigns</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>In-market scoring & prioritization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>API & CRM integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Inbound Call Feed */}
              <motion.div
                className="p-6 rounded-2xl bg-black/40 backdrop-blur border border-[#0066FF]/20 hover:border-[#0066FF]/50 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066FF]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                      Inbound Call Feed
                    </h4>
                    <p className="text-white/60 text-sm mb-3" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                      Turn every inbound call into actionable intelligence with real-time caller identification and attribution
                    </p>
                    <ul className="space-y-2 text-sm text-white/50">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Real-time call tracking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Caller identity matching</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Multi-touch attribution</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Database Activation */}
              <motion.div
                className="p-6 rounded-2xl bg-black/40 backdrop-blur border border-[#0066FF]/20 hover:border-[#0066FF]/50 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066FF]/20 transition-colors">
                    <Database className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                      Database Activation
                    </h4>
                    <p className="text-white/60 text-sm mb-3" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                      Unlock hidden revenue in your existing database—activate dormant contacts with omnichannel precision
                    </p>
                    <ul className="space-y-2 text-sm text-white/50">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Email, SMS, and voice campaigns</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Data hygiene & enrichment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Omnichannel orchestration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Website ID Resolution */}
              <motion.div
                className="p-6 rounded-2xl bg-black/40 backdrop-blur border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B5CF6]/20 transition-colors">
                    <Fingerprint className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                      Website ID Resolution
                    </h4>
                    <p className="text-[#8B5CF6] text-xs mb-2" style={{ fontWeight: 600 }}>app.id.tdtm.io</p>
                    <p className="text-white/60 text-sm mb-3" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                      TDTM Pixel: De-anonymize your website traffic—know who's browsing before they convert
                    </p>
                    <ul className="space-y-2 text-sm text-white/50">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#8B5CF6]" />
                        <span style={{ fontWeight: 300 }}>Real-time visitor identification</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#8B5CF6]" />
                        <span style={{ fontWeight: 300 }}>98%+ identity match rate</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#8B5CF6]" />
                        <span style={{ fontWeight: 300 }}>Cross-device tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Media Buying */}
              <motion.div
                className="p-6 rounded-2xl bg-black/40 backdrop-blur border border-[#0066FF]/20 hover:border-[#0066FF]/50 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066FF]/20 transition-colors">
                    <TrendingUp className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                      Media Buying
                    </h4>
                    <p className="text-white/60 text-sm mb-3" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                      Maximize ROAS with first-party data-powered media buying across display, social, and programmatic
                    </p>
                    <ul className="space-y-2 text-sm text-white/50">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Audience-first buying strategy</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Native, display & video ads</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Full-funnel optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Keyword Custom Audience */}
              <motion.div
                className="p-6 rounded-2xl bg-black/40 backdrop-blur border border-[#0066FF]/20 hover:border-[#0066FF]/50 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066FF]/20 transition-colors">
                    <Search className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                      Keyword Custom Audience
                    </h4>
                    <p className="text-white/60 text-sm mb-3" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                      Target buyers at the moment of intent—build custom audiences from search behavior and keyword signals
                    </p>
                    <ul className="space-y-2 text-sm text-white/50">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Intent-based segmentation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Search history targeting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Custom audience export</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* TOF Media - Marketing Execution Arm */}
              <motion.div
                className="p-6 rounded-2xl bg-black/40 backdrop-blur border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/10 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D9FF]/20 transition-colors">
                    <Rocket className="w-6 h-6 text-[#00D9FF]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                      TOF Media
                    </h4>
                    <p className="text-[#00D9FF] text-xs mb-2" style={{ fontWeight: 600 }}>Full-Service Marketing Arm</p>
                    <p className="text-white/60 text-sm mb-3" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                      End-to-end campaign execution—from strategy to creative to optimization, powered by TDTM data
                    </p>
                    <ul className="space-y-2 text-sm text-white/50">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#00D9FF]" />
                        <span style={{ fontWeight: 300 }}>Integrated campaign management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#00D9FF]" />
                        <span style={{ fontWeight: 300 }}>Creative production & testing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#00D9FF]" />
                        <span style={{ fontWeight: 300 }}>Performance optimization at scale</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bidirectional Flow Explanation */}
          <motion.div
            className="mt-32 p-12 rounded-3xl bg-gradient-to-br from-[#0066FF]/10 via-transparent to-[#00D9FF]/10 border border-[#0066FF]/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h3 className="mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
                BIDIRECTIONAL
                <br />
                <span className="text-[#0066FF]" style={{ fontWeight: 300 }}>DATA FLOW</span>
              </h3>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto" style={{ fontWeight: 300, lineHeight: '1.7' }}>
                Our ecosystem creates a continuous feedback loop—enriching products with core data while capturing new market signals to enhance the core
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Outbound Flow */}
              <motion.div
                className="p-6 rounded-2xl bg-black/40 backdrop-blur border border-[#0066FF]/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/20 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                      Core → Products
                    </h4>
                    <p className="text-[#0066FF] text-sm mb-3" style={{ fontWeight: 600 }}>
                      Enrichment Flow (Blue Particles)
                    </p>
                    <p className="text-white/60 text-sm mb-3" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                      The Core Data Asset enriches every product with real-time in-market signals, verified consumer data, and intent intelligence
                    </p>
                    <ul className="space-y-2 text-sm text-white/50">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Identity resolution data</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Behavioral insights</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0066FF]" />
                        <span style={{ fontWeight: 300 }}>Intent signals & scoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Inbound Flow */}
              <motion.div
                className="p-6 rounded-2xl bg-black/40 backdrop-blur border border-[#00D9FF]/30"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/20 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-6 h-6 text-[#00D9FF]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                      Products → Core
                    </h4>
                    <p className="text-[#00D9FF] text-sm mb-3" style={{ fontWeight: 600 }}>
                      Signal Flow (Cyan Particles)
                    </p>
                    <p className="text-white/60 text-sm mb-3" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                      Each product feeds performance data, engagement metrics, and new market signals back into the Core, continuously improving the entire ecosystem
                    </p>
                    <ul className="space-y-2 text-sm text-white/50">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#00D9FF]" />
                        <span style={{ fontWeight: 300 }}>Campaign performance data</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#00D9FF]" />
                        <span style={{ fontWeight: 300 }}>New consumer behaviors</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#00D9FF]" />
                        <span style={{ fontWeight: 300 }}>Real-time market signals</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              {
                title: "Self-Enriching System",
                description: "Every interaction makes the data richer—products feed insights back to the core, creating continuous enhancement",
                icon: RefreshCw
              },
              {
                title: "Infinite Performance",
                description: "Bidirectional data flow means products get sharper while the core gets richer with every campaign execution",
                icon: Zap
              },
              {
                title: "Complete Loop Closure",
                description: "From enrichment to execution to feedback—track how data flows through the entire ecosystem and back",
                icon: Activity
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl bg-black/40 backdrop-blur border border-[#0066FF]/20 hover:border-[#0066FF]/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-[#0066FF]" />
                </div>
                <h3 className="text-white mb-3" style={{ fontWeight: 700, fontSize: '1.25rem' }}>
                  {benefit.title}
                </h3>
                <p className="text-white/60" style={{ fontWeight: 300, lineHeight: '1.7' }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="wave" color="#00D9FF" />

      {/* ROI Calculator */}
      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ROICalculator />
          </motion.div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-[#00D9FF]/5 to-black relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-6">
              <span className="text-sm text-[#00D9FF]" style={{ fontWeight: 600 }}>THE DIFFERENCE</span>
            </div>
            <h2 className="mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
              WHY TALK DATA TO ME
              <br />
              <span className="text-[#00D9FF]" style={{ fontWeight: 300 }}>OUTPERFORMS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
              See how our identity resolution platform compares to traditional visitor tracking solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ComparisonTable />
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="dots" color="#39FF14" />

      {/* Results Section */}
      <section id="results" className="py-32 px-6 bg-gradient-to-b from-black via-[#00D9FF]/5 to-black relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 mb-6">
              <span className="text-sm text-[#39FF14]" style={{ fontWeight: 600 }}>CLIENT SUCCESS</span>
            </div>
            <h2 className="mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
              PROVEN
              <br />
              <span className="text-[#39FF14]" style={{ fontWeight: 300 }}>PERFORMANCE</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Card className="p-8 bg-black/50 backdrop-blur border-white/10 hover:border-white/30 transition-all group h-full">
                  <div 
                    className="w-full h-2 rounded-full mb-6"
                    style={{ background: `linear-gradient(90deg, ${study.color}, transparent)` }}
                  />
                  <div className="text-sm text-gray-500 mb-2" style={{ fontWeight: 300 }}>
                    {study.industry}
                  </div>
                  <h3 className="mb-4" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                    {study.client}
                  </h3>
                  <div 
                    className="text-3xl mb-4" 
                    style={{ fontWeight: 900, color: study.color }}
                  >
                    {study.result}
                  </div>
                  <p className="text-gray-400" style={{ fontWeight: 300 }}>
                    {study.metric}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-[#8B5CF6]/5 to-black relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 mb-6">
              <span className="text-sm text-[#8B5CF6]" style={{ fontWeight: 600 }}>REAL RESULTS</span>
            </div>
            <h2 className="mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
              WHAT HAPPENS WHEN
              <br />
              <span className="text-[#8B5CF6]" style={{ fontWeight: 300 }}>DATA COMPOUNDS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#00D9FF]/10 via-black to-black border border-[#00D9FF]/30 relative overflow-hidden group hover:border-[#00D9FF]/50 transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D9FF]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#00D9FF] text-[#00D9FF]" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 text-lg" style={{ fontWeight: 300, lineHeight: '1.7' }}>
                  "We went from 12% match rate on our pixel to <span className="text-white" style={{ fontWeight: 600 }}>47% in 60 days</span>. The Core Data Asset turned our anonymous traffic into an actual revenue channel."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#0066FF] flex items-center justify-center">
                    <span className="text-white" style={{ fontWeight: 700 }}>SC</span>
                  </div>
                  <div>
                    <div className="text-white" style={{ fontWeight: 600 }}>Sarah Chen</div>
                    <div className="text-gray-500 text-sm" style={{ fontWeight: 300 }}>VP Marketing, E-commerce Brand</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/10 via-black to-black border border-[#8B5CF6]/30 relative overflow-hidden group hover:border-[#8B5CF6]/50 transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#8B5CF6] text-[#8B5CF6]" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 text-lg" style={{ fontWeight: 300, lineHeight: '1.7' }}>
                  "Stopped paying for three separate vendors. Now one ecosystem handles pixel, audiences, and activation for <span className="text-white" style={{ fontWeight: 600 }}>less than half the cost</span>. And the data actually talks to itself."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#FF006E] flex items-center justify-center">
                    <span className="text-white" style={{ fontWeight: 700 }}>MR</span>
                  </div>
                  <div>
                    <div className="text-white" style={{ fontWeight: 600 }}>Marcus Rodriguez</div>
                    <div className="text-gray-500 text-sm" style={{ fontWeight: 300 }}>Head of Growth, SaaS Platform</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#39FF14]/10 via-black to-black border border-[#39FF14]/30 relative overflow-hidden group hover:border-[#39FF14]/50 transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#39FF14]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#39FF14] text-[#39FF14]" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 text-lg" style={{ fontWeight: 300, lineHeight: '1.7' }}>
                  "Finally, a partner that doesn't just sell software. They run campaigns, manage data, and every product genuinely makes the others better. <span className="text-white" style={{ fontWeight: 600 }}>Compound ROI is real.</span>"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39FF14] to-[#00D9FF] flex items-center justify-center">
                    <span className="text-black" style={{ fontWeight: 700 }}>JP</span>
                  </div>
                  <div>
                    <div className="text-white" style={{ fontWeight: 600 }}>Jennifer Park</div>
                    <div className="text-gray-500 text-sm" style={{ fontWeight: 300 }}>CMO, Performance Marketing Agency</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-12 rounded-2xl bg-gradient-to-r from-[#0066FF]/10 via-[#8B5CF6]/10 to-[#FF006E]/10 border border-white/10"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2" style={{ fontWeight: 900, color: '#00D9FF' }}>425%</div>
              <div className="text-gray-400 text-sm" style={{ fontWeight: 300 }}>Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2" style={{ fontWeight: 900, color: '#8B5CF6' }}>50%</div>
              <div className="text-gray-400 text-sm" style={{ fontWeight: 300 }}>Identity Match Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2" style={{ fontWeight: 900, color: '#39FF14' }}>3x</div>
              <div className="text-gray-400 text-sm" style={{ fontWeight: 300 }}>Campaign Velocity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2" style={{ fontWeight: 900, color: '#FF006E' }}>60d</div>
              <div className="text-gray-400 text-sm" style={{ fontWeight: 300 }}>Time to Full Value</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="neural" color="#FF006E" />

      {/* Trust & Security Badges */}
      <section className="py-16 px-6 bg-gradient-to-b from-black via-white/5 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm text-gray-400 mb-8" style={{ fontWeight: 600, letterSpacing: '0.1em' }}>
              TRUSTED BY LEADING B2B COMPANIES
            </h3>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: Shield, label: "Enterprise Security", sublabel: "SOC 2 Type II" },
              { icon: Lock, label: "GDPR Compliant", sublabel: "Data protection" },
              { icon: Award, label: "Identity Certified", sublabel: "LiveRamp partner" },
              { icon: Database, label: "500M+ Records", sublabel: "Monthly reach" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-[#00D9FF]" />
                </div>
                <div className="text-sm text-white mb-1" style={{ fontWeight: 600 }}>
                  {item.label}
                </div>
                <div className="text-xs text-gray-500" style={{ fontWeight: 300 }}>
                  {item.sublabel}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Section Divider */}
      <SectionDivider variant="dots" color="#8B5CF6" />

      {/* FAQ Section */}
      <FAQSection />

      {/* Section Divider */}
      <SectionDivider variant="neural" color="#00D9FF" />

      {/* Contact / Demo Booking Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#00D9FF]/5 to-black">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #00D9FF 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-6">
              <span className="text-sm text-[#00D9FF]" style={{ fontWeight: 600 }}>GET STARTED</span>
            </div>

            <h2 className="mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: '1.1' }}>
              SEE TDTM
              <br />
              <span className="text-[#00D9FF]" style={{ fontWeight: 300 }}>IN ACTION</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontWeight: 300, lineHeight: '1.7' }}>
              Schedule a personalized demo and discover how TDTM can transform your top-of-funnel data into measurable performance.
            </p>
          </motion.div>

          <motion.div
            className="p-12 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-white/5 border border-white/10 backdrop-blur"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DemoBookingForm />
          </motion.div>

          {/* Value Props Under Form */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { icon: Zap, title: "Fast Setup", description: "Deploy in <48 hours" },
              { icon: Users, title: "Expert Support", description: "Dedicated success team" },
              { icon: Shield, title: "No Risk", description: "Custom pricing, no contracts" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#00D9FF]" />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>{item.title}</h4>
                  <p className="text-sm text-gray-400" style={{ fontWeight: 300 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="cursor-pointer hover:opacity-80 transition-opacity mb-6 inline-block"
              >
                <Logo 
                  variant="velocity" 
                  size="sm" 
                  showText={true}
                  companyName="TALK DATA TO ME"
                  layout="horizontal"
                  useColor={true}
                  customColor="#00D9FF"
                />
              </button>
              <p className="text-gray-500 max-w-md" style={{ fontWeight: 300 }}>
                Identity resolution, audience building, and data activation services for brands, agencies, and marketers who want to turn anonymous traffic into revenue.
              </p>
            </div>
            <div>
              <h4 className="mb-4" style={{ fontWeight: 600 }}>Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-[#00D9FF] transition-colors" style={{ fontWeight: 300 }}>About</a></li>
                <li><a href="#tdtm" className="hover:text-[#00D9FF] transition-colors" style={{ fontWeight: 300 }}>Solutions</a></li>
                <li><a href="#results" className="hover:text-[#00D9FF] transition-colors" style={{ fontWeight: 300 }}>Case Studies</a></li>
                <li><a href="#contact" className="hover:text-[#00D9FF] transition-colors" style={{ fontWeight: 300 }}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4" style={{ fontWeight: 600 }}>Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-[#00D9FF] transition-colors" style={{ fontWeight: 300 }}>Blog</a></li>
                <li><a href="#" className="hover:text-[#00D9FF] transition-colors" style={{ fontWeight: 300 }}>Insights</a></li>
                <li><a href="#" className="hover:text-[#00D9FF] transition-colors" style={{ fontWeight: 300 }}>Careers</a></li>
                <li><a href="#" className="hover:text-[#00D9FF] transition-colors" style={{ fontWeight: 300 }}>Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm" style={{ fontWeight: 300 }}>
              © 2025 Talk Data to Me. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="/privacy" className="hover:text-[#00D9FF] transition-colors" style={{ fontWeight: 300 }}>Privacy Policy</a>
              <a href="/terms" className="hover:text-[#00D9FF] transition-colors" style={{ fontWeight: 300 }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />

      {/* Toast Notifications */}
      <SonnerToaster position="bottom-right" theme="dark" />
    </div>
  );
}
