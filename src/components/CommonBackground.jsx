// components/CommonBackground.jsx
import React from "react";
import { motion } from "framer-motion";

const CommonBackground = ({ children }) => {
  return (
    <div className="relative py-10 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50"></div>
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.2" />
                <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
              </radialGradient>

              <linearGradient
                id="goldGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#DC2626" stopOpacity="0.05" />
              </linearGradient>

              <linearGradient
                id="orangeGradient"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#EA580C" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.15" />
              </linearGradient>

              <linearGradient
                id="redGradient"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.08" />
                <stop offset="50%" stopColor="#EA580C" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            <motion.circle
              cx="50%"
              cy="50%"
              r="400"
              fill="url(#sunGlow)"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {[
              {
                cx: "15%",
                cy: "20%",
                r: 120,
                gradient: "goldGradient",
                delay: 0,
              },
              {
                cx: "85%",
                cy: "30%",
                r: 150,
                gradient: "orangeGradient",
                delay: 2,
              },
              {
                cx: "25%",
                cy: "70%",
                r: 180,
                gradient: "redGradient",
                delay: 4,
              },
              {
                cx: "75%",
                cy: "65%",
                r: 100,
                gradient: "goldGradient",
                delay: 1,
              },
              {
                cx: "10%",
                cy: "50%",
                r: 140,
                gradient: "orangeGradient",
                delay: 3,
              },
              {
                cx: "90%",
                cy: "15%",
                r: 160,
                gradient: "redGradient",
                delay: 5,
              },
            ].map((circle, index) => (
              <motion.circle
                key={index}
                cx={circle.cx}
                cy={circle.cy}
                r={circle.r}
                fill={`url(#${circle.gradient})`}
                animate={{
                  cx: [
                    circle.cx,
                    `calc(${circle.cx} ${index % 2 === 0 ? "+" : "-"} 2%)`,
                    circle.cx,
                  ],
                  cy: [
                    circle.cy,
                    `calc(${circle.cy} ${index % 3 === 0 ? "+" : "-"} 1.5%)`,
                    circle.cy,
                  ],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 15 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: circle.delay,
                }}
              />
            ))}

            {[...Array(4)].map((_, i) => (
              <motion.circle
                key={`ring-${i}`}
                cx="50%"
                cy="50%"
                r={250 + i * 80}
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1"
                strokeOpacity="0.08"
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: [0, 20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i,
                }}
              />
            ))}

            {[...Array(30)].map((_, i) => (
              <motion.circle
                key={`dot-${i}`}
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r={1 + Math.random() * 2}
                fill="#DC2626"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.2, 0],
                  cy: [
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                    `${Math.random() * 100}%`,
                  ],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/20 via-transparent to-transparent"></div>
      </div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400/50 to-red-500/50"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-2/2">
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{
              d: "M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z",
            }}
            animate={{
              d: [
                "M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z",
                "M0,180 Q300,120 600,180 T1200,180 L1200,400 L0,400 Z",
                "M0,220 Q300,80 600,220 T1200,220 L1200,400 L0,400 Z",
                "M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            fill="url(#bottomGradient1)"
            fillOpacity="0.15"
          />

          <motion.path
            initial={{
              d: "M0,250 Q400,150 800,250 T1200,250 L1200,400 L0,400 Z",
            }}
            animate={{
              d: [
                "M0,250 Q400,150 800,250 T1200,250 L1200,400 L0,400 Z",
                "M0,230 Q400,170 800,230 T1200,230 L1200,400 L0,400 Z",
                "M0,270 Q400,130 800,270 T1200,270 L1200,400 L0,400 Z",
                "M0,250 Q400,150 800,250 T1200,250 L1200,400 L0,400 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            fill="url(#bottomGradient2)"
            fillOpacity="0.2"
          />

          <motion.path
            initial={{
              d: "M0,300 Q500,200 1000,300 T1200,300 L1200,400 L0,400 Z",
            }}
            animate={{
              d: [
                "M0,300 Q500,200 1000,300 T1200,300 L1200,400 L0,400 Z",
                "M0,280 Q500,220 1000,280 T1200,280 L1200,400 L0,400 Z",
                "M0,320 Q500,180 1000,320 T1200,320 L1200,400 L0,400 Z",
                "M0,300 Q500,200 1000,300 T1200,300 L1200,400 L0,400 Z",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            fill="url(#bottomGradient3)"
            fillOpacity="0.25"
          />

          <defs>
            <linearGradient
              id="bottomGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>

            <linearGradient
              id="bottomGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="50%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>

            <linearGradient
              id="bottomGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
      </div>

      {children}
    </div>
  );
};

export default CommonBackground;
