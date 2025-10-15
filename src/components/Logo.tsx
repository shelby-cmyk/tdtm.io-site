import { motion } from "motion/react";
import { useState } from "react";

interface LogoProps {
  variant?: "velocity" | "momentum" | "surge" | "pulse-wave" | "vector" | "sonic" | "apex" | "thrust";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  companyName?: string;
  fontFamily?: "inter" | "montserrat" | "raleway" | "poppins" | "bebas" | "space";
  useColor?: boolean;
  customColor?: string;
  layout?: "horizontal" | "stacked" | "compact" | "badge" | "minimal" | "split" | "emphasized" | "architectural" | "editorial" | "statement";
  textWeight?: "thin" | "light" | "regular" | "bold" | "black";
}

export function Logo({ 
  variant = "velocity", 
  size = "md",
  showText = true,
  companyName = "TALK DATA TO ME",
  fontFamily = "montserrat",
  useColor = true,
  customColor = "#00D9FF",
  layout = "horizontal",
  textWeight = "light"
}: LogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: { container: "h-12", icon: 48, text: "text-xl", textSm: "text-xs" },
    md: { container: "h-20", icon: 80, text: "text-3xl", textSm: "text-sm" },
    lg: { container: "h-32", icon: 120, text: "text-5xl", textSm: "text-base" }
  };

  const fontFamilies = {
    inter: "'Inter', sans-serif",
    montserrat: "'Montserrat', sans-serif",
    raleway: "'Raleway', sans-serif",
    poppins: "'Poppins', sans-serif",
    bebas: "'Bebas Neue', sans-serif",
    space: "'Space Grotesk', sans-serif"
  };

  const textWeights = {
    thin: 100,
    light: 300,
    regular: 400,
    bold: 700,
    black: 900
  };

  const currentSize = sizeClasses[size];
  const currentFont = fontFamilies[fontFamily];
  const currentWeight = textWeights[textWeight];

  const renderIcon = () => {
    const iconProps = { size: currentSize.icon, isHovered, useColor, customColor };
    switch (variant) {
      case "velocity": return <VelocityIcon {...iconProps} />;
      case "momentum": return <MomentumIcon {...iconProps} />;
      case "surge": return <SurgeIcon {...iconProps} />;
      case "pulse-wave": return <PulseWaveIcon {...iconProps} />;
      case "vector": return <VectorIcon {...iconProps} />;
      case "sonic": return <SonicIcon {...iconProps} />;
      case "apex": return <ApexIcon {...iconProps} />;
      case "thrust": return <ThrustIcon {...iconProps} />;
      default: return <VelocityIcon {...iconProps} />;
    }
  };

  const layoutStyles = {
    horizontal: "flex flex-row items-center gap-6",
    stacked: "flex flex-col items-center gap-4",
    compact: "flex flex-row items-center gap-3",
    badge: "flex flex-col items-center gap-2",
    minimal: "flex flex-row items-end gap-4",
    split: "flex flex-col items-start gap-3",
    emphasized: "flex flex-row items-center gap-6",
    architectural: "flex flex-col items-start gap-2",
    editorial: "flex flex-row items-baseline gap-4",
    statement: "flex flex-col items-center gap-3"
  };

  return (
    <motion.div
      className={`${layoutStyles[layout]} ${currentSize.container}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {renderIcon()}
      
      {showText && layout === "horizontal" && (
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span 
            className={`${currentSize.text} uppercase`} 
            style={{ 
              fontWeight: currentWeight, 
              letterSpacing: textWeight === 'black' ? '0.15em' : '0.3em',
              fontFamily: currentFont
            }}
          >
            {companyName}
          </span>
        </motion.div>
      )}

      {showText && layout === "stacked" && (
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span 
            className={`${currentSize.text} uppercase text-center`} 
            style={{ 
              fontWeight: currentWeight, 
              letterSpacing: '0.4em',
              fontFamily: currentFont
            }}
          >
            {companyName}
          </span>
        </motion.div>
      )}

      {showText && layout === "compact" && (
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span 
            className={`${currentSize.text} uppercase leading-none`} 
            style={{ 
              fontWeight: currentWeight, 
              letterSpacing: '0.2em',
              fontFamily: currentFont
            }}
          >
            {companyName}
          </span>
        </motion.div>
      )}

      {showText && layout === "badge" && (
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span 
            className={`${currentSize.text} uppercase tracking-widest text-center`} 
            style={{ 
              fontWeight: currentWeight, 
              letterSpacing: '0.5em',
              fontFamily: currentFont
            }}
          >
            {companyName}
          </span>
          <div className="h-px w-full mt-2" style={{ backgroundColor: useColor ? customColor : 'currentColor', opacity: 0.3 }} />
          <span 
            className={`${currentSize.textSm} uppercase mt-1 opacity-60`}
            style={{ 
              fontWeight: 400,
              letterSpacing: '0.3em',
              fontFamily: currentFont
            }}
          >
            Performance Marketing
          </span>
        </motion.div>
      )}

      {showText && layout === "minimal" && (
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span 
            className={`${currentSize.text} uppercase leading-none`} 
            style={{ 
              fontWeight: currentWeight, 
              letterSpacing: '0.1em',
              fontFamily: currentFont
            }}
          >
            {companyName}
          </span>
        </motion.div>
      )}

      {showText && layout === "split" && (
        <motion.div
          className="flex flex-col gap-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {companyName.split(' ').map((word, i) => (
            <motion.span
              key={i}
              className={`${currentSize.text} uppercase leading-none`}
              style={{ 
                fontWeight: currentWeight, 
                letterSpacing: '0.25em',
                fontFamily: currentFont,
                marginTop: i > 0 ? '-0.1em' : 0
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      )}

      {showText && layout === "emphasized" && (
        <motion.div
          className="flex flex-col gap-1"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span 
            className={`${currentSize.text} uppercase leading-none`} 
            style={{ 
              fontWeight: 900, 
              letterSpacing: '0.15em',
              fontFamily: currentFont
            }}
          >
            {companyName.split(' ')[0]}
          </span>
          <span 
            className={`${currentSize.text} uppercase leading-none`} 
            style={{ 
              fontWeight: 300, 
              letterSpacing: '0.4em',
              fontFamily: currentFont,
              color: useColor ? customColor : 'currentColor'
            }}
          >
            {companyName.split(' ')[1]}
          </span>
        </motion.div>
      )}

      {showText && layout === "architectural" && (
        <motion.div
          className="flex flex-col gap-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-baseline gap-3">
            <span 
              className={`${currentSize.text} uppercase leading-none`} 
              style={{ 
                fontWeight: 900, 
                letterSpacing: '0.05em',
                fontFamily: currentFont,
                fontSize: size === 'lg' ? '6rem' : size === 'md' ? '4rem' : '2rem'
              }}
            >
              {companyName.split(' ')[0]}
            </span>
            <div className="flex flex-col justify-end pb-1">
              <span 
                className="uppercase leading-none" 
                style={{ 
                  fontWeight: 700, 
                  letterSpacing: '0.3em',
                  fontFamily: currentFont,
                  fontSize: size === 'lg' ? '1.25rem' : size === 'md' ? '1rem' : '0.75rem'
                }}
              >
                {companyName.split(' ')[1]}
              </span>
              <div 
                className="h-px w-full mt-1" 
                style={{ backgroundColor: useColor ? customColor : 'currentColor' }} 
              />
              <span 
                className="uppercase leading-none mt-1 opacity-60" 
                style={{ 
                  fontWeight: 400, 
                  letterSpacing: '0.2em',
                  fontFamily: currentFont,
                  fontSize: size === 'lg' ? '0.75rem' : size === 'md' ? '0.625rem' : '0.5rem'
                }}
              >
                Performance
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {showText && layout === "editorial" && (
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-baseline gap-2">
            <span 
              className={`${currentSize.text} uppercase leading-none`} 
              style={{ 
                fontWeight: 300, 
                letterSpacing: '0.5em',
                fontFamily: currentFont
              }}
            >
              {companyName.split(' ')[0]}
            </span>
            <span 
              className={`${currentSize.text} uppercase leading-none`} 
              style={{ 
                fontWeight: 900, 
                letterSpacing: '0.1em',
                fontFamily: currentFont,
                color: useColor ? customColor : 'currentColor'
              }}
            >
              {companyName.split(' ')[1]}
            </span>
          </div>
          <span 
            className="uppercase leading-none mt-2 opacity-70" 
            style={{ 
              fontWeight: 500, 
              letterSpacing: '0.15em',
              fontFamily: currentFont,
              fontSize: size === 'lg' ? '1rem' : size === 'md' ? '0.875rem' : '0.625rem'
            }}
          >
            Top of Funnel Marketing
          </span>
        </motion.div>
      )}

      {showText && layout === "statement" && (
        <motion.div
          className="flex flex-col items-center text-center gap-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <span 
              className={`${currentSize.text} uppercase leading-none`} 
              style={{ 
                fontWeight: 900, 
                letterSpacing: '0.2em',
                fontFamily: currentFont
              }}
            >
              {companyName.split(' ')[0]}
            </span>
            <div 
              className="w-px self-stretch" 
              style={{ backgroundColor: useColor ? customColor : 'currentColor', opacity: 0.3 }} 
            />
            <span 
              className={`${currentSize.text} uppercase leading-none`} 
              style={{ 
                fontWeight: 300, 
                letterSpacing: '0.5em',
                fontFamily: currentFont
              }}
            >
              {companyName.split(' ')[1]}
            </span>
          </div>
          <div 
            className="h-1 rounded-full" 
            style={{ 
              width: '60%',
              background: useColor 
                ? `linear-gradient(90deg, transparent, ${customColor}, transparent)` 
                : 'linear-gradient(90deg, transparent, currentColor, transparent)'
            }} 
          />
          <span 
            className="uppercase leading-none opacity-60" 
            style={{ 
              fontWeight: 600, 
              letterSpacing: '0.3em',
              fontFamily: currentFont,
              fontSize: size === 'lg' ? '0.875rem' : size === 'md' ? '0.75rem' : '0.5rem',
              color: useColor ? customColor : 'currentColor'
            }}
          >
            Performance Marketing
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}

// VELOCITY - Lightning bolt with dynamic motion
function VelocityIcon({ size, isHovered, useColor, customColor }: { size: number; isHovered: boolean; useColor: boolean; customColor: string }) {
  const color = useColor ? customColor : "currentColor";
  
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="velocityGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.1" />
          <stop offset="60%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
        <filter id="velocityGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main lightning bolt */}
      <motion.path
        d="M 90 30 L 55 58 L 68 58 L 30 90 L 65 62 L 52 62 Z"
        fill="url(#velocityGrad)"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        filter="url(#velocityGlow)"
        initial={{ x: -60, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 1
        }}
        transition={{
          x: { duration: 0.8, ease: "easeOut" },
          opacity: { duration: 0.5 }
        }}
      />
      
      {/* Speed trails */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.line
          key={i}
          x1={10}
          y1={35 + i * 11}
          x2={35 + i * 6}
          y2={35 + i * 11}
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          opacity={0.7 - i * 0.13}
          initial={{ pathLength: 0, x: -20 }}
          animate={{ 
            pathLength: 1,
            x: 0
          }}
          transition={{
            pathLength: { duration: 0.5, delay: i * 0.06 },
            x: { duration: 0.5, delay: i * 0.06 }
          }}
        />
      ))}
      
      {/* Trailing particles on hover */}
      {isHovered && [0, 1, 2, 3, 4, 5].map((i) => (
        <motion.circle
          key={i}
          cx={20 + i * 7}
          cy={50 + Math.sin(i * 0.8) * 10}
          r="2.5"
          fill={color}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0.5, 0],
            scale: [0, 1.2, 1, 0],
            x: [0, 50 + i * 5]
          }}
          transition={{
            duration: 1.8,
            delay: i * 0.12,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Energy ring */}
      <motion.circle
        cx="60"
        cy="60"
        r="50"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.15"
        strokeDasharray="6 10"
        initial={{ rotate: 0 }}
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{
          duration: 5,
          repeat: isHovered ? Infinity : 0,
          ease: "linear"
        }}
        style={{ transformOrigin: "60px 60px" }}
      />
      
      {/* Impact glow on hover */}
      {isHovered && (
        <motion.circle
          cx="60"
          cy="60"
          r="25"
          fill={color}
          opacity="0.1"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.5], opacity: [0.2, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      )}
    </svg>
  );
}

// MOMENTUM - Forward-leaning arrows with cascading motion
function MomentumIcon({ size, isHovered, useColor, customColor }: { size: number; isHovered: boolean; useColor: boolean; customColor: string }) {
  const color = useColor ? customColor : "currentColor";
  
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="momentumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Cascading chevrons */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M ${25 + i * 20} 35 L ${45 + i * 20} 60 L ${25 + i * 20} 85`}
          stroke="url(#momentumGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={1 - i * 0.25}
          initial={{ pathLength: 0, x: -30 }}
          animate={{ 
            pathLength: 1,
            x: isHovered ? [0, 8, 0] : 0
          }}
          transition={{
            pathLength: { duration: 0.8, delay: i * 0.15 },
            x: { duration: 1.5, delay: i * 0.1, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }
          }}
        />
      ))}
      
      {/* Forward motion lines */}
      {[0, 1, 2, 3].map((i) => (
        <motion.line
          key={`line-${i}`}
          x1={15 + i * 8}
          y1={45 + i * 7}
          x2={40 + i * 12}
          y2={45 + i * 7}
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity={0.6 - i * 0.1}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
        />
      ))}
      
      {/* Kinetic particles */}
      {isHovered && [0, 1, 2, 3, 4].map((i) => (
        <motion.circle
          key={`particle-${i}`}
          cx={25 + i * 10}
          cy={50 + Math.sin(i) * 15}
          r="3"
          fill={color}
          initial={{ opacity: 0 }}
          animate={{
            x: [0, 60],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Background accent */}
      <motion.circle
        cx="60"
        cy="60"
        r="48"
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.1"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
    </svg>
  );
}

// SURGE - Energy wave building and releasing
function SurgeIcon({ size, isHovered, useColor, customColor }: { size: number; isHovered: boolean; useColor: boolean; customColor: string }) {
  const color = useColor ? customColor : "currentColor";
  
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="surgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="50%" stopColor={color} stopOpacity="0.7" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Building wave forms */}
      {[0, 1, 2, 3].map((i) => {
        const amplitude = 15 + i * 5;
        const frequency = 3 + i;
        
        return (
          <motion.path
            key={i}
            d={`M 10 ${60 + i * 3} Q ${20 + frequency * 5} ${60 - amplitude + i * 3}, ${30 + frequency * 5} ${60 + i * 3} T ${50 + frequency * 10} ${60 + i * 3} T ${70 + frequency * 10} ${60 + i * 3} T 110 ${60 + i * 3}`}
            stroke={color}
            strokeWidth={3.5 - i * 0.5}
            strokeLinecap="round"
            fill="none"
            opacity={0.9 - i * 0.15}
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              x: isHovered ? [0, 10, 0] : 0
            }}
            transition={{
              pathLength: { duration: 1.2, delay: i * 0.15 },
              x: { duration: 2.5, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }
            }}
          />
        );
      })}
      
      {/* Peak surge arrow */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1
        }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.path
          d="M 85 40 L 105 60 L 85 80"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={{
            x: isHovered ? [0, 5, 0] : 0,
            opacity: isHovered ? [1, 0.7, 1] : 1
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0
          }}
        />
      </motion.g>
      
      {/* Energy particles */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.circle
          key={i}
          cx={20 + i * 12}
          cy={60 + Math.sin(i * 1.2) * 20}
          r="2"
          fill={color}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? [0, 1, 0] : 0,
            x: isHovered ? [0, 80] : 0,
            y: isHovered ? [0, Math.random() * 20 - 10] : 0
          }}
          transition={{
            duration: 2,
            delay: i * 0.15,
            repeat: isHovered ? Infinity : 0,
            ease: "easeOut"
          }}
        />
      ))}
    </svg>
  );
}

