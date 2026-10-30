'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const highlights = [
  {
    title: 'House marinades',
    text: 'Garlic, soy, and sweet & spicy marinades made in-house for our kalbi, bulgogi, pork, and chicken.',
  },
  {
    title: 'Grilled at your table',
    text: 'Every table has its own grill. Order in rounds, cook at your own pace, and share everything.',
  },
  {
    title: 'Built for groups',
    text: 'From date night to team dinners, our AYCE and eel courses are designed for the whole table.',
  },
];

const About = () => (
  <section id="about" className="site-shell section-wrap scroll-mt-20">
    <motion.div
      variants={staggerContainer(0.12, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
    >
      <motion.div variants={fadeIn('up', 'tween', 0.1, 0.8)} className="space-y-5">
        <span className="section-tag">About Us</span>
        <h2 className="section-heading max-w-[14ch]">
          Real Korean BBQ, done the simple way.
        </h2>
        <p className="body-copy max-w-[52ch]">
          Good meat, strong marinades, and a hot grill. The KBBQ keeps the
          focus on what matters at a Korean BBQ table — and takes care of
          everything around it.
        </p>
      </motion.div>

      <motion.ol variants={fadeIn('up', 'tween', 0.2, 0.8)} className="divide-y divide-[var(--border-tone)] border-y border-[var(--border-tone)]">
        {highlights.map((item, index) => (
          <li key={item.title} className="grid grid-cols-[48px_1fr] gap-4 py-7 sm:grid-cols-[72px_1fr]">
            <span className="font-display text-[28px] font-bold leading-none text-[var(--accent)] sm:text-[36px]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-[22px] leading-tight text-[var(--text-primary)] sm:text-[26px]">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-7 text-[var(--text-muted)]">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </motion.ol>
    </motion.div>
  </section>
);

export default About;
