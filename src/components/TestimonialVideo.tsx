import { motion } from "motion/react";
import { Play, Quote } from "lucide-react";
import { useState } from "react";

interface TestimonialVideoProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  color: string;
}

export function TestimonialVideo({ name, role, company, quote, color }: TestimonialVideoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Video placeholder with gradient */}
      <div 
        className="aspect-video relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${color}40 0%, black 100%)`
        }}
      >
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${color} 1px, transparent 0)`,
            backgroundSize: '30px 30px',
            opacity: 0.1
          }}
          animate={{
            backgroundPosition: isHovered ? ['0px 0px', '30px 30px'] : '0px 0px'
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "linear"
          }}
        />

        {/* Play button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center backdrop-blur"
            style={{
              backgroundColor: `${color}20`,
              border: `2px solid ${color}`
            }}
          >
            <Play className="w-8 h-8 ml-1" style={{ color }} />
          </div>
        </motion.div>

        {/* Fake video scrubber */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: '0%' }}
              animate={{ width: isHovered ? '35%' : '0%' }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Quote overlay */}
      <div className="p-6 bg-black/90 backdrop-blur border-t border-white/10">
        <Quote className="w-6 h-6 mb-3 opacity-40" style={{ color }} />
        <p className="text-sm text-gray-300 mb-4 line-clamp-2" style={{ fontWeight: 300, lineHeight: '1.6' }}>
          "{quote}"
        </p>
        <div>
          <div className="text-white mb-1" style={{ fontWeight: 700 }}>
            {name}
          </div>
          <div className="text-xs text-gray-500" style={{ fontWeight: 300 }}>
            {role}, {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