// PULSE WAVE - Radiating energy pulses
function PulseWaveIcon({ size, isHovered, useColor, customColor }: { size: number; isHovered: boolean; useColor: boolean; customColor: string }) {
  const color = useColor ? customColor : "currentColor";
  
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      {/* Core energy point */}
      <motion.circle
        cx="40"
        cy="60"
        r="6"
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
      />
      
      {/* Radiating pulses */}
      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={i}
          cx="40"
          cy="60"
          r={15 + i * 12}
          stroke={color}
          strokeWidth="2.5"
          fill="none"
          opacity={0.7 - i * 0.15}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? [1, 1.3] : 1,
            opacity: isHovered ? [0.7 - i * 0.15, 0] : 0.7 - i * 0.15
          }}
          transition={{
            scale: { duration: 0.8, delay: 0.3 + i * 0.15 },
            scale: { duration: 2, delay: i * 0.25, repeat: isHovered ? Infinity : 0, ease: "easeOut" },
            opacity: { duration: 2, delay: i * 0.25, repeat: isHovered ? Infinity : 0, ease: "easeOut" }
          }}
        />
      ))}
      
      {/* Directional wave */}
      <motion.path
        d="M 40 60 L 60 45 L 75 60 L 90 40 L 105 60"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
      
      {/* Propagating nodes */}
      {[60, 75, 90, 105].map((x, i) => (
        <motion.circle
          key={x}
          cx={x}
          cy={i === 0 ? 45 : i === 1 ? 60 : i === 2 ? 40 : 60}
          r="4"
          fill={color}
          initial={{ scale: 0 }}
          animate={{ 
            scale: isHovered ? [1, 1.3, 1] : 1
          }}
          transition={{
            scale: { duration: 0.5, delay: 0.8 + i * 0.1 },
            scale: { duration: 1.2, delay: i * 0.2, repeat: isHovered ? Infinity : 0 }
          }}
        />
      ))}
      
      {/* Expanding ring */}
      <motion.circle
        cx="40"
        cy="60"
        r="55"
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
    </svg>
  );
}

