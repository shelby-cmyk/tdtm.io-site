import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    feature: "Real-Time Identity Resolution",
    tof: true,
    traditional: false
  },
  {
    feature: "98%+ Data Match Rate",
    tof: true,
    traditional: false
  },
  {
    feature: "Bidirectional Data Flow",
    tof: true,
    traditional: false
  },
  {
    feature: "In-Market Signal Tracking",
    tof: true,
    traditional: false
  },
  {
    feature: "Cross-Device Attribution",
    tof: true,
    traditional: "Limited"
  },
  {
    feature: "API & CRM Integration",
    tof: true,
    traditional: true
  },
  {
    feature: "Omnichannel Execution",
    tof: true,
    traditional: "Partial"
  },
  {
    feature: "Self-Improving Ecosystem",
    tof: true,
    traditional: false
  },
  {
    feature: "Implementation Time",
    tof: "<48 hours",
    traditional: "2-4 weeks"
  },
  {
    feature: "Compliance-First Data",
    tof: true,
    traditional: "Varies"
  }
];

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur">
      {/* Header */}
      <div className="grid grid-cols-3 gap-px bg-white/5">
        <div className="p-6 bg-black">
          <h4 className="text-sm text-gray-400" style={{ fontWeight: 600 }}>
            CAPABILITIES
          </h4>
        </div>
        <div className="p-6 bg-gradient-to-br from-[#00D9FF]/20 to-[#8B5CF6]/20">
          <h4 className="text-white mb-1" style={{ fontWeight: 900, fontSize: '1.125rem' }}>
            TALK DATA TO ME
          </h4>
          <p className="text-xs text-[#00D9FF]" style={{ fontWeight: 600 }}>
            Identity Resolution Platform
          </p>
        </div>
        <div className="p-6 bg-black">
          <h4 className="text-white mb-1" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
            Traditional Visitor Tracking
          </h4>
          <p className="text-xs text-gray-500" style={{ fontWeight: 300 }}>
            Legacy Analytics Tools
          </p>
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-white/5">
        {comparisons.map((item, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-3 gap-px bg-white/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <div className="p-4 bg-black flex items-center">
              <span className="text-sm text-gray-300" style={{ fontWeight: 300 }}>
                {item.feature}
              </span>
            </div>
            
            <div className="p-4 bg-black/60 flex items-center justify-center">
              {typeof item.tof === 'boolean' ? (
                item.tof ? (
                  <Check className="w-5 h-5 text-[#39FF14]" />
                ) : (
                  <X className="w-5 h-5 text-gray-600" />
                )
              ) : (
                <span className="text-sm text-[#00D9FF]" style={{ fontWeight: 600 }}>
                  {item.tof}
                </span>
              )}
            </div>
            
            <div className="p-4 bg-black flex items-center justify-center">
              {typeof item.traditional === 'boolean' ? (
                item.traditional ? (
                  <Check className="w-5 h-5 text-gray-500" />
                ) : (
                  <X className="w-5 h-5 text-gray-600" />
                )
              ) : (
                <span className="text-sm text-gray-500" style={{ fontWeight: 300 }}>
                  {item.traditional}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
