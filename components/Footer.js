import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-forest text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto border-t border-white/10  pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/30">
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-16">
        {/* Left Side: Text */}
        <div className="md:w-1/3 text-center md:text-left flex flex-col justify-center">
          <h3 className="text-2xl mb-6">East End Equestrian Group</h3>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            A coalition of equestrians, property owners, professionals and enthusiasts dedicated to developing, preserving, and promoting the horse industry on the East End
          </p>
        </div>

        {/* Center: Logo */}
        <div className="md:w-1/3 flex justify-center items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 relative">
            <Image
              src="/logo.svg"
              alt="East End Equestrian Group Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Side: Contact */}
        <div className="md:w-1/3 text-center md:text-right flex flex-col justify-center md:items-end">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact Us</h4>
          <a
            href="mailto:info@eastendequestrian.com"
            className="text-white/60 hover:text-white transition-colors text-sm"
          >
            info@eastendequestriangroup.com
          </a>
          <div className="mt-8 flex justify-center md:justify-end gap-6 text-white/40">
            {/* Simple social icons placeholders */}
            {/*
            <div className="w-5 h-5 border border-white/20 rounded-sm" />
            <div className="w-5 h-5 border border-white/20 rounded-sm" />
*/}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
