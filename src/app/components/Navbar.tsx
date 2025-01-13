'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items } = useCart();

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo on mobile, Search on desktop */}
          <div className="w-1/3 flex items-center">
            {/* Logo for mobile */}
            <div className="md:hidden">
              <Link href="/" className="text-2xl font-bold">
                Avion
              </Link>
            </div>
            {/* Search for desktop */}
            <button className="p-2 hidden md:block">
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

          {/* Center - Logo for desktop only */}
          <div className="hidden md:flex w-1/3 justify-center">
            <Link href="/" className="text-2xl font-bold">
              Avion
            </Link>
          </div>

          {/* Right Side */}
          <div className="w-1/3 flex items-center justify-end gap-4">
            {/* Cart and Profile Icons - Desktop only */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/cart" className="p-2">
                <svg
                  className="w-5 h-5 text-neutral-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Link>
              
              <Link href="/account" className="p-2">
                <svg
                  className="w-5 h-5 text-neutral-600"
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

            {/* Search and Menu - Mobile only */}
            <div className="flex md:hidden items-center gap-4">
              <button className="p-2">
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
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                <svg
                  className="w-5 h-5 text-neutral-600"
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

      {/* Mobile Menu */}
      <div 
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden fixed inset-0 bg-white z-50`}
      >
        <div className="p-4">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-2xl font-bold">
              Avion
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col space-y-4">
            <Link 
              href="/cart" 
              className="flex items-center gap-2 p-2 text-neutral-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Cart
            </Link>
            <Link 
              href="/account" 
              className="flex items-center gap-2 p-2 text-neutral-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Account
            </Link>
            <Link href="/allProducts" className="p-2 text-neutral-600">Plant pots</Link>
            <Link href="/allProducts" className="p-2 text-neutral-600">Ceramics</Link>
            <Link href="/allProducts" className="p-2 text-neutral-600">Tables</Link>
            <Link href="/allProducts" className="p-2 text-neutral-600">Chairs</Link>
            <Link href="/allProducts" className="p-2 text-neutral-600">Crockery</Link>
            <Link href="/allProducts" className="p-2 text-neutral-600">Tableware</Link>
            <Link href="/allProducts" className="p-2 text-neutral-600">Cutlery</Link>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:block border-t border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            <Link href="/allProducts" className="text-sm text-neutral-600 hover:text-black">
              Plant pots
            </Link>
            <Link href="/allProducts" className="text-sm text-neutral-600 hover:text-black">
              Ceramics
            </Link>
            <Link href="/allProducts" className="text-sm text-neutral-600 hover:text-black">
              Tables
            </Link>
            <Link href="/allProducts" className="text-sm text-neutral-600 hover:text-black">
              Chairs
            </Link>
            <Link href="/allProducts" className="text-sm text-neutral-600 hover:text-black">
              Crockery
            </Link>
            <Link href="/allProducts" className="text-sm text-neutral-600 hover:text-black">
              Tableware
            </Link>
            <Link href="/allProducts" className="text-sm text-neutral-600 hover:text-black">
              Cutlery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

