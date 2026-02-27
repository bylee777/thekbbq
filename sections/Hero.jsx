'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeIn, staggerContainer } from '../utils/motion';

const mapUrl =
  'https://www.google.com/maps/place/The+K+BBQ/@43.6636256,-79.4223256,17z/data=!3m1!4b1!4m6!3m5!1s0x882b348ce4e2e7c1:0x49171ea8d6d91d1!8m2!3d43.6636218!4d-79.4174547!16s%2Fg%2F11vlp63_q2';

const highlights = [
  { label: 'Menu Selection', value: '46 curated dishes' },
  { label: 'Location', value: 'Toronto Koreatown' },
  { label: 'Best For', value: 'Groups and celebrations' },
];

const Hero = () => (
  <section className="site-shell section-wrap pb-10 pt-10 sm:pt-14">
    <motion.div
      variants={staggerContainer(0.12, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]"
    >
      <motion.div variants={fadeIn('up', 'tween', 0.1, 0.8)} className="space-y-7">
        <span className="section-tag">Authentic Korean BBQ</span>

        <h1 className="display-heading max-w-[16ch]">
          Elevated Korean Barbecue in Toronto
        </h1>

        <p className="body-copy max-w-[60ch]">
          Signature marinades, premium cuts, and warm table-side service come
          together for a complete Korean BBQ experience. From weeknight dinners
          to large gatherings, we focus on quality, pace, and hospitality.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/menuPage#menu" className="primary-btn">
            Browse Menu
          </Link>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            Get Directions
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="surface-panel rounded-2xl px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                {item.label}
              </p>
              <p className="mt-2 text-[17px] font-semibold text-[var(--text-primary)]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 0.9)}
        className="relative w-full"
      >
        <div className="absolute -inset-4 rounded-[40px] bg-[radial-gradient(circle_at_70%_20%,rgba(188,95,50,0.34),transparent_58%)] blur-2xl" />
        <div className="surface-panel relative overflow-hidden rounded-[34px] p-3">
          <img
            src="/cover.png"
            alt="The KBBQ interior and tabletop spread"
            className="h-[520px] w-full rounded-[28px] object-cover"
          />

          <div className="absolute left-8 top-8 rounded-2xl bg-[rgba(31,26,22,0.76)] px-4 py-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#f7e6d5]">
              House Signature
            </p>
            <p className="mt-1 text-[20px] font-semibold leading-none text-[#fff8f1]">
              Marinated Premium Cuts
            </p>
          </div>

          <div className="absolute bottom-8 right-8 rounded-2xl bg-[rgba(255,251,246,0.92)] px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--accent-deep)]">
              Atmosphere
            </p>
            <p className="mt-1 text-[15px] font-semibold text-[var(--text-primary)]">
              Warm, lively, and table-first
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
