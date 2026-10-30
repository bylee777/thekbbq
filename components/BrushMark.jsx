'use client';

// Brush-stroke mark that sits behind each poster heading.
const BrushMark = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 400 130"
    className="absolute -left-3 -top-3 h-[96px] w-[300px] sm:h-[120px] sm:w-[380px]"
    preserveAspectRatio="none"
  >
    <path
      fill="var(--accent)"
      d="M6 20 C 70 9, 180 15, 300 10 S 384 4, 398 9 L 394 21 C 330 22, 240 25, 150 28 S 40 33, 9 36 Z"
    />
    <path
      fill="var(--accent)"
      d="M20 14 C 27 40, 22 78, 27 126 L 17 124 C 13 88, 15 46, 10 18 Z"
    />
  </svg>
);

export default BrushMark;
