'use client';

import { useState } from 'react';
import Image from 'next/image';

const iconMap = {
  Pig: 'Pork',
  Beef: 'Beef',
  Chicken: 'Chicken',
  Seafood: 'Seafood',
};

const MenuCard = ({
  imgUrl,
  title,
  text,
  price,
  icon,
  grams,
  category,
}) => {
  const [imageSrc, setImageSrc] = useState(imgUrl || '/cover.png');
  const description = text && text !== '---'
    ? text
    : 'A simple and satisfying add-on for tabletop grilling.';
  const primaryCategory = Array.isArray(category) ? category[0] : category;
  const displayPrice = price ? `$${price}` : 'Market price';

  return (
    <article className="surface-panel group flex h-full flex-col overflow-hidden rounded-3xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          onError={() => setImageSrc('/cover.png')}
        />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-2 p-3">
          <span className="rounded-full bg-[rgba(31,26,22,0.72)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#f7ebe1]">
            {primaryCategory || 'Menu Item'}
          </span>
          {icon && iconMap[icon] && (
            <span className="rounded-full bg-[rgba(255,255,255,0.88)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--accent-deep)]">
              {iconMap[icon]}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[28px] font-semibold leading-[1.08] text-[var(--text-primary)]">
            {title}
          </h3>
          <p className="whitespace-nowrap text-[17px] font-semibold text-[var(--accent-deep)]">
            {displayPrice}
          </p>
        </div>

        {grams && (
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
            {grams}
          </p>
        )}

        <p className="mt-3 text-[14px] leading-6 text-[var(--text-muted)]">
          {description}
        </p>
      </div>
    </article>
  );
};

export default MenuCard;
