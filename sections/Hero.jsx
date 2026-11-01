'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { fadeIn, staggerContainer } from '../utils/motion';
import { MAPS_URL, aLaCarteMenu, ayceMenu, eelMenu } from '../constants';

const heroPhotos = [
  { src: '/menu/la-short-rib.jpg', alt: 'Marinated LA short rib' },
  { src: '/menu/beef-brisket.jpg', alt: 'Thinly sliced beef brisket' },
  { src: '/menu/pork-belly.jpg', alt: 'Pork belly' },
  { src: '/menu/spicy-bulgogi.jpg', alt: 'Sweet and spicy bulgogi' },
];

const formatPrice = (price) => `$${price.toFixed(2)}`;
const lowest = (prices) => Math.min(...prices.filter((price) => typeof price === 'number'));

// Phone-only shortcut row so the three menus are visible without scrolling.
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

const MenuTiles = () => (
  <nav aria-label="Menus" className="grid grid-cols-3 gap-2.5 md:hidden">
    {menuTiles.map((tile) => (
      <Link
        key={tile.href}
        href={tile.href}
        className={`flex flex-col items-center rounded-[6px] px-2 pb-3 pt-3 text-center shadow-[0_18px_40px_rgba(0,0,0,0.5)] ${
          tile.orange
            ? 'poster-orange text-white'
            : 'border border-[rgba(255,255,255,0.08)] bg-[#141110] text-[var(--text-primary)] [background-image:var(--texture)]'
        }`}
      >
        <div className="relative aspect-square w-[78%] overflow-hidden rounded-full shadow-[0_10px_24px_rgba(0,0,0,0.5)]">
          <Image src={tile.src} alt="" fill className="scale-[1.08] object-cover" sizes="30vw" priority />
        </div>
        <p className="font-display mt-2.5 min-h-[2em] text-[17px] font-extrabold uppercase leading-[0.95]">
          {tile.label}
        </p>
        <p className={`mt-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] ${tile.orange ? 'opacity-90' : 'text-[var(--text-muted)]'}`}>
          from
        </p>
        <p className={`font-display text-[22px] font-extrabold leading-none ${tile.orange ? '' : 'text-[var(--accent)]'}`}>
          {formatPrice(tile.from)}
        </p>
      </Link>
    ))}
  </nav>
);

const highlights = [
  { value: '$41.99', label: 'AYCE Mon – Thu' },
  { value: '$44.99', label: 'AYCE Fri – Sun & holidays' },
  { value: '38', label: 'Unlimited dishes' },
];

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(242,106,33,0.28),transparent_65%)] blur-2xl" />

    <motion.div
      variants={staggerContainer(0.12, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="site-shell relative grid items-center gap-12 pb-16 pt-8 sm:pb-24 sm:pt-16 lg:grid-cols-[1fr_1fr] lg:gap-16"
    >
      <motion.div variants={fadeIn('up', 'tween', 0.1, 0.8)} className="space-y-5 sm:space-y-7">
        <span className="section-tag">Korean Table BBQ · Toronto</span>

        <h1 className="display-heading max-sm:text-[48px]">
          Fire up the grill.
          <span className="block text-[var(--accent)]">We&apos;ll bring the meat.</span>
        </h1>

        <MenuTiles />

        <p className="body-copy max-w-[46ch]">
          All-you-can-eat Korean BBQ, whole grilled eel courses, and premium
          à la carte cuts — grilled right at your table in Koreatown.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/menuPage#menu" className="primary-btn">
            See the Menu
            <span aria-hidden="true">→</span>
          </Link>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            Get Directions
          </a>
        </div>

        <dl className="grid max-w-[520px] grid-cols-3 gap-4 border-t border-[var(--border-tone)] pt-6">
          {highlights.map((item) => (
            <div key={item.value}>
              <dt className="font-display text-[28px] font-extrabold leading-none text-[var(--accent)] sm:text-[38px]">
                {item.value}
              </dt>
              <dd className="mt-2 text-[12px] leading-5 text-[var(--text-muted)] sm:text-[13px]">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 0.9)}
        className="grid grid-cols-2 gap-3 sm:gap-4"
      >
        {heroPhotos.map((photo, index) => (
          <div
            key={photo.src}
            className={`relative aspect-square overflow-hidden rounded-full shadow-[0_24px_50px_rgba(0,0,0,0.6)] ${
              index % 2 === 1 ? 'translate-y-6 sm:translate-y-10' : ''
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="scale-[1.08] object-cover"
              sizes="(max-width: 1024px) 50vw, 300px"
              priority={index < 2}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
