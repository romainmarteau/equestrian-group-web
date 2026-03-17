import React from 'react';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
  return (
    <section id="what" className="bg-beige overflow-hidden">
      <div className="flex flex-col lg:flex-row-reverse min-h-[600px]">
        {/* Right Side: Text */}
        <div className="flex-1 flex flex-col justify-center px-10 py-20 lg:px-24">
          <div className="max-w-xl">
            <h2 className="font-serif font-medium text-4xl md:text-5xl mb-4 leading-tight">What We Do</h2>
            <h3 className="text-xl italic font-sans mb-8 text-forest/70">
              Building strength through connection
            </h3>
            <p className="mb-8">
              In addition to advocacy, The Hamptons Equestrian Group is a space for collaboration and mutual support. We:
            </p>

            <ul className="space-y-6 text-forest leading-relaxed text-sm md:text-base pt-8">
              <li className="flex flex-col pb-4 my-0">
                <p>Create a united voice for the future of equestrian life on the East End</p>
              </li>
              <li className="flex flex-col border-t border-forest/50 py-4 my-0">
                <p>Offer support on zoning, land use, and preservation issues</p>
              </li>
              <li className="flex flex-col border-t border-forest/50 py-4 my-0">
                <p>Connect newcomers with resources and community  </p>
              </li>
              <li className="flex flex-col border-t border-forest/50 py-4 my-0">
                <p>Promote Equestrian Sports</p>
              </li>
            </ul>

            <button
              onClick={() => {
                const section = document.getElementById("how");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="btn-primary mt-12"
            >
              JOIN THE GROUP
            </button>

          </div>
        </div>

        {/* Left Side: Image */}
        <div className="flex-1 relative h-[500px] lg:h-auto overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/what.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
