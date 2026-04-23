"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md"
    >
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-black sm:text-xl"
        >
          Arfa Zia
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-black/70 transition hover:text-black"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-black md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-black" />
            <span className="block h-0.5 w-5 bg-black" />
            <span className="block h-0.5 w-5 bg-black" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-black/10 bg-white px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-black/80 transition hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
