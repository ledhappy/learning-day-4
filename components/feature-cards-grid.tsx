"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ListChecks, Microscope, ShieldCheck, Tag } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Card = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

const CARDS: Card[] = [
  {
    Icon: Microscope,
    title: "Доказательная медицина",
    body: 'Каждая формула опирается на клинические исследования. Без обещаний "чудо-эффекта".',
  },
  {
    Icon: ShieldCheck,
    title: "Швейцарские технологии",
    body: "Производство по швейцарским стандартам. Контроль качества на каждом этапе.",
  },
  {
    Icon: Tag,
    title: "Чистая цена",
    body: "Продаём через маркетплейсы напрямую. Без посредников и накруток.",
  },
  {
    Icon: ListChecks,
    title: "Прозрачный состав",
    body: 'Полный список ингредиентов и дозировок на упаковке. Никаких "проприетарных смесей".',
  },
];

const SHADOW_MD =
  "0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10)";
const SHADOW_LG =
  "0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)";

export default function FeatureCardsGrid() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.1 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: reduced ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
    >
      {CARDS.map(({ Icon, title, body }) => (
        <motion.article
          key={title}
          variants={card}
          whileHover={
            reduced
              ? undefined
              : {
                  y: -2,
                  boxShadow: SHADOW_LG,
                  transition: { duration: 0.2, ease: "easeOut" },
                }
          }
          style={{ boxShadow: SHADOW_MD }}
          className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/60 transform-gpu"
        >
          <Icon
            size={32}
            strokeWidth={1.5}
            className="text-stone-900 mb-4"
            aria-hidden
          />
          <h3 className="text-xl font-medium tracking-tight text-stone-900">
            {title}
          </h3>
          <p className="text-stone-600 leading-relaxed mt-2">{body}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
