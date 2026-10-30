'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MAPS_URL } from '../constants';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Menu', href: '/menuPage#menu' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-tone)] bg-[rgba(14,11,9,0.78)] backdrop-blur-xl">
      <div className="site-shell flex h-16 items-center justify-between gap-3 sm:h-[72px]">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="The KBBQ"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="font-display text-[20px] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
            The KBBQ
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-[14px] font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)]"
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
            className="hidden text-[14px] font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] sm:inline-flex sm:px-3"
          >
            Directions
          </a>
          <Link href="/menuPage#menu" className="primary-btn hidden !py-2.5 md:inline-flex">
            View Menu
          </Link>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-[var(--border-strong)] md:hidden"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[var(--border-tone)] md:hidden"
          >
            <nav className="site-shell flex flex-col py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[var(--border-tone)] py-4 font-display text-[22px] font-bold text-[var(--text-primary)]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 grid grid-cols-2 gap-2 pb-2">
                <Link
                  href="/menuPage#menu"
                  onClick={() => setOpen(false)}
                  className="primary-btn"
                >
                  View Menu
                </Link>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn"
                >
                  Directions
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
