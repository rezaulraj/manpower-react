import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaChartLine,
  FaBriefcase,
  FaUsers,
  FaMoneyBillWave,
  FaCogs,
} from "react-icons/fa";

export default function WeProvide() {
  const services = [
    {
      title: "Recruitment",
      icon: <FaSearch className="text-3xl mb-4" />,
      description:
        "From entry-level to executive positions, we connect the right talent with the right opportunities for long-term success.",
    },
    {
      title: "Career Growth",
      icon: <FaChartLine className="text-3xl mb-4" />,
      description:
        "We support candidates in building career paths that align with their goals and help them reach their full potential.",
    },
    {
      title: "Gigs & Short-Term Roles",
      icon: <FaBriefcase className="text-3xl mb-4" />,
      description:
        "Whether it's a project-based role or temporary assignment, we help you find flexible opportunities that fit your lifestyle.",
    },
    {
      title: "HR Solutions",
      icon: <FaUsers className="text-3xl mb-4" />,
      description:
        "We offer customized human resource services that simplify hiring, onboarding, and workforce management.",
    },
    {
      title: "Payroll Services",
      icon: <FaMoneyBillWave className="text-3xl mb-4" />,
      description:
        "Our efficient payroll solutions ensure accurate, timely payments and compliance with all regulations.",
    },
    {
      title: "Workforce Systems",
      icon: <FaCogs className="text-3xl mb-4" />,
      description:
        "We provide innovative workforce management strategies to keep your team productive, engaged, and growing.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -15,
      scale: 1.05,
      backgroundColor: "#3B82F6",
      color: "white",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      height: 0 
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h1 
            className="text-4xl font-bold text-center mb-4"
            variants={headerVariants}
          >
            Professional Coaching
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-[16px] text-center mb-12"
            variants={headerVariants}
          >
            We guide professionals in developing their skills, boosting
            confidence, and preparing for career advancement.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex flex-col bg-gray-50 min-h-[300px] p-8 rounded-lg cursor-pointer group relative overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                variants={iconVariants}
                className="text-primary group-hover:text-white relative z-10"
              >
                {service.icon}
              </motion.div>

              <motion.h2 
                className="text-2xl font-bold mb-3 relative z-10"
                variants={textVariants}
              >
                {service.title}
              </motion.h2>

              <motion.p 
                className="text-gray-600 group-hover:text-white flex-grow relative z-10"
                variants={descriptionVariants}
              >
                {service.description}
              </motion.p>

              <motion.div 
                className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ 
                  opacity: 1,
                  borderColor: "#3B82F6"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}