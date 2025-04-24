'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 pointer-events-none" />

    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
    >
      {/* Home Link Title */}
      <Link href="/">
        <h2 className="cursor-pointer font-extrabold text-[24px] leading-[30.24px] text-white hover:text-gray-300 transition">
          The KBBQ
        </h2>
      </Link>

      {/* Menu Button with Icon */}
      <Link href="/menuPage">
        <button
          type="button"
          className="flex items-center gap-2 bg-[#FF7F50] hover:bg-[#e3683f] text-white font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          <img
            src="/forkandknife.png"
            alt="Fork and Knife"
            className="w-[30px] h-[30px] object-contain"
          />
          Menu
        </button>
      </Link>
    </div>
  </motion.nav>
);

export default Navbar;
