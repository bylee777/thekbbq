'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MAPS_URL } from '../constants';

const Footer = () => (
  <footer className="mt-8 border-t border-[var(--border-tone)] bg-[var(--bg-raised)]">
    <div className="site-shell py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <span className="section-tag">Visit Us</span>
          <h2 className="section-heading mt-4 max-w-[14ch]">
            Your next BBQ night starts here.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Open in Maps
              <span aria-hidden="true">→</span>
            </a>
            <Link href="/menuPage#menu" className="secondary-btn">
              View Menu
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Address
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display mt-2 block text-[26px] font-bold leading-tight text-[var(--text-primary)] hover:text-[var(--accent-light)]"
            >
              699 Bloor St West
              <br />
              Toronto, ON
            </a>
          </div>
          <p className="max-w-[40ch] text-[14px] leading-6 text-[var(--text-muted)]">
            Business hours can change seasonally. Please check our Google
            listing for live hours.
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-tone)] pt-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="The KBBQ logo"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <p className="text-[13px] text-[var(--text-muted)]">
            © {new Date().getFullYear()} The KBBQ. All rights reserved.
          </p>
        </div>
        <p className="text-[13px] font-semibold text-[var(--text-muted)]">
          Koreatown, Toronto
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
