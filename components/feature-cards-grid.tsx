"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileText, FlaskConical, Mountain, Tag } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Card = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

const CARDS: Card[] = [
  {
    Icon: FlaskConical,
    title: "Доказательная медицина",
    body: 'Каждая формула опирается на клинические исследования. Без обещаний "чудо-эффекта".',
  },
  {
    Icon: Mountain,
    title: "Швейцарские технологии",
    body: "Производство по швейцарским стандартам. Контроль качества на каждом этапе.",
  },
  {
    Icon: Tag,
    title: "Чистая цена",
    body: "Продаём через маркетплейсы напрямую. Без посредников и накруток.",
  },
  {
    Icon: FileText,
    title: "Прозрачный состав",
    body: 'Полный список ингредиентов и дозировок на упаковке. Никаких "проприетарных смесей".',
  },
];

export default function FeatureCardsGrid() {
  const reduced = useReducedMotion();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {CARDS.map(({ Icon, title, body }, index) => (
        <motion.article
          key={title}
          initial={{ opacity: 0, y: reduced ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduced ? 0 : 0.5,
            delay: reduced ? 0 : index * 0.1,
            ease: "easeOut",
          }}
          className="bg-white rounded-2xl p-8 border border-stone-200/60 transform-gpu"
        >
          <div className="w-12 h-12 bg-stone-900 rounded-xl grid place-items-center">
            <Icon size={24} className="text-stone-100" />
          </div>
          <h3 className="text-lg font-semibold text-stone-900 mt-6">{title}</h3>
          <p className="text-sm text-stone-600 leading-relaxed mt-2">{body}</p>
        </motion.article>
      ))}
    </div>
  );
}
