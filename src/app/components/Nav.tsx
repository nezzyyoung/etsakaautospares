"use client";

import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">
          <Link href="/">Etsaka Auto Spares</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4`}
        >
          <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-700">Home</Link>
          <Link href="/shop" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-700">Shop</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-700">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-700">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
