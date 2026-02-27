'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { navVariants } from '../utils/motion';

const mapUrl = 'https://www.google.com/maps/place/The+K+BBQ/@43.6636256,-79.4223256,17z/data=!3m1!4b1!4m6!3m5!1s0x882b348ce4e2e7c1:0x49171ea8d6d91d1!8m2!3d43.6636218!4d-79.4174547!16s%2Fg%2F11vlp63_q2';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Menu', href: '/menuPage#menu' },
];

const Navbar = () => (
  <motion.header
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="site-shell sticky top-0 z-40 pt-5 sm:pt-7"
  >
    <div className="surface-panel flex items-center justify-between gap-3 rounded-full border px-4 py-3 backdrop-blur-md sm:px-6">
      <Link href="/" className="flex min-w-0 items-center gap-3">
        <Image
          src="/logo.png"
          alt="The KBBQ"
          width={38}
          height={38}
          className="rounded-full object-contain"
        />
        <div className="min-w-0">
          <p className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Toronto Korean BBQ
          </p>
          <p className="truncate text-[22px] font-semibold leading-none text-[var(--text-primary)]">
            The KBBQ
          </p>
        </div>
      </Link>

      <nav className="hidden items-center gap-1 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] hover:bg-[rgba(255,255,255,0.84)] hover:text-[var(--accent-deep)]"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="secondary-btn hidden sm:inline-flex"
        >
          Location
        </a>
        <Link href="/menuPage#menu" className="primary-btn whitespace-nowrap">
          View Menu
        </Link>
      </div>
    </div>
  </motion.header>
);

export default Navbar;
