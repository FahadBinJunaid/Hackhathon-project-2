'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items } = useCart();
  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar with logo and search */}
      <div className="border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Section: Search & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="block lg:hidden"
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
              
              {/* Search Icon */}
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

            {/* Center: Logo */}
            <Link 
              href="/" 
              className="text-xl sm:text-2xl font-light"
            >
              Avion
            </Link>

            {/* Right Section: Navigation & Icons */}
            <div className="flex items-center gap-4">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
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

              {/* Cart & User Icons */}
              <div className="flex items-center gap-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Categories Navigation */}
      <nav className="hidden lg:block border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-12">
            <div className="flex space-x-8">
              {categories.map((category) => (
                <Link 
                  key={category}
                  href={`/${category.toLowerCase().replace(' ', '-')}`} 
                  className="text-neutral-600 hover:text-black"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4 mb-6">
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

            {/* Mobile Categories */}
            <div className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link 
                  key={category}
                  href={`/${category.toLowerCase().replace(' ', '-')}`} 
                  className="text-neutral-600 hover:text-black py-2"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const categories = [
  'Plant Pots',
  'Ceramics',
  'Tables',
  'Chairs',
  'Crockery',
  'Tableware',
  'Cutlery'
];

