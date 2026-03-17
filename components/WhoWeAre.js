import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const items = [
  { icon: '/icon-grid-1.svg', label: 'RIDERS' },
  { icon: '/icon-grid-2.svg', label: 'TRAINERS' },
  { icon: '/icon-grid-3.svg', label: 'GROOMS / BARN STAFF' },
  { icon: '/icon-grid-4.svg', label: 'SHOW ORGANIZERS' },
  { icon: '/icon-grid-5.svg', label: 'INDUSTRY PROS' },
  { icon: '/icon-grid-6.svg', label: 'FARM OWNERS' },
];

const WhoWeAre = () => {
  return (
    <section id="who" className="bg-sage py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-forest uppercase tracking-[0.2em] text-sm font-semibold mb-4">Who we are</p>
        <h2 className="font-serif font-medium text-forest text-4xl md:text-6xl mb-20 max-w-2xl mx-auto leading-tight">
          East End <br /> Equestrian Group
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-forest tracking-widest text-[10px] md:text-xs font-bold uppercase text-center max-w-[150px]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => {
            const section = document.getElementById("how");
            if (section) {
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="btn-primary mt-20"
        >
          JOIN THE GROUP
        </button>

      </div>
    </section>
  );
};

export default WhoWeAre;
