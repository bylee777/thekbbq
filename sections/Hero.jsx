'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { fadeIn, staggerContainer } from '../utils/motion';
import { MAPS_URL } from '../constants';

const heroPhotos = [
  { src: '/menu/la-short-rib.jpg', alt: 'Marinated LA short rib' },
  { src: '/menu/beef-brisket.jpg', alt: 'Thinly sliced beef brisket' },
  { src: '/menu/pork-belly.jpg', alt: 'Pork belly' },
  { src: '/menu/spicy-bulgogi.jpg', alt: 'Sweet and spicy bulgogi' },
];

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
      className="site-shell relative grid items-center gap-12 pb-16 pt-12 sm:pb-24 sm:pt-16 lg:grid-cols-[1fr_1fr] lg:gap-16"
    >
      <motion.div variants={fadeIn('up', 'tween', 0.1, 0.8)} className="space-y-7">
        <span className="section-tag">Korean Table BBQ · Toronto</span>

        <h1 className="display-heading">
          Fire up the grill.
          <span className="block text-[var(--accent)]">We&apos;ll bring the meat.</span>
        </h1>

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
