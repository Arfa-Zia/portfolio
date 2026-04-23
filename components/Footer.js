"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-t border-black/10 bg-white"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-lg font-semibold tracking-tight text-black">
            Arfa Zia
          </p>
          <p className="mt-2 text-sm text-black/60">
            Mobile App Developer - Flutter, UIKit, SwiftUI
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-5 sm:gap-7">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-black/70 transition hover:text-black"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-4 md:px-8">
          <p className="text-xs text-black/50">
            &copy; {new Date().getFullYear()} Arfa Zia. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
