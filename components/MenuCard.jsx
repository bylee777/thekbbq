'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles';

const iconMap = {
  Pig: '/pig.png',
  Beef: '/beef.png',
  Chicken: '/chicken.png',
  Seafood: '/seafood.png',
};

const MenuCard = ({
  id,
  imgUrl,
  title,
  text,
  price,
  icon,
  grams,
  active,
  handleClick,
  scrollContainerRef,
}) => {
  const isActive = active === id;
  const cardRef = useRef(null);

  useEffect(() => {
    if (
      isActive
      && cardRef.current
      && scrollContainerRef?.current
      && window.innerWidth < 640
    ) {
      const card = cardRef.current;
      const container = scrollContainerRef.current;

      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const scrollLeft = card.offsetLeft - (containerRect.width / 2 - cardRect.width / 2);

      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      role="button"
      tabIndex={0}
      onClick={() => handleClick(id)}
      className={`relative ${
        isActive ? 'w-[75vw] lg:w-[600px]' : 'w-[200px]'
      } h-[600px] transition-all duration-500 ease-out cursor-pointer snap-center flex-shrink-0 flex items-center justify-center`}
    >
      <Image
        src={imgUrl}
        alt={title}
        fill
        className="object-cover rounded-[24px]"
        sizes="(max-width: 768px) 75vw, 600px"
        loading="lazy"
      />

      {!isActive && (
        <h3 className="font-semibold sm:text-[22px] text-[16px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] whitespace-normal break-words text-center w-[160px]">
          {title}
        </h3>
      )}

      {isActive && (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          {/* Show icon only if valid */}
          {icon && iconMap[icon] && (
            <div className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[28px] glassmorphism mb-[5px]`}>
              <Image
                src={iconMap[icon]}
                alt={`${icon} icon`}
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          )}

          {/* Title + Price + (conditionally) Grams */}
          <div className="mt-[24px] w-full flex items-center justify-between">
            <h2 className="font-semibold sm:text-[32px] text-[24px] text-white leading-tight break-words">
              {title}
            </h2>
            <div className="text-right">
              <p className="font-bold text-[18px] text-white">${price}</p>
              {grams && <p className="text-[14px] text-white">{grams}</p>}
            </div>
          </div>

          <p className="font-normal text-[16px] leading-[20.16px] text-white mt-2">
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
