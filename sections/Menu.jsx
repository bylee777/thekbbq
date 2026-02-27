'use client';

import { useMemo, useState } from 'react';
import { menuList } from '../constants';
import { MenuCard } from '../components';

const categories = [
  'Pork',
  'Marinated',
  'Beef',
  'Side For Grill',
  'Soup and Hotpot',
  'Noodles',
  'Side Dishes to share',
  'Rice',
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
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

  return (
    <section id="menu" className="site-shell section-wrap pt-8 sm:pt-10">
      <div className="space-y-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <span className="section-tag">Menu</span>
            <h2 className="text-[40px] font-semibold leading-[1.05] text-[var(--text-primary)] sm:text-[52px]">
              Explore dishes by category
            </h2>
            <p className="max-w-[64ch] text-[15px] leading-7 text-[var(--text-muted)]">
              Filter by category and search by name to quickly find your ideal
              grill set, noodle dish, or shared side.
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
          {categories.map((category) => (
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
              No dishes matched your search in <strong>{activeCategory}</strong>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
