import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaBuilding,
  FaExternalLinkAlt,
  FaMap,
  FaDirections,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const CountryDescription = ({ country, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const getDirectionsUrl = () => {
    const encodedAddress = encodeURIComponent(country.address);
    return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  };

  const openGoogleMaps = () => {
    window.open(country.href, "_blank");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.3,
            }}
            className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="relative h-72 md:h-80 lg:h-96">
              <img
                src={country.bgImage}
                alt={`${country.city} background`}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-6 md:p-8 lg:p-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
                      >
                        <FaGlobe className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Global Office
                        </span>
                      </motion.div>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-ubuntu mb-2 leading-tight">
                        {country.city}
                      </h1>
                      <div className="flex items-center gap-3">
                        <IoLocationSharp className="w-6 h-6 text-yellow-300" />
                        <p className="text-xl md:text-2xl lg:text-3xl font-light font-ubuntu text-yellow-200">
                          {country.name}
                        </p>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={onClose}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors flex-shrink-0"
                    >
                      <FaTimes className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg">
                        <FaBuilding className="w-5 h-5 text-orange-600" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-ubuntu">
                        About Our {country.city} Office
                      </h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {country.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-ubuntu flex items-center gap-2">
                      <span className="w-2 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></span>
                      Contact Information
                    </h3>

                    <div className="space-y-4">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 rounded-2xl border border-yellow-100"
                      >
                        <div className="p-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl flex-shrink-0">
                          <FaMapMarkerAlt className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-500 mb-1">
                            Address
                          </p>
                          <p className="text-gray-800 font-ubuntu text-base md:text-lg">
                            {country.address}
                          </p>
                        </div>
                      </motion.div>

                      {country.phone && (
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 rounded-2xl border border-yellow-100"
                        >
                          <div className="p-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl flex-shrink-0">
                            <FaPhone className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-500 mb-1">
                              Phone
                            </p>
                            <p className="text-gray-800 font-ubuntu text-base md:text-lg">
                              {country.phone}
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {country.email && (
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 rounded-2xl border border-yellow-100"
                        >
                          <div className="p-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl flex-shrink-0">
                            <FaEnvelope className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-500 mb-1">
                              Email
                            </p>
                            <p className="text-gray-800 font-ubuntu text-base md:text-lg">
                              {country.email}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-ubuntu flex items-center gap-2">
                      <span className="w-2 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></span>
                      Location Map
                    </h3>
                    <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full flex items-center gap-1">
                      <FaMap className="w-3 h-3" />
                      Live View
                    </span>
                  </div>

                  <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden border-2 border-yellow-200 shadow-lg group">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 flex items-center justify-center z-10">
                      <div className="text-center p-6 md:p-8">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5, type: "spring" }}
                          className="inline-block p-5 md:p-6 bg-white rounded-2xl shadow-xl mb-4"
                        >
                          <FaMapMarkerAlt className="w-10 h-10 md:w-12 md:h-12 text-red-500" />
                        </motion.div>
                        <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 font-ubuntu">
                          Loading Map...
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base">
                          {country.city}, {country.name}
                        </p>
                      </div>
                    </div>

                    <iframe
                      src={country.href}
                      className="absolute inset-0 w-full h-full border-0 z-20"
                      title={`Google Maps - ${country.city}, ${country.name}`}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ filter: "grayscale(20%) contrast(110%)" }}
                    />

                    <div className="absolute bottom-4 right-4 z-30 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={openGoogleMaps}
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                        title="Open in Google Maps"
                      >
                        <FaExternalLinkAlt className="w-5 h-5 text-gray-700" />
                      </motion.button>
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={getDirectionsUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                        title="Get Directions"
                      >
                        <FaDirections className="w-5 h-5" />
                      </motion.a>
                    </div>

                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full border-4 border-white shadow-2xl flex items-center justify-center">
                          <FaMapMarkerAlt className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute inset-0 animate-ping bg-red-400 rounded-full" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={openGoogleMaps}
                      className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white px-6 md:px-8 py-4 rounded-xl text-base md:text-lg font-semibold font-ubuntu hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-200 group"
                    >
                      <span>Open in Google Maps</span>
                      <FaExternalLinkAlt className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <motion.a
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={getDirectionsUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 md:px-8 py-4 rounded-xl text-base md:text-lg font-semibold font-ubuntu hover:shadow-xl hover:shadow-gray-500/25 transition-all duration-200 group"
                    >
                      <span>Get Directions</span>
                      <FaDirections className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="text-center p-4 bg-yellow-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600 font-ubuntu">
                        24/7
                      </div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600 font-ubuntu">
                        100+
                      </div>
                      <div className="text-sm text-gray-600">Clients</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="h-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"></div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CountryDescription;
