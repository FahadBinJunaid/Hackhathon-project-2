'use client';

const EmailSignUp = () => {
  return (
    <div className="max-w-[1273px] max-h-[364px] mx-auto px-4 py-16 bg-[#FFFFFF]">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[32px] mb-4">
          Join the club and get the benefits
        </h2>
        
        <p className="text-[16px] text-neutral-600 mb-12 max-w-[460px]">
          Sign up for our newsletter and receive exclusive offers on new 
          ranges, sales, pop up stores and more
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[472px]">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 h-[56px] px-4 border border-neutral-200 focus:outline-none focus:border-neutral-400"
          />
          <button className="h-[56px] px-8 bg-[#2A254B] text-white hover:bg-[#393264] transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSignUp;

