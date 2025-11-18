import React from "react";
import { motion } from "framer-motion";

export default function SkilledTalent() {
  const skills = [
    { name: "Candidate Sourcing", percentage: 80 },
    { name: "Interview Coordination", percentage: 60 },
    { name: "Job Description Writing", percentage: 60 },
    { name: "Offer Negotiation", percentage: 75 },
    { name: "Recruitment", percentage: 55 },
  ];

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
      y: 30,
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

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      x: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skillBarVariants = {
    hidden: {
      width: 0,
    },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  const counterVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: (percentage) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3 + (percentage / 100) * 0.5,
      },
    }),
  };

  return (
    <section className="bg-[#201D1F] py-20 px-4">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <img
              src="/images/skilledtalent.png"
              alt="Skilled Talent"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h4 className="text-[18px] md:text-3xl font-bold text-primary mb-4">
                Top Skills & Expertise
              </h4>

              <h1 className="text-[48px] text-white font-sans font-bold">
                Empowering Businesses with the Right Talent
              </h1>

              <p className="text-[18px] text-start text-white font-mono mb-16 max-w-2xl mx-auto">
                Whether you are a professional ready for your next career move
                or a company looking to build a high-performing team, we are
                here to connect you with success.
              </p>
            </motion.div>

            <motion.div className="space-y-8" variants={containerVariants}>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white text-[20px]">
                      {skill.name}
                    </span>
                    <motion.span
                      className="text-gray-200"
                      variants={counterVariants}
                      custom={skill.percentage}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {skill.percentage}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className="bg-primary h-2.5 rounded-full"
                      variants={skillBarVariants}
                      custom={skill.percentage}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
