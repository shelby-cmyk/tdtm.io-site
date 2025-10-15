import { motion } from "motion/react";
import { ShoppingBag, Laptop, Heart, Building2, GraduationCap, Home, Plane, Briefcase, Factory, Newspaper, Users, TrendingUp, Wrench, Shield, Scale } from "lucide-react";

// Show industries served instead of fake client logos
const industries = [
  { 
    name: "E-Commerce & Retail", 
    icon: ShoppingBag,
    stat: "50% Match Rate",
    color: "#00D9FF" 
  },
  { 
    name: "SaaS & B2B Tech", 
    icon: Laptop,
    stat: "Multi-Touch Attribution",
    color: "#8B5CF6" 
  },
  { 
    name: "Healthcare", 
    icon: Heart,
    stat: "HIPAA Compliant",
    color: "#FF006E" 
  },
  { 
    name: "Financial Services", 
    icon: TrendingUp,
    stat: "Enterprise-Grade Security",
    color: "#FFD700" 
  },
  { 
    name: "Home Services", 
    icon: Wrench,
    stat: "Local Lead Generation",
    color: "#FF6B35" 
  },
  { 
    name: "Insurance", 
    icon: Shield,
    stat: "Policy Renewals & Quotes",
    color: "#4ECDC4" 
  },
  { 
    name: "Legal Services", 
    icon: Scale,
    stat: "Case Acquisition",
    color: "#9B59B6" 
  },
  { 
    name: "Education & EdTech", 
    icon: GraduationCap,
    stat: "Lead Nurturing",
    color: "#39FF14" 
  },
  { 
    name: "Real Estate", 
    icon: Home,
    stat: "Geo-Targeting",
    color: "#00D9FF" 
  },
  { 
    name: "Travel & Hospitality", 
    icon: Plane,
    stat: "Seasonal Campaigns",
    color: "#8B5CF6" 
  },
  { 
    name: "Professional Services", 
    icon: Briefcase,
    stat: "B2B Lead Gen",
    color: "#FF006E" 
  },
  { 
    name: "Manufacturing", 
    icon: Factory,
    stat: "Long Sales Cycles",
    color: "#FFD700" 
  },
  { 
    name: "Media & Publishing", 
    icon: Newspaper,
    stat: "Audience Monetization",
    color: "#39FF14" 
  },
  { 
    name: "Marketing Agencies", 
    icon: Users,
    stat: "White Label Available",
    color: "#00D9FF" 
  },
  { 
    name: "Enterprise", 
    icon: Building2,
    stat: "Custom Solutions",
    color: "#8B5CF6" 
  },
];

export function LogoMarquee() {
  // Double the industries for seamless loop
  const duplicatedIndustries = [...industries, ...industries];

  return (
    <div className="relative overflow-hidden py-16 bg-gradient-to-b from-black via-white/5 to-black border-y border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
      
      {/* Section Label */}
      <div className="text-center mb-8 relative z-20">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-3">
          <span className="text-xs text-gray-400" style={{ fontWeight: 600, letterSpacing: '0.05em' }}>
            INDUSTRIES WE SERVE
          </span>
        </div>
        <p className="text-sm text-gray-500" style={{ fontWeight: 300 }}>
          Trusted by brands across every vertical
        </p>
      </div>
      
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -280 * industries.length]
        }}
        transition={{
          x: {
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {duplicatedIndustries.map((industry, i) => {
          const Icon = industry.icon;
          return (
            <div
              key={i}
              className="flex items-center justify-center min-w-[260px] opacity-70 hover:opacity-100 transition-all group"
            >
              <div className="text-center p-6 rounded-xl border border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 transition-all w-full">
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center transition-all group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${industry.color}15`,
                    border: `1px solid ${industry.color}30`
                  }}
                >
                  <Icon 
                    className="w-6 h-6" 
                    style={{ color: industry.color }}
                  />
                </div>
                
                {/* Industry Name */}
                <div 
                  className="mb-2"
                  style={{ 
                    fontWeight: 700, 
                    color: '#FFFFFF',
                    letterSpacing: '-0.01em',
                    fontSize: '0.95rem'
                  }}
                >
                  {industry.name}
                </div>
                
                {/* Stat/Feature */}
                <div 
                  className="text-xs px-3 py-1 rounded-full inline-block" 
                  style={{ 
                    fontWeight: 500,
                    backgroundColor: `${industry.color}15`,
                    color: industry.color
                  }}
                >
                  {industry.stat}
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
      
      {/* Bottom note */}
      <div className="text-center mt-8 relative z-20">
        <p className="text-xs text-gray-600" style={{ fontWeight: 300 }}>
          Custom solutions for your unique industry needs
        </p>
      </div>
    </div>
  );
}
