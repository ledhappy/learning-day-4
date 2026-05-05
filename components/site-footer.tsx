import Image from "next/image";
import Link from "next/link";

type Column = {
  heading: string;
  links: { href: string; label: string }[];
};

const COLUMNS: Column[] = [
  {
    heading: "Каталог",
    links: [
      { href: "#", label: "Все продукты" },
      { href: "#", label: "Сердце" },
      { href: "#", label: "Энергия" },
      { href: "#", label: "Иммунитет" },
    ],
  },
  {
    heading: "Наука",
    links: [
      { href: "#", label: "Исследования" },
      { href: "#", label: "Состав" },
      { href: "#", label: "FAQ" },
    ],
  },
  {
    heading: "О бренде",
    links: [
      { href: "#", label: "О Geberich" },
      { href: "#", label: "Контакты" },
      { href: "#", label: "Партнёрство" },
    ],
  },
  {
    heading: "Где купить",
    links: [
      { href: "#", label: "Wildberries" },
      { href: "#", label: "Ozon" },
      { href: "#", label: "Я.Маркет" },
      { href: "#", label: "Золотое яблоко" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div>
            <Image
              src="/brand/logo-geberich-white.png"
              alt="Geberich"
              width={120}
              height={120}
              className="h-14 w-14 object-contain"
            />
            <p className="text-sm text-stone-400 max-w-xs mt-4">
              Швейцарская формула. Российская цена.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-white">
                {col.heading}
              </h3>
              <ul className="space-y-2 mt-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
          <p className="text-xs text-stone-500">
            © 2026 Geberich. Все права защищены.
          </p>
          <p className="text-xs text-stone-500 max-w-md">
            БАД. Не является лекарственным средством. Перед применением
            проконсультируйтесь с врачом.
          </p>
        </div>
      </div>
    </footer>
  );
}
