import { motion } from "motion/react";
import { Users, Download, Filter, Search, Database, TrendingUp, Eye, Code, Target } from "lucide-react";
import { useState } from "react";

export function AudienceBuilder() {
  const [selectedSegment, setSelectedSegment] = useState<string>("all");

  // Sample audience data (anonymized)
  const audienceData = [
    {
      id: 1,
      segment: "Enterprise",
      industry: "Technology",
      company: "Tech Corp",
      title: "VP Marketing",
      interests: "Marketing Automation",
      city: "San Francisco",
      state: "CA",
      zip: "94102",
      country: "USA",
      revenue: "$1M-$5M",
      employees: "50-200",
      engagement: "High"
    },
    {
      id: 2,
      segment: "Enterprise",
      industry: "Finance",
      company: "Finance Inc",
      title: "Director Sales",
      interests: "Lead Generation",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
      revenue: "$5M-$10M",
      employees: "200-500",
      engagement: "High"
    },
    {
      id: 3,
      segment: "Mid-Market",
      industry: "Healthcare",
      company: "Health Solutions",
      title: "Marketing Manager",
      interests: "Data Analytics",
      city: "Chicago",
      state: "IL",
      zip: "60601",
      country: "USA",
      revenue: "$500K-$1M",
      employees: "20-50",
      engagement: "Medium"
    },
    {
      id: 4,
      segment: "Mid-Market",
      industry: "Retail",
      company: "Retail Group",
      title: "Growth Lead",
      interests: "E-commerce",
      city: "Austin",
      state: "TX",
      zip: "78701",
      country: "USA",
      revenue: "$1M-$5M",
      employees: "50-200",
      engagement: "High"
    },
    {
      id: 5,
      segment: "SMB",
      industry: "SaaS",
      company: "Cloud Services",
      title: "Founder",
      interests: "Performance Marketing",
      city: "Seattle",
      state: "WA",
      zip: "98101",
      country: "USA",
      revenue: "$100K-$500K",
      employees: "10-20",
      engagement: "Medium"
    },
    {
      id: 6,
      segment: "Enterprise",
      industry: "Manufacturing",
      company: "Industrial Corp",
      title: "CMO",
      interests: "B2B Marketing",
      city: "Detroit",
      state: "MI",
      zip: "48201",
      country: "USA",
      revenue: "$10M+",
      employees: "500+",
      engagement: "High"
    },
    {
      id: 7,
      segment: "Mid-Market",
      industry: "Consulting",
      company: "Strategy Partners",
      title: "Partner",
      interests: "Business Intelligence",
      city: "Boston",
      state: "MA",
      zip: "02101",
      country: "USA",
      revenue: "$1M-$5M",
      employees: "20-50",
      engagement: "Medium"
    },
  ];

  const segments = [
    { name: "All Contacts", count: 4676, color: "#0066FF" },
    { name: "Enterprise", count: 1523, color: "#8B5CF6" },
    { name: "Mid-Market", count: 1891, color: "#00D9FF" },
    { name: "SMB", count: 1262, color: "#39FF14" },
  ];

  const stats = [
    { label: "Total Records", value: "4,676", trend: "+12%", icon: Database },
    { label: "Active Segments", value: "23", trend: "+5", icon: Target },
    { label: "Match Rate", value: "62%", trend: "+8%", icon: TrendingUp },
    { label: "Platforms Synced", value: "12", trend: "+2", icon: Eye },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black via-[#8B5CF6]/5 to-black relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 mb-6">
            <span className="text-sm text-[#8B5CF6]" style={{ fontWeight: 600 }}>AUDIENCE BUILDER</span>
          </div>
          <h2 className="mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
            BUILD & ACTIVATE
            <br />
            <span className="text-[#8B5CF6]" style={{ fontWeight: 300 }}>CUSTOM AUDIENCES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontWeight: 300, lineHeight: '1.7' }}>
            Tap into our entire data ecosystem with SQL queries or visual filters. Build precise audiences and sync them to 100+ platforms instantly.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a2e]/95 to-[#0f0f23]/95 backdrop-blur-xl border border-white/10"
              whileHover={{ scale: 1.02, borderColor: 'rgba(139, 92, 246, 0.5)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="w-5 h-5 text-[#8B5CF6]" />
                <span className="text-xs text-[#39FF14]" style={{ fontWeight: 600 }}>
                  {stat.trend}
                </span>
              </div>
              <div className="text-3xl text-white mb-1" style={{ fontWeight: 900 }}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500" style={{ fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Interface Container */}
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-[#1a1a2e]/95 to-[#0f0f23]/95 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Interface Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="text-white" style={{ fontWeight: 700 }}>Audience Data</h3>
                  <p className="text-xs text-gray-500">Manage and view your audience contact information</p>
                </div>
              </div>
              <button className="px-4 py-2 rounded-lg bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span style={{ fontWeight: 600 }}>Download All</span>
              </button>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span style={{ fontWeight: 600 }}>Total Records:</span>
              <span className="text-white" style={{ fontWeight: 700 }}>4,676</span>
            </div>
          </div>

          {/* SQL Query Section */}
          <div className="p-6 bg-black/20 border-b border-white/5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-[#8B5CF6]" />
                <span className="text-sm text-gray-400" style={{ fontWeight: 600 }}>SQL Query</span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded bg-[#8B5CF6]/20 hover:bg-[#8B5CF6]/30 text-xs text-[#8B5CF6] transition-colors" style={{ fontWeight: 600 }}>
                  Run Query
                </button>
              </div>
            </div>
            <div className="relative">
              <pre className="bg-[#0a0a0f] rounded-lg p-4 text-xs text-gray-400 overflow-x-auto font-mono border border-white/5">
{`SELECT 
  first_name, last_name, personal_email, mobile_phone,
  company, job_title, industry, revenue_range, employee_count,
  mailing_city, mailing_state, mailing_zip, mailing_country,
  interests, engagement_score, last_activity_date
FROM audience_database
WHERE engagement_score >= 50
  AND industry IN ('Technology', 'Finance', 'Healthcare')
  AND revenue_range >= '1M'
ORDER BY engagement_score DESC, last_activity_date DESC
LIMIT 500;`}
              </pre>
            </div>
          </div>

          {/* Segment Filters */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              {segments.map((segment, i) => (
                <motion.button
                  key={i}
                  onClick={() => setSelectedSegment(segment.name.toLowerCase())}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg transition-all ${
                    selectedSegment === segment.name.toLowerCase()
                      ? 'bg-[#8B5CF6]/20 border-[#8B5CF6]'
                      : 'bg-white/5 border-white/10'
                  } border`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: segment.color }}
                    />
                    <span className="text-sm text-white" style={{ fontWeight: 600 }}>
                      {segment.name}
                    </span>
                    <span className="text-xs text-gray-500">({segment.count.toLocaleString()})</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-black/20">
                  <th className="px-4 py-3 text-left text-xs text-gray-500" style={{ fontWeight: 600 }}>#</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500" style={{ fontWeight: 600 }}>SEGMENT</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500" style={{ fontWeight: 600 }}>INDUSTRY</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500" style={{ fontWeight: 600 }}>COMPANY</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500" style={{ fontWeight: 600 }}>JOB TITLE</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500" style={{ fontWeight: 600 }}>INTERESTS</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500" style={{ fontWeight: 600 }}>CITY</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500" style={{ fontWeight: 600 }}>STATE</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500" style={{ fontWeight: 600 }}>REVENUE</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500" style={{ fontWeight: 600 }}>ENGAGEMENT</th>
                </tr>
              </thead>
              <tbody>
                {audienceData.map((row, i) => (
                  <motion.tr
                    key={row.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <td className="px-4 py-4 text-sm text-gray-500">{row.id}</td>
                    <td className="px-4 py-4">
                      <span
                        className="inline-block px-2 py-1 rounded text-xs"
                        style={{
                          backgroundColor:
                            row.segment === "Enterprise"
                              ? "#8B5CF620"
                              : row.segment === "Mid-Market"
                              ? "#00D9FF20"
                              : "#39FF1420",
                          color:
                            row.segment === "Enterprise"
                              ? "#8B5CF6"
                              : row.segment === "Mid-Market"
                              ? "#00D9FF"
                              : "#39FF14",
                          fontWeight: 600
                        }}
                      >
                        {row.segment}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-400">{row.industry}</td>
                    <td className="px-4 py-4 text-sm text-white" style={{ fontWeight: 500 }}>
                      {row.company}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-400">{row.title}</td>
                    <td className="px-4 py-4 text-sm text-gray-400">{row.interests}</td>
                    <td className="px-4 py-4 text-sm text-gray-400">{row.city}</td>
                    <td className="px-4 py-4 text-sm text-gray-400">{row.state}</td>
                    <td className="px-4 py-4 text-sm text-gray-400">{row.revenue}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs ${
                          row.engagement === "High"
                            ? "bg-[#39FF14]/20 text-[#39FF14]"
                            : "bg-[#00D9FF]/20 text-[#00D9FF]"
                        }`}
                        style={{ fontWeight: 600 }}
                      >
                        {row.engagement}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Info */}
          <div className="p-6 bg-gradient-to-r from-[#8B5CF6]/10 to-[#00D9FF]/10 border-t border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-2" style={{ fontWeight: 700 }}>
                  Query-Based Audience Building with 100+ Platform Integrations
                </h4>
                <p className="text-sm text-gray-400 mb-3" style={{ fontWeight: 300, lineHeight: '1.6' }}>
                  Build custom audiences using SQL or visual filters, then instantly sync to your marketing platforms. Our audience builder taps into the entire TDTM data ecosystem including website visitors, inbound leads, aged leads marketplace, and enriched business intelligence.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Klaviyo', 'Google Ads', 'Meta', 'HubSpot', 'Salesforce', 'Mailchimp'].map((platform, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
                      style={{ fontWeight: 500 }}
                    >
                      {platform}
                    </span>
                  ))}
                  <span
                    className="px-3 py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-xs text-[#8B5CF6]"
                    style={{ fontWeight: 600 }}
                  >
                    +94 more platforms
                  </span>
                </div>
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
            Start building custom audiences from our entire data ecosystem
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl bg-[#8B5CF6] hover:bg-[#7C4FE0] text-white transition-colors"
            style={{ fontWeight: 700 }}
          >
            Access Audience Builder
          </button>
        </motion.div>
      </div>
    </section>
  );
}
