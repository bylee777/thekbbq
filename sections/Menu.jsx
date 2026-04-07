'use client';

import { useMemo, useState } from 'react';
import { ayceMenu, menuList } from '../constants';
import { MenuCard } from '../components';

const aLaCarteCategories = [
  'Pork',
  'Beef',
  'Chicken',
  'Marinated',
  'Side For Grill',
  'Noodles',
  'Soup and Hotpot',
  'To Share',
];

const menuModes = [
  {
    id: 'a-la-carte',
    label: 'A La Carte',
    text: 'Individual cuts, noodles, soups, and share plates priced separately.',
  },
  {
    id: 'all-you-can-eat',
    label: 'All You Can Eat',
    text: 'Night AYCE combos with weekday and weekend pricing.',
  },
];

const Menu = () => {
  const [menuMode, setMenuMode] = useState(menuModes[0].id);
  const [activeCategory, setActiveCategory] = useState(aLaCarteCategories[0]);
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {
    const search = query.trim().toLowerCase();

    return menuList.filter((item) => {
      const itemCategories = Array.isArray(item.category)
        ? item.category
        : [item.category];
      const categoryMatches = itemCategories.includes(activeCategory);

      if (!categoryMatches) {
        return false;
      }

      if (!search) {
        return true;
      }

      return `${item.title} ${item.text || ''}`.toLowerCase().includes(search);
    });
  }, [activeCategory, query]);

  const menuDescription = menuMode === 'a-la-carte'
    ? 'Browse individual cuts, noodles, soups, and share plates by category.'
    : 'Compare combo tiers, review AYCE house rules, and see exactly what is included in each combo.';
  const comboACoreSection = ayceMenu.sections.find((section) => section.id === 'combo-a-core');
  const comboBAddsSection = ayceMenu.sections.find((section) => section.id === 'combo-b-adds');
  const unlimitedSidesSection = ayceMenu.sections.find((section) => section.id === 'unlimited-sides');

  return (
    <section id="menu" className="site-shell section-wrap pt-8 sm:pt-10">
      <div className="space-y-7">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="space-y-3">
            <span className="section-tag">Menu</span>
            <h2 className="text-[40px] font-semibold leading-[1.05] text-[var(--text-primary)] sm:text-[52px]">
              Choose the menu format that fits your table.
            </h2>
            <p className="max-w-[64ch] text-[15px] leading-7 text-[var(--text-muted)]">
              {menuDescription}
            </p>
          </div>

          <div className="w-full xl:max-w-[520px]">
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Menu Setting
            </label>
            <div className="grid gap-2 sm:grid-cols-2">
              {menuModes.map((mode) => {
                const isActive = menuMode === mode.id;

                return (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setMenuMode(mode.id)}
                    className={`rounded-[28px] border p-4 text-left transition ${
                      isActive
                        ? 'border-transparent bg-[rgba(31,26,22,0.94)] text-[#fff8f2] shadow-[var(--shadow-lift)]'
                        : 'border-[var(--border-tone)] bg-[rgba(255,255,255,0.82)] text-[var(--text-primary)]'
                    }`}
                  >
                    <p
                      className={`text-[12px] font-semibold uppercase tracking-[0.12em] ${
                        isActive ? 'text-[#f5d8c0]' : 'text-[var(--accent-deep)]'
                      }`}
                    >
                      {mode.label}
                    </p>
                    <p
                      className={`mt-2 text-[14px] leading-6 ${
                        isActive ? 'text-[#f7ebe0]' : 'text-[var(--text-muted)]'
                      }`}
                    >
                      {mode.text}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {menuMode === 'a-la-carte' ? (
          <>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-[54ch]">
                <p className="text-[14px] leading-6 text-[var(--text-muted)]">
                  Filter by category and search by name to quickly find your
                  ideal grill set, noodle dish, or shared side.
                </p>
              </div>

              <div className="w-full sm:w-[310px]">
                <label
                  htmlFor="menu-search"
                  className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]"
                >
                  Search Dishes
                </label>
                <input
                  id="menu-search"
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try pork belly, hot pot, bibimbap..."
                  className="w-full rounded-full border border-[var(--border-tone)] bg-[rgba(255,255,255,0.82)] px-4 py-3 text-[14px] text-[var(--text-primary)] outline-none ring-0 placeholder:text-[rgba(98,84,71,0.8)] focus:border-[rgba(142,69,34,0.6)]"
                />
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {aLaCarteCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`chip-btn whitespace-nowrap ${
                    activeCategory === category ? 'active' : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredItems.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredItems.map((item) => (
                  <MenuCard key={item.id} {...item} />
                ))}
              </div>
            ) : (
              <div className="surface-panel rounded-3xl p-8 text-center">
                <p className="text-[15px] leading-7 text-[var(--text-muted)]">
                  No dishes matched your search in{' '}
                  <strong>{activeCategory}</strong>.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="surface-panel rounded-[34px] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-deep)]">
                  {ayceMenu.label}
                </p>
                <h3 className="mt-3 text-[38px] font-semibold leading-[1.02] text-[var(--text-primary)] sm:text-[44px]">
                  Simple dinner AYCE pricing.
                </h3>
                <p className="mt-4 max-w-[58ch] text-[15px] leading-7 text-[var(--text-muted)]">
                  {ayceMenu.intro}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 xl:justify-end">
                {ayceMenu.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[rgba(142,69,34,0.18)] bg-[rgba(188,95,50,0.08)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--accent-deep)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="my-8 divider-line" />

            <div className="grid gap-4 lg:grid-cols-2">
              {ayceMenu.combos.map((combo, index) => {
                const isFeatured = index === ayceMenu.combos.length - 1;

                return (
                  <article
                    key={combo.id}
                    className={`rounded-[30px] border p-6 ${
                      isFeatured
                        ? 'border-[rgba(31,26,22,0.1)] bg-[rgba(31,26,22,0.94)] text-[#fff8f2]'
                        : 'border-[var(--border-tone)] bg-[rgba(255,255,255,0.92)] text-[var(--text-primary)]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
                            isFeatured ? 'text-[#e8c9b0]' : 'text-[var(--accent-deep)]'
                          }`}
                        >
                          Combo Tier
                        </p>
                        <h4 className="mt-3 text-[34px] font-semibold leading-none">
                          {combo.name}
                        </h4>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
                          isFeatured
                            ? 'bg-[rgba(255,255,255,0.1)] text-[#fff1e4]'
                            : 'bg-[rgba(188,95,50,0.12)] text-[var(--accent-deep)]'
                        }`}
                      >
                        {isFeatured ? 'Combo A + Extras' : 'Core Set'}
                      </span>
                    </div>

                    <p
                      className={`mt-4 text-[14px] leading-6 ${
                        isFeatured ? 'text-[#f0ddd0]' : 'text-[var(--text-muted)]'
                      }`}
                    >
                      {combo.blurb}
                    </p>

                    <dl className="mt-6 space-y-3 border-t border-[rgba(156,124,100,0.24)] pt-5">
                      <div className="flex items-end justify-between gap-4">
                        <dt
                          className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
                            isFeatured ? 'text-[#e8c9b0]' : 'text-[var(--text-muted)]'
                          }`}
                        >
                          Weekday
                        </dt>
                        <dd className="text-[30px] font-semibold leading-none">
                          ${combo.weekday.toFixed(2)}
                        </dd>
                      </div>
                      <div className="flex items-end justify-between gap-4">
                        <dt
                          className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
                            isFeatured ? 'text-[#e8c9b0]' : 'text-[var(--text-muted)]'
                          }`}
                        >
                          Weekend
                        </dt>
                        <dd className="text-[30px] font-semibold leading-none">
                          ${combo.weekend.toFixed(2)}
                        </dd>
                      </div>
                    </dl>
                  </article>
                );
              })}
            </div>

            <div className="my-8 divider-line" />

            <div className="grid gap-8 xl:grid-cols-[0.9fr_0.9fr_1.2fr]">
              <section>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-deep)]">
                  Included in Both
                </p>
                <h4 className="mt-3 text-[30px] font-semibold leading-[1.02] text-[var(--text-primary)]">
                  Combo A Core Cuts
                </h4>
                <ul className="mt-5 border-y border-[rgba(156,124,100,0.24)]">
                  {comboACoreSection.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between gap-4 border-b border-[rgba(156,124,100,0.18)] py-3 last:border-b-0"
                    >
                      <span className="text-[15px] leading-6 text-[var(--text-primary)]">
                        {item.title}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent-deep)]">
                        Included
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-deep)]">
                  Combo B Extras
                </p>
                <h4 className="mt-3 text-[30px] font-semibold leading-[1.02] text-[var(--text-primary)]">
                  Additional Proteins
                </h4>
                <ul className="mt-5 border-y border-[rgba(156,124,100,0.24)]">
                  {comboBAddsSection.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between gap-4 border-b border-[rgba(156,124,100,0.18)] py-3 last:border-b-0"
                    >
                      <span className="text-[15px] leading-6 text-[var(--text-primary)]">
                        {item.title}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent-deep)]">
                        Combo B
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-deep)]">
                  Unlimited Sides
                </p>
                <h4 className="mt-3 text-[30px] font-semibold leading-[1.02] text-[var(--text-primary)]">
                  AYCE Side Menu
                </h4>
                <div className="mt-5 grid gap-x-6 gap-y-3 border-y border-[rgba(156,124,100,0.24)] py-4 sm:grid-cols-2">
                  {unlimitedSidesSection.items.map((item) => (
                    <div
                      key={item.id}
                      className="border-b border-[rgba(156,124,100,0.14)] pb-3 last:border-b-0"
                    >
                      <span className="text-[15px] leading-6 text-[var(--text-primary)]">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="my-8 divider-line" />

            <section>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-deep)]">
                Rules
              </p>
              <div className="mt-4 grid gap-x-8 gap-y-3 md:grid-cols-2">
                {ayceMenu.rules.map((rule) => (
                  <p
                    key={rule}
                    className="text-[14px] leading-6 text-[var(--text-muted)]"
                  >
                    {rule}
                  </p>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
