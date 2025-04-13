'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Come and Check it out!
        </h4>

        <a
          href="https://www.google.com/maps/place/The+K+BBQ/@43.6636256,-79.4223256,17z/data=!3m1!4b1!4m6!3m5!1s0x882b348ce4e2e7c1:0x49171ea8d6d91d1!8m2!3d43.6636218!4d-79.4174547!16s%2Fg%2F11vlp63_q2?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          >
            <img
              src="/map.svg"
              alt="map icon"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              Address
            </span>
          </button>
          <span className="text-white text-[12px] mt-1 opacity-80">
            Tap for Google Maps
          </span>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Logo image */}
          <img
            src="/logo.png"
            alt="The KBBQ"
            className="w-[64px] h-[64px] object-contain"
          />

          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2025 The KBBQ. All rights reserved.
          </p>

          {/* Keep only Instagram and Facebook */}
          <div className="flex gap-4">
            <img
              src="/instagram.svg"
              alt="instagram"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
            />
            <img
              src="/facebook.svg"
              alt="facebook"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
