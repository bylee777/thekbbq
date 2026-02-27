'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const highlights = [
  {
    title: 'Premium Ingredients',
    text: 'We source quality pork, beef, and specialty cuts designed for tabletop grilling and bold Korean flavors.',
  },
  {
    title: 'Balanced Menu Design',
    text: 'Our lineup pairs grilled meats with noodles, hot pots, and classic sides so every table can build a complete meal.',
  },
  {
    title: 'Group-Friendly Service',
    text: 'We optimize for shared dining with efficient pacing, helpful staff support, and a comfortable atmosphere.',
  },
];

const About = () => (
  <section id="about" className="site-shell section-wrap pt-6 sm:pt-10">
    <motion.div
      variants={staggerContainer(0.12, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-8"
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.1, 0.8)}
        className="max-w-[760px] space-y-4"
      >
        <span className="section-tag">About The KBBQ</span>
        <h2 className="display-heading max-w-[20ch] text-[36px] sm:text-[50px] lg:text-[56px]">
          A focused menu built for real Korean BBQ dining
        </h2>
        <span className="body-copy block">
          The KBBQ combines house marinades, premium cuts, and Korean comfort
          classics into a polished group-dining experience. Our approach is
          simple: great ingredients, strong execution, and hospitality that
          makes every table feel taken care of.
        </span>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 0.8)}
        className="grid gap-4 md:grid-cols-3"
      >
        {highlights.map((item) => (
          <article key={item.title} className="surface-panel rounded-3xl p-6">
            <h3 className="text-[28px] font-semibold text-[var(--text-primary)]">
              {item.title}
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-[var(--text-muted)]">
              {item.text}
            </p>
          </article>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default About;
