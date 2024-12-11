'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items } = useCart();
  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      {/* Top bar with logo and search */}
      <div className="bg-white border-b border-neutral-200 max-w-[1440px] mx-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 relative">
            {/* Search Icon */}
            <div className="flex items-center">
              <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                <svg
                  className="w-5 h-5 text-neutral-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-light absolute left-1/2 transform -translate-x-1/2"
            >
              Avion
            </Link>

            {/* Cart and User Icons */}
            <div className="flex items-center space-x-4">
              {/* About, Contact, Blog Links */}
              <div className="hidden md:flex space-x-8 mr-8">
                <Link href="/AboutUs" className="text-neutral-600 hover:text-black">
                  About us
                </Link>
                <Link href="/contact" className="text-neutral-600 hover:text-black">
                  Contact
                </Link>
                <Link href="/blog" className="text-neutral-600 hover:text-black">
                  Blog
                </Link>
              </div>

              {/* Cart Icon */}
              <Link href="/cart" className="hover:opacity-80 relative">
                <svg
                  className="w-6 h-6 text-neutral-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {/* User Avatar Icon */}
              <Link href="/account" className="hover:opacity-80">
                <svg
                  className="w-6 h-6 text-neutral-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="block lg:hidden ml-2"
              >
                <svg
                  className="w-6 h-6 text-neutral-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="bg-white hidden lg:block border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-12">
            <div className="flex space-x-8">
              <Link href="/plant-pots" className="text-neutral-600 hover:text-black">Plant Pots</Link>
              <Link href="/ceramics" className="text-neutral-600 hover:text-black">Ceramics</Link>
              <Link href="/tables" className="text-neutral-600 hover:text-black">Tables</Link>
              <Link href="/AboutUs/chairs" className="text-neutral-600 hover:text-black">Chairs</Link>
              <Link href="/crockery" className="text-neutral-600 hover:text-black">Crockery</Link>
              <Link href="/tableware" className="text-neutral-600 hover:text-black">Tableware</Link>
              <Link href="/cutlery" className="text-neutral-600 hover:text-black">Cutlery</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-2">
              <Link href="/plant-pots" className="text-neutral-600 hover:text-black py-2">Plant Pots</Link>
              <Link href="/ceramics" className="text-neutral-600 hover:text-black py-2">Ceramics</Link>
              <Link href="/tables" className="text-neutral-600 hover:text-black py-2">Tables</Link>
              <Link href="/chairs" className="text-neutral-600 hover:text-black py-2">Chairs</Link>
              <Link href="/crockery" className="text-neutral-600 hover:text-black py-2">Crockery</Link>
              <Link href="/tableware" className="text-neutral-600 hover:text-black py-2">Tableware</Link>
              <Link href="/cutlery" className="text-neutral-600 hover:text-black py-2">Cutlery</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

