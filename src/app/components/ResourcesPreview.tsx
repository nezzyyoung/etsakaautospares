"use client";

export default function ResourcesPreview() {
  return (
    <section className="max-w-5xl mx-auto mb-12 px-8 fade-in visible">
      <h2 className="text-3xl font-[var(--font-orbitron)] mb-6 text-[var(--accent-red)]">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-[var(--metallic-gray)] rounded-lg p-4 shadow-lg">
          <h3 className="text-xl mb-2">Brake Pads</h3>
          <p>High-performance brake pads for safety and durability.</p>
        </div>
        <div className="bg-[var(--metallic-gray)] rounded-lg p-4 shadow-lg">
          <h3 className="text-xl mb-2">Engine Oil</h3>
          <p>Premium synthetic engine oil for optimal engine health.</p>
        </div>
        <div className="bg-[var(--metallic-gray)] rounded-lg p-4 shadow-lg">
          <h3 className="text-xl mb-2">Air Filters</h3>
          <p>Efficient air filters to keep your engine clean and running smoothly.</p>
        </div>
      </div>
    </section>
  );
}
