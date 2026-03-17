import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="banner-intro absolute inset-0 z-0"
      >
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/90 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 font-medium"
        >
          Our Mission
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-5xl md:text-7xl lg:text-6xl leading-[1.1] mb-12"
        >
          (Github Romain) Uniting the Equestrian <br className="hidden md:block" /> Voice of the East End
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-sage/80 hover:bg-sage text-forest px-10 py-4 rounded-md transition-all duration-300 uppercase tracking-widest text-xs font-bold backdrop-blur-sm">
            Join the Group
          </button>
        </motion.div>
      </div>

      {/* Social / Scroll Indicator (Subtle) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/50">
        <div className="w-[1px] h-12 bg-white/20 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
