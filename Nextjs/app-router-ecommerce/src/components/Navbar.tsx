"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='relative bg-card border-b border-border z-50'>
      <div className='flex items-center justify-between gap-4 p-4 px-6 md:px-12'>
        <p className='text-xl font-serif font-bold text-primary tracking-tight'>
          Archival<span className='text-foreground'>.</span>
        </p>

        <ul className='hidden md:flex space-x-6 text-foreground font-medium'>
          <li>
            <Link
              href='/'
              className={`transition-colors ${pathname === "/" ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/books'
              className={`transition-colors ${pathname.startsWith("/books") ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"}`}
            >
              Library
            </Link>
          </li>
        </ul>

        <div className='hidden md:flex items-center gap-4'>
          <ThemeToggle />
        </div>

        <button
          type='button'
          className='flex md:hidden items-center justify-center p-2 text-foreground focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          <svg
            className='h-6 w-6 fill-current'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isOpen ? (
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
              />
            ) : (
              <path
                fillRule='evenodd'
                d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`absolute w-full left-0 right-0 bg-card border-b border-border px-6 py-4 flex flex-col gap-4 transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "max-h-75 opacity-100 visible translate-y-0"
            : "max-h-0 opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className='flex flex-col gap-3 text-foreground font-medium'>
          <li>
            <Link
              href='/'
              onClick={() => setIsOpen(false)}
              className={`block py-1 transition-colors ${pathname === "/" ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/books'
              onClick={() => setIsOpen(false)}
              className={`block py-1 transition-colors ${pathname.startsWith("/books") ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"}`}
            >
              Library
            </Link>
          </li>
        </ul>
        <hr className='border-border' />
        <div className='flex items-center justify-between gap-4'>
          <span className='text-sm text-muted-foreground'>Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
