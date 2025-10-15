import { useState } from "react";
import { motion } from "motion/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TrendingUp, Database, Target } from "lucide-react";

export function ROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(10000);
  const [avgDealValue, setAvgDealValue] = useState(5000);
  const [currentConversion, setCurrentConversion] = useState(2);

  // TOF Media improvements (conservative estimates)
  const improvedConversion = currentConversion * 1.35; // 35% improvement
  const improvedLeads = monthlyLeads * 1.25; // 25% more qualified leads
  
  const currentRevenue = (monthlyLeads * currentConversion / 100) * avgDealValue;
  const projectedRevenue = (improvedLeads * improvedConversion / 100) * avgDealValue;
  const monthlyIncrease = projectedRevenue - currentRevenue;
  const annualIncrease = monthlyIncrease * 12;

  return (
    <div className="p-8 rounded-3xl bg-gradient-to-br from-[#00D9FF]/10 via-black/50 to-[#8B5CF6]/10 border border-[#00D9FF]/30">
      <div className="text-center mb-8">
        <h3 className="mb-2" style={{ fontSize: '1.75rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
          ROI CALCULATOR
        </h3>
        <p className="text-gray-400" style={{ fontWeight: 300 }}>
          See how TDTM identity resolution can impact your revenue
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm mb-2 text-gray-300" style={{ fontWeight: 600 }}>
            Monthly Leads
          </label>
          <Input
            type="number"
            value={monthlyLeads}
            onChange={(e) => setMonthlyLeads(Number(e.target.value))}
            className="bg-white/5 border-white/20 text-white"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-300" style={{ fontWeight: 600 }}>
            Avg Deal Value ($)
          </label>
          <Input
            type="number"
            value={avgDealValue}
            onChange={(e) => setAvgDealValue(Number(e.target.value))}
            className="bg-white/5 border-white/20 text-white"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-300" style={{ fontWeight: 600 }}>
            Current Conversion (%)
          </label>
          <Input
            type="number"
            step="0.1"
            value={currentConversion}
            onChange={(e) => setCurrentConversion(Number(e.target.value))}
            className="bg-white/5 border-white/20 text-white"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          className="p-6 rounded-2xl bg-black/40 backdrop-blur border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Database className="w-8 h-8 text-[#00D9FF] mb-3" />
          <div className="text-sm text-gray-400 mb-2" style={{ fontWeight: 300 }}>
            Current Monthly Revenue
          </div>
          <div className="text-2xl text-white" style={{ fontWeight: 900 }}>
            ${currentRevenue.toLocaleString()}
          </div>
        </motion.div>

        <motion.div
          className="p-6 rounded-2xl bg-gradient-to-br from-[#00D9FF]/20 to-[#8B5CF6]/20 backdrop-blur border border-[#00D9FF]/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <TrendingUp className="w-8 h-8 text-[#00D9FF] mb-3" />
          <div className="text-sm text-gray-400 mb-2" style={{ fontWeight: 300 }}>
            Projected Monthly Revenue
          </div>
          <div className="text-2xl text-[#00D9FF]" style={{ fontWeight: 900 }}>
            ${projectedRevenue.toLocaleString()}
          </div>
          <div className="text-xs text-[#39FF14] mt-2" style={{ fontWeight: 600 }}>
            +{((projectedRevenue / currentRevenue - 1) * 100).toFixed(1)}% increase
          </div>
        </motion.div>

        <motion.div
          className="p-6 rounded-2xl bg-black/40 backdrop-blur border border-[#39FF14]/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Target className="w-8 h-8 text-[#39FF14] mb-3" />
          <div className="text-sm text-gray-400 mb-2" style={{ fontWeight: 300 }}>
            Annual Revenue Increase
          </div>
          <div className="text-2xl text-[#39FF14]" style={{ fontWeight: 900 }}>
            ${annualIncrease.toLocaleString()}
          </div>
        </motion.div>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/30">
        <p className="text-sm text-gray-300 text-center" style={{ fontWeight: 300 }}>
          Based on average TDTM client results: <span className="text-[#00D9FF]" style={{ fontWeight: 600 }}>35% conversion increase</span> + <span className="text-[#00D9FF]" style={{ fontWeight: 600 }}>25% more qualified leads</span>
        </p>
      </div>
    </div>
  );
}
