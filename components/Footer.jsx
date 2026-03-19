'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { footerVariants } from '../utils/motion';
import { MAPS_URL } from '../constants';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="site-shell pb-10 pt-8 sm:pb-12"
  >
    <div className="surface-panel overflow-hidden rounded-[34px] bg-[linear-gradient(150deg,rgba(255,255,255,0.92)_0%,rgba(241,223,204,0.86)_100%)] p-7 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="section-tag">Visit The KBBQ</span>
          <h4 className="mt-4 text-[40px] font-semibold leading-[1.05] text-[var(--text-primary)] sm:text-[54px]">
            Join us for your next Korean BBQ night.
          </h4>
          <p className="mt-4 max-w-[54ch] text-[15px] leading-7 text-[var(--text-muted)] sm:text-[16px]">
            Planning a date, family gathering, or team dinner? Explore our full
            menu and visit us in Toronto Koreatown for an authentic tabletop
            experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Open in Maps
            </a>
            <Link href="/menuPage#menu" className="secondary-btn">
              Explore Menu
            </Link>
          </div>
        </div>

        <aside className="rounded-3xl border border-[var(--border-tone)] bg-[rgba(31,26,22,0.9)] p-6 text-[#f9ede1] shadow-[var(--shadow-lift)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d5b79f]">
            Address
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-[22px] font-semibold leading-tight text-[#fff9f3] hover:text-[#ffd9ba]"
          >
            730 Bloor St W<br />
            Toronto, ON
          </a>
          <p className="mt-4 text-[14px] leading-6 text-[#ead8ca]">
            Business hours can change seasonally. Please check our Google
            listing for live hours.
          </p>
        </aside>
      </div>

      <div className="my-8 divider-line" />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="The KBBQ logo"
            width={44}
            height={44}
            className="rounded-full object-contain"
          />
          <p className="text-[14px] text-[var(--text-muted)]">
            © {new Date().getFullYear()} The KBBQ. All rights reserved.
          </p>
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-deep)] hover:text-[var(--accent)]"
        >
          Toronto, Ontario
        </a>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
