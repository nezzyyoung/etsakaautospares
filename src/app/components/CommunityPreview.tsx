"use client";

export default function CommunityPreview() {
  return (
    <section className="max-w-5xl mx-auto mb-12 px-8 fade-in visible">
      <h2 className="text-3xl font-[var(--font-orbitron)] mb-6 text-[var(--accent-red)]">Community Feedback</h2>
      <div className="space-y-6 text-[var(--foreground)]">
        <blockquote className="bg-[var(--metallic-gray)] p-6 rounded-lg shadow-lg">
          <p className="italic">&#34;Etsaka Auto Spares provided me with the best quality parts and excellent customer service. Highly recommended!&#34;</p>
          <footer className="mt-4 text-right font-[var(--font-mono)]">- Alex M.</footer>
        </blockquote>
        <blockquote className="bg-[var(--metallic-gray)] p-6 rounded-lg shadow-lg">
          <p className="italic">&#34;Fast shipping and reliable products. My go-to place for all automotive spare needs.&#34;</p>
          <footer className="mt-4 text-right font-[var(--font-mono)]">- Jamie L.</footer>
        </blockquote>
      </div>
    </section>
  );
}
