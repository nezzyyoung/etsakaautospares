"use client";

import Image from "next/image";

const featuredProducts = [
  {
    id: 1,
    name: "Brake Pads",
    image: "/images/img1.png",
    description: "Durable and reliable brake pads for safety.",
  },
  {
    id: 2,
    name: "Car Battery",
    image: "/images/img2.png",
    description: "Long-lasting car batteries with high performance.",
  },
  {
    id: 3,
    name: "Air Filter",
    image: "/images/img3.png",
    description: "High-quality air filters for clean engine air.",
  },
  {
    id: 4,
    name: "Spark Plugs",
    image: "/images/img4.png",
    description: "Efficient spark plugs for smooth engine start.",
  },
];

export default function FeaturesOverview() {
  return (
    <section className="max-w-5xl mx-auto mb-12 px-8 fade-in visible">
      <h2 className="text-3xl font-[var(--font-orbitron)] mb-6 text-[var(--accent-red)]">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-[var(--metallic-gray)] rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-[var(--foreground)]">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
