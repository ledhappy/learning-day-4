import HeroContent from "./hero-content";

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

      <HeroContent />
    </section>
  );
}
