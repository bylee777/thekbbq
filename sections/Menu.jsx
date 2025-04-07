'use client';

import { useRef, useState } from 'react';
import styles from '../styles';
import { exploreWorlds } from '../constants';
import { MenuCard, TypingText } from '../components';

const categories = [
  'Pork',
  'Marinated',
  'Chicken',
  'Beef',
  'Side For Grill',
  'Soup and Hotpot',
  'Noodles',
  'Side Dishes to share',
  'Rice',
];

const Menu = () => {
  const [active, setActive] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Pork');

  const scrollContainerRef = useRef(null);

  const filteredWorlds = exploreWorlds.filter((world) =>
    Array.isArray(world.category)
      ? world.category.includes(activeCategory)
      : world.category === activeCategory
  );

  const handleCategoryClick = (cat) => {
    setActive(null);
    setTimeout(() => {
      setActiveCategory(cat);
    }, 0);
  };

  const handleCardClick = (id) => {
    setActive(id);

    const cardElement = scrollContainerRef.current?.querySelector(
      `[data-id="${id}"]`
    );
    const container = scrollContainerRef.current;

    if (window.innerWidth < 640 && cardElement && container) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = cardElement.getBoundingClientRect();

      const cardCenter = cardRect.left + cardRect.width / 2;
      const containerCenter = containerRect.left + containerRect.width / 2;

      const scrollOffset = cardCenter - containerCenter;

      container.scrollBy({
        left: scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={`${styles.paddings}`} id="menu">
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TypingText title="| Menu" textStyles="text-center" />

        {/* Categories */}
        <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-4 sm:mt-10 sm:mb-8 sm:overflow-x-auto sm:scrollbar-hide sm:px-4 sm:justify-center mt-6 mb-6 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`text-sm sm:text-base px-4 py-2 rounded-xl transition-colors whitespace-normal break-words text-center w-full ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide flex-nowrap snap-x snap-mandatory px-2 lg:px-[10vw]"
        >
          {filteredWorlds.map((world, index) => (
            <div
              key={world.id}
              data-id={world.id}
              className="snap-start"
            >
              <MenuCard
                {...world}
                index={index}
                active={active}
                handleClick={() => handleCardClick(world.id)}
                scrollContainerRef={scrollContainerRef}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
