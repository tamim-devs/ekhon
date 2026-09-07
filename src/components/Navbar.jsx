
"use client";

import React, { useState } from "react";

const navItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "How It Works",
    href: "#how-it-works",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "For Providers",
    href: "#providers",
  },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (name) => {
    setActiveItem(name);
    setMenuOpen(false);
  };

  return (
    <header className="w-full px-6 py-5 md:px-12 lg:px-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="/Logo-10.svg"
            alt="Ekhon"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-gray-100 bg-[#f5f6f9] p-1.5 shadow-sm md:flex">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`rounded-full px-5 py-2.5 text-md font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#d7f2fa] text-[#123f68] shadow-sm"
                    : "text-gray-600 hover:bg-white hover:text-[#123f68]"
                }`}
              >
                <span
                  className={`mr-1.5 transition ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  •
                </span>
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Download Button */}
        <button className="hidden rounded-full bg-[#073e6c] px-6 py-3 text-md font-semibold tracking-wide text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#062f52] hover:shadow-md md:block">
          DOWNLOAD
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f6f9] text-[#073e6c] transition hover:bg-[#d7f2fa] md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-[#073e6c]" />
              <span className="h-0.5 w-5 rounded-full bg-[#073e6c]" />
              <span className="h-0.5 w-5 rounded-full bg-[#073e6c]" />
            </div>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`mx-auto overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen
            ? "mt-4 max-h-[400px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-3xl border border-gray-100 bg-[#f5f6f9] p-3 shadow-sm">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`mb-1 flex items-center rounded-2xl px-5 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#d7f2fa] text-[#123f68]"
                    : "text-gray-600 hover:bg-white hover:text-[#123f68]"
                }`}
              >
                <span className="mr-2">•</span>
                {item.name}
              </a>
            );
          })}

          <button className="mt-2 w-full rounded-2xl bg-[#073e6c] px-5 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-[#062f52]">
            DOWNLOAD
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

