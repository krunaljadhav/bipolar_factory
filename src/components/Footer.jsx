import { motion } from 'framer-motion';

const FOOTER_LINKS = {
  'Products': [
    { label: 'OLY Store Sync', href: 'https://www.oly.live/' },
    { label: 'OLY Control Center', href: 'https://www.oly.live/' },
    { label: 'Metawood', href: 'https://www.themetawood.com/' },
  ],
  'Company': [
    { label: 'About Us', href: 'https://www.bipolarfactory.com/about-us' },
    { label: 'Technology Partnership', href: 'https://www.bipolarfactory.com/technologypartnership' },
    { label: 'Case Studies', href: 'https://www.bipolarfactory.com/case-studies' },
    { label: 'Careers', href: 'https://bipolarfactory.zohorecruit.in/jobs/Careers' },
  ],
  'Connect': [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/31221841/' },
    { label: 'Twitter / X', href: 'https://twitter.com/bipolarfactory' },
    { label: 'Facebook', href: 'https://www.facebook.com/bipolarfactory' },
    { label: 'Contact Us', href: 'https://www.bipolarfactory.com/contact-us' },
  ],
};

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  return (
    <footer className="bg-bpf-navy border-t border-white/8">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <img
                src="https://static.wixstatic.com/media/936eaf_96ff569a97894b3881b3e0e6f80c5734~mv2.png/v1/fill/w_980,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BPF%20Full%20White.png"
                alt="Bipolar Factory"
                className="h-8 object-contain object-left"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden font-display font-bold text-white text-xl">Bipolar Factory</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              A dedicated technology partner — harnessing AI, IoT, and innovation to build products
              that elevate everyday living. <strong className="text-white/60">Make in India for the World.</strong>
            </p>
            {/* NVIDIA badge */}
            <div className="inline-flex items-center gap-2 bg-white/6 border border-white/10 rounded-lg px-3 py-2">
              <div className="w-5 h-5 rounded bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">N</span>
              </div>
              <span className="text-white/50 text-xs font-mono">NVIDIA Inception Program</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="text-white/30 text-xs font-mono tracking-widest uppercase mb-4">{group}</p>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                      data-hover
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-mono">
            © {new Date().getFullYear()} Bipolar Factory Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Home', 'Products', 'Services', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                data-hover
                className="text-white/25 text-xs hover:text-white/60 transition-colors font-mono"
              >
                {item}
              </button>
            ))}
          </div>
          <a
            href="https://www.bipolarfactory.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 text-xs hover:text-white/50 transition-colors"
            data-hover
          >
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Watermark strip */}
      <div className="overflow-hidden border-t border-white/4 py-4">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap gap-16"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display text-6xl md:text-8xl font-bold text-white/[0.025] tracking-tight">
              BIPOLAR FACTORY ◆
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
