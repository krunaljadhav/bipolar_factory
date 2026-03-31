import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Products', id: 'products' },
  { label: 'Services', id: 'services' },
  { label: 'Impact', id: 'impact' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 50);
    if (y > 120 && y > lastY.current + 5) setHidden(true);
    else if (y < lastY.current - 5) setHidden(false);
    lastY.current = y;

    const sections = NAV_LINKS.map(l => document.getElementById(l.id));
    sections.forEach((sec, i) => {
      if (!sec) return;
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom > 80) setActive(NAV_LINKS[i].id);
    });
  });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -80 : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/92 backdrop-blur-xl shadow-sm border-b border-blue-50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.01 }}
            data-hover
          >
            <img
              src="https://static.wixstatic.com/media/936eaf_32c19f5512004018aaf19c50d8cd0b99~mv2.png/v1/fill/w_980,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BPF%20Full%20Blaclk.png"
              alt="Bipolar Factory"
              className={`h-7 md:h-8 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 absolute'}`}
            />
            <img
              src="https://static.wixstatic.com/media/936eaf_96ff569a97894b3881b3e0e6f80c5734~mv2.png/v1/fill/w_980,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BPF%20Full%20White.png"
              alt="Bipolar Factory"
              className={`h-7 md:h-8 transition-opacity duration-300 ${scrolled ? 'opacity-0 absolute' : 'opacity-100'}`}
            />
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                data-hover
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === link.id
                    ? (scrolled ? 'text-bpf-blue' : 'text-white')
                    : (scrolled ? 'text-bpf-muted hover:text-bpf-blue' : 'text-white/70 hover:text-white')
                }`}
              >
                {link.label}
                {/* Active underline */}
                <motion.span
                  layoutId="nav-active"
                  className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-bpf-sky`}
                  animate={{ width: active === link.id ? '60%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:flex items-center gap-3"
          >
            <motion.a
              href="mailto:hello@bipolarfactory.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              data-hover
              className="btn-primary text-sm px-5 py-2.5"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Burger */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col justify-center gap-1.5 w-9 h-9 p-1"
            data-hover
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45, y: 8 }
                    : i === 1 ? { opacity: 0, scaleX: 0 }
                    : { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.25 }}
                className={`block h-0.5 ${
                  scrolled ? 'bg-bpf-navy' : 'bg-white'
                } ${i === 1 ? 'w-4' : 'w-6'}`}
              />
            ))}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 w-72 bg-white z-40 shadow-2xl flex flex-col pt-20 pb-8 px-6"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                    active === link.id
                      ? 'bg-bpf-light text-bpf-blue'
                      : 'text-bpf-text hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            <div className="mt-auto">
              <a href="mailto:hello@bipolarfactory.com" className="btn-primary w-full justify-center">
                Get in Touch →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
        />
      )}
    </>
  );
}
