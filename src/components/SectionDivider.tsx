import { motion } from "motion/react";

interface SectionDividerProps {
  variant?: "wave" | "dots" | "line" | "neural";
  color?: string;
}

export function SectionDivider({ variant = "line", color = "#00D9FF" }: SectionDividerProps) {
  if (variant === "wave") {
    return (
      <div className="relative h-24 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <motion.path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill={`${color}10`}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="M0,60 Q300,20 600,60 T1200,60"
            stroke={color}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="flex justify-center items-center gap-3 py-12">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity, delay: i * 0.2 },
              opacity: { duration: 2, repeat: Infinity, delay: i * 0.2 }
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "neural") {
    return (
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: color,
                left: `${15 + i * 14}%`,
                top: '50%'
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Connection lines */}
              {i < 5 && (
                <motion.div
                  className="absolute top-1/2 left-1/2 origin-left h-px"
                  style={{
                    backgroundColor: color,
                    width: '14vw',
                    opacity: 0.3
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Default: line variant
  return (
    <div className="flex items-center gap-4 py-8">
      <motion.div
        className="h-px flex-1"
        style={{ backgroundColor: color, opacity: 0.3 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />
      <motion.div
        className="h-px flex-1"
        style={{ backgroundColor: color, opacity: 0.3 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        style={{ transformOrigin: "right" }}
      />
    </div>
  );
}
