import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CASE_STUDY = {
  badge: 'Case Study — Bihar State Election Commission',
  title: 'Automating Vote Counting for India\'s Democracy',
  subtitle: 'How Bipolar Factory brought AI-driven transparency to one of the world\'s largest democratic exercises.',
  img: 'https://static.wixstatic.com/media/936eaf_fef69f91aac349d9a3652b5ce5dbc3fc~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85,enc_avif,quality_auto/414420-election-commission.jpg',
  context: 'The Bihar State Election Commission sought to enhance transparency in India\'s democracy by automating the vote-counting process. Human errors and lack of real-time transparency were significant challenges in a critical democratic process.',
  approach: [
    { step: '01', title: 'Problem Analysis', desc: 'Deep dive into existing manual vote counting processes to identify error-prone steps and transparency gaps.' },
    { step: '02', title: 'AI System Design', desc: 'Designed a computer vision pipeline using OLY Control Center to automate counting and detect anomalies in real-time.' },
    { step: '03', title: 'Deployment & Monitoring', desc: 'Rolled out the system across counting centres with live dashboards for officials and auditors.' },
    { step: '04', title: 'Verified Results', desc: 'Delivered a fully automated, transparent count process — eliminating human error and ensuring democratic integrity.' },
  ],
  outcome: 'Accurate, efficient, and transparent vote counting process — a landmark use of AI in Indian democracy.',
  client: 'Bihar State Election Commission',
  link: 'https://www.bipolarfactory.com/bihar-election-case-study',
};

const TESTIMONIALS = [
  {
    quote: 'Bipolar Factory\'s development of the EPR portal has been a cornerstone in modernizing Zigma\'s waste management services. Their expertise in digital solutions has significantly elevated our operational efficiency and environmental impact.',
    name: 'Boopathy Dharmaraj',
    role: 'Zigma',
    avatar: 'https://static.wixstatic.com/media/936eaf_905c674bac424369a7021377327d820a~mv2.png/v1/fill/w_225,h_225,al_c,q_85,enc_avif,quality_auto/image.png',
    color: '#1565C0',
  },
  {
    quote: 'The indoor GPS solution provided by Bipolar Factory has been a game-changer for weaving units in Coimbatore. It has not only enhanced worker productivity but also brought a new level of precision to our operations.',
    name: 'Elavarasu Arumugham',
    role: 'WoTA',
    avatar: 'https://static.wixstatic.com/media/936eaf_fc184d7a362448d2877ce1f45019a7d1~mv2.png/v1/fill/w_200,h_200,al_c,q_90,enc_avif,quality_auto/Screenshot%202024-01-22%20at%201_10_35%E2%80%AFPM.png',
    color: '#00ACC1',
  },
  {
    quote: 'The automated vote counting system developed by Bipolar Factory for the Bihar Election project was a testament to their technological prowess and understanding of complex systems. Their solution ensured accuracy and efficiency in a critical democratic process.',
    name: 'Gajapathy Chakravarthy',
    role: 'iNET Secure Labs',
    avatar: 'https://static.wixstatic.com/media/936eaf_38e0fe0d42cf41308a59842ff3e883ac~mv2.png/v1/fill/w_227,h_227,al_c,q_85,enc_avif,quality_auto/image%20(1).png',
    color: '#7C3AED',
  },
];

const CLIENTS = [
  { name: 'Election Commission of India', logo: 'https://static.wixstatic.com/media/936eaf_a2cf298a754d4defab9589fdb19c4a01~mv2.png/v1/fit/w_251,h_200,q_90,enc_avif,quality_auto/936eaf_a2cf298a754d4defab9589fdb19c4a01~mv2.png' },
  { name: 'Government of Tamil Nadu', logo: 'https://static.wixstatic.com/media/936eaf_53a844a06a144a71b9170c651e466fa8~mv2.png/v1/fit/w_282,h_212,q_90,enc_avif,quality_auto/936eaf_53a844a06a144a71b9170c651e466fa8~mv2.png' },
  { name: 'Max Stores', logo: 'https://static.wixstatic.com/media/936eaf_b55b103b82c84fcebc7a617472d8e9b8~mv2.jpg/v1/fit/w_230,h_212,q_90,enc_avif,quality_auto/936eaf_b55b103b82c84fcebc7a617472d8e9b8~mv2.jpg' },
  { name: 'Zigma', logo: 'https://static.wixstatic.com/media/936eaf_15a0715aa9264260b722d1dde8d1944a~mv2.png/v1/fit/w_282,h_212,q_90,enc_avif,quality_auto/936eaf_15a0715aa9264260b722d1dde8d1944a~mv2.png' },
  { name: 'WoTA', logo: 'https://static.wixstatic.com/media/936eaf_6d9e3e9c88814739acf3c109a5bf3afc~mv2.jpeg/v1/fit/w_195,h_194,q_90,enc_avif,quality_auto/936eaf_6d9e3e9c88814739acf3c109a5bf3afc~mv2.jpeg' },
];

