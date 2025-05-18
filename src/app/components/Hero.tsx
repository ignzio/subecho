import React from "react";

const Hero: React.FC = () => (
  <main className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-4">
    <h1 className="text-5xl md:text-6xl font-extrabold text-[#222] dark:text-[#fafafa] text-center mb-4 drop-shadow-[4px_4px_0_#ff006e]">
      explore reddit with ease
    </h1>
    <p className="text-xl md:text-2xl text-[#222] dark:text-[#fafafa] text-center mb-8 font-semibold bg-[#ffbe0b] px-6 py-2 rounded-lg shadow-[4px_4px_0_0_#222] border-2 border-[#222]">
      get the latest news and engage with your favourite communities.
    </p>
    <div className="w-full max-w-xl mb-8">
      <input
        type="text"
        placeholder="Search subreddits, posts, users..."
        className="w-full p-4 rounded-lg border-4 border-[#222] bg-[#fafafa] dark:bg-[#22223b] text-[#222] dark:text-[#fafafa] font-bold shadow-[4px_4px_0_0_#ffbe0b] focus:ring-4 focus:ring-[#ffbe0b] focus:border-[#222] placeholder-[#888] dark:placeholder-[#bbb] outline-none"
      />
    </div>
    <div className="w-full max-w-xl flex justify-center gap-4 mb-4">
      <button className="px-6 py-3 text-[#fafafa] bg-[#ff006e] border-4 border-[#222] font-bold rounded-lg shadow-[4px_4px_0_0_#222] focus:outline-none hover:bg-[#fb5607] hover:text-[#222] transition-colors">
        Trending
      </button>
      <button className="px-6 py-3 text-[#222] bg-[#ffbe0b] border-4 border-[#222] font-bold rounded-lg shadow-[4px_4px_0_0_#222] focus:outline-none hover:bg-[#3a86ff] hover:text-[#fafafa] transition-colors">
        New
      </button>
      <button className="px-6 py-3 text-[#fafafa] bg-[#3a86ff] border-4 border-[#222] font-bold rounded-lg shadow-[4px_4px_0_0_#222] focus:outline-none hover:bg-[#ffbe0b] hover:text-[#222] transition-colors">
        Top
      </button>
      <button className="px-6 py-3 text-[#222] bg-[#fb5607] border-4 border-[#222] font-bold rounded-lg shadow-[4px_4px_0_0_#222] focus:outline-none hover:bg-[#ff006e] hover:text-[#fafafa] transition-colors">
        Communities
      </button>
    </div>
  </main>
);

export default Hero;
