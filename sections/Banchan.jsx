'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { complimentaryBanchan } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';

const Banchan = () => (
  <section id="banchan" className="site-shell section-wrap pb-8 pt-0 sm:pt-2">
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="space-y-8"
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.08, 0.8)}
        className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="space-y-4">
          <span className="section-tag">Complimentary Banchan</span>
          <h2 className="display-heading max-w-[15ch] text-[36px] sm:text-[50px] lg:text-[58px]">
            Every BBQ table comes with a full side-dish spread.
          </h2>
          <p className="body-copy max-w-[62ch]">
            Our complimentary banchan adds crunch, acidity, sweetness, and
            comfort to the grill. These dishes are designed to reset the palate
            between bites and round out the whole table.
          </p>
        </div>

        <div className="surface-panel rounded-[30px] p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-deep)]">
            Included With BBQ Tables
          </p>
          <p className="mt-3 text-[32px] font-semibold leading-[1.05] text-[var(--text-primary)]">
            9 complimentary side dishes
          </p>
          <p className="mt-3 text-[15px] leading-7 text-[var(--text-muted)]">
            From kimchi and japchae to sweet potato salad and fresh lettuce
            wraps, the banchan lineup completes the Korean BBQ experience.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.12, 0.8)}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {complimentaryBanchan.map((item, index) => (
          <article
            key={item.title}
            className="surface-panel overflow-hidden rounded-[28px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.imgUrl}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
                <p className="rounded-full bg-[rgba(31,26,22,0.74)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f7ebe1]">
                  Banchan {String(index + 1).padStart(2, '0')}
                </p>
                <span className="rounded-full bg-[rgba(255,251,246,0.92)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent-deep)]">
                  Included
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="text-[30px] font-semibold leading-[1.04] text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-[var(--text-muted)]">
                {item.text}
              </p>
            </div>
          </article>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Banchan;
