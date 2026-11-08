'use client';

import Image from 'next/image';
import { aLaCarteCombos, aLaCarteMenu, ayceMenu, eelMenu, ko } from '../constants';
import { BrushMark, MenuTiles } from '../components';

const formatPrice = (price) => `$${price.toFixed(2)}`;

// "Beef" -> "Beef · 소고기"; falls back to the English alone.
const withKo = (name) => (ko(name) ? `${name} · ${ko(name)}` : name);
// "A + B" in English and Korean, for course/combo item lists.
const koList = (items) => (items.every((i) => ko(i)) ? items.map(ko).join(' + ') : null);

const KoLine = ({ children, className = '' }) =>
  children ? (
    <p lang="ko" className={`mt-1 font-sans font-medium text-[var(--text-muted)] ${className}`}>
      {children}
    </p>
  ) : null;

const orderRules = [
  'Minimum order is 2 servings of meat or vegan set per table.',
  'One order equals one serving.',
  'Every BBQ table comes with lettuce wraps, corn cheese, chilled sides, and ssamjang, salt & sesame oil.',
];

const PosterHeading = ({ eyebrow, title }) => (
  <div className="relative mb-10 pl-6 pt-4 sm:mb-14 sm:pl-8">
    <BrushMark />
    {eyebrow && (
      <p className="relative text-[15px] font-bold uppercase tracking-[0.12em] text-[var(--accent-light)] sm:text-[18px]">
        {withKo(eyebrow)}
      </p>
    )}
    <p className="font-display relative mt-1 text-[44px] font-extrabold uppercase leading-none text-[var(--text-primary)] sm:text-[60px]">
      {title}
    </p>
    <KoLine className="text-[18px] sm:text-[24px]">{ko(title)}</KoLine>
  </div>
);

const Poster = ({ id, children, className = '' }) => (
  <article
    id={id}
    className={`scroll-mt-20 overflow-hidden rounded-[6px] border border-[rgba(255,255,255,0.06)] bg-[#141110] px-5 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.55)] [background-image:var(--texture)] sm:px-12 sm:py-14 ${className}`}
  >
    {children}
  </article>
);

const DishRow = ({ title, price, imgUrl, note, flip }) => (
  <li className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center gap-4 sm:gap-6">
    <div className={`relative aspect-square ${flip ? 'order-2' : ''}`}>
      {imgUrl ? (
        <div className="absolute inset-0 overflow-hidden rounded-full shadow-[0_18px_40px_rgba(0,0,0,0.6)]">
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="scale-[1.08] object-cover"
            sizes="(max-width: 1024px) 50vw, 240px"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="absolute inset-[12%] rounded-full border border-dashed border-[var(--border-strong)]" />
      )}
    </div>
    <div className={flip ? 'order-1 text-right' : ''}>
      <p className="font-display text-[24px] font-bold leading-[1.02] text-[var(--text-primary)] sm:text-[32px]">
        {title}
      </p>
      <KoLine className="text-[16px] sm:text-[20px]">{ko(title)}</KoLine>
      {typeof price === 'number' && (
        <p className="font-display mt-2 text-[22px] font-bold leading-none text-[var(--accent)] sm:text-[28px]">
          {formatPrice(price)}
        </p>
      )}
      {note && (
        <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.06em] text-[var(--text-muted)] sm:text-[14px]">
          {note}
        </p>
      )}
    </div>
  </li>
);

// Two mirrored columns on desktop (photos on the outer edges), a zig-zag on phones.
const DishList = ({ items }) => (
  <ul className="grid gap-x-12 gap-y-8 sm:gap-y-10 lg:grid-cols-2">
    {items.map((item, index) => (
      <DishRow key={item.title} {...item} flip={index % 2 === 1} />
    ))}
  </ul>
);

const FinePrint = ({ items, className = '' }) => (
  <ul className={`grid gap-x-8 gap-y-2 rounded-[4px] bg-[#f7eee6] p-5 text-[13px] leading-5 text-[#2a1d14] sm:grid-cols-2 sm:p-6 ${className}`}>
    {items.map((item) => (
      <li key={item} className="flex gap-2">
        <span aria-hidden="true">•</span>
        {item}
      </li>
    ))}
  </ul>
);