const IMPACT_STATS = [
  { value: '100%', label: 'Automated Vote Count', sub: 'Bihar Election Commission' },
  { value: '5+', label: 'Enterprise Clients', sub: 'Govt & private sector' },
  { value: '6', label: 'Industries Transformed', sub: 'Across India' },
  { value: '∞', label: 'Ambition', sub: 'Make in India for the World' },
];

export default function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const tmRef = useRef(null);
  const tmInView = useInView(tmRef, { once: true, margin: '-80px' });
  const clRef = useRef(null);
  const clInView = useInView(clRef, { once: true, margin: '-60px' });

  return (
    <section id="impact" className="bg-white">
      {/* ─── Case Study Hero ─── */}
      <div className="relative overflow-hidden bg-bpf-navy py-24 md:py-32">
        {/* Background image with strong overlay */}
        <div className="absolute inset-0">
          <img
            src={CASE_STUDY.img}
            alt="Bihar Election"
            className="w-full h-full object-cover opacity-20"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bpf-navy via-bpf-navy/95 to-bpf-blue/40" />
        </div>

        {/* Animated circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.12, 0.06] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-bpf-sky/20" />
          <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.04, 0.09, 0.04] }}
            transition={{ repeat: Infinity, duration: 8, delay: 1 }}
            className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full border border-bpf-cyan/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="section-label mb-6" style={{ color: '#7DD3FC' }}>
            <span className="w-6 h-px bg-sky-400 block" />
            Spotlight on Success — Case Study
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-white mb-4"
                style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: '1.15' }}
              >
                {CASE_STUDY.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.28 }}
                className="text-sky-200/80 text-sm leading-relaxed mb-6"
              >
                {CASE_STUDY.subtitle}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.36 }}
                className="text-white/60 text-sm leading-relaxed mb-8"
              >
                {CASE_STUDY.context}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.44 }}
                className="flex items-center gap-3"
              >
                <a
                  href={CASE_STUDY.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                  data-hover
                >
                  Read Full Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* 4-step approach */}
            <div className="space-y-4">
              {CASE_STUDY.approach.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
                  className="flex gap-4 bg-white/6 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-bpf-sky/20 text-bpf-sky text-sm font-mono font-bold flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-white text-sm mb-1">{step.title}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
              {/* Outcome */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex gap-3 bg-bpf-sky/20 border border-bpf-sky/30 rounded-xl p-4"
              >
                <span className="text-xl">✅</span>
                <p className="text-sky-200 text-sm leading-relaxed">
                  <strong className="text-white">Outcome:</strong> {CASE_STUDY.outcome}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Impact Stats ─── */}
      <div className="bg-gradient-to-r from-bpf-blue to-bpf-cyan py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {IMPACT_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white"
              >
                <div className="font-display font-bold text-4xl md:text-5xl mb-1">{stat.value}</div>
                <div className="font-medium text-sm text-white/90 mb-0.5">{stat.label}</div>
                <div className="text-xs text-white/50">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Testimonials ─── */}
      <div className="bg-bpf-gray py-24" ref={tmRef}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0 }} animate={tmInView ? { opacity: 1 } : {}}
              className="section-label justify-center mb-4"
            >
              Client Voices
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={tmInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="font-display font-bold text-bpf-navy"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
            >
              Every Client is a Long-Term Partner
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                animate={tmInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.2, duration: 0.6 }}
                className="testimonial-card card-hover"
              >
                {/* Quote icon */}
                <div className="text-4xl mb-4" style={{ color: t.color, opacity: 0.2 }}>"</div>
                <p className="text-bpf-text text-sm leading-relaxed mb-6 relative z-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div>
                    <p className="font-display font-semibold text-bpf-navy text-sm">{t.name}</p>
                    <p className="text-xs text-bpf-muted">{t.role}</p>
                  </div>
                  <div className="ml-auto w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: t.color }}>
                    ✓
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Clients Logos ─── */}
      <div className="py-16 bg-white border-t border-blue-50" ref={clRef}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0 }} animate={clInView ? { opacity: 1 } : {}}
            className="text-center text-xs font-mono text-bpf-muted tracking-widest uppercase mb-10"
          >
            Trusted by organizations across India
          </motion.p>
          <div className={`flex flex-wrap items-center justify-center gap-10 stagger ${clInView ? 'visible' : ''}`}>
            {CLIENTS.map(cl => (
              <div key={cl.name}
                className="flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                style={{ minHeight: 48 }}
              >
                <img
                  src={cl.logo}
                  alt={cl.name}
                  className="h-10 md:h-12 w-auto max-w-[120px] object-contain"
                  title={cl.name}
                  onError={(e) => {
                    e.target.parentElement.innerHTML =
                      `<span class="text-xs font-medium text-bpf-muted">${cl.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
