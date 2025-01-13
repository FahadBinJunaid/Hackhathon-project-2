'use client';

import Image from 'next/image';
import Link from 'next/link';

const PopularProducts = () => {
  const items = [
    {
      id: 1,
      src: "/Lsofa.png",
      name: "The Poplar suede sofa",
      price: "980",
    },
    {
      id: 2,
      src: "/Parent.png",
      name: "The Dandy chair",
      price: "250",
    },
    {
      id: 3,
      src: "/Photo.png",
      name: "The Dandy chair",
      price: "250",
    },
  ];

  return (
    <div className="py-8 md:py-12">
      <h2 className="text-[24px] sm:text-[32px] font-clash-display mb-8 px-4 sm:px-6 lg:px-8">
        Our popular products
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <Link
              href={{
                pathname: `/product/${item.id}`,
                query: {
                  name: item.name,
                  price: item.price,
                  image: item.src
                }
              }}
            >
              <div className="aspect-square mb-4 relative overflow-hidden w-full">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-base sm:text-lg lg:text-[20px] mb-2">{item.name}</h3>
              <p className="text-sm sm:text-base lg:text-[18px] text-neutral-600">£{item.price}</p>
            </Link>
          </div>
        ))}
      </div>
      
      {/* View Collection Button */}
      <div className="mt-12 flex justify-center items-center">
        <button className="px-8 py-4 bg-[#F9F9F9] text-sm font-medium text-[#2A254B] hover:bg-neutral-100 transition-colors duration-300">
          View Collection
        </button>
      </div>
    </div>
  );
};

export default PopularProducts;