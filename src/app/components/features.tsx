'use client';

const Features = () => {
  return (
    <div className="max-w-[1440px] max-h-[355px] mx-auto px-4 py-16">
      <h2 className="text-center text-[32px] mb-16">What makes our brand different</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {/* Next day delivery */}
        <div className="flex flex-col items-start">
          <svg className="w-6 h-6 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3 className="text-[20px] mb-2">Next day as standard</h3>
          <p className="text-[16px] text-neutral-600">Order before 3pm and get your order the next day as standard</p>
        </div>

        {/* Made by true artisans */}
        <div className="flex flex-col items-start">
          <svg className="w-6 h-6 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3 className="text-[20px] mb-2">Made by true artisans</h3>
          <p className="text-[16px] text-neutral-600">Handmade crafted goods made with real passion and craftmanship</p>
        </div>

        {/* Unbeatable prices */}
        <div className="flex flex-col items-start">
          <svg className="w-6 h-6 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3 className="text-[20px] mb-2">Unbeatable prices</h3>
          <p className="text-[16px] text-neutral-600">For our materials and quality you wont find better prices anywhere</p>
        </div>

        {/* Recycled packaging */}
        <div className="flex flex-col items-start">
          <svg className="w-6 h-6 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3 className="text-[20px] mb-2">Recycled packaging</h3>
          <p className="text-[16px] text-neutral-600">We use 100% recycled packaging to ensure our footprint is manageable</p>
        </div>
      </div>
    </div>
  );
};

export default Features;


