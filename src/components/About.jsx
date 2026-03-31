import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TIMELINE = [
  {
    year: '2020',
    title: 'The Beginning',
    desc: 'Karthick Loganathan and Vivek Manoharan founded Bipolar Factory in Coimbatore, recognizing that insurmountable challenges are simply opportunities waiting for the right idea.',
    icon: '🚀',
  },
  {
    year: '2021',
    title: 'First Products Take Shape',
    desc: 'OLY platform takes root — building the vision for AI-powered retail analytics. The team begins serving MSMEs in Tamil Nadu with IoT automation solutions.',
    icon: '⚙️',
  },
  {
    year: '2022',
    title: 'Going Deeper into AI',
    desc: 'Deep learning pipelines deployed for CCTV analytics and Video Management Systems. The Bihar Election Commission project begins — a landmark in democratic transparency.',
    icon: '🧠',
  },
  {
    year: '2023',
    title: 'National Recognition',
    desc: 'Delivered automated vote-counting for Bihar State Election Commission. Metawood enters development — a gamified metaverse streaming platform. NVIDIA Inception Program membership secured.',
    icon: '🏆',
  },
  {
    year: '2024',
    title: 'Scale & Global Vision',
    desc: 'OLY Store Sync deployed at Max Stores. OLY Control Center adopted by Tamil Nadu Government. Road safety and civil aviation projects launched. The "Make in India for the World" vision crystallizes.',
    icon: '🌏',
  },
];

const VALUES = [
  { icon: '💡', title: 'Innovation', desc: 'Pioneering solutions that redefine industries. We never settle for what already exists.' },
  { icon: '🎯', title: 'Quality', desc: 'Delivering excellence in every product and service, every single time.' },
  { icon: '📚', title: 'Continuous Learning', desc: 'Adapting and evolving in a dynamic technology landscape — curiosity is our compass.' },
  { icon: '🤝', title: 'Commitment', desc: 'Putting our customers at the heart of everything we do, always.' },
  { icon: '🔥', title: 'Passion', desc: 'Infusing genuine enthusiasm into every line of code, every design, every interaction.' },
  { icon: '🌱', title: 'Humility', desc: 'Embracing the learning journey with an open mind — we\'re proud underdogs.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const tlRef = useRef(null);
  const tlInView = useInView(tlRef, { once: true, margin: '-60px' });

  return (
    <section id="about" className="bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 70% 30%, #1565C0 0%, transparent 60%)',
      }} />

      {/* ─── Story Intro ─── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label mb-6"
            >
              Our Story
            </motion.div>
            <div className="overflow-hidden mb-4">
              <motion.h2
                initial={{ y: 60 }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold leading-tight"
                style={{ fontSize: 'clamp(2.4rem,5vw,4rem)' }}
              >
                We Build For{' '}
                <span className="text-gradient">People.</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-bpf-muted text-base leading-relaxed mb-6"
            >
              We are Bipolar Factory — a dynamic force in the world of innovation, established in 2020.
              We are not just a company; we are <strong className="text-bpf-text">a collective of dreamers, thinkers, and doers.</strong>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.42, duration: 0.6 }}
              className="text-bpf-muted text-base leading-relaxed mb-8"
            >
              Our journey began with the recognition that seemingly insurmountable challenges are opportunities
              waiting for the right idea. We strive to be the catalyst — transforming ideas into products that
              elevate everyday living and create positive, lasting change.
            </motion.p>

            {/* Mission card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 }}
              className="bg-gradient-to-br from-bpf-light to-bpf-pale rounded-2xl p-6 border border-blue-100"
            >
              <div className="flex items-start gap-3">
                <div className="value-icon flex-shrink-0">🎯</div>
                <div>
                  <p className="font-display font-semibold text-bpf-navy text-lg mb-2">Our Mission</p>
                  <p className="text-bpf-muted text-sm leading-relaxed">
                    To be the torchbearers of <strong className="text-bpf-blue">Make in India products on a global scale</strong> —
                    providing industry leaders with innovative ideas, taking calculated risks, and achieving exponential growth.
                    With a spirit that combines fun and professionalism, we navigate the path as underdogs, creating a captivating
                    yet accessible narrative.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: image + badges */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="img-zoom rounded-2xl overflow-hidden shadow-2xl shadow-blue-100">
              <img
                src="https://static.wixstatic.com/media/936eaf_483213d65f1d4ee39bb3a8627f990a06~mv2.png/v1/fill/w_980,h_618,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/936eaf_483213d65f1d4ee39bb3a8627f990a06~mv2.png"
                alt="Bipolar Factory Team"
                className="w-full h-72 md:h-96 object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80';
                }}
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg border border-blue-100 px-4 py-3 flex items-center gap-2"
            >
              <span className="text-2xl">🏭</span>
              <div>
                <p className="font-display font-bold text-bpf-navy text-sm">Founded 2020</p>
                <p className="text-xs text-bpf-muted">Coimbatore, India</p>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-bpf-blue rounded-xl shadow-lg px-4 py-3 flex items-center gap-2 text-white"
            >
              <span className="text-2xl">🟢</span>
              <div>
                <p className="font-display font-bold text-sm">NVIDIA Inception</p>
                <p className="text-xs text-blue-200">Program Member</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ─── Values Grid ─── */}
      <div className="bg-bpf-gray py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-4">Core Values</div>
            <h2 className="font-display font-bold text-bpf-navy" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              What Drives Us
            </h2>
          </div>
          <div className={`grid md:grid-cols-3 gap-5 stagger ${inView ? 'visible' : ''}`}>
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-blue-50 card-hover">
                <div className="value-icon mb-4">{v.icon}</div>
                <h3 className="font-display font-semibold text-bpf-navy text-lg mb-2">{v.title}</h3>
                <p className="text-bpf-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Timeline ─── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20" ref={tlRef}>
        <div className="text-center mb-14">
          <div className="section-label justify-center mb-4">Our Journey</div>
          <h2 className="font-display font-bold text-bpf-navy" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            5 Years of Building Tomorrow
          </h2>
          <p className="text-bpf-muted mt-3 max-w-xl mx-auto text-sm">
            From a bold idea in 2020 to a nationally recognized technology partner — here's how we got here.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bpf-sky via-bpf-blue to-transparent" />

          <div className="space-y-10">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                animate={tlInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className="flex gap-8 pl-16 relative"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-bpf-light border-2 border-bpf-sky flex items-center justify-center text-lg">
                  {item.icon}
                </div>
                <div className="flex-1 pb-2">
                  <div className="chip mb-2">{item.year}</div>
                  <h3 className="font-display font-semibold text-bpf-navy text-lg mb-1">{item.title}</h3>
                  <p className="text-bpf-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