const Menu = () => (
  <section id="menu" className="mx-auto w-full max-w-[1080px] scroll-mt-20 space-y-6 px-3 pb-20 pt-6 sm:space-y-10 sm:px-8 sm:pt-10">
    <MenuTiles className="mx-auto max-w-[720px]" />

    {/* ─── AYCE COVER ───────────────────────────────────────────────────── */}
    <article
      id="ayce"
      className="poster-orange scroll-mt-20 overflow-hidden rounded-[6px] px-5 pb-6 pt-10 text-white shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:px-12 sm:pb-10 sm:pt-14"
    >
      <div className="text-center">
        <h1 className="font-display text-[56px] font-extrabold leading-[0.9] sm:text-[104px]">
          All You Can Eat
        </h1>
        <p lang="ko" className="mt-2 text-[22px] font-bold sm:text-[32px]">무한리필</p>
        <p className="font-display mt-3 text-[18px] font-bold uppercase tracking-[0.3em] sm:text-[22px]">
          The KBBQ · Toronto
        </p>
      </div>

      <div className="relative mx-auto mt-6 aspect-[1200/909] w-full max-w-[640px] sm:mt-8">
        <Image
          src="/menu/ayce-hero.png"
          alt="Beef short plate, seasoned beef, and pork belly on brass plates"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 92vw, 640px"
          priority
        />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-10">
        {ayceMenu.pricing.map((period) => (
          <div key={period.days} className="text-center">
            <p className="font-display min-h-[2.2em] text-[19px] font-bold uppercase leading-[1.1] sm:min-h-0 sm:text-[28px]">
              {period.days}
            </p>
            <dl className="mx-auto mt-4 max-w-[260px] space-y-2 text-left">
              {period.rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-2 border-b border-[rgba(255,255,255,0.3)] pb-2">
                  <dt className="font-display text-[19px] font-semibold uppercase leading-none sm:text-[24px]">
                    {row.label}
                    {row.age && (
                      <span className="mt-1 block text-[12px] font-medium normal-case leading-none opacity-85 sm:text-[14px]">
                        {row.age}
                      </span>
                    )}
                  </dt>
                  <dd className="font-display text-[24px] font-extrabold leading-none sm:text-[36px]">
                    {formatPrice(row.price)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <FinePrint items={ayceMenu.rules} className="mt-8 sm:mt-10" />
    </article>

    {/* ─── AYCE POSTERS ─────────────────────────────────────────────────── */}
    {ayceMenu.categories.map((category) => (
      <Poster key={category.id} id={category.id}>
        <PosterHeading eyebrow="All You Can Eat" title={category.title} />
        <DishList items={category.items} />
      </Poster>
    ))}

    {/* ─── EEL COURSE ───────────────────────────────────────────────────── */}
    <Poster id="eel">
      <PosterHeading title={eelMenu.label} />
      <p className="-mt-4 mb-10 max-w-[52ch] text-[15px] leading-7 text-[var(--text-muted)] sm:-mt-6">
        {eelMenu.intro}
      </p>

      <div className="space-y-12">
        {eelMenu.courses.map((course, index) => (
          <div
            key={course.id}
            className="grid items-center gap-6 md:grid-cols-[1.2fr_1fr] md:gap-10"
          >
            <div className={`relative aspect-[4/3] overflow-hidden rounded-[6px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <Image
                src={course.imgUrl}
                alt={`Eel ${course.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 560px"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-display text-[40px] font-extrabold uppercase leading-none text-[var(--text-primary)] sm:text-[52px]">
                {course.name}
              </p>
              <p className="font-display mt-1 text-[18px] font-semibold uppercase text-[var(--text-muted)]">
                {course.serves}
                {ko(course.serves) && <span lang="ko" className="ml-2 font-sans normal-case">· {ko(course.name)} · {ko(course.serves)}</span>}
              </p>
              {typeof course.price === 'number' && (
                <p className="font-display mt-3 text-[32px] font-extrabold leading-none text-[var(--accent)]">
                  {formatPrice(course.price)}
                </p>
              )}
              <p className="mt-4 text-[15px] leading-7 text-[var(--text-primary)]">
                {course.items.join(' + ')}
              </p>
              <KoLine className="text-[14px] leading-6">{koList(course.items)}</KoLine>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 border-t border-[var(--border-tone)] pt-10">
        <p className="font-display text-[26px] font-bold uppercase text-[var(--text-primary)] sm:text-[32px]">
          How to Grill Eel Perfectly
        </p>
        <KoLine className="text-[16px]">장어 맛있게 굽는 법</KoLine>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {eelMenu.grillSteps.map((step, index) => (
            <li key={step.title}>
              <p className="font-display text-[40px] font-extrabold leading-none text-[var(--accent)]">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="font-display mt-2 text-[20px] font-bold uppercase leading-tight text-[var(--text-primary)]">
                {step.title}
              </p>
              <p className="mt-1 text-[14px] leading-6 text-[var(--text-muted)]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Poster>

    {/* ─── À LA CARTE ───────────────────────────────────────────────────── */}
    <article
      id="a-la-carte"
      className="poster-orange scroll-mt-20 overflow-hidden rounded-[6px] px-5 py-10 text-center text-white shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:px-12 sm:py-14"
    >
      <h2 className="font-display text-[56px] font-extrabold leading-[0.9] sm:text-[96px]">
        À La Carte
      </h2>
      <p lang="ko" className="mt-2 text-[22px] font-bold sm:text-[32px]">단품</p>
      <p className="font-display mt-3 text-[18px] font-bold uppercase tracking-[0.3em] sm:text-[22px]">
        Individual Cuts &amp; Dishes
      </p>
      <FinePrint items={orderRules} className="mt-8 text-left sm:mt-10" />
    </article>

    <Poster id="combos">
      <PosterHeading eyebrow="À La Carte" title="Combos" />
      <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {aLaCarteCombos.map((combo) => (
          <li key={combo.id} className="border-t border-[var(--border-tone)] pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-display text-[30px] font-extrabold uppercase leading-none text-[var(--text-primary)] sm:text-[38px]">
                {combo.name}
                <span lang="ko" className="mt-1 block font-sans text-[16px] font-medium normal-case text-[var(--text-muted)] sm:text-[18px]">{ko(combo.name)}</span>
              </p>
              <p className="font-display shrink-0 text-[26px] font-extrabold leading-none text-[var(--accent)] sm:text-[32px]">
                {formatPrice(combo.price)}
              </p>
            </div>
            <p className="mt-4 text-[15px] leading-7 text-[var(--text-primary)]">
              {combo.items.join(' + ')}
            </p>
            <KoLine className="text-[14px] leading-6">{koList(combo.items)}</KoLine>
          </li>
        ))}
      </ul>
    </Poster>

    {aLaCarteMenu.map((category) => (
      <Poster key={category.id} id={category.id}>
        <PosterHeading eyebrow="À La Carte" title={category.title} />
        <DishList items={category.items} />
      </Poster>
    ))}
  </section>
);

export default Menu;
