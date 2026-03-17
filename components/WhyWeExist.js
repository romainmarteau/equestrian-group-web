import React from 'react';
import { motion } from 'framer-motion';

const WhyWeExist = () => {
  return (
    <section id="why" className="bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Side: Text */}
        <div className="flex-1 flex flex-col justify-center px-10 py-20 lg:px-24">
          <div className="max-w-xl">
            <h2 className="font-serif font-medium text-4xl md:text-5xl mb-4 leading-tight">Why We Exist</h2>
            <h3 className="text-xl italic font-sans mb-8 text-forest/70">
              Because one voice isn’t enough anymore
            </h3>
            <p className="mb-8">
              In the past 20–30 years, many local horse farms have shut down — pushed out by development pressures, zoning restrictions, and lack of public support. As individuals, it’s hard to push back. As a group, we are stronger.
            </p>

            <ul className="space-y-6 text-forest leading-relaxed text-sm md:text-base pt-8">
              <li className="flex flex-col pb-4 my-0">
                <p>Raise awareness about the importance of the horse industry</p>
              </li>
              <li className="flex flex-col border-t border-forest/50 py-4 my-0">
                <p>Advocate for equestrian-friendly policies</p>
              </li>
              <li className="flex flex-col border-t border-forest/50 py-4 my-0">
                <p>Promote open space and agricultural land preservation</p>
              </li>
              <li className="flex flex-col border-t border-forest/50 py-4 my-0">
                <p>Support each other and share resources</p>
              </li>
              <li className="flex flex-col border-t border-forest/50 py-4 my-0">
                <p>Together, we can protect the future of equestrian life on the East End.</p>
              </li>
            </ul>

            <button className="btn-primary mt-12">
              MAKE A DIFFERENCE
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 relative h-[400px] lg:h-auto overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/why-we-exist.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;
