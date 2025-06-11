"use client";

import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Product 1",
    price: "Kshs 5000",
    rating: 4,
    imageSrc: "/images/img.png",
  },
  {
    name: "Product 2",
    price: "Kshs 9000",
    rating: 5,
    imageSrc: "/images/img1.png",
  },
  {
    name: "Product 3",
    price: "Kshs 6000",
    rating: 3,
    imageSrc: "/images/img2.png",
  },
  {
    name: "Product 4",
    price: "Kshs 8000",
    rating: 4,
    imageSrc: "/images/img3.png",
  },
  {
    name: "Product 4",
    price: "Kshs 8000",
    rating: 4,
    imageSrc: "/images/img4.png",
  },
  {
    name: "Product 4",
    price: "Kshs 8000",
    rating: 4,
    imageSrc: "/images/img5.png",
  },
  {
    name: "Product 4",
    price: "Kshs 8000",
    rating: 4,
    imageSrc: "/images/img6.png",
  },
  {
    name: "Product 4",
    price: "Kshs 8000",
    rating: 4,
    imageSrc: "/images/img7.png",
  },
];

export default function Shop() {
  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-6">Shop Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            rating={product.rating}
            imageSrc={product.imageSrc}
            onClick={() => alert(`Clicked on ${product.name}`)}
          />
        ))}
      </div>
    </div>
  );
}
