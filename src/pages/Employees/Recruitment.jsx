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
    icons: <LuUserSearch className="text-2xl text-white" />,
    title: "Search and Selection of Workers",
    desc: "We identify, attract, and assess top talent to match the needs of each organization.",
  },
  {
    icons: <BiSolidUserDetail className="text-2xl text-white" />,
    title: "Residence and Work Permits",
    desc: "We handle all necessary documentation to ensure legal residence and employment.",
  },
  {
    icons: <GrIntegration className="text-2xl text-white" />,
    title: "Integration Support",
    desc: "We assist workers in adapting to their new community and workplace for a smooth transition.",
  },
];

const Business = [
  {
    icons: <TbArrowLeftRight className="text-2xl text-white" />,
    title: "Business Flexibility",
    desc: "Adjust your workforce to meet evolving business needs with ease.",
  },
  {
    icons: <AiTwotoneSafetyCertificate className="text-2xl text-white" />,
    title: "Legal Assurance",
    desc: "Minimize risks with our strict adherence to all legal and regulatory requirements.",
  },
  {
    icons: <HiOutlineDocumentReport className="text-2xl text-white" />,
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
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.15,
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      borderColor: "#3B82F6",
      backgroundColor: "rgba(59, 130, 246, 0.05)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
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
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#3B82F6",
      color: "white",
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

  return (
    <section className="py-20 bg-[#2D2D2D]">
      <div className="container max-w-7xl mx-auto px-5">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="flex flex-col justify-center space-y-10"
            variants={containerVariants}
          >
            <motion.h2
              className="text-[48px] text-white font-Inter font-bold"
              variants={itemVariants}
            >
              Recruitment & Administration
            </motion.h2>
            <motion.p
              className="text-[16px] text-white font-Inter font-normal"
              variants={itemVariants}
            >
              From global job advertising to securing work permits and visas, we
              manage every step of the hiring process. We also provide support
              for smooth worker integration into the local community and labor
              market.
            </motion.p>
            <motion.div className="max-w-2xl" variants={itemVariants}>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="/contact"
                  className="bg-white font-Inter max-w-2xl font-bold text-[#201D1F] px-8 py-3 rounded-md text-[16px] transition-colors duration-300 inline-block w-full text-center"
                >
                  Lets Start Your Story
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={imageVariants} whileHover="hover">
            <img
              src="/images/Recruitment.png"
              alt="Recruitment"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:mt-10 md:mt-5 mt-4 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {selection.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="border border-primary rounded-3xl p-8 space-y-4 cursor-pointer group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 rounded-3xl"
                transition={{ duration: 0.3 }}
              />

              <div className="flex items-center space-x-4 relative z-10">
                <motion.div
                  className="p-4 bg-primary rounded-full"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {item.icons}
                </motion.div>
                <motion.h3
                  className="text-[24px] text-white font-Inter font-bold"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {item.title}
                </motion.h3>
              </div>
              <motion.p
                className="text-[16px] text-white font-Inter font-normal relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:mt-16 md:mt-5 mt-4 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={imageVariants} whileHover="hover">
            <img
              src="/images/Recruitment1.png"
              alt="Recruitment"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-10"
            variants={containerVariants}
          >
            <motion.h2
              className="text-[48px] text-white font-Inter font-bold"
              variants={itemVariants}
            >
              Temporary Staffing
            </motion.h2>
            <motion.p
              className="text-[16px] text-white font-Inter font-normal"
              variants={itemVariants}
            >
              Stay agile in a changing market with our flexible staffing
              solutions. Hire skilled employees for fixed-term needs while we
              handle payroll, legal compliance, and all administrative
              responsibilities.
            </motion.p>
            <motion.div className="max-w-2xl" variants={itemVariants}>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="/contact"
                  className="bg-white font-Inter max-w-2xl font-bold text-[#201D1F] px-8 py-3 rounded-md text-[16px] transition-colors duration-300 inline-block w-full text-center"
                >
                  Lets Start Your Story
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:mt-10 md:mt-5 mt-4 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Business.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="border border-primary rounded-3xl p-8 space-y-4 cursor-pointer group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 rounded-3xl"
                transition={{ duration: 0.3 }}
              />

              <div className="flex items-center space-x-4 relative z-10">
                <motion.div
                  className="p-4 bg-primary rounded-full"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {item.icons}
                </motion.div>
                <motion.h3
                  className="text-[24px] text-white font-Inter font-bold"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {item.title}
                </motion.h3>
              </div>
              <motion.p
                className="text-[16px] text-white font-Inter font-normal relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10"
      >
        <AdsHeadline
          title="Our Customers"
          titleClassName="text-white"
          logos={logos}
          logoWidth={300}
          logoHeight={300}
          speed={20}
          className="mt-10"
        />
      </motion.div>
    </section>
  );
}
