'use client';

import { useRef, useState } from 'react';
import styles from '../styles';
import { menuList } from '../constants';
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
  const cardRefs = useRef({});

  const filteredMenus = menuList.filter((item) =>
    Array.isArray(item.category)
      ? item.category.includes(activeCategory)
      : item.category === activeCategory
  );

  const handleCategoryClick = (cat) => {
    setActive(null);
    setTimeout(() => {
      setActiveCategory(cat);
    }, 0);
  };

  const handleCardClick = (id) => {
    setActive(id);
  };

  return (
    <section className={`${styles.paddings}`} id="menu">
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TypingText title="| Menu" textStyles="text-center" />

        {/* Category Tabs */}
        <div className="grid grid-cols-3 gap-3 sm:flex sm:gap-4 sm:mt-10 sm:mb-8 sm:overflow-x-auto sm:scrollbar-hide sm:px-4 sm:justify-center mt-6 mb-6 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`text-sm sm:text-base px-4 py-2 rounded-xl transition-colors whitespace-nowrap max-w-[110px] truncate ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide flex-nowrap snap-x snap-mandatory px-4 sm:px-0"
        >
          <div className="w-[10vw] shrink-0" />
          {filteredMenus.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardRefs.current[item.id] = el)}
              className="snap-start"
            >
              <MenuCard
                {...item}
                index={index}
                active={active}
                handleClick={() => handleCardClick(item.id)}
                scrollContainerRef={scrollContainerRef}
              />
            </div>
          ))}
          <div className="w-[10vw] shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default Menu;
