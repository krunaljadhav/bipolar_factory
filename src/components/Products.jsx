import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const PRODUCTS = [
  {
    id: 'oly-store-sync',
    badge: 'Retail AI',
    badgeColor: 'bg-blue-100 text-bpf-blue',
    name: 'OLY Store Sync',
    tagline: 'Turn Every Camera Into a Business Intelligence Engine',
    desc: 'An advanced retail analytics SaaS solution that unlocks the full potential of your existing security cameras — going beyond basic image capture to deliver unparalleled business insights.',
    img: 'https://static.wixstatic.com/media/936eaf_dfaabf7f924a45dfbd4013ff05b7ec75f003.jpg/v1/fill/w_800,h_600,al_c,q_90,enc_avif,quality_auto/936eaf_dfaabf7f924a45dfbd4013ff05b7ec75f003.jpg',
    features: [
      { icon: '👁️', label: 'AI-Powered Foot Traffic Analysis' },
      { icon: '🔥', label: 'Heat Mapping & Dwell Time' },
      { icon: '👤', label: 'Demographics & Path Analysis' },
      { icon: '📊', label: 'Real-time Conversion Rates' },
      { icon: '🚨', label: 'Theft & Fire Detection' },
      { icon: '📷', label: 'Camera Health Monitoring' },
    ],
    deployed: ['Max Stores'],
    deployedLogos: ['https://static.wixstatic.com/media/936eaf_dcf693a6b69a49038f61323bf01f6404~mv2.jpg/v1/fill/w_200,h_80,al_c,q_80,enc_avif,quality_auto/Oly%20Clientele-07.jpg'],
    link: 'https://www.oly.live/',
    accent: '#1565C0',
    accentLight: '#E3F2FD',
  },
  {
    id: 'oly-control-center',
    badge: 'VMS Platform',
    badgeColor: 'bg-cyan-100 text-bpf-cyan',
    name: 'OLY Control Center',
    tagline: 'Centralized Intelligence for Your Entire Camera Network',
    desc: 'An enterprise-grade Video Management System unlike anything before. Data-driven design with a customisable dashboard — operating seamlessly alongside Store Sync or standalone, integrated with your existing suite.',
    img: 'https://static.wixstatic.com/media/936eaf_f7ce531772954ecdac275c8135e27945f003.jpg/v1/fill/w_800,h_600,al_c,q_90,enc_avif,quality_auto/936eaf_f7ce531772954ecdac275c8135e27945f003.jpg',
    features: [
      { icon: '🎛️', label: 'Unified Camera Control' },
      { icon: '📡', label: 'Live Widgets Dashboard' },
      { icon: '💾', label: 'Recording & Smart Storage' },
      { icon: '🗺️', label: 'Interactive Map View' },
      { icon: '🔌', label: 'Open API Integration' },
      { icon: '🏢', label: 'Multi-site Management' },
    ],
    deployed: ['Election Commission of India', 'Govt. of Tamil Nadu'],
    deployedLogos: [
      'https://static.wixstatic.com/media/936eaf_a2cf298a754d4defab9589fdb19c4a01~mv2.png/v1/fill/w_200,h_160,al_c,q_85,enc_avif,quality_auto/936eaf_a2cf298a754d4defab9589fdb19c4a01~mv2.png',
      'https://static.wixstatic.com/media/936eaf_53a844a06a144a71b9170c651e466fa8~mv2.png/v1/fill/w_200,h_160,al_c,q_85,enc_avif,quality_auto/936eaf_53a844a06a144a71b9170c651e466fa8~mv2.png',
    ],
    link: 'https://www.oly.live/',
    accent: '#00ACC1',
    accentLight: '#E0F7FA',
  },
  {
    id: 'metawood',
    badge: 'Metaverse',
    badgeColor: 'bg-purple-100 text-purple-700',
    name: 'Metawood',
    tagline: 'The Future of Entertainment is Immersive & Decentralised',
    desc: 'A pioneering fusion of a gamified streaming platform and a decentralized creator economy — harnessing metaverse and VR to redefine entertainment. Users connect, create avatars, attend live events, and participate in a decentralised economy.',
    img: 'https://static.wixstatic.com/media/936eaf_04f24dab0a6243689088e6559a2f13f6f003.jpg/v1/fill/w_800,h_600,al_c,q_90,enc_avif,quality_auto/936eaf_04f24dab0a6243689088e6559a2f13f6f003.jpg',
    features: [
      { icon: '🎮', label: 'Single-player Story Mode' },
      { icon: '🎬', label: 'Watch Party & Virtual Theater' },
      { icon: '🌐', label: 'Free Roam Metaverse World' },
      { icon: '💰', label: 'Decentralised Creator Economy' },
      { icon: '🎭', label: 'Live Events & Concerts' },
      { icon: '🥽', label: 'VR-Ready Experience' },
    ],
    deployed: [],
    link: 'https://www.themetawood.com/',
    accent: '#7C3AED',
    accentLight: '#EDE9FE',
  },
];

function ProductCard({ product, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${isEven ? '' : 'md:[&>div:first-child]:order-2'}`}
    >
      {/* Image */}
      <div className={`img-zoom rounded-2xl overflow-hidden shadow-xl`}
        style={{ boxShadow: `0 24px 64px ${product.accent}20` }}>
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-72 md:h-96 object-cover"
          onError={(e) => {
            e.target.src = `https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80`;
          }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to top, ${product.accent}30, transparent)`
        }} />
      </div>

      {/* Content */}
      <div className={isEven ? '' : 'md:order-1'}>
        <div className="flex items-center gap-3 mb-4">
          <span className={`product-badge ${product.badgeColor}`}>{product.badge}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
        </div>

        <h3 className="font-display font-bold text-bpf-navy mb-2"
          style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', lineHeight: '1.15' }}>
          {product.name}
        </h3>
        <p className="font-semibold mb-4" style={{ color: product.accent }}>
          {product.tagline}
        </p>
        <p className="text-bpf-muted text-sm leading-relaxed mb-7">
          {product.desc}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-2.5 mb-8">
          {product.features.map(f => (
            <div key={f.label} className="flex items-center gap-2.5 bg-bpf-gray rounded-xl px-3.5 py-2.5">
              <span className="text-base">{f.icon}</span>
              <span className="text-xs font-medium text-bpf-text">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Deployed by */}
        {product.deployed.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-mono text-bpf-muted tracking-wider uppercase mb-3">
              Deployed by
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {product.deployed.map((d, i) => (
                <div key={d} className="flex items-center gap-2 bg-white rounded-lg border border-gray-100 px-3 py-2 shadow-sm">
                  {product.deployedLogos?.[i] && (
                    <img
                      src={product.deployedLogos[i]}
                      alt={d}
                      className="h-6 object-contain"
                      onError={(e) => e.target.style.display='none'}
                    />
                  )}
                  <span className="text-xs font-medium text-bpf-text">{d}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex"
          data-hover
          style={{ background: `linear-gradient(135deg, ${product.accent}, ${product.accent}cc)` }}
        >
          Visit {product.name}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="products" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-20" ref={ref}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-label justify-center mb-4"
          >
            Our Products
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display font-bold text-bpf-navy mb-4"
            style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}
          >
            Our Tech, Your{' '}
            <span className="text-gradient">Odyssey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.28 }}
            className="text-bpf-muted max-w-xl mx-auto text-sm leading-relaxed"
          >
            Each product is crafted to not only meet current market demands but to propel users into the forefront
            of their industries. Discover how our solutions can transform your operational landscape.
          </motion.p>
        </div>

        {/* Product cards */}
        <div className="space-y-28">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
