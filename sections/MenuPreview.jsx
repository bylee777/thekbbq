'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BrushMark } from '../components';
import { aLaCarteMenu, ayceMenu, eelMenu } from '../constants';

const formatPrice = (price) => `$${price.toFixed(2)}`;

const adultPrice = (period) => period.rows.find((row) => row.label === 'Adult').price;
// Lowest-priced grill cut, so the poster doesn't lead with plain rice.
const grillCategories = ['pork', 'beef', 'chicken'];
const aLaCarteFrom = Math.min(
  ...aLaCarteMenu
    .filter((category) => grillCategories.includes(category.id))
    .flatMap((category) => category.items.map((item) => item.price)),
);

const posterBase = 'group relative flex aspect-[3/4] flex-col overflow-hidden rounded-[6px] shadow-[0_30px_70px_rgba(0,0,0,0.55)] transition duration-300 hover:-translate-y-1';

const PosterPhoto = ({ src, alt }) => (
  <div className="relative mx-auto aspect-square w-[62%]">
    <div className="absolute inset-0 overflow-hidden rounded-full shadow-[0_24px_50px_rgba(0,0,0,0.5)]">
      <Image
        src={src}
        alt={alt}
        fill
        className="scale-[1.08] object-cover transition duration-700 group-hover:scale-[1.15]"
        sizes="(max-width: 768px) 60vw, 240px"
      />
    </div>
  </div>
);

const PosterCta = ({ dark }) => (
  <span
    className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-[13px] font-bold ${
      dark ? 'bg-[var(--accent)] text-[#140b05]' : 'bg-[#140b05] text-white'
    }`}
  >
    See the menu
    <span aria-hidden="true">→</span>
  </span>
);

const MenuPreview = () => (
  <section className="site-shell section-wrap pt-0 sm:pt-0">
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="space-y-4">
        <span className="section-tag">The Menu</span>
        <h2 className="section-heading max-w-[16ch]">Three ways to eat.</h2>
      </div>
      <Link href="/menuPage#menu" className="secondary-btn">
        Full Menu
        <span aria-hidden="true">→</span>
      </Link>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-5">
      {/* All You Can Eat — orange cover poster with prices */}
      <Link href="/menuPage#ayce" className={`${posterBase} poster-orange px-5 py-7 text-center text-white`}>
        <p className="font-display text-[44px] font-extrabold uppercase leading-[0.9] sm:text-[48px]">
          All You
          <br />
          Can Eat
        </p>
        <div className="relative mx-auto mt-4 aspect-[1200/909] w-full">
          <Image
            src="/menu/ayce-hero.png"
            alt="Beef short plate, seasoned beef, and pork belly on brass plates"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, 360px"
          />
        </div>
        <dl className="mx-auto mt-5 w-full max-w-[240px] space-y-1.5 text-left">
          {ayceMenu.pricing.map((period) => (
            <div key={period.days} className="flex items-center justify-between gap-3 border-b border-[rgba(255,255,255,0.3)] pb-1.5">
              <dt className="font-display text-[15px] font-semibold uppercase leading-tight">
                {period.days.replace('Monday to Thursday', 'Mon – Thu').replace('Friday to Sunday & Holidays', 'Fri – Sun & Hol.')}
              </dt>
              <dd className="font-display text-[26px] font-extrabold leading-none">
                {formatPrice(adultPrice(period))}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 flex flex-1 items-end justify-center">
          <PosterCta />
        </div>
      </Link>

      {/* Eel Course — dark poster with brush heading */}
      <Link
        href="/menuPage#eel"
        className={`${posterBase} border border-[rgba(255,255,255,0.06)] bg-[#141110] px-5 py-7 [background-image:var(--texture)]`}
      >
        <div className="relative mb-6 pl-5 pt-3">
          <BrushMark />
          <p className="relative text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--accent-light)]">
            Whole Grilled Eel
          </p>
          <p className="font-display relative mt-1 text-[44px] font-extrabold uppercase leading-none text-[var(--text-primary)] sm:text-[48px]">
            Eel Course
          </p>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-[6px]">
          <Image
            src="/menu/eel-course-b.jpg"
            alt="Eel course spread"
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 90vw, 340px"
          />
        </div>
        <ul className="mt-5 space-y-1.5">
          {eelMenu.courses.map((course) => (
            <li key={course.id} className="flex items-center justify-between gap-3 border-b border-[var(--border-tone)] pb-1.5">
              <span className="font-display text-[20px] font-bold uppercase leading-none text-[var(--text-primary)]">
                {course.name}
              </span>
              <span className="font-display text-[16px] font-semibold uppercase text-[var(--accent-light)]">
                {typeof course.price === 'number' ? formatPrice(course.price) : course.serves}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-1 items-end justify-center">
          <PosterCta dark />
        </div>
      </Link>

      {/* À La Carte — orange cover poster */}
      <Link href="/menuPage#a-la-carte" className={`${posterBase} poster-orange px-5 py-7 text-center text-white`}>
        <p className="font-display text-[44px] font-extrabold uppercase leading-[0.9] sm:text-[48px]">
          À La
          <br />
          Carte
        </p>
        <div className="mt-5">
          <PosterPhoto src="/menu/pork-belly.jpg" alt="Pork belly" />
        </div>
        <p className="font-display mt-5 text-[16px] font-semibold uppercase tracking-[0.08em]">
          Grill cuts from
        </p>
        <p className="font-display mt-1 text-[38px] font-extrabold leading-none">
          {formatPrice(aLaCarteFrom)}
        </p>
        <div className="mt-5 flex flex-1 items-end justify-center">
          <PosterCta />
        </div>
      </Link>
    </div>
  </section>
);

export default MenuPreview;
