"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[var(--metallic-gray)] text-[var(--foreground)] py-20 px-8 rounded-lg shadow-lg max-w-5xl mx-auto mb-12 fade-in visible flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 animate-fadeInLeft">
        <h1 className="text-5xl font-[var(--font-orbitron)] mb-4 animate-fadeInDown">Welcome to Etsaka Auto Spares</h1>
        <p className="text-lg max-w-3xl animate-fadeInUp">
          Your trusted source for high-quality automotive spare parts. Experience the perfect blend of performance and reliability with our premium selection.
        </p>
        <button className="mt-8 animate-pulse">Shop Now</button>
      </div>
      <div className="flex-1 animate-fadeInRight">
        <Image
          src="/images/img.png"
          alt="Automotive Spare Parts"
          width={300}
          height={300}
          className="rounded-lg shadow-lg animate-scaleUp"
        />
      </div>
    </section>
  );
}
