import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HERO_IMG = 'https://static.wixstatic.com/media/11062b_43ccb85d721942cc9a98ef7c42308636f000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_43ccb85d721942cc9a98ef7c42308636f000.jpg';

const STATS = [
  { value: '2020', label: 'Founded' },
  { value: '4+', label: 'Years of Innovation' },
  { value: '6+', label: 'Industries Served' },
  { value: '3', label: 'Flagship Products' },
];

const TICKER_ITEMS = [
  'AI & Deep Learning', '✦', 'IoT Solutions', '✦', 'NVIDIA Inception Program', '✦',
  'Make in India', '✦', 'Retail Analytics', '✦', 'Metaverse Development', '✦',
  'Bihar Election Commission', '✦', 'Digital Transformation', '✦', 'SaaS Products', '✦',
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Parallax BG */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src={HERO_IMG}
          alt="Innovation"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        {/* Blue gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(13,27,42,0.95) 0%, rgba(21,101,192,0.75) 60%, rgba(0,172,193,0.4) 100%)'
        }} />
      </motion.div>

      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb w-80 h-80 bg-blue-400" style={{ top: '10%', left: '5%', animationDelay: '0s' }} />
        <div className="orb w-64 h-64 bg-cyan-400" style={{ top: '50%', right: '8%', animationDelay: '2s' }} />
        <div className="orb w-48 h-48 bg-blue-300" style={{ bottom: '15%', left: '40%', animationDelay: '1s' }} />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-white text-center px-6 pt-24 pb-16 max-w-6xl mx-auto w-full"
      >
        {/* NVIDIA Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-white/80">NVIDIA Inception Program Member</span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
          >
            Innovations of
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.52, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-[0.95] tracking-tight"
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              WebkitTextStroke: '2px rgba(255,255,255,0.5)',
              color: 'transparent',
            }}
          >
            Tomorrow.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10 font-light"
        >
          We are a collective of forward-thinking minds — harnessing <strong className="text-white font-medium">AI, IoT, and cutting-edge technology</strong> to build
          products that don't just solve problems, but elevate everyday living. Based in Coimbatore. Built for the world.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base px-8 py-4"
            data-hover
          >
            Explore Our Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            data-hover
            className="flex items-center gap-2 text-white/80 hover:text-white text-base font-medium transition-colors"
          >
            <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Our Story
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-3xl"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.08 }}
              className="text-center border-l border-white/15 pl-4 first:border-l-0 first:pl-0"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-white/50 mt-1 tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll to explore</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Ticker */}
      <div className="ticker-band relative z-10">
        <div className="marquee-track items-center gap-10">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="text-white/60 text-xs font-mono tracking-wider whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
