'use client';
import React from 'react';
import Link from 'next/link';

interface SideBarProps {
    open: boolean;
    onClose: () => void;
}

function SideBar({ open, onClose }: SideBarProps) {
    return (
        <div
            id="drawer-navigation"
            className={`fixed top-0 left-0 z-50 w-72 h-screen p-6 transition-transform bg-[#fafafa] dark:bg-[#181818] border-r-4 border-[#222] shadow-[8px_0_0_#ffbe0b] ${
                open ? 'translate-x-0' : '-translate-x-full'
            }`}
            tabIndex={-1}
            aria-labelledby="drawer-navigation-label"
        >
            <div className="flex items-center justify-between mb-8">
                <h5 id="drawer-navigation-label" className="text-xl font-extrabold text-[#222] dark:text-[#fafafa] uppercase tracking-widest drop-shadow-[2px_2px_0_#ffbe0b]">
                    Menu
                </h5>
                <button
                    type="button"
                    aria-controls="drawer-navigation"
                    className="text-[#222] dark:text-[#fafafa] bg-[#ffbe0b] hover:bg-[#ff006e] border-4 border-[#222] rounded-lg text-lg p-2 shadow-[2px_2px_0_#222] transition-colors"
                    onClick={onClose}
                >
                    <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 20 20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l8 8M6 14L14 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
            </div>
            <div className="py-2">
                <ul className="space-y-3 font-bold">
                    <li>
                        <Link href="/" className="flex items-center p-3 text-[#fafafa] bg-[#ff006e] border-4 border-[#222] rounded-lg shadow-[2px_2px_0_#222] hover:bg-[#fb5607] hover:text-[#222] transition-colors">
                            <span className="ml-2">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/kanban" className="flex items-center p-3 text-[#222] bg-[#3a86ff] border-4 border-[#222] rounded-lg shadow-[2px_2px_0_#222] hover:bg-[#ffbe0b] hover:text-[#222] transition-colors">
                            <span className="ml-2">Kanban</span>
                            <span className="ml-auto inline-flex items-center justify-center px-2 text-xs font-bold text-[#222] bg-[#ffbe0b] rounded-full border-2 border-[#222]">Pro</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/inbox" className="flex items-center p-3 text-[#fafafa] bg-[#fb5607] border-4 border-[#222] rounded-lg shadow-[2px_2px_0_#222] hover:bg-[#3a86ff] hover:text-[#222] transition-colors">
                            <span className="ml-2">Inbox</span>
                            <span className="ml-auto inline-flex items-center justify-center px-2 text-xs font-bold text-[#222] bg-[#ffbe0b] rounded-full border-2 border-[#222]">3</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/users" className="flex items-center p-3 text-[#222] bg-[#ffbe0b] border-4 border-[#222] rounded-lg shadow-[2px_2px_0_#222] hover:bg-[#ff006e] hover:text-[#fafafa] transition-colors">
                            <span className="ml-2">Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className="flex items-center p-3 text-[#fafafa] bg-[#3a86ff] border-4 border-[#222] rounded-lg shadow-[2px_2px_0_#222] hover:bg-[#fb5607] hover:text-[#222] transition-colors">
                            <span className="ml-2">Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/signin" className="flex items-center p-3 text-[#222] bg-[#fafafa] border-4 border-[#222] rounded-lg shadow-[2px_2px_0_#222] hover:bg-[#ffbe0b] hover:text-[#222] transition-colors">
                            <span className="ml-2">Sign In</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/signup" className="flex items-center p-3 text-[#fafafa] bg-[#ff006e] border-4 border-[#222] rounded-lg shadow-[2px_2px_0_#222] hover:bg-[#3a86ff] hover:text-[#222] transition-colors">
                            <span className="ml-2">Sign Up</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;