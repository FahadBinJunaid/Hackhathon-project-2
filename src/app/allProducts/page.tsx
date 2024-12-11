'use client';
import Image from 'next/image';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "The Dandy chair",
    price: 250,
    image: "Parent.png "
  },
  {
    id: 2,
    name: "Rustic Vase Set",
    price: 155,
    image: "vaseM.png"
  },
  {
    id: 3,
    name: "The Silky Vase",
    price: 125,
    image: "sVase.png"
  },
  {
    id: 4,
    name: "The Lucy Lamp",
    price: 399,
    image: "Lamp1.png"
  },
  // Duplicate products for multiple rows
  {
    id: 5,
    name: "The Dandy chair",
    price: 250,
    image: "Lamp2.png"
  },
  {
    id: 6,
    name: "Rustic Vase Set",
    price: 155,
    image: "Parent2.png"
  },
  {
    id: 7,
    name: "The Silky Vase",
    price: 125,
    image: "Parent3.png"
  },
  {
    id: 8,
    name: "The Lucy Lamp",
    price: 399,
    image: "mChair.png"
  },
    {
      id: 9,
      name: "The Dandy chair",
      price: 250,
      image: "Parent.png "
    },
    {
      id: 10,
      name: "Rustic Vase Set",
      price: 155,
      image: "vaseM.png"
    },
    {
      id: 11,
      name: "The Silky Vase",
      price: 125,
      image: "sVase.png"
    },
    {
      id: 12,
      name: "The Lucy Lamp",
      price: 399,
      image: "Lamp1.png"
    },
  
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navbar />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Image */}
        <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8">
          <img 
            src="Frame2.png" 
            alt="allProducts" 
            className="w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[209px] object-cover"
          />
        </div>

        {/* Filter Bar */}
        <div className="py-4 sm:py-6 md:h-[132px] flex flex-col sm:flex-row items-start sm:items-center justify-between">
          {/* Left side filters */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-4 sm:mb-0">
            <button className="text-sm sm:text-base text-neutral-600 hover:text-black">Category</button>
            <button className="text-sm sm:text-base text-neutral-600 hover:text-black">Product type</button>
            <button className="text-sm sm:text-base text-neutral-600 hover:text-black">Price</button>
            <button className="text-sm sm:text-base text-neutral-600 hover:text-black">Brand</button>
          </div>
          {/* Right side filters */}
          <div className="flex gap-4 sm:gap-6">
            <button className="text-sm sm:text-base text-neutral-600 hover:text-black">Sort by</button>
            <button className="text-sm sm:text-base text-neutral-600 hover:text-black">Filter</button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 py-8 md:py-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square mb-4 bg-neutral-100 relative overflow-hidden w-full sm:w-[305px] sm:h-[375px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-base sm:text-lg lg:text-[20px] mb-2">{product.name}</h3>
              <p className="text-sm sm:text-base lg:text-[18px] text-neutral-600">£{product.price}</p>
            </div>
          ))}
        </div>

        {/* View Collection Button */}
        <div className="flex justify-center py-6 sm:py-8">
          <button className="text-sm sm:text-base text-neutral-600 hover:text-black border border-neutral-600 px-4 sm:px-6 py-2 rounded hover:bg-neutral-100 transition-colors">
            View collection
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;



