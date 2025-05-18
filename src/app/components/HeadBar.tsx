'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SideBar from './SideBar';

function HeadBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#ffbe0b] border-b-4 border-[#222] shadow-[0_6px_0_#222] dark:bg-[#181818]">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0">
            <span className="self-center text-3xl font-extrabold whitespace-nowrap text-[#222] dark:text-[#fafafa] drop-shadow-[2px_2px_0_#ff006e] px-3 py-1 bg-[#fafafa] dark:bg-[#22223b] border-4 border-[#222] rounded-lg shadow-[4px_4px_0_#ff006e]">
              subecho
            </span>
          </div>
          {/* Center: Search */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-5 h-5 text-[#222] dark:text-[#fafafa]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-3 ps-10 text-lg font-bold text-[#222] dark:text-[#fafafa] border-4 border-[#222] rounded-lg bg-[#fafafa] dark:bg-[#22223b] shadow-[4px_4px_0_#ffbe0b] focus:ring-4 focus:ring-[#ffbe0b] focus:border-[#222] placeholder-[#888] dark:placeholder-[#bbb] outline-none"
                placeholder="Search..."
              />
            </div>
          </div>
          {/* Right: Hamburger + Nav */}
          <div className="flex items-center space-x-2">
            <ul className="hidden md:flex flex-row space-x-4 font-bold">
              <li>
                <Link href="/" className="py-2 px-4 text-[#fafafa] bg-[#ff006e] border-4 border-[#222] rounded-lg shadow-[2px_2px_0_#222] hover:bg-[#fb5607] hover:text-[#222] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/subreddits" className="py-2 px-4 text-[#222] bg-[#3a86ff] border-4 border-[#222] rounded-lg shadow-[2px_2px_0_#222] hover:bg-[#ffbe0b] hover:text-[#222] transition-colors">Subreddits</Link>
              </li>
              <li>
                <Link href="/profile" className="py-2 px-4 text-[#fafafa] bg-[#fb5607] border-4 border-[#222] rounded-lg shadow-[2px_2px_0_#222] hover:bg-[#3a86ff] hover:text-[#222] transition-colors">Profile</Link>
              </li>
            </ul>
            {/* Hamburger for sidebar (always visible) */}
            <button
              type="button"
              className="text-[#222] dark:text-[#fafafa] bg-[#ff006e] hover:bg-[#3a86ff] focus:outline-none focus:ring-4 focus:ring-[#ffbe0b] rounded-lg text-lg p-2.5 border-4 border-[#222] shadow-[2px_2px_0_#222] ml-2"
              aria-label="Open sidebar"
              onClick={() => setSidebarOpen(true)}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile nav links */}
        <div className="md:hidden px-4 pb-2">
          <ul className="flex flex-col space-y-2 font-bold">
            <li>
              <Link href="/" className="block py-2 px-4 text-[#fafafa] bg-[#ff006e] border-4 border-[#222] rounded-lg shadow-[2px_2px_0_#222] mb-1">Home</Link>
            </li>
            <li>
              <Link href="/subreddits" className="block py-2 px-4 text-[#222] bg-[#3a86ff] border-4 border-[#222] rounded-lg shadow-[2px_2px_0_#222] mb-1">Subreddits</Link>
            </li>
            <li>
              <Link href="/profile" className="block py-2 px-4 text-[#fafafa] bg-[#fb5607] border-4 border-[#222] rounded-lg shadow-[2px_2px_0_#222]">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
      <SideBar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}

export default HeadBar;