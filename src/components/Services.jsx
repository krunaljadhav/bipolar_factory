import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SERVICES = [
  {
    icon: '🔬',
    title: 'Technical Consulting',
    short: 'Strategic tech guidance',
    desc: 'Gain access to our wellspring of technical expertise. Our consultants offer strategies tailored uniquely to your business challenges — navigating complexity so you don\'t have to.',
    points: ['Architecture Review', 'Technology Roadmap', 'Stack Selection', 'Risk Assessment'],
    color: '#1565C0',
    bg: '#E3F2FD',
  },
  {
    icon: '🔄',
    title: 'Digital Transformation',
    short: 'Redefine how you operate',
    desc: 'With comprehensive transformation strategies, effectively redefine how you operate and deliver value. We guide organizations from legacy systems to future-ready infrastructure.',
    points: ['Process Automation', 'Legacy Modernisation', 'Cloud Migration', 'Workflow Redesign'],
    color: '#00ACC1',
    bg: '#E0F7FA',
  },
  {
    icon: '🧪',
    title: 'Research & Development',
    short: 'Stay ahead of the curve',
    desc: 'Stay ahead with our dedicated research services, diving deep into tech trends and emerging fields — AI, IoT, metaverse, and beyond — to give you a lasting competitive edge.',
    points: ['AI/ML Research', 'IoT Exploration', 'Emerging Tech', 'Market Intelligence'],
    color: '#7C3AED',
    bg: '#EDE9FE',
  },
  {
    icon: '⚡',
    title: 'Custom App Development',
    short: 'Your vision, precisely built',
    desc: 'Bring your vision to life with custom applications meticulously crafted to fit your business needs. Web apps, mobile apps, SaaS platforms — built to exceed expectations.',
    points: ['Web Applications', 'Mobile Apps (iOS/Android)', 'SaaS Platforms', 'API Development'],
    color: '#FF6B2B',
    bg: '#FFF3EE',
  },
];

const INDUSTRIES = [
  { icon: '🛍️', name: 'Retail', desc: 'AI-powered analytics for brick-and-mortar stores' },
  { icon: '🏭', name: 'Manufacturing', desc: 'IoT automation for MSMEs in India' },
  { icon: '✈️', name: 'Civil Aviation', desc: 'Precision solutions for aviation operations' },
  { icon: '🚦', name: 'Road Safety', desc: 'Smart surveillance and accident prevention' },
  { icon: '🎬', name: 'Entertainment', desc: 'Metaverse & streaming innovation' },
  { icon: '🎨', name: 'Content Creation', desc: 'Tools for modern digital creators' },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const indRef = useRef(null);
  const indInView = useInView(indRef, { once: true, margin: '-80px' });

  return (
    <section id="services" className="bg-bpf-gray py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16" ref={ref}>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="section-label mb-4"
            >
              Technology Partnership
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="font-display font-bold text-bpf-navy"
              style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}
            >
              Elevate Your{' '}
              <span className="text-gradient">Tech Game</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-bpf-muted text-sm leading-relaxed"
          >
            At Bipolar Factory, we extend beyond conventional products. We are your{' '}
            <strong className="text-bpf-blue">dedicated technology partner</strong>, collaborating closely
            with clients to transform aspirations into reality — navigating the entire development lifecycle
            with you.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-24">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i + 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-blue-50 card-hover group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: svc.bg }}
                >
                  {svc.icon}
                </div>
                <span
                  className="text-xs font-mono tracking-wider uppercase px-3 py-1 rounded-full"
                  style={{ background: svc.bg, color: svc.color }}
                >
                  {svc.short}
                </span>
              </div>

              <h3 className="font-display font-bold text-bpf-navy text-xl mb-3">{svc.title}</h3>
              <p className="text-bpf-muted text-sm leading-relaxed mb-5">{svc.desc}</p>

              {/* Points */}
              <div className="grid grid-cols-2 gap-2">
                {svc.points.map(p => (
                  <div key={p} className="flex items-center gap-2 text-xs text-bpf-muted">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: svc.bg }}>
                      <svg className="w-2.5 h-2.5" style={{ color: svc.color }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                    </span>
                    {p}
                  </div>
                ))}
              </div>

              {/* Bottom hover arrow */}
              <div className="flex justify-end mt-5">
                <motion.div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: svc.bg, color: svc.color }}
                  animate={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries */}
        <div ref={indRef}>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={indInView ? { opacity: 1 } : {}}
              className="section-label justify-center mb-4"
            >
              Industries We Serve
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={indInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="font-display font-bold text-bpf-navy"
              style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}
            >
              Our Solutions Know No Boundaries
            </motion.h2>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 stagger ${indInView ? 'visible' : ''}`}>
            {INDUSTRIES.map(ind => (
              <div key={ind.name} className="bg-white rounded-2xl p-6 text-center border border-blue-50 card-hover">
                <div className="text-4xl mb-3">{ind.icon}</div>
                <h4 className="font-display font-semibold text-bpf-navy mb-1">{ind.name}</h4>
                <p className="text-bpf-muted text-xs leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
