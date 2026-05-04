export default function HeroVideo() {
  return (
    <section className="relative h-[100svh] md:h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" aria-hidden="true" />

      <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 md:px-16 lg:px-24 max-w-2xl text-left text-white font-sans">
        <span className="mb-6 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-wider backdrop-blur-sm">
          Нутрицевтики на доказательной медицине
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
          <span className="block whitespace-nowrap">Швейцарская формула.</span>
          <span className="block whitespace-nowrap">Российская цена.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          Бренд, который продаётся там, где удобно покупать — Wildberries, Ozon, Яндекс.Маркет.
        </p>
        <a
          href="#"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-medium text-black transition-colors hover:bg-white/90"
        >
          Смотреть каталог
        </a>
        <p className="mt-4 text-sm text-white/70">
          Свыше 50 000 отзывов на маркетплейсах
        </p>
      </div>
    </section>
  );
}
