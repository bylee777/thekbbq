'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const orderRules = [
  'Minimum order is 2 servings of meat or vegan set per table.',
  'One order equals one serving.',
  'Menu items are prepared for sharing and best enjoyed family-style.',
];

const tableIncludes = [
  'Corn cheese',
  'Lettuce wraps',
  'House side dishes (kimchi, cucumber kimchi, pickled radish, bean sprouts)',
  'House salad',
  'Mashed yam',
  'Soybean stew',
  'Onion plate with house sauce',
  'Ssamjang, salt, and sesame oil sauces',
];

const OrderAbout = () => (
  <section className="site-shell section-wrap pb-8 pt-8 sm:pt-12">
    <motion.div
      variants={staggerContainer(0.12, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="surface-panel overflow-hidden rounded-[34px] p-6 sm:p-10"
    >
      <div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div variants={fadeIn('right', 'tween', 0.1, 0.8)}>
          <span className="section-tag">Ordering Guide</span>
          <h2 className="mt-4 text-[40px] font-semibold leading-[1.06] text-[var(--text-primary)] sm:text-[52px]">
            Know what comes to the table.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[var(--text-muted)]">
            We designed this quick guide so your group can order with
            confidence. Every BBQ table includes our essential side setup and
            sauces to complete the experience.
          </p>

          <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--border-tone)] bg-[rgba(255,255,255,0.88)] p-3">
            <img
              src="/tableplate.png"
              alt="KBBQ table spread"
              className="h-[240px] w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.16, 0.8)}
          className="grid gap-4 md:grid-cols-2"
        >
          <article className="rounded-3xl border border-[var(--border-tone)] bg-[rgba(255,255,255,0.92)] p-6">
            <h3 className="text-[28px] font-semibold text-[var(--text-primary)]">
              Order Rules
            </h3>
            <ul className="mt-4 space-y-3 text-[14px] leading-6 text-[var(--text-muted)]">
              {orderRules.map((rule) => (
                <li key={rule} className="rounded-2xl bg-[rgba(188,95,50,0.08)] px-3 py-2">
                  {rule}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-[var(--border-tone)] bg-[rgba(31,26,22,0.92)] p-6 text-[#f8e8db]">
            <h3 className="text-[28px] font-semibold text-[#fff8f2]">
              Included With BBQ Tables
            </h3>
            <ul className="mt-4 space-y-3 text-[14px] leading-6 text-[#edd8c7]">
              {tableIncludes.map((item) => (
                <li key={item} className="rounded-2xl bg-[rgba(255,255,255,0.08)] px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default OrderAbout;
