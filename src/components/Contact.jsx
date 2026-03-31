import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const CONTACT_INFO = [
  {
    icon: '📍',
    label: 'Address',
    value: 'Bipolar Factory Pvt Ltd, 2/118, First Floor, Nehru Nagar, Koundampalayam Road, Edayarpalayam, Coimbatore, Tamil Nadu 641025',
    link: null,
  },
  {
    icon: '🌐',
    label: 'Website',
    value: 'www.bipolarfactory.com',
    link: 'https://www.bipolarfactory.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/company/31221841',
    link: 'https://www.linkedin.com/company/31221841/',
  },
  {
    icon: '🐦',
    label: 'Twitter / X',
    value: '@bipolarfactory',
    link: 'https://twitter.com/bipolarfactory',
  },
];

const INTEREST_OPTIONS = [
  'OLY Store Sync', 'OLY Control Center', 'Metawood',
  'Technical Consulting', 'Digital Transformation', 'Custom App Dev', 'Research', 'Other',
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState([]);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const toggle = (opt) =>
    setSelected(prev => prev.includes(opt) ? prev.filter(x => x !== opt) : [...prev, opt]);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-bpf-navy relative overflow-hidden py-24 md:py-32">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-2/3 opacity-5"
          style={{ background: 'radial-gradient(circle, #1E88E5, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 opacity-5"
          style={{ background: 'radial-gradient(circle, #00ACC1, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="section-label justify-center mb-4"
            style={{ color: '#7DD3FC' }}
          >
            <span className="w-6 h-px bg-sky-400 block" />
            Get in Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2.4rem,6vw,4.5rem)', lineHeight: '1.1' }}
          >
            Let's Build the
            <br />
            <span className="text-gradient-warm">Future Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.28 }}
            className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed"
          >
            Whether you're looking for a dedicated technology partner, interested in our products,
            or want to explore how we can transform your business — we'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {/* Info cards */}
            <div className="space-y-3 mb-10">
              {CONTACT_INFO.map((item) => (
                <div key={item.label}
                  className="flex gap-4 bg-white/5 border border-white/8 rounded-xl p-4 hover:bg-white/8 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-bpf-sky/15 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/40 text-xs font-mono tracking-wider mb-0.5">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer"
                        className="text-sky-300 text-sm hover:text-white transition-colors truncate block" data-hover>
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white/80 text-sm leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Careers CTA */}
            <div className="bg-gradient-to-br from-bpf-blue/30 to-bpf-cyan/20 border border-bpf-sky/25 rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="font-display font-semibold text-white text-base mb-1">Join the Factory</p>
                  <p className="text-white/50 text-xs leading-relaxed">
                    We're a vibrant mix of dreamers and doers. If you believe in using technology to create
                    positive change, we want you on our team.
                  </p>
                </div>
              </div>
              <a
                href="https://bipolarfactory.zohorecruit.in/jobs/Careers"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm border-white/20 text-white hover:border-white hover:bg-white/10 w-full justify-center mt-2"
                data-hover
              >
                View Open Positions →
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-white/40 text-xs font-mono tracking-wider mb-2">Full Name *</label>
                      <input
                        name="name" value={form.name} onChange={handleChange} required
                        placeholder="Krunal Jadhav"
                        className="w-full bg-white/6 border border-white/12 rounded-xl text-white placeholder-white/25 text-sm px-4 py-3 outline-none focus:border-bpf-sky/60 focus:bg-white/8 transition-all"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-white/40 text-xs font-mono tracking-wider mb-2">Email *</label>
                      <input
                        name="email" type="email" value={form.email} onChange={handleChange} required
                        placeholder="you@company.com"
                        className="w-full bg-white/6 border border-white/12 rounded-xl text-white placeholder-white/25 text-sm px-4 py-3 outline-none focus:border-bpf-sky/60 focus:bg-white/8 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs font-mono tracking-wider mb-2">Company / Organisation</label>
                    <input
                      name="company" value={form.company} onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full bg-white/6 border border-white/12 rounded-xl text-white placeholder-white/25 text-sm px-4 py-3 outline-none focus:border-bpf-sky/60 focus:bg-white/8 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs font-mono tracking-wider mb-2">I'm interested in</label>
                    <div className="flex flex-wrap gap-2">
                      {INTEREST_OPTIONS.map(opt => (
                        <button
                          key={opt} type="button" onClick={() => toggle(opt)} data-hover
                          className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                            selected.includes(opt)
                              ? 'bg-bpf-sky text-white border-bpf-sky'
                              : 'border-white/15 text-white/40 hover:border-white/30 hover:text-white/70'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs font-mono tracking-wider mb-2">Message *</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required
                      rows={4}
                      placeholder="Tell us about your project, challenge, or idea..."
                      className="w-full bg-white/6 border border-white/12 rounded-xl text-white placeholder-white/25 text-sm px-4 py-3 outline-none focus:border-bpf-sky/60 focus:bg-white/8 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    data-hover
                    className="w-full btn-primary text-base py-4 justify-center"
                  >
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-bpf-sky to-bpf-cyan flex items-center justify-center text-4xl mb-6"
                  >
                    ✓
                  </motion.div>
                  <h3 className="font-display font-bold text-white text-2xl mb-3">Message Sent!</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                    Thank you for reaching out. The Bipolar Factory team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name:'',email:'',company:'',message:'' }); setSelected([]); }}
                    className="mt-6 text-sky-400 text-sm hover:text-white transition-colors"
                    data-hover
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
