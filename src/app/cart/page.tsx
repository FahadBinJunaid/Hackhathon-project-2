'use client'

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Graystone vase",
    description: "A timeless ceramic vase with a tri color grey glaze.",
    price: 85,
    image: "Product Image.png",
    quantity: 1
  },
  {
    id: 2,
    name: "Basic white vase",
    description: "Beautiful and simple this is one for the classics",
    price: 85,
    image: "Product Image (1).png",
    quantity: 1
  }
];

export default function Cart() {
  

  return (
    <div className=" bg-[#FFFFFF]">
      <Header />
      <Navbar />
      
      <div className="max-w-[1440px] mx-auto px-32 py-12">
        <h1 className="text-[32px] font-clash-display mb-12">Your shopping cart</h1>
        
        {/* Cart Headers */}
        <div className="grid grid-cols-[2fr,1fr,1fr] gap-8 pb-4 border-b border-neutral-200">
          <div>Product</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Total</div>
        </div>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-[2fr,1fr,1fr] gap-8 py-8 border-b border-neutral-200">
            <div className="flex gap-8">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-[124px] h-[124px] object-cover"
              />
              <div>
                <h3 className="text-[20px] mb-2">{item.name}</h3>
                <p className="text-neutral-600 mb-4">{item.description}</p>
                <p>£{item.price}</p>
              </div>
            </div>
            
            <div className="flex justify-center items-start">
              <input 
                type="number" 
                value={item.quantity}
                min="1"
                className="w-16 text-center border border-neutral-200 rounded py-1"
              />
            </div>

            <div className="text-right">
              £{item.price * item.quantity}
            </div>
          </div>
        ))}

        {/* Subtotal */}
        <div className="flex justify-end mt-8">
          <div className="w-[400px]">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
            </div>
            <p className="text-sm text-neutral-600 mb-8">
              Taxes and shipping are calculated at checkout
            </p>
            <button className="w-full bg-[#2A254B] text-white py-4 hover:bg-[#393452] transition-colors">
              Go to checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}