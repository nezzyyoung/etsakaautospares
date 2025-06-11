"use client";

import React from "react";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: string;
  rating: number;
  imageSrc: string;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, rating, imageSrc, onClick }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      className={`w-4 h-4 inline-block ${
        i < rating ? "text-yellow-400" : "text-gray-300"
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
    </svg>
  ));

  return (
    <div
      onClick={onClick}
      className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative w-full h-48">
        <Image
          className="object-cover rounded-t-lg"
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-30">
        <div>
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-gray-700 mb-0">{price}</p>
          <a>{stars}</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
