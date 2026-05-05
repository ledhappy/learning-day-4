"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function HeroContent() {
  const reduced = useReducedMotion();

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduced ? 0 : 0.5,
      delay: reduced ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 md:px-16 lg:px-24 max-w-2xl text-left text-white pt-16 md:pt-20">
      <motion.span
        {...fade(0.1)}
        className="mb-6 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-wider backdrop-blur-sm"
      >
        Нутрицевтики на доказательной медицине
      </motion.span>
      <motion.h1
        {...fade(0.2)}
        className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight"
      >
        <span className="block md:whitespace-nowrap">Швейцарская формула.</span>
        <span className="block md:whitespace-nowrap">Российская цена.</span>
      </motion.h1>
      <motion.p
        {...fade(0.35)}
        className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl"
      >
        Бренд, который продаётся там, где удобно покупать — Wildberries, Ozon, Яндекс.Маркет.
      </motion.p>
      <motion.a
        {...fade(0.5)}
        href="#"
        className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-medium text-black transition-[transform,background-color] duration-200 hover:bg-white/90 hover:scale-[1.04] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
      >
        Смотреть каталог
      </motion.a>
      <motion.p {...fade(0.6)} className="mt-4 text-sm text-white/70">
        Свыше 50 000 отзывов на маркетплейсах
      </motion.p>
    </div>
  );
}
