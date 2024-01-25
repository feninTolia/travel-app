'use client';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className=" flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <Image src="./hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
        <ul
          className={`h-full  lg:flex ${
            isMenuOpen
              ? 'bg-green-300 absolute top-0 left-0 h-[100dvh] w-full z-40 pt-20'
              : 'hidden gap-12'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className={` text-gray-50  cursor-pointer pb-1.5 transition-all hover:font-bold ${
                  isMenuOpen
                    ? 'regular-32 flexEnd text-end pr-6 mb-8'
                    : 'regular-16 flexCenter'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flexCenter">
          <Button
            title="Log In"
            type="button"
            variant="btn_dark_green"
            icon="user.svg"
          />
        </div>
        <Image
          src={'menu.svg'}
          alt="menu"
          width={32}
          height={32}
          className="lg:hidden inline-block cursor-pointer z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </nav>
    </header>
  );
};

export default Navbar;
