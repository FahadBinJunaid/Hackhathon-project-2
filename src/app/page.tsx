'use client';

import EmailSignUp from './components/EmailSignUp';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
      {/* Hero Section */}
      
      <div className="bg-[#2A254B] w-[1440px] h-[584px] mx-auto text-white ">
        <div className="max-w-[1280px] h-[584px] top-[60px] left-[80px] gap-[0px] opacity-[0px] mx-auto grid grid-cols-1 lg:grid-cols-2 ">
          {/* Left Content */}
          <div className="px-16 py-24 flex flex-col justify-center">
            <h1 className="font-clash-display text-[32px] sm:text-[48px] leading-[120%] mb-4">
            The furniture brand for the
            </h1>
            <h1 className="font-clash-display text-[32px] sm:text-[48px] leading-[120%] mb-8">
              future, with timeless designs
            </h1>
            <button className="bg-[rgba(249,249,249,0.15)] hover:bg-[rgba(249,249,249,0.25)] transition-colors text-white px-8 py-4 w-fit mt-8">
              View collection
            </button>
            <p className="text-base leading-[150%] mt-32 max-w-[536px]">
              A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="">
            <img
              src="Parent.png"
              alt="Modern chair"
              className="w-[520px] h-[584px] left-[720px] gap-[0px] opacity-[0px] top-[0px] object-cove mx-52"
            />
          </div>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Popular Products Section */}
        <div className="max-w-[1280px] mx-auto mt-16 mb-16 px-16">
          <h2 className="text-[24px] sm:text-[32px] font-clash-display mb-12">
            Our popular products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mx-36">
            {/* Product 1 */}
            <div className="group cursor-pointer w-[630px] h-[375px] -ml-52">
              <div className="relative overflow-hidden mb-6">
                <img
                  src="Lsofa.png"
                  alt="The Poplar suede sofa"
                  className="w-[630px] h-[375px] relative "
                />
              </div>
              <h3 className="text-[20px] mb-3">The Poplar suede sofa</h3>
              <p className="text-[18px] text-neutral-600">£980</p>
            </div>

            {/* Product 2 */}
            <div className="group cursor-pointer w-[305px] h-[375px] mx-32">
              <div className="relative overflow-hidden mb-6">
                <img
                  src="Parent.png"
                  alt="The Dandy chair"
                  className="w-[305px] h-[375px] object-cover"
                />
              </div>
              <h3 className="text-[20px] mb-3">The Dandy chair</h3>
              <p className="text-[18px] text-neutral-600">£250</p>
            </div>

            {/* Product 3 */}
            <div className="group cursor-pointer w-[305px] h-[375px] mx-36">
              <div className="relative overflow-hidden mb-6">
                <img
                  src="Photo.png"
                  alt="The Dandy chair"
                  className="w-[305px] h-[375px] object-cover"
                />
              </div>
              <h3 className="text-[20px] mb-3">The Dandy chair</h3>
              <p className="text-[18px] text-neutral-600">£250</p>
            </div>
          </div>

          {/* View Collection Button */}
          <div className="flex justify-center mt-28">
            <button className="text-neutral-600 hover:text-black border border-neutral-600 px-8 py-4 rounded">
              View collection
            </button>
          </div>
        </div>
        <div className="mb-28 mx-auto">
          <EmailSignUp />
        </div>

        {/* Studio in London Section */}
        <div className=" w-[1440px] h-[603px] mx-auto grid grid-cols-2 bg-[#FFFFFF]">
          {/* Left Content */}
          <div className="px-16 py-24 flex flex-col justify-center w-[720px] h-[603px] mb-20 -ml-14">
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
          <div className="relative -ml-8">
            <img
              src="Image.png"
              alt="Studio showcase"
              className="w-[720px] h-[603px] object-cover"
            />
          </div>
        </div>
        
      </div> 
      <Footer />
    </div>
  );
}

export default Home