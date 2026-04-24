"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-3xl border border-white/15 bg-white/[0.03] px-6 py-12 text-center sm:px-10 md:py-14"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Let&apos;s Work Together
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Have a mobile app idea? Let&apos;s build it into something impactful.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            I help founders and teams, small businesses and startups, design and develop high-performance mobile
            apps with clean UX and reliable code.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10"
          >
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-sm font-semibold text-black shadow-sm transition hover:shadow-md"
            >
              Start a Project
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
