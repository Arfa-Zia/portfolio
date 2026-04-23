"use client";

import { motion } from "framer-motion";

const skills = ["Flutter", "SwiftUI", "UIKit"];

export default function AboutSection() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-12 md:grid-cols-2 md:gap-16"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              About
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Building mobile experiences with speed, clarity, and impact.
            </h2>
          </div>

          <div>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              I am Arfa Zia, a mobile app developer focused on creating
              high-performance and user-friendly mobile applications. I enjoy
              turning ideas into polished products with clean architecture,
              smooth interactions, and thoughtful design.
            </p>

            <ul className="mt-8 flex flex-wrap gap-3" aria-label="Skills">
              {skills.map((skill) => (
                <motion.li
                  key={skill}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white/90"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