// VECTOR - Precise directional force
function VectorIcon({ size, isHovered, useColor, customColor }: { size: number; isHovered: boolean; useColor: boolean; customColor: string }) {
  const color = useColor ? customColor : "currentColor";
  
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="vectorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Main vector arrow */}
      <motion.g
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.line
          x1="20"
          y1="60"
          x2="85"
          y2="60"
          stroke="url(#vectorGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        <motion.path
          d="M 85 45 L 105 60 L 85 75"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={color}
          fillOpacity="0.3"
          animate={{
            x: isHovered ? [0, 5, 0] : 0
          }}
          transition={{
            duration: 1,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        />
      </motion.g>
      
      {/* Coordinate lines */}
      {[35, 50, 65].map((y, i) => (
        <motion.line
          key={y}
          x1="15"
          y1={y === 50 ? 60 : y}
          x2={y === 50 ? 20 : 25}
          y2={y === 50 ? 60 : y}
          stroke={color}
          strokeWidth="1.5"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        />
      ))}
      
      {/* Trajectory arc */}
      <motion.path
        d="M 20 75 Q 50 50, 85 45"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="4 4"
        fill="none"
        opacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      
      {/* Precision markers */}
      {[30, 50, 70].map((x, i) => (
        <motion.circle
          key={x}
          cx={x}
          cy={60}
          r="3"
          fill={color}
          opacity="0.6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
        />
      ))}
      
      {/* Velocity indicator particles */}
      {isHovered && [0, 1, 2, 3].map((i) => (
        <motion.circle
          key={i}
          cx={25 + i * 12}
          cy={60}
          r="2"
          fill={color}
          initial={{ opacity: 0 }}
          animate={{
            x: [0, 70],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Frame */}
      <motion.rect
        x="15"
        y="40"
        width="95"
        height="40"
        rx="4"
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.15"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
    </svg>
  );
}

// SONIC - Sound wave / speed barrier break
function SonicIcon({ size, isHovered, useColor, customColor }: { size: number; isHovered: boolean; useColor: boolean; customColor: string }) {
  const color = useColor ? customColor : "currentColor";
  
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      {/* Sonic boom waves */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.path
          key={i}
          d={`M ${35 + i * 12} 30 Q ${45 + i * 12} 45, ${35 + i * 12} 60 T ${35 + i * 12} 90`}
          stroke={color}
          strokeWidth={3 - i * 0.3}
          strokeLinecap="round"
          fill="none"
          opacity={0.8 - i * 0.15}
          initial={{ pathLength: 0, x: -20 }}
          animate={{ 
            pathLength: 1,
            x: 0
          }}
          transition={{
            pathLength: { duration: 0.8, delay: i * 0.1 },
            x: { duration: 0.8, delay: i * 0.1 }
          }}
        />
      ))}
      
      {/* Projectile/Object breaking barrier */}
      <motion.circle
        cx="75"
        cy="60"
        r="8"
        fill={color}
        initial={{ x: -50, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 1
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* Shockwave rings */}
      {[0, 1, 2].map((i) => (
        <motion.ellipse
          key={i}
          cx="75"
          cy="60"
          rx={15 + i * 8}
          ry={10 + i * 5}
          stroke={color}
          strokeWidth="2"
          fill="none"
          opacity={0.5 - i * 0.15}
          initial={{ scale: 0 }}
          animate={{
            scale: isHovered ? [1, 1.4] : 1,
            opacity: isHovered ? [0.5 - i * 0.15, 0] : 0.5 - i * 0.15
          }}
          transition={{
            scale: { duration: 0.6, delay: 0.5 + i * 0.15 },
            scale: { duration: 1.5, delay: i * 0.3, repeat: isHovered ? Infinity : 0, ease: "easeOut" },
            opacity: { duration: 1.5, delay: i * 0.3, repeat: isHovered ? Infinity : 0 }
          }}
        />
      ))}
      
      {/* Trailing vortex */}
      {isHovered && [0, 1, 2, 3, 4].map((i) => (
        <motion.path
          key={i}
          d={`M ${30 - i * 5} ${50 + i * 4} Q ${40 - i * 3} ${60}, ${30 - i * 5} ${70 - i * 4}`}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity={0.6 - i * 0.1}
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: [0, 1, 1],
            opacity: [0, 0.6 - i * 0.1, 0]
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.15,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Speed particles */}
      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={`particle-${i}`}
          cx={20 + i * 10}
          cy={55 + Math.sin(i) * 8}
          r="2.5"
          fill={color}
          initial={{ scale: 0 }}
          animate={{
            scale: isHovered ? [0, 1, 0] : 0,
            x: isHovered ? [0, 60] : 0,
            opacity: isHovered ? [0, 1, 0] : 0
          }}
          transition={{
            duration: 1.8,
            delay: i * 0.15,
            repeat: isHovered ? Infinity : 0,
            ease: "easeOut"
          }}
        />
      ))}
    </svg>
  );
}

// APEX - Peak performance with upward trajectory
function ApexIcon({ size, isHovered, useColor, customColor }: { size: number; isHovered: boolean; useColor: boolean; customColor: string }) {
  const color = useColor ? customColor : "currentColor";
  
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="apexGrad" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Ascending trajectory curve */}
      <motion.path
        d="M 15 95 Q 35 75, 50 50 T 85 15"
        stroke="url(#apexGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Peak marker */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "backOut" }}
      >
        <motion.circle
          cx="85"
          cy="15"
          r="8"
          fill={color}
        />
        <motion.circle
          cx="85"
          cy="15"
          r="12"
          stroke={color}
          strokeWidth="2"
          fill="none"
          animate={{
            scale: isHovered ? [1, 1.3, 1] : 1,
            opacity: isHovered ? [1, 0, 1] : 1
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0
          }}
        />
      </motion.g>
      
      {/* Milestone nodes */}
      {[{ x: 35, y: 75 }, { x: 50, y: 50 }, { x: 65, y: 30 }].map((pos, i) => (
        <motion.circle
          key={i}
          cx={pos.x}
          cy={pos.y}
          r="4"
          fill={color}
          opacity="0.7"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }}
        />
      ))}
      
      {/* Growth indicators */}
      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1={20 + i * 15}
          y1={90 - i * 15}
          x2={20 + i * 15}
          y2={100}
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          opacity={0.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
        />
      ))}
      
      {/* Upward momentum particles */}
      {isHovered && [0, 1, 2, 3].map((i) => (
        <motion.circle
          key={i}
          cx={30 + i * 15}
          cy={85}
          r="2.5"
          fill={color}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -60],
            x: [0, 20],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Success burst at peak */}
      {isHovered && [0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * 360) / 6;
        const rad = (angle * Math.PI) / 180;
        
        return (
          <motion.line
            key={i}
            x1="85"
            y1="15"
            x2={85 + Math.cos(rad) * 15}
            y2={15 + Math.sin(rad) * 15}
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        );
      })}
    </svg>
  );
}

