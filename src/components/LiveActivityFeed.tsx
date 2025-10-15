import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Activity, MapPin, Briefcase, TrendingUp, Users, Target } from "lucide-react";

const activities = [
  { icon: Activity, text: "Website visitor identified in Seattle, WA", color: "#00D9FF" },
  { icon: Briefcase, text: "Campaign activated for FinTech client - 50K leads", color: "#8B5CF6" },
  { icon: Target, text: "Direct Mail Responder: 2,500 new matches", color: "#39FF14" },
  { icon: Users, text: "Aged Leads Marketplace: 15K leads reactivated", color: "#FF006E" },
  { icon: TrendingUp, text: "Media buying campaign: 425% ROI increase", color: "#00D9FF" },
  { icon: MapPin, text: "Inbound call identified in Austin, TX", color: "#8B5CF6" },
  { icon: Activity, text: "TDTM Pixel: 98.7% match rate achieved", color: "#39FF14" },
  { icon: Briefcase, text: "Database activation: 35K emails deployed", color: "#FF006E" },
];

export function LiveActivityFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = activities[currentIndex];
  const Icon = current.icon;

  return (
    <div className="relative overflow-hidden py-4 px-6 rounded-2xl bg-black/40 backdrop-blur border border-white/10">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 flex-shrink-0">
          <motion.div
            className="w-2 h-2 rounded-full bg-[#39FF14]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
          <span className="text-sm text-gray-400" style={{ fontWeight: 600 }}>
            LIVE ACTIVITY
          </span>
        </div>

        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex items-center gap-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-4 h-4 flex-shrink-0" style={{ color: current.color }} />
              <span className="text-sm text-white" style={{ fontWeight: 300 }}>
                {current.text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
