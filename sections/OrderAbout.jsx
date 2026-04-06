'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const orderRules = [
  'Minimum order is 2 servings of meat or vegan set per table.',
  'One order equals one serving.',
  'Menu items are prepared for sharing and best enjoyed family-style.',
];

const guideHighlights = [
  'Minimum 2 servings',
  'Family-style ordering',
  '9 complimentary banchan',
];

const tableIncludes = [
  'Nine complimentary banchan, including kimchi, japchae, sweet potato salad, and more.',
  'Fresh lettuce wraps and corn cheese.',
  'Crisp pickled and chilled sides that balance the richness of grilled meats.',
  'Ssamjang, salt, and sesame oil sauces',
];

const OrderAbout = () => (
  <section className="site-shell section-wrap pb-8 pt-8 sm:pt-12">
    <motion.div
      variants={staggerContainer(0.12, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="surface-panel overflow-hidden rounded-[34px] p-6 sm:p-10 lg:p-12"
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.08, 0.8)}
        className="max-w-[820px]"
      >
        <span className="section-tag">Ordering Guide</span>
        <h2 className="mt-4 text-[40px] font-semibold leading-[1.04] text-[var(--text-primary)] sm:text-[52px] lg:text-[58px]">
          Know what comes to the table before you start grilling.
        </h2>
        <p className="mt-4 max-w-[64ch] text-[15px] leading-7 text-[var(--text-muted)]">
          We designed this quick guide so your group can order with
          confidence. Every BBQ table includes a full supporting spread, and
          the essentials below make it easy to understand what is included
          before you order anything extra.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {guideHighlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[rgba(142,69,34,0.22)] bg-[rgba(255,255,255,0.82)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--accent-deep)]"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="my-8 divider-line sm:my-10" />

      <div className="grid gap-4 lg:grid-cols-2">
        <motion.article
          variants={fadeIn('up', 'tween', 0.14, 0.8)}
          className="rounded-[30px] border border-[var(--border-tone)] bg-[rgba(255,255,255,0.92)] p-6 sm:p-7"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-deep)]">
                Before You Order
              </p>
              <h3 className="mt-3 text-[30px] font-semibold leading-[1.04] text-[var(--text-primary)]">
                Order Rules
              </h3>
            </div>

            <span className="rounded-full bg-[rgba(188,95,50,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent-deep)]">
              01
            </span>
          </div>

          <p className="mt-4 max-w-[42ch] text-[14px] leading-6 text-[var(--text-muted)]">
            A few quick rules help keep the table moving smoothly and make sure
            the grill is set up properly for everyone.
          </p>

          <ul className="mt-5 space-y-3 text-[14px] leading-6 text-[var(--text-muted)]">
            {orderRules.map((rule, index) => (
              <li
                key={rule}
                className="flex gap-3 rounded-2xl bg-[rgba(188,95,50,0.08)] px-4 py-3"
              >
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(188,95,50,0.14)] text-[11px] font-semibold text-[var(--accent-deep)]">
                  {index + 1}
                </span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          variants={fadeIn('up', 'tween', 0.2, 0.8)}
          className="rounded-[30px] border border-[var(--border-tone)] bg-[rgba(31,26,22,0.92)] p-6 text-[#f8e8db] sm:p-7"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d7b79d]">
                Included Setup
              </p>
              <h3 className="mt-3 text-[30px] font-semibold leading-[1.04] text-[#fff8f2]">
                Included With BBQ Tables
              </h3>
            </div>

            <span className="rounded-full bg-[rgba(255,255,255,0.1)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#fff1e4]">
              Included
            </span>
          </div>

          <p className="mt-4 max-w-[42ch] text-[14px] leading-6 text-[#edd8c7]">
            These table essentials are part of the core BBQ experience and are
            meant to balance the richness of the grill.
          </p>

          <ul className="mt-5 space-y-3 text-[14px] leading-6 text-[#edd8c7]">
            {tableIncludes.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-[rgba(255,255,255,0.08)] px-4 py-3"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </motion.div>
  </section>
);

export default OrderAbout;
