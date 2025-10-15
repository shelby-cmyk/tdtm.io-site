import { motion } from "motion/react";
import { TrendingUp, Users, Globe, Eye, ArrowUp, ArrowDown } from "lucide-react";
import { Card } from "./ui/card";
import { useState } from "react";

export function PixelDashboard() {
  const [selectedMetric, setSelectedMetric] = useState<'visitors' | 'identified'>('identified');

  // Sample data points for the graph
  const dataPoints = [
    { date: '07 Oct', visitors: 145, identified: 72 },
    { date: '08 Oct', visitors: 320, identified: 156 },
    { date: '09 Oct', visitors: 497, identified: 245 },
    { date: '10 Oct', visitors: 650, identified: 325 },
    { date: '11 Oct', visitors: 820, identified: 412 },
    { date: '12 Oct', visitors: 1013, identified: 497 },
  ];

  const topPages = [
    { url: '/homepage', visits: 990 },
    { url: '/product-laptop', visits: 15 },
    { url: '/faq', visits: 4 },
    { url: '/referrals', visits: 2 },
    { url: '/about-us', visits: 2 },
  ];

  const topSources = [
    { source: 'rh.facebook.com', visits: 844 },
    { source: 'Organic', visits: 91 },
    { source: 't.tiktokcdn.com', visits: 25 },
    { source: 'generic.com', visits: 10 },
    { source: 'dhrupo.com', visits: 9 },
  ];

  const topCities = [
    { city: 'Columbia', visits: 12 },
    { city: 'Chicago', visits: 8 },
    { city: 'Louisville', visits: 7 },
    { city: 'Houston', visits: 6 },
    { city: 'Las Vegas', visits: 6 },
  ];

  const maxValue = Math.max(...dataPoints.map(d => d.visitors));

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black via-[#0066FF]/5 to-black relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 mb-6">
            <span className="text-sm text-[#0066FF]" style={{ fontWeight: 600 }}>PIXEL DASHBOARD</span>
          </div>
          <h2 className="mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
            REAL-TIME
            <br />
            <span className="text-[#0066FF]" style={{ fontWeight: 300 }}>VISITOR INTELLIGENCE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontWeight: 300, lineHeight: '1.7' }}>
            See exactly who's on your site with our identity resolution dashboard. Track visitors, identify leads, and activate data—all in real-time.
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-[#1a1a2e]/95 to-[#0f0f23]/95 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Dashboard Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF]/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-[#0066FF]" />
              </div>
              <div>
                <h3 className="text-white" style={{ fontWeight: 700 }}>Visitor Identification</h3>
                <p className="text-xs text-gray-500">Live analytics dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/30">
                <span className="text-xs text-[#39FF14]" style={{ fontWeight: 600 }}>● LIVE</span>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 p-6">
            <motion.div
              className="p-6 bg-[#1a1a2e] rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500" style={{ fontWeight: 600 }}>TOTAL VISITORS</span>
                <Users className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl text-white" style={{ fontWeight: 900 }}>1,689</span>
                <div className="flex items-center gap-1 text-[#39FF14] text-xs">
                  <ArrowUp className="w-3 h-3" />
                  <span style={{ fontWeight: 600 }}>12%</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 bg-[#1a1a2e] rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500" style={{ fontWeight: 600 }}>VISITORS IDENTIFIED</span>
                <TrendingUp className="w-4 h-4 text-[#0066FF]" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl text-[#0066FF]" style={{ fontWeight: 900 }}>1,013</span>
                <div className="flex items-center gap-1 text-[#39FF14] text-xs">
                  <ArrowUp className="w-3 h-3" />
                  <span style={{ fontWeight: 600 }}>18%</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 bg-[#1a1a2e] rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500" style={{ fontWeight: 600 }}>MATCH RATE</span>
                <Globe className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl text-white" style={{ fontWeight: 900 }}>60%</span>
                <div className="flex items-center gap-1 text-[#39FF14] text-xs">
                  <ArrowUp className="w-3 h-3" />
                  <span style={{ fontWeight: 600 }}>5%</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 bg-[#1a1a2e] rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500" style={{ fontWeight: 600 }}>NEW LEADS</span>
                <Eye className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl text-white" style={{ fontWeight: 900 }}>847</span>
                <div className="flex items-center gap-1 text-[#39FF14] text-xs">
                  <ArrowUp className="w-3 h-3" />
                  <span style={{ fontWeight: 600 }}>22%</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Chart Section */}
          <div className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setSelectedMetric('visitors')}
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    selectedMetric === 'visitors' ? 'text-white' : 'text-gray-500'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  <div className="w-3 h-3 rounded-full bg-gray-500" />
                  Visitors
                </button>
                <button
                  onClick={() => setSelectedMetric('identified')}
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    selectedMetric === 'identified' ? 'text-[#0066FF]' : 'text-gray-500'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  <div className="w-3 h-3 rounded-full bg-[#0066FF]" />
                  Visitors Identified
                </button>
              </div>
            </div>

            {/* Chart */}
            <div className="relative h-64">
              <svg className="w-full h-full" viewBox="0 0 800 250" preserveAspectRatio="none">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 62.5}
                    x2="800"
                    y2={i * 62.5}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                  />
                ))}

                {/* Visitors line */}
                <motion.polyline
                  points={dataPoints
                    .map((d, i) => `${(i * 800) / (dataPoints.length - 1)},${250 - (d.visitors / maxValue) * 200}`)
                    .join(' ')}
                  fill="none"
                  stroke="rgba(100,100,100,0.5)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />

                {/* Identified line */}
                <motion.polyline
                  points={dataPoints
                    .map((d, i) => `${(i * 800) / (dataPoints.length - 1)},${250 - (d.identified / maxValue) * 200}`)
                    .join(' ')}
                  fill="none"
                  stroke="#0066FF"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                />

                {/* Data points */}
                {dataPoints.map((d, i) => (
                  <motion.circle
                    key={i}
                    cx={(i * 800) / (dataPoints.length - 1)}
                    cy={250 - (d.identified / maxValue) * 200}
                    r="4"
                    fill="#0066FF"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    className="cursor-pointer"
                    whileHover={{ scale: 1.5 }}
                  />
                ))}
              </svg>

              {/* X-axis labels */}
              <div className="flex justify-between mt-2 px-2">
                {dataPoints.map((d, i) => (
                  <span key={i} className="text-xs text-gray-600" style={{ fontWeight: 500 }}>
                    {d.date}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Data Tables */}
          <div className="grid md:grid-cols-3 gap-px bg-white/5 p-6">
            {/* Top Pages */}
            <div className="bg-[#1a1a2e] rounded-xl p-4">
              <h4 className="text-sm text-[#0066FF] mb-4" style={{ fontWeight: 700 }}>Top Pages</h4>
              <div className="space-y-3">
                {topPages.map((page, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 truncate flex-1" style={{ fontWeight: 300 }}>
                      {page.url}
                    </span>
                    <span className="text-white ml-4" style={{ fontWeight: 600 }}>{page.visits}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Sources */}
            <div className="bg-[#1a1a2e] rounded-xl p-4">
              <h4 className="text-sm text-[#0066FF] mb-4" style={{ fontWeight: 700 }}>Top Sources</h4>
              <div className="space-y-3">
                {topSources.map((source, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 truncate flex-1" style={{ fontWeight: 300 }}>
                      {source.source}
                    </span>
                    <span className="text-white ml-4" style={{ fontWeight: 600 }}>{source.visits}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Cities */}
            <div className="bg-[#1a1a2e] rounded-xl p-4">
              <h4 className="text-sm text-[#0066FF] mb-4" style={{ fontWeight: 700 }}>Top Cities</h4>
              <div className="space-y-3">
                {topCities.map((city, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 truncate flex-1" style={{ fontWeight: 300 }}>
                      {city.city}
                    </span>
                    <span className="text-white ml-4" style={{ fontWeight: 600 }}>{city.visits}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="p-6 bg-gradient-to-r from-[#0066FF]/10 to-[#00D9FF]/10 border-t border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF]/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-[#0066FF]" />
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-2" style={{ fontWeight: 700 }}>
                  Electra has successfully identified over 60% of its visitors!
                </h4>
                <p className="text-sm text-gray-400" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                  Between October 7th and 16th, 2025, Electra executed smart campaigns, with 1,013 of those being successfully identified. This identification rate of 60% is impressive, enabling targeted engagement and personalized experiences for the majority of visitors, because identification strategy presents great potential for further optimization and personalized marketing approaches.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-4" style={{ fontWeight: 300 }}>
            See your own data in real-time with the TDTM pixel
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white transition-colors"
            style={{ fontWeight: 700 }}
          >
            Deploy Your Pixel
          </button>
        </motion.div>
      </div>
    </section>
  );
}
