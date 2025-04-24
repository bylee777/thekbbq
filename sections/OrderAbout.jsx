'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const OrderAbout = () => (
  <section className={`${styles.paddings} relative z-10`}>
    
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      {/* ✅ Updated image size for a smaller, cleaner look */}
      <motion.img
        variants={fadeIn('up', 'tween', 0.1, 1)}
        src="/tableplate.png" // Place this image inside your public folder
        alt="KBBQ Table"
        className="w-[220px] sm:w-[280px] h-auto rounded-[16px] object-contain mb-6"
      />

      <TypingText title="| Ordering" textStyles="text-center" />

      {/* Intro */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-4 text-white text-[20px] sm:text-[28px] text-center leading-relaxed"
      >
        <p className="mb-4">
          🔥 <strong>Minimum Order:</strong> 2 servings of meat or vegan set per table.<br />
          (1 order = 1 serving)
        </p>
        <p className="mb-4">
          ✅ <strong>All Table BBQ Orders Come With:</strong>
        </p>
      </motion.div>

      {/* Complimentary Items List */}
      <motion.ul
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white sm:text-[20px] text-[16px] text-left max-w-[600px]"
      >
        <li>🧀 Corn Cheese</li>
        <li>🥬 Lettuce Wraps</li>
        <li>🥗 4 Side Dishes:
          <ul className="ml-4 list-disc">
            <li>Kimchi</li>
            <li>Cucumber Kimchi</li>
            <li>Pickled Radish</li>
            <li>Bean Sprouts</li>
          </ul>
        </li>
        <li>🥗 Salad (with house salad sauce)</li>
        <li>🍠 Mashed Yam</li>
        <li>🍲 Soybean Stew
          <span className="block ml-4 text-sm opacity-80">
            (Soybean paste, onions, zucchini, mushrooms, cabbage, tofu)
          </span>
        </li>
        <li>🧅 Onion Plate (with Secret Sauce)</li>
        <li>🥣 Sauces:
          <ul className="ml-4 list-disc">
            <li>Ssamjang</li>
            <li>Salt</li>
            <li>Sesame Oil</li>
          </ul>
        </li>
      </motion.ul>

      {/* Arrow Down */}
      <motion.img
        variants={fadeIn('up', 'tween', 0.4, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-10"
      />
    </motion.div>
  </section>
);

export default OrderAbout;
