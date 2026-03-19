'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { navVariants } from '../utils/motion';
import { MAPS_URL } from '../constants';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Menu', href: '/menuPage#menu' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
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
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn hidden sm:inline-flex"
          >
            Location
          </a>
          <Link href="/menuPage#menu" className="primary-btn hidden whitespace-nowrap md:inline-flex">
            View Menu
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-[var(--border-tone)] bg-[rgba(255,255,255,0.7)] md:hidden"
          >
            <span className={`h-[2px] w-5 rounded-full bg-[var(--text-primary)] transition-transform duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-[2px] w-5 rounded-full bg-[var(--text-primary)] transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`h-[2px] w-5 rounded-full bg-[var(--text-primary)] transition-transform duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="surface-panel mt-2 overflow-hidden rounded-3xl border p-4 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] hover:bg-[rgba(255,255,255,0.84)] hover:text-[var(--accent-deep)]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <Link
                  href="/menuPage#menu"
                  onClick={() => setOpen(false)}
                  className="primary-btn text-center"
                >
                  View Menu
                </Link>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn text-center"
                >
                  Get Directions
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
