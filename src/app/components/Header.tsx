'use client'

import { useState } from 'react';

const DeliveryIcon = () => (
  <svg 
    className="w-5 h-5" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" 
    />
  </svg>
);

export default function Header() {
  return (
    <div className="bg-[#2A254B] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-auto sm:h-[48px] py-2 flex flex-col sm:flex-row items-center justify-between text-white text-sm">
          {/* Centered Message */}
          <div className="text-center flex-grow sm:flex sm:justify-center sm:items-center">
            <span className="flex items-center gap-2 text-xs sm:text-sm px-2 text-center">
              <DeliveryIcon />
              <span className="hidden sm:inline">Free delivery on all orders over £50 with code easter checkout</span>
              <span className="sm:hidden">Free delivery over £50</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}