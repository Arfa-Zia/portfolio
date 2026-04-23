"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[85vh] w-full max-w-6xl flex-col justify-center px-6 py-20 md:px-8 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-black/60"
        >
          Arfa Zia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl md:text-6xl"
        >
          Mobile App Developer
          <span className="mt-3 block text-2xl font-medium text-black/70 sm:text-3xl md:text-4xl">
            Flutter, UIKit, SwiftUI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg"
        >
          I design and build high-performance mobile applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-black/20 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:border-black/40 hover:shadow-sm"
            >
              Start a Project
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
