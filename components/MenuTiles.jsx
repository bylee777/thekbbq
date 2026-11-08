'use client';

import Link from 'next/link';
import Image from 'next/image';
import { aLaCarteMenu, ayceMenu, eelMenu } from '../constants';

const formatPrice = (price) => `$${price.toFixed(2)}`;
const lowest = (prices) => Math.min(...prices.filter((price) => typeof price === 'number'));

// Shortcut row so the three menus are the first thing people pick from.
const grillCategories = ['pork', 'beef', 'chicken'];
const menuTiles = [
  {
    label: 'All You Can Eat',
    href: '/menuPage#ayce',
    src: '/menu/la-short-rib.jpg',
    from: lowest(ayceMenu.pricing.map((period) => period.rows.find((row) => row.label === 'Adult').price)),
    orange: true,
  },
  {
    label: 'Eel Course',
    href: '/menuPage#eel',
    src: '/menu/eel-course-b.jpg',
    from: lowest(eelMenu.courses.map((course) => course.price)),
  },
  {
    label: 'À La Carte',
    href: '/menuPage#a-la-carte',
    src: '/menu/pork-belly.jpg',
    from: lowest(
      aLaCarteMenu
        .filter((category) => grillCategories.includes(category.id))
        .flatMap((category) => category.items.map((item) => item.price)),
    ),
    orange: true,
  },
];

const MenuTiles = ({ className = '' }) => (
  <nav aria-label="Menus" className={`grid grid-cols-3 gap-2.5 sm:gap-4 ${className}`}>
    {menuTiles.map((tile) => (
      <Link
        key={tile.href}
        href={tile.href}
        className={`flex flex-col items-center rounded-[6px] px-2 pb-3 pt-3 text-center shadow-[0_18px_40px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-1 sm:px-3 sm:pb-5 sm:pt-5 ${
          tile.orange
            ? 'poster-orange text-white'
            : 'border border-[rgba(255,255,255,0.08)] bg-[#141110] text-[var(--text-primary)] [background-image:var(--texture)]'
        }`}
      >
        <div className="relative aspect-square w-[78%] overflow-hidden rounded-full shadow-[0_10px_24px_rgba(0,0,0,0.5)]">
          <Image src={tile.src} alt="" fill className="scale-[1.08] object-cover" sizes="(max-width: 640px) 30vw, 200px" priority />
        </div>
        <p className="font-display mt-2.5 min-h-[2em] text-[17px] font-extrabold uppercase leading-[0.95] sm:text-[22px]">
          {tile.label}
        </p>
        <p className={`mt-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] sm:text-[12px] ${tile.orange ? 'opacity-90' : 'text-[var(--text-muted)]'}`}>
          from
        </p>
        <p className={`font-display text-[22px] font-extrabold leading-none sm:text-[28px] ${tile.orange ? '' : 'text-[var(--accent)]'}`}>
          {formatPrice(tile.from)}
        </p>
      </Link>
    ))}
  </nav>
);

export default MenuTiles;
