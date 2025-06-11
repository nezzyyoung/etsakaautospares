"use client";

export default function ContactSupport() {
  return (
    <section className="max-w-5xl mx-auto mb-12 px-8 fade-in visible">
      <h2 className="text-3xl font-[var(--font-orbitron)] mb-6 text-[var(--accent-red)]">Contact & Support</h2>
      <p className="text-[var(--foreground)] mb-4">
        Need assistance? Our expert support team is here to help you with any questions or concerns.
      </p>
      <form className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded border border-gray-600 bg-transparent text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded border border-gray-600 bg-transparent text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)]"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="p-3 rounded border border-gray-600 bg-transparent text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)] resize-none"
        />
        <button type="submit" className="mt-4">
          Send Message
        </button>
      </form>
    </section>
  );
}
