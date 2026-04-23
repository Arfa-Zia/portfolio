"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <h3 className="text-xl font-semibold tracking-tight text-black">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-black/70">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-black/80"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
