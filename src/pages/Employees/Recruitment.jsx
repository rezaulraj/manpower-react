import React from "react";
import { motion } from "framer-motion";
import { LuUserSearch } from "react-icons/lu";
import { BiSolidUserDetail } from "react-icons/bi";
import { GrIntegration } from "react-icons/gr";
import { TbArrowLeftRight } from "react-icons/tb";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { Link } from "react-router-dom";
import AdsHeadline from "../../components/AdsHeadline";

const selection = [
  {
    icons: <LuUserSearch className="text-2xl" />,
    title: "Search and Selection of Workers",
    desc: "We identify, attract, and assess top talent to match the needs of each organization.",
  },
  {
    icons: <BiSolidUserDetail className="text-2xl" />,
    title: "Residence and Work Permits",
    desc: "We handle all necessary documentation to ensure legal residence and employment.",
  },
  {
    icons: <GrIntegration className="text-2xl" />,
    title: "Integration Support",
    desc: "We assist workers in adapting to their new community and workplace for a smooth transition.",
  },
];

const Business = [
  {
    icons: <TbArrowLeftRight className="text-2xl" />,
    title: "Business Flexibility",
    desc: "Adjust your workforce to meet evolving business needs with ease.",
  },
  {
    icons: <AiTwotoneSafetyCertificate className="text-2xl" />,
    title: "Legal Assurance",
    desc: "Minimize risks with our strict adherence to all legal and regulatory requirements.",
  },
  {
    icons: <HiOutlineDocumentReport className="text-2xl" />,
    title: "Payroll Management",
    desc: "Rely on our expertise for accurate payroll processing, even amidst frequent regulatory changes.",
  },
];

const logos = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
];

export default function Recruitment() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-yellow-50 via-amber-50 to-orange-50"></div>
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

        <div className="absolute inset-0 bg-linear-to-t from-yellow-100/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-ubuntu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Recruitment &{" "}
            <span className="text-transparent bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text">
              Administration
            </span>
          </motion.h3>
          <motion.div
            className="w-24 h-1 bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          <motion.p
            className="text-lg text-gray-700 font-normal mb-8 leading-relaxed max-w-3xl mx-auto font-ubuntu"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From global job advertising to securing work permits and visas, we
            manage every step of the hiring process. We also provide support for
            smooth worker integration into the local community and labor market.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="flex flex-col justify-center space-y-8"
            variants={containerVariants}
          >
            <motion.div>
              <motion.div
                variants={itemVariants}
                className="inline-block mb-4 px-4 py-2 bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full"
              >
                <span className="text-white text-sm font-semibold tracking-wider font-ubuntu">
                  RECRUITMENT SOLUTIONS
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-gray-900 font-ubuntu text-start lg:text-4xl md:text-3xl text-2xl font-bold leading-tight"
              >
                Find the Right Talent for{" "}
                <span className="bg-linear-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  Your Business
                </span>
              </motion.h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 text-start text-base font-medium leading-relaxed font-ubuntu"
            >
              We connect skilled professionals with the right opportunities to
              achieve your goals and create lasting value for your business.
            </motion.p>

            <motion.div variants={itemVariants} className="inline-block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-linear-to-r from-yellow-600 via-orange-600 to-red-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl font-ubuntu"
              >
                <span className="flex items-center gap-3">
                  Let's Start Your Story
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-linear-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 shadow-2xl z-20"
              >
                <div className="absolute inset-2 bg-white/90 rounded-xl flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm font-ubuntu">
                    Quality
                  </span>
                </div>
              </motion.div>

              <img
                src="/images/Recruitment.png"
                alt="Recruitment"
                className="w-full h-auto rounded-3xl shadow-2xl border-8 border-white"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {selection.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative"
            >
              <div className="relative bg-linear-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200/50 shadow-xl overflow-hidden h-full">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-linear-to-r from-yellow-400/20 to-red-500/20 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="flex justify-center mb-6"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                  >
                    <div className="p-4 bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full">
                      <div className="text-white">{item.icons}</div>
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold mb-4 text-center text-transparent bg-linear-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text font-ubuntu"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-700 text-base leading-relaxed text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {item.desc}
                  </motion.p>
                </div>

                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-yellow-500 rounded-full opacity-60"
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants}>
            <div className="relative">
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-linear-to-br from-green-400 to-emerald-600 rounded-2xl -rotate-12 shadow-2xl z-20"
              >
                <div className="absolute inset-2 bg-white/90 rounded-xl flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-sm font-ubuntu">
                    Trust
                  </span>
                </div>
              </motion.div>

              <img
                src="/images/Recruitment1.png"
                alt="Recruitment"
                className="w-full h-auto rounded-3xl shadow-2xl border-8 border-white"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-8"
            variants={containerVariants}
          >
            <motion.div>
              <motion.div
                variants={itemVariants}
                className="inline-block mb-4 px-4 py-2 bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full"
              >
                <span className="text-white text-sm font-semibold tracking-wider font-ubuntu">
                  TEMPORARY STAFFING
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-gray-900 font-ubuntu text-start lg:text-4xl md:text-3xl text-2xl font-bold leading-tight"
              >
                Flexible Workforce{" "}
                <span className="bg-linear-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </motion.h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 text-start text-base font-medium leading-relaxed font-ubuntu"
            >
              Stay agile in a changing market with our flexible staffing
              solutions. Hire skilled employees for fixed-term needs while we
              handle payroll, legal compliance, and all administrative
              responsibilities.
            </motion.p>

            <motion.div variants={itemVariants} className="inline-block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-linear-to-r from-yellow-600 via-orange-600 to-red-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl font-ubuntu"
              >
                <span className="flex items-center gap-3">
                  Let's Start Your Story
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Business.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative"
            >
              <div className="relative bg-linear-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200/50 shadow-xl overflow-hidden h-full">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-linear-to-r from-yellow-400/20 to-red-500/20 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="flex justify-center mb-6"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                  >
                    <div className="p-4 bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full">
                      <div className="text-white">{item.icons}</div>
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold mb-4 text-center text-transparent bg-linear-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text font-ubuntu"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-700 text-base leading-relaxed text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {item.desc}
                  </motion.p>
                </div>

                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-yellow-500 rounded-full opacity-60"
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <AdsHeadline
            title="Our Customers"
            titleClassName="text-gray-900 font-ubuntu text-3xl md:text-4xl font-bold"
            logos={logos}
            logoWidth={150}
            logoHeight={150}
            speed={20}
            className="mt-10"
          />
        </motion.div>
      </div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute w-2 h-2 rounded-full bg-linear-to-r from-yellow-400/50 to-red-500/50"
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
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-white/10 via-transparent to-transparent"></div>
      </div>
    </section>
  );
}
