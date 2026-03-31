import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* ─── Loader ─── */
function Loader({ onDone }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPct(p => {
        const next = p + Math.floor(Math.random() * 9) + 3;
        if (next >= 100) { clearInterval(id); setTimeout(onDone, 400); return 100; }
        return next;
      });
    }, 45);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      id="loader"
    >
      {/* Spinning ring decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="w-24 h-24 rounded-full border border-bpf-sky/20 border-t-bpf-sky absolute"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(0deg)', marginTop: '-60px' }}
      />

      {/* Logo */}
      <div className="flex flex-col items-center gap-3 z-10">
        <img
          src="https://static.wixstatic.com/media/936eaf_96ff569a97894b3881b3e0e6f80c5734~mv2.png/v1/fill/w_980,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BPF%20Full%20White.png"
          alt="Bipolar Factory"
          className="h-8 object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
            document.getElementById('loader-fallback-name').style.display = 'block';
          }}
        />
        <span
          id="loader-fallback-name"
          className="hidden font-display font-bold text-white text-xl tracking-widest"
        >
          BIPOLAR FACTORY
        </span>
        <p className="text-white/30 text-xs font-mono tracking-[0.3em] uppercase">
          Dedicated Technology Partner
        </p>
      </div>

      {/* Progress */}
      <div className="flex flex-col items-center gap-2 mt-10 z-10">
        <div className="loader-bar">
          <motion.div
            className="loader-fill"
            style={{ width: `${pct}%` }}
          />
        </div>
        <motion.span
          key={pct}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white/30 text-xs font-mono"
        >
          {Math.min(pct, 100)}%
        </motion.span>
      </div>
    </motion.div>
  );
}

/* ─── Scroll-reveal hook ─── */
function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.08, rootMargin: '-40px' }
    );
    document.querySelectorAll('.reveal, .stagger').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Back to top ─── */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-hover
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-bpf-blue text-white shadow-lg flex items-center justify-center hover:bg-bpf-sky transition-colors"
          style={{ boxShadow: '0 4px 24px rgba(21,101,192,0.4)' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ─── Main App ─── */
export default function App() {
  const [loading, setLoading] = useState(true);
  useScrollReveal();

  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Loader */}
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Site content */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Cursor />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Products />
              <Services />
              <Impact />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
