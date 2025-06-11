import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
<footer className="bg-gray-900 text-gray-300 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Lumos */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Etsaka</h3>
          <p className="mb-2">
          Your trusted source for high-quality automotive spare parts. Experience the perfect blend of performance and reliability with our premium selection.
          </p>
          <p>
            <Link href="/about" className="text-blue-400 hover:underline">
              Learn more about us
            </Link>
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/community-forum" className="hover:underline">Community Forum</Link></li>
            <li><Link href="/events" className="hover:underline">Events and Opportunities</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <p>Support: <a href="mailto:support@lumos.com" className="hover:underline">support@etsaka.com</a></p>
          <p>Business: <a href="mailto:business@lumos.com" className="hover:underline">business@etsaka.com</a></p>
          <p>Phone: +25412345678</p>
          <p>Address:  Nairobi, Kenya</p>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Connect & Subscribe</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">X</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">YouTube</a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Medium</a>
          </div>
          <form className="flex flex-col space-y-2">
            <label htmlFor="newsletter" className="sr-only">Newsletter Email</label>
            <input
              type="email"
              id="newsletter"
              placeholder="Your email"
              className="px-3 py-2 rounded text-gray-900"
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Legal, Copyright, Help */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/privacy" className="hover:underline mr-4">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline mr-4">Terms of Service</Link>
          <Link href="/cookies" className="hover:underline">Cookie Policy</Link>
        </div>
        <div>© 2025 Etsaka. All rights reserved.</div>
        <div className="mt-4 md:mt-0">
          <Link href="/help" className="hover:underline mr-4">Quick Help & FAQs</Link>
          <Link href="/partners" className="hover:underline mr-4">Partners & Affiliations</Link>
          <Link href="/accessibility" className="hover:underline">Accessibility & Language</Link>
        </div>
      </div>
    </footer>
  );
}
