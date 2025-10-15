import { motion } from "motion/react";
import { Database, Mail, Users, Phone, TrendingUp, Fingerprint, Search, Layers } from "lucide-react";

interface Product {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url?: string;
}

interface EcosystemVisualizationProps {
  size?: "sm" | "md" | "lg";
  products?: Product[];
  coreColor?: string;
  connectionColor?: string;
  showLabels?: boolean;
}

export function EcosystemVisualization({
  size = "md",
  products = [
    { name: "Direct Mail Responder", icon: Mail },
    { name: "Aged Leads Marketplace", icon: Users, url: "leads.tdtm.io" },
    { name: "Inbound Call Feed", icon: Phone },
    { name: "Database Activation", icon: Database },
    { name: "Website ID Resolution", icon: Fingerprint, url: "app.id.tdtm.io" },
    { name: "Media Buying Cost Savings", icon: TrendingUp },
    { name: "Keyword Custom Audience", icon: Search }
  ],
  coreColor = "#0066FF",
  connectionColor = "#00D9FF",
  showLabels = true
}: EcosystemVisualizationProps) {
  
  const sizes = {
    sm: { container: "min-h-[500px]", radius: 200, coreSize: "w-32 h-32", cardWidth: "min-w-[150px]" },
    md: { container: "min-h-[700px]", radius: 280, coreSize: "w-48 h-48", cardWidth: "min-w-[190px]" },
    lg: { container: "min-h-[900px]", radius: 360, coreSize: "w-64 h-64", cardWidth: "min-w-[220px]" }
  };

  const currentSize = sizes[size];
  const radius = currentSize.radius;
  const orbitDuration = 40;
  const totalProducts = products.length;

  return (
    <div className={`relative max-w-5xl mx-auto ${currentSize.container} flex items-center justify-center py-8 md:py-16 px-4 overflow-hidden`}>
      {/* Center Core - Nuclear/Neural Nucleus */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative">
          {/* Outer electromagnetic field */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${coreColor}4D 0%, ${connectionColor}33 40%, transparent 70%)`,
              width: size === 'lg' ? '450px' : size === 'md' ? '350px' : '250px',
              height: size === 'lg' ? '450px' : size === 'md' ? '350px' : '250px',
              marginLeft: size === 'lg' ? '-225px' : size === 'md' ? '-175px' : '-125px',
              marginTop: size === 'lg' ? '-225px' : size === 'md' ? '-175px' : '-125px'
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Electron shells / Neural layers */}
          {[1, 2, 3].map((shell) => {
            const baseSize = size === 'lg' ? 160 : size === 'md' ? 120 : 80;
            const increment = size === 'lg' ? 45 : size === 'md' ? 35 : 25;
            
            return (
              <motion.div
                key={`shell-${shell}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                style={{
                  borderColor: `${coreColor}33`,
                  width: `${baseSize + shell * increment}px`,
                  height: `${baseSize + shell * increment}px`
                }}
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.3, 0.5, 0.3],
                  rotate: shell % 2 === 0 ? [0, 360] : [360, 0]
                }}
                transition={{
                  scale: {
                    duration: 3 + shell,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  opacity: {
                    duration: 2 + shell * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 40 + shell * 10,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
            );
          })}

          {/* Orbiting electrons/protons around nucleus */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const angle = (i * 360) / 8;
            const electronRadius = (size === 'lg' ? 110 : size === 'md' ? 85 : 65) + (i % 2) * 20;
            const angleRad = (angle * Math.PI) / 180;

            return (
              <motion.div
                key={`electron-${i}`}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: '6px',
                  height: '6px',
                  marginLeft: '-3px',
                  marginTop: '-3px'
                }}
                animate={{
                  x: [
                    Math.cos(angleRad) * electronRadius,
                    Math.cos(angleRad + Math.PI) * electronRadius,
                    Math.cos(angleRad + Math.PI * 2) * electronRadius
                  ],
                  y: [
                    Math.sin(angleRad) * electronRadius,
                    Math.sin(angleRad + Math.PI) * electronRadius,
                    Math.sin(angleRad + Math.PI * 2) * electronRadius
                  ],
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 5 + i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3
                }}
              >
                <div 
                  className="w-full h-full rounded-full blur-sm"
                  style={{
                    background: `radial-gradient(circle, ${i % 2 === 0 ? coreColor : connectionColor}, transparent)`,
                    boxShadow: `0 0 8px ${i % 2 === 0 ? coreColor : connectionColor}`
                  }}
                />
              </motion.div>
            );
          })}
          
          {/* Core nucleus with proton/neutron clusters */}
          <motion.div 
            className={`relative ${currentSize.coreSize} rounded-full flex flex-col items-center justify-center p-6 text-center overflow-hidden`}
            style={{
              background: `radial-gradient(circle at 30% 30%, ${connectionColor}66, ${coreColor}4D, ${coreColor}33)`,
              backdropFilter: 'blur(10px)',
              border: `2px solid ${coreColor}80`
            }}
            animate={{
              scale: [1, 1.03, 1],
              boxShadow: [
                `0 0 30px ${coreColor}66, inset 0 0 30px ${connectionColor}33`,
                `0 0 50px ${coreColor}99, inset 0 0 40px ${connectionColor}4D`,
                `0 0 30px ${coreColor}66, inset 0 0 30px ${connectionColor}33`
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Inner particle swarm */}
            {[...Array(12)].map((_, i) => {
              const particleRadius = size === 'lg' ? 40 : size === 'md' ? 30 : 20;
              
              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: i % 3 === 0 ? coreColor : i % 3 === 1 ? connectionColor : '#5CE5FF',
                    boxShadow: `0 0 6px ${i % 3 === 0 ? coreColor : i % 3 === 1 ? connectionColor : '#5CE5FF'}`
                  }}
                  animate={{
                    x: [
                      Math.cos((i * 360 / 12) * Math.PI / 180) * particleRadius,
                      Math.cos(((i * 360 / 12) + 180) * Math.PI / 180) * particleRadius,
                      Math.cos((i * 360 / 12) * Math.PI / 180) * particleRadius
                    ],
                    y: [
                      Math.sin((i * 360 / 12) * Math.PI / 180) * particleRadius,
                      Math.sin(((i * 360 / 12) + 180) * Math.PI / 180) * particleRadius,
                      Math.sin((i * 360 / 12) * Math.PI / 180) * particleRadius
                    ],
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                />
              );
            })}

            <motion.div
              className="relative z-10"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Layers 
                className={`${size === 'lg' ? 'w-16 h-16' : size === 'md' ? 'w-12 h-12' : 'w-8 h-8'} mb-3`}
                style={{
                  color: connectionColor,
                  filter: `drop-shadow(0 0 8px ${connectionColor})`
                }}
              />
            </motion.div>
            <h3 
              className="text-white mb-3 relative z-10" 
              style={{ 
                fontWeight: 900, 
                fontSize: size === 'lg' ? '1.5rem' : size === 'md' ? '1.25rem' : '1rem',
                letterSpacing: '-0.01em', 
                textShadow: `0 0 10px ${connectionColor}80`,
                lineHeight: '1.1'
              }}
            >
              CORE DATA
              <br />
              ASSET
            </h3>
            <p 
              className="text-white/90 relative z-10" 
              style={{ 
                fontSize: size === 'lg' ? '0.875rem' : size === 'md' ? '0.75rem' : '0.625rem',
                fontWeight: 300, 
                textShadow: `0 0 8px ${connectionColor}4D`,
                marginTop: size === 'lg' ? '0.5rem' : size === 'md' ? '0.375rem' : '0.25rem'
              }}
            >
              Powering the ecosystem
            </p>
          </motion.div>

          {/* Synaptic energy bursts from nucleus */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * 360) / 6;
            
            return (
              <motion.div
                key={`burst-${i}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.33,
                  ease: "easeOut"
                }}
              >
                <div
                  className="w-1 origin-bottom"
                  style={{
                    height: size === 'lg' ? '30px' : size === 'md' ? '20px' : '15px',
                    background: `linear-gradient(to top, ${connectionColor}CC, transparent)`,
                    transform: `rotate(${angle}deg)`,
                    filter: 'blur(2px)'
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Neural Network Products - Like neurons with dendrites */}
      {products.map((product, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
        >
          {/* Orbital path animation using circular motion */}
          <motion.div
            className="relative"
            style={{
              width: '200px',
              height: '80px'
            }}
            animate={{
              rotate: 360
            }}
            transition={{
              duration: orbitDuration,
              repeat: Infinity,
              ease: "linear",
              delay: -(i * orbitDuration) / totalProducts
            }}
          >
            {/* Neural axon connection - organic curved path */}
            <svg 
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                width: `${radius + 20}px`,
                height: '100px',
                transform: 'translate(-100%, -50%)',
                overflow: 'visible'
              }}
            >
              <defs>
                <linearGradient id={`neuralGrad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={coreColor} stopOpacity="0.6" />
                  <stop offset="50%" stopColor={connectionColor} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={coreColor} stopOpacity="0.4" />
                </linearGradient>
                <filter id={`synapseGlow-${i}`}>
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Main neural pathway with organic curve */}
              <motion.path
                d={`M 0 50 Q ${radius * 0.3} ${40 + Math.sin(i) * 15}, ${radius * 0.6} ${50 + Math.cos(i) * 10} T ${radius} 50`}
                stroke={`url(#neuralGrad-${i})`}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: 1,
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  pathLength: { duration: 1, delay: i * 0.15 },
                  opacity: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4
                  }
                }}
              />

              {/* Synaptic firing - electrical pulse */}
              <motion.circle
                r="4"
                fill={connectionColor}
                filter={`url(#synapseGlow-${i})`}
                animate={{
                  offsetDistance: ['0%', '100%'],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1.5, 1, 0.5]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.35
                }}
              >
                <animateMotion
                  dur="2.5s"
                  repeatCount="indefinite"
                  begin={`${i * 0.35}s`}
                >
                  <mpath href={`#neuralPath${i}`} />
                </animateMotion>
              </motion.circle>

              {/* Hidden path for animation */}
              <path
                id={`neuralPath${i}`}
                d={`M 0 50 Q ${radius * 0.3} ${40 + Math.sin(i) * 15}, ${radius * 0.6} ${50 + Math.cos(i) * 10} T ${radius} 50`}
                fill="none"
                stroke="none"
              />

              {/* Branching dendrites */}
              {[0, 1, 2].map((branch) => {
                const branchStart = 0.3 + branch * 0.2;
                const branchX = radius * branchStart;
                const branchAngle = (branch - 1) * 25;
                
                return (
                  <motion.line
                    key={`branch-${branch}`}
                    x1={branchX}
                    y1={50}
                    x2={branchX + 15 * Math.cos(branchAngle * Math.PI / 180)}
                    y2={50 + 15 * Math.sin(branchAngle * Math.PI / 180)}
                    stroke={coreColor}
                    strokeWidth="1"
                    strokeLinecap="round"
                    opacity="0.4"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: 1,
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{
                      pathLength: { duration: 0.8, delay: i * 0.15 + branch * 0.1 },
                      opacity: {
                        duration: 2,
                        repeat: Infinity,
                        delay: branch * 0.3
                      }
                    }}
                  />
                );
              })}
            </svg>

            {/* OUTBOUND FLOW: Enriched data flowing FROM Core to Products (Core Color) */}
            {[0, 1, 2, 3].map((particleIndex) => (
              <motion.div
                key={`enrichment-${particleIndex}`}
                className="absolute left-full top-1/2 rounded-full"
                style={{
                  width: '4px',
                  height: '4px',
                  background: `radial-gradient(circle, ${coreColor}, ${coreColor})`,
                  boxShadow: `0 0 8px ${coreColor}`,
                  marginLeft: `${radius - 100}px`,
                  marginTop: '-2px'
                }}
                animate={{
                  x: [0, -(radius - 110)],
                  y: [0, Math.sin(particleIndex + i) * 8, 0],
                  opacity: [0, 1, 1, 0],
                  scale: [0.3, 1.5, 1, 0.3]
                }}
                transition={{
                  duration: 2.8,
                  delay: particleIndex * 0.7 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* INBOUND FLOW: Market signals flowing TO Core (Connection Color) */}
            {[0, 1, 2, 3].map((particleIndex) => (
              <motion.div
                key={`signal-${particleIndex}`}
                className="absolute left-full top-1/2 rounded-full"
                style={{
                  width: '4px',
                  height: '4px',
                  background: `radial-gradient(circle, ${connectionColor}, ${connectionColor})`,
                  boxShadow: `0 0 8px ${connectionColor}`,
                  marginLeft: '10px',
                  marginTop: '-2px'
                }}
                animate={{
                  x: [0, radius - 110],
                  y: [0, -Math.sin(particleIndex + i) * 8, 0],
                  opacity: [0, 1, 1, 0],
                  scale: [0.3, 1.5, 1, 0.3]
                }}
                transition={{
                  duration: 2.8,
                  delay: particleIndex * 0.7 + i * 0.3 + 0.4,
                  repeat: Infinity,
                  ease: "easeIn"
                }}
              />
            ))}

            {/* Energy pulses showing active data exchange */}
            {[0, 1].map((pulseIndex) => (
              <motion.div
                key={`pulse-${pulseIndex}`}
                className="absolute left-full top-1/2 rounded-full"
                style={{
                  width: '6px',
                  height: '6px',
                  background: pulseIndex === 0 
                    ? `radial-gradient(circle, ${coreColor}, transparent)` 
                    : `radial-gradient(circle, ${connectionColor}, transparent)`,
                  marginLeft: `${(radius - 100) * (pulseIndex === 0 ? 0.7 : 0.3)}px`,
                  marginTop: '-3px'
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.6, 0, 0.6]
                }}
                transition={{
                  duration: 2,
                  delay: pulseIndex * 1 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Product Card - Neuron cell body */}
            <motion.div
              className="absolute"
              style={{
                left: `-${radius}px`,
                top: '50%',
                transform: 'translateY(-50%)'
              }}
              animate={{
                rotate: -360
              }}
              transition={{
                duration: orbitDuration,
                repeat: Infinity,
                ease: "linear",
                delay: -(i * orbitDuration) / totalProducts
              }}
            >
              <motion.div
                className="relative group"
                animate={{
                  y: [0, -8, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              >
                {/* Synaptic node glow */}
                <motion.div
                  className="absolute -inset-4 rounded-2xl blur-xl"
                  style={{
                    background: `radial-gradient(circle, ${coreColor}66, transparent 70%)`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.25
                  }}
                />

                {/* Product Card with neural membrane effect */}
                <motion.div 
                  className={`px-3 py-2 md:px-4 md:py-3 rounded-xl cursor-pointer ${currentSize.cardWidth} relative overflow-hidden`}
                  style={{
                    background: `linear-gradient(135deg, rgba(0, 0, 0, 0.95), ${coreColor}1A)`,
                    backdropFilter: 'blur(10px)',
                    border: `2px solid ${coreColor}4D`,
                    boxShadow: `0 0 20px ${coreColor}33`
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 0 40px ${connectionColor}99`,
                    borderColor: `${connectionColor}CC`
                  }}
                  animate={{
                    borderColor: [
                      `${coreColor}4D`,
                      `${connectionColor}99`,
                      `${coreColor}4D`
                    ]
                  }}
                  transition={{
                    borderColor: {
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4
                    }
                  }}
                >
                  {/* Electrical activity ripple */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: `radial-gradient(circle at center, ${connectionColor}33, transparent 60%)`
                    }}
                    animate={{
                      scale: [0, 2],
                      opacity: [0.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  />

                  {showLabels && (
                    <div className="flex items-center gap-3 relative z-10">
                      <motion.div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `radial-gradient(circle, ${coreColor}4D, ${coreColor}1A)`,
                          boxShadow: `inset 0 0 10px ${connectionColor}4D`
                        }}
                        animate={{
                          boxShadow: [
                            `inset 0 0 10px ${connectionColor}4D, 0 0 10px ${coreColor}33`,
                            `inset 0 0 15px ${connectionColor}80, 0 0 15px ${connectionColor}66`,
                            `inset 0 0 10px ${connectionColor}4D, 0 0 10px ${coreColor}33`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      >
                        <product.icon 
                          className="w-4 h-4"
                          style={{
                            color: connectionColor,
                            filter: `drop-shadow(0 0 4px ${connectionColor})`
                          }}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-white text-sm" style={{ fontWeight: 600, lineHeight: '1.2' }}>
                          {product.name}
                        </h4>
                        {product.url && (
                          <p className="text-xs mt-1" style={{ color: coreColor, fontWeight: 300 }}>
                            {product.url}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {!showLabels && (
                    <div className="flex items-center justify-center relative z-10">
                      <motion.div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          background: `radial-gradient(circle, ${coreColor}4D, ${coreColor}1A)`,
                          boxShadow: `inset 0 0 10px ${connectionColor}4D`
                        }}
                        animate={{
                          boxShadow: [
                            `inset 0 0 10px ${connectionColor}4D, 0 0 10px ${coreColor}33`,
                            `inset 0 0 15px ${connectionColor}80, 0 0 15px ${connectionColor}66`,
                            `inset 0 0 10px ${connectionColor}4D, 0 0 10px ${coreColor}33`
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      >
                        <product.icon 
                          className="w-5 h-5"
                          style={{
                            color: connectionColor,
                            filter: `drop-shadow(0 0 4px ${connectionColor})`
                          }}
                        />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}

      {/* Multiple rotating orbital rings */}
      {[1, 2, 3].map((ringIndex) => {
        const ringSize = ringIndex * (size === 'lg' ? 250 : size === 'md' ? 200 : 150);
        
        return (
          <motion.div
            key={`ring-${ringIndex}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
            style={{
              width: `${ringSize}px`,
              height: `${ringSize}px`,
              borderColor: `${coreColor}26`
            }}
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ 
              opacity: 1,
              rotate: ringIndex % 2 === 0 ? 360 : -360 
            }}
            transition={{
              opacity: { duration: 0.8 },
              rotate: { 
                duration: 60 + (ringIndex * 10), 
                repeat: Infinity, 
                ease: "linear" 
              }
            }}
          />
        );
      })}

      {/* Ambient floating particles around the entire ecosystem */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 360) / 12;
        const distance = (size === 'lg' ? 260 : size === 'md' ? 200 : 150) + Math.random() * 100;
        const angleRad = (angle * Math.PI) / 180;
        const x = Math.cos(angleRad) * distance;
        const y = Math.sin(angleRad) * distance;

        return (
          <motion.div
            key={`ambient-${i}`}
            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full"
            style={{
              backgroundColor: `${coreColor}99`,
              marginLeft: `${x}px`,
              marginTop: `${y}px`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              x: [0, Math.cos(angleRad) * 20, 0],
              y: [0, Math.sin(angleRad) * 20, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
}
