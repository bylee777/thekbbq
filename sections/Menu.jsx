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
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef({});

  return (
    <section className={`${styles.paddings}`} id="menu">
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TypingText title="| Menu" textStyles="text-center" />

        {categories.map((category) => {
          const categoryItems = menuList.filter((item) =>
            Array.isArray(item.category)
              ? item.category.includes(category)
              : item.category === category
          );

          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">{category}</h2>
              <div
                ref={scrollContainerRef}
                className="flex gap-5 overflow-x-auto scrollbar-hide flex-nowrap snap-x snap-mandatory px-[10vw] sm:px-0"
              >
                {categoryItems.map((item, index) => (
                  <div
                    key={item.id}
                    ref={(el) => (cardRefs.current[item.id] = el)}
                    className="snap-start"
                  >
                    <MenuCard
                      {...item}
                      index={index}
                      active={null} // No interaction needed
                      handleClick={() => {}} // No selection behavior
                      scrollContainerRef={scrollContainerRef}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