// THRUST - Rocket propulsion and acceleration
function ThrustIcon({ size, isHovered, useColor, customColor }: { size: number; isHovered: boolean; useColor: boolean; customColor: string }) {
  const color = useColor ? customColor : "currentColor";
  
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="thrustGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.1" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
        <radialGradient id="exhaustGrad">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Rocket body */}
      <motion.path
        d="M 75 45 L 95 60 L 75 75 L 75 65 L 65 65 L 65 55 L 75 55 Z"
        fill="url(#thrustGrad)"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        initial={{ x: -50, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 1,
          x: isHovered ? [0, 5, 0] : 0
        }}
        transition={{
          x: { duration: 0.8, ease: "easeOut" },
          opacity: { duration: 0.5 },
          x: { duration: 1, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }
        }}
      />
      
      {/* Exhaust flames */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M ${65 - i * 10} ${58 + i * 2} Q ${50 - i * 12} 60, ${65 - i * 10} ${62 - i * 2}`}
          fill="url(#exhaustGrad)"
          stroke={color}
          strokeWidth="1.5"
          opacity={0.7 - i * 0.2}
          initial={{ pathLength: 0, x: 20 }}
          animate={{ 
            pathLength: 1,
            x: isHovered ? [0, -5, 0] : 0,
            scaleX: isHovered ? [1, 1.2, 1] : 1
          }}
          transition={{
            pathLength: { duration: 0.6, delay: 0.5 + i * 0.1 },
            x: { duration: 0.8, repeat: isHovered ? Infinity : 0, ease: "easeInOut" },
            scaleX: { duration: 0.8, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }
          }}
          style={{ transformOrigin: "65px 60px" }}
        />
      ))}
      
      {/* Propulsion particles */}
      {isHovered && [0, 1, 2, 3, 4, 5].map((i) => (
        <motion.circle
          key={i}
          cx={65}
          cy={58 + Math.random() * 4}
          r={2 + Math.random()}
          fill={color}
          initial={{ opacity: 0 }}
          animate={{
            x: [0, -40 - Math.random() * 20],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.3]
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.15,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Acceleration lines */}
      {[0, 1, 2, 3].map((i) => (
        <motion.line
          key={i}
          x1={40 - i * 8}
          y1={56 + i * 2}
          x2={55 - i * 5}
          y2={56 + i * 2}
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity={0.6 - i * 0.12}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
        />
      ))}
      
      {/* Shock wave */}
      <motion.ellipse
        cx="80"
        cy="60"
        rx="25"
        ry="18"
        stroke={color}
        strokeWidth="2"
        fill="none"
        opacity="0.3"
        initial={{ scale: 0.8 }}
        animate={{
          scale: isHovered ? [1, 1.3] : 1,
          opacity: isHovered ? [0.3, 0] : 0.3
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: "easeOut"
        }}
      />
      
      {/* Speed indicator */}
      <motion.path
        d="M 15 55 L 25 60 L 15 65"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
    </svg>
  );
}
