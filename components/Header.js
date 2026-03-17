import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false); // Close menu if open
    const element = document.getElementById(id);
    if (element) {
      // Offset for the fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { label: 'Who we are', id: 'who' },
    { label: 'Why we exist', id: 'why' },
    { label: 'What we do', id: 'what' },
    { label: 'How to join', id: 'how' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12 ${isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
          }`}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo / Title (Always visible) */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`font-serif text-lg md:text-xl font-medium cursor-pointer ${isScrolled || isMobileMenuOpen ? 'text-forest' : 'text-forest'
              }`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            East End Equestrian
          </motion.div>

          {/* Desktop Nav Items (Hidden < 1200px) */}
          <div className={`hidden min-[1200px]:flex items-center gap-10 text-base font-bold uppercase tracking-widest ${isScrolled ? 'text-forest' : 'text-forest'
            }`}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:opacity-60 transition-opacity cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                const section = document.getElementById("how");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className={`border px-6 py-2.5 rounded-md transition-all ${isScrolled
                ? "border-forest text-forest hover:bg-forest hover:text-white"
                : "border-forest text-forest hover:bg-forest hover:text-white"
                }`}
            >
              Join
            </button>
          </div>

          {/* Mobile Hamburger Button (Visible < 1200px) */}
          <button
            className={`min-[1200px]:hidden p-2 -mr-2 ${isScrolled || isMobileMenuOpen ? 'text-forest' : 'text-forest'
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 flex flex-col min-[1200px]:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-serif text-forest mt-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left py-2 border-b border-forest/10 hover:ml-4 transition-all duration-300"
                >
                  {link.label}
                </button>
              ))}
<button
  onClick={() => scrollToSection("how")}
  className="btn-primary mt-8 w-full"
>
  Join
</button>
            </div>

            <div className="mt-auto pb-8 text-center text-forest/40 text-xs tracking-widest uppercase">
              East End Equestrian Group
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
