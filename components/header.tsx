"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-black">
      <div className="container  px-4 py-4 flex items-center justify-between ">
        <Link href="/">
          <h2 className="text-yellow-500 text-2xl font-bold font-press-start italic">
            Nahel
          </h2>
        </Link>

        <nav className="hidden md:flex gap-x-6 text-yellow-500 text-lg font-bold">
          {["About", "Resume", "Projects", "Contact","Blog"].map((item) => (
            <Link
              href={`/${item.toLowerCase()}`}
              key={item}
              className="hover:text-white hover:underline transition duration-200 font-press-start"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="md:hidden text-yellow-500" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>


      {navOpen && (
        <nav className="md:hidden  text-yellow-500 px-4 py-4 space-y-4 font-press-start bg-black')]">
          {["About", "Resume", "Projects", "Contact","Blog"].map((item) => (
            <Link
              href={`/${item.toLowerCase()}`}
              key={item}
              className="block hover:text-white hover:underline transition duration-200"
              onClick={() => setNavOpen(false)} 
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
