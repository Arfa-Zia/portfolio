"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const featuredProjects = [
  {
    title: "FitFlow Mobile",
    description:
      "A fitness tracking app with personalized workout plans, progress analytics, and clean onboarding.",
    tech: ["Flutter", "Firebase", "REST API"],
  },
  {
    title: "SwiftPay Wallet",
    description:
      "A finance app concept focused on fast payments, secure transactions, and frictionless user flows.",
    tech: ["SwiftUI", "UIKit", "Core Data"],
  },
  {
    title: "TravelMate",
    description:
      "A travel companion app with itinerary planning, destination highlights, and offline-friendly features.",
    tech: ["Flutter", "Map Integration", "Local Storage"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
              Featured Projects
            </p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
              Selected work focused on performance and user experience.
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex w-fit items-center justify-center rounded-md border border-black/20 px-5 py-2.5 text-sm font-semibold text-black transition hover:border-black/40 hover:shadow-sm"
          >
            View All Projects
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
