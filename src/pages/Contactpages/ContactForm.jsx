import React, { useState } from "react";
import {
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";
import { Industries } from "../../data/Industries";
import { motion } from "framer-motion";
import CommonBackground from "../../components/CommonBackground";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const officeLocations = [
    {
      city: "London, England",
      address: "17 Somerville Road, Romford, England, RM6 5BD",
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      city: "Dubai, UAE",
      address: "Al Nahyan - E20 04 - Abu Dhabi - United Arab Emirates",
      icon: <FaBuilding className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
    },
    {
      city: "Kandy, Sri Lanka",
      address: "26/2/1 E L Senanayake Veediya, Kandy 20000, Sri Lanka",
      icon: <FaGlobe className="w-5 h-5" />,
      color: "from-yellow-500 to-red-500",
    },
    {
      city: "Dhaka, Bangladesh",
      address: "H2/1, Road: 2, Block: C, Section: 2, Mirpur DOHS, Dhaka-1216",
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <CommonBackground>
      <div id="contact-form" className="container mx-auto px-4 relative z-10">
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
            Contact{" "}
            <span className="text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text">
              Us
            </span>
          </motion.h3>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto rounded-full mb-8"
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
            Get in touch with our team for recruitment services, staffing
            solutions, or any inquiries. We're here to help you find the perfect
            talent match.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants} className="group relative">
            <div className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200/50 shadow-xl overflow-hidden h-full">
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-red-500/20 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.8 }}
              />

              <div className="relative z-10">
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                  className="flex justify-center mb-6"
                >
                  <div className="p-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full">
                    <div className="text-white text-2xl">
                      <FaPaperPlane />
                    </div>
                  </div>
                </motion.div>

                <motion.h2
                  className="text-2xl font-bold mb-6 text-center text-transparent bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text font-ubuntu"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Send Us a Message
                </motion.h2>

                <form
                  action="https://formsubmit.co/9352e79a91ce748f9489d0c72dbcc46b"
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-ubuntu">
                      Industry *
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-yellow-200/50 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 font-ubuntu"
                      name="industry"
                      defaultValue=""
                      required
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
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-ubuntu">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-yellow-200/50 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 font-ubuntu"
                        placeholder="John"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-ubuntu">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-yellow-200/50 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 font-ubuntu"
                        placeholder="Doe"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-ubuntu">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-yellow-200/50 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 font-ubuntu"
                      placeholder="+1 (555) 123-4567"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-ubuntu">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-yellow-200/50 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 font-ubuntu"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-ubuntu">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-yellow-200/50 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 resize-none font-ubuntu"
                      placeholder="Tell us about your recruitment needs..."
                    />
                  </motion.div>

                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Contact Form Submission"
                  />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://manpowernet.work"
                  />

                  <motion.button
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white rounded-xl font-semibold font-ubuntu text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-200 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <FaPaperPlane className="w-5 h-5" />
                        </motion.span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="group relative">
            <div className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200/50 shadow-xl overflow-hidden h-full">
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-red-500/20 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.8 }}
              />

              <div className="relative z-10">
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                  className="flex justify-center mb-6"
                >
                  <div className="p-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full">
                    <div className="text-white text-2xl">
                      <FaEnvelope />
                    </div>
                  </div>
                </motion.div>

                <motion.h2
                  className="text-2xl font-bold mb-8 text-center text-transparent bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text font-ubuntu"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Get In Touch
                </motion.h2>

                <div className="space-y-8">
                  <motion.div
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="group"
                  >
                    <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 rounded-2xl border border-yellow-100 hover:border-yellow-200 transition-all duration-200">
                      <motion.div
                        variants={iconVariants}
                        whileHover="hover"
                        className="p-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-xl flex-shrink-0"
                      >
                        <FaEnvelope className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 font-ubuntu">
                          Email Us
                        </h4>
                        <a
                          href="mailto:Chairman@manpowernet.work"
                          className="text-orange-600 hover:text-orange-700 transition-colors font-medium font-ubuntu"
                        >
                          Chairman@manpowernet.work
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="group"
                  >
                    <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 rounded-2xl border border-yellow-100 hover:border-yellow-200 transition-all duration-200">
                      <motion.div
                        variants={iconVariants}
                        whileHover="hover"
                        className="p-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-xl flex-shrink-0"
                      >
                        <FaPhone className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 font-ubuntu">
                          Call Us
                        </h4>
                        <p className="text-gray-600 font-ubuntu">
                          Available 24/7 for urgent inquiries
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <div>
                    <motion.h3
                      variants={itemVariants}
                      className="text-xl font-bold text-gray-900 mb-6 font-ubuntu"
                    >
                      Our Global Offices
                    </motion.h3>
                    <div className="space-y-4">
                      {officeLocations.map((office, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          custom={index}
                          whileHover="hover"
                          whileTap="tap"
                          className="group"
                        >
                          <div className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-xl p-5 border border-yellow-200/50 shadow-sm hover:shadow-md transition-all duration-200">
                            <div className="flex items-start gap-4">
                              <motion.div
                                variants={iconVariants}
                                whileHover="hover"
                                className={`p-3 bg-gradient-to-r ${office.color} rounded-lg flex-shrink-0`}
                              >
                                {office.icon}
                              </motion.div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-1 font-ubuntu">
                                  {office.city}
                                </h4>
                                <p className="text-gray-600 text-sm font-ubuntu">
                                  {office.address}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </CommonBackground>
  );
}
