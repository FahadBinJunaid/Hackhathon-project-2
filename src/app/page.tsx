'use client';

import EmailSignUp from './components/EmailSignUp';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from 'next/image'
import Link from 'next/link';

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
  }
];

function Home() {
  return (
    <div className='bg-[#F9F9F9]'>
      <Header />
      <Navbar />
      
      {/* Hero Section - Made responsive */}
      <div className="bg-[#2A254B] w-full text-white">
        <div className="container mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
          {/* Left Content */}
          <div className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 flex flex-col justify-center">
            <h1 className="font-clash-display text-[32px] sm:text-[48px] leading-[120%] mb-4">
              The furniture brand for the
            </h1>
            <h1 className="font-clash-display text-[32px] sm:text-[48px] leading-[120%] mb-8">
              future, with timeless designs
            </h1>
            <button className="bg-[rgba(249,249,249,0.15)] hover:bg-[rgba(249,249,249,0.25)] transition-colors text-white px-8 py-4 w-fit mt-8">
              View collection
            </button>
            <p className="text-base leading-[150%] mt-8 lg:mt-32 max-w-[536px]">
              A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end items-center p-4 sm:p-8">
            <Image
              src="Parent.png"
              alt="Modern chair"
              className="w-full max-w-[520px] h-auto object-cover"
              width={520}
              height={584}
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Products Grid - Already responsive, just needs container adjustments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 py-8 md:py-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square mb-4 bg-neutral-100 relative overflow-hidden w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-base sm:text-lg lg:text-[20px] mb-2">{product.name}</h3>
              <p className="text-sm sm:text-base lg:text-[18px] text-neutral-600">£{product.price}</p>
            </div>
          ))}
        </div>

        {/* Popular Products Section */}
        <div className="w-full mt-16 mb-16 px-4 sm:px-8">
          <h2 className="text-[24px] sm:text-[32px] font-clash-display mb-12">
            Our popular products
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Product 1 */}
            <div className="col-span-1 lg:col-span-2 group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[5/3]">
                <Image
                  src="Lsofa.png"
                  alt="The Poplar suede sofa"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[20px] mb-3">The Poplar suede sofa</h3>
              <p className="text-[18px] text-neutral-600">£980</p>
            </div>

            {/* Products 2 & 3 */}
            <div className="space-y-8">
              {[
                { src: "Parent.png", name: "The Dandy chair", price: "250" },
                { src: "Photo.png", name: "The Dandy chair", price: "250" }
              ].map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-6 aspect-square">
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-[20px] mb-3">{item.name}</h3>
                  <p className="text-[18px] text-neutral-600">£{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Studio in London Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white">
          {/* Left Content */}
          <div className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 flex flex-col justify-center">
            <h2 className="text-[32px] font-clash-display leading-[120%] mb-8">
              From a studio in London to a global brand with over 400 outlets
            </h2>
            <p className="text-base text-neutral-600 mb-6">
              When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            </p>
            <p className="text-base text-neutral-600 mb-12">
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
            <button className="text-neutral-600 hover:text-black border border-neutral-600 px-8 py-4 w-fit">
              Get in touch
            </button>
          </div>

          {/* Right Image */}
          <div className="relative aspect-[6/5]">
            <Image
              src="Image.png"
              alt="Studio showcase"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <EmailSignUp />
      </div>
      
      <Footer />
    </div>
  );
}

export default Home