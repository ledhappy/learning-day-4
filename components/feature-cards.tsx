import FeatureCardsGrid from "./feature-cards-grid";

export default function FeatureCards() {
  return (
    <section id="principles" className="bg-stone-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-sm uppercase tracking-widest text-stone-500">
          Принципы
        </span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mt-4">
          Что отличает Geberich
        </h2>
        <FeatureCardsGrid />
      </div>
    </section>
  );
}
