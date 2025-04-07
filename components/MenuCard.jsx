'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles';

const MenuCard = ({
  id,
  imgUrl,
  title,
  text,
  active,
  handleClick,
  scrollContainerRef,
}) => {
  const isActive = active === id;
  const cardRef = useRef(null);

  useEffect(() => {
    if (isActive
      && cardRef.current
      && scrollContainerRef?.current
      && window.innerWidth < 640) {
      const card = cardRef.current;
      const container = scrollContainerRef.current;
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const containerWidth = container.clientWidth;
      const scrollTo = cardLeft - (containerWidth / 2 - cardWidth / 2);

      container.scrollTo({
        left: scrollTo,
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
        priority
      />

      {!isActive && (
        <h3 className="font-semibold sm:text-[22px] text-[16px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] whitespace-normal break-words text-center w-[160px]">
          {title}
        </h3>
      )}

      {isActive && (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[28px] glassmorphism mb-[5px]`}>
            <Image
              src="/pig.png"
              alt="pig icon"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white leading-tight break-words">
            {title}
          </h2>
          <p className="font-normal text-[16px] leading-[20.16px] text-white">
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
