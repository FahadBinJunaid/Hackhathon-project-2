import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EmailSignUp from '../components/EmailSignUp';
import Features from '../components/features';

export default function AboutUs() {
  return (
    <div>
      <Header />
      <Navbar />
      
      {/* Brand Banner */}
      <div className="w-[1440px] h-[277px] mx-auto mt-8 mb-20 bg-[#FFFFFF]">
        <div className="px-32 py-[88px] flex justify-between items-center">
          <h1 className="text-[32px] sm:text-[48px] leading-[120%] max-w-[736px]">
            A brand built on the love of craftmanship,{" "}
            quality and outstanding customer service
          </h1>
          <button className="text-neutral-600 hover:text-black">
            View our products
          </button>
        </div>
      </div>

      {/* Small Idea Section */}
      <div className="w-[1440px] mx-auto grid grid-cols-2">
        {/* Left Content */}
        <div className="bg-[#2A254B] text-white px-16 py-24 w-[634px] h-[478px] mx-8">
          <h2 className="text-[32px] font-clash-display leading-[120%] mb-8">
            It started with a small idea
          </h2>
          <p className="text-base leading-[150%] mb-12">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014
          </p>
          <button className="bg-[rgba(249,249,249,0.15)] hover:bg-[rgba(249,249,249,0.25)] transition-colors text-white px-8 py-4">
            View collection
          </button>
        </div>

        {/* Right Image */}
        <div className="relative mb-20 mx-8">
          <img
            src="Image Block.png"
            alt="Modern yellow chair"
            className="w-[634px] h-[478px] object-cover"
          />
        </div>
      </div>

      {/* Service Section */}
      <div className="w-[1440px] h-[603px] mx-auto grid grid-cols-2">
        {/* Left Image */}
        <div className="relative mt-20 ">
          <img
            src="Image (1).png"
            alt="Modern sofa"
            className="w-[720px] h-[603px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="bg-white px-16 py-24 flex flex-col justify-center">
          <h2 className="text-[32px] font-clash-display leading-[120%] mb-8">
            Our service is not just personal, its actually hyper personally exquisite
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
      </div>
      <div className="w-[1440px] mx-auto mt-20">
        <Features />
      </div>
      <div className="w-[1440px] mx-auto mt-20">
        <EmailSignUp />
      </div>
      <div className="w-[1440px] mx-auto mt-20">
        <Footer />
      </div>
    </div>
  );
}