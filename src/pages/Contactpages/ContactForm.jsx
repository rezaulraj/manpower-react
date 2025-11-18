import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Industries } from "../../data/Industries";
import { motion } from "framer-motion";

export default function ContactForm() {
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

  const formItemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      },
    }),
  };

  const contactInfoVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.5 + index * 0.1,
      },
    }),
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
        ease: "backOut",
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#2563eb",
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
    submitting: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    submitting: {
      x: [0, 10, 0],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const inputFocusVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    hover: {
      x: 5,
      color: "#3B82F6",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-3xl font-bold mb-8 uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Contact Form
            </motion.h2>

            <motion.form
              action="https://formsubmit.co/9352e79a91ce748f9489d0c72dbcc46b"
              method="POST"
              className="space-y-6"
            >
              <motion.div custom={0} variants={formItemVariants}>
                <select
                  title="Select Industry"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  name="industry"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Industry
                  </option>
                  {Industries.map((industry) => (
                    <option key={industry.id} value={industry.title}>
                      {industry.title}
                    </option>
                  ))}
                </select>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div custom={1} variants={formItemVariants}>
                  <label
                    htmlFor="firstName"
                    className="block text-[18px] font-medium mb-2"
                  >
                    First Name *
                  </label>
                  <motion.input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 outline-none py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    whileFocus="focus"
                    variants={inputFocusVariants}
                  />
                </motion.div>

                <motion.div custom={2} variants={formItemVariants}>
                  <label
                    htmlFor="lastName"
                    className="block text-[18px] font-medium mb-2"
                  >
                    Last Name *
                  </label>
                  <motion.input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full outline-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    whileFocus="focus"
                    variants={inputFocusVariants}
                  />
                </motion.div>
              </div>

              <motion.div custom={3} variants={formItemVariants}>
                <label
                  htmlFor="phone"
                  className="block text-[18px] font-medium mb-2"
                >
                  Mobile Phone *
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full outline-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  whileFocus="focus"
                  variants={inputFocusVariants}
                />
              </motion.div>

              <motion.div custom={4} variants={formItemVariants}>
                <label
                  htmlFor="email"
                  className="block text-[18px] font-medium mb-2"
                >
                  Email *
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full outline-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  whileFocus="focus"
                  variants={inputFocusVariants}
                />
              </motion.div>

              <motion.div custom={5} variants={formItemVariants}>
                <label
                  htmlFor="message"
                  className="block text-[18px] font-medium mb-2"
                >
                  Message *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 resize-none"
                  whileFocus="focus"
                  variants={inputFocusVariants}
                />
              </motion.div>

              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Job Application Submission"
              />
              <input
                type="hidden"
                name="_next"
                value="https://manpowernet.work"
              />

              <motion.button
                type="submit"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center cursor-pointer justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg transition-colors w-full"
              >
                Apply Job
                <motion.span variants={iconVariants}>
                  <FaPaperPlane />
                </motion.span>
              </motion.button>
            </motion.form>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            variants={itemVariants}
          >
            <motion.h3
              className="text-2xl text-black font-bold mb-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Contact us
            </motion.h3>

            <motion.ul
              className="space-y-4 text-white font-medium"
              variants={containerVariants}
            >
              <motion.li
                className="text-black font-bold transition-colors"
                variants={contactInfoVariants}
                custom={0}
              >
                Email:
              </motion.li>
              <motion.li variants={contactInfoVariants} custom={1}>
                <motion.div whileHover="hover" variants={linkVariants}>
                  <a
                    href="mailto:Chairman@manpowernet.work"
                    className="text-black hover:text-primary transition-colors"
                  >
                    Chairman@manpowernet.work
                  </a>
                </motion.div>
              </motion.li>

              <motion.li
                className="text-black font-bold transition-colors mt-6"
                variants={contactInfoVariants}
                custom={2}
              >
                Office Location:
              </motion.li>

              {[
                "17 Somerville Road, Romford, England, RM6 5BD",
                "Al Nahyan - E20 04 - Abu Dhabi - United Arab Emirates",
                "26/2/1 E L Senanayake Veediya, Kandy 20000, Sri Lanka",
                "H2/1, Road: 2, Block: C, Section: 2, Mirpur DOHS, Dhaka-1216.",
              ].map((location, index) => (
                <motion.li
                  key={index}
                  variants={contactInfoVariants}
                  custom={3 + index}
                >
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-primary transition-colors block py-1"
                    >
                      {location}
                    </a>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
