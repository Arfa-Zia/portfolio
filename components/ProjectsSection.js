"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import healsyncMockup from "../src/app/projects/healsync/healsync-mockup.png";
import mindanchorMockup from "../src/app/projects/mindanchor/mindanchor-mockup.png";
import rise30Mockup from "../src/app/projects/rise30/rise30-mockup.png";

const featuredProjects = [
  {
    title: "HealSync",
    slug: "healsync",
    subtitle: "Remote Therapy Mobile Application",
    description:
      "A concept mobile application designed to simulate remote therapy sessions between clients and therapists. The app focuses on delivering a seamless and secure communication experience.",
    features: [
      "User authentication",
      "Real-time chat",
      "Audio/video calling",
      "Session tracking",
    ],
    tech: ["UIKit", "Firebase"],
    status: "Concept",
    image: healsyncMockup,
  },
  {
    title: "MindAnchor",
    slug: "mindanchor",
    subtitle: "Focus & Mental Clarity App",
    description:
      "A productivity-focused mobile application designed to help users reduce distractions and stay mentally anchored during work or study sessions.",
    features: ["Focus sessions", "Minimal UI", "Local storage"],
    tech: ["Flutter", "Hive"],
    status: "Prototype",
    image: mindanchorMockup,
  },
  {
    title: "Rise30",
    slug: "rise30",
    subtitle: "30-Day Habit Building App",
    description:
      "A habit-building application that guides users through structured 30-day challenges to develop consistency and discipline.",
    features: ["Habit tracking", "Progress visualization", "Local storage"],
    tech: ["Flutter", "Hive"],
    status: "Prototype",
    image: rise30Mockup,
  },
];

const otherProjects = [
  {
    title: "BookTracker",
    subtitle: "Reading Manager",
    description:
      "Track books, reading progress, and personal notes in a simple lightweight manager.",
    tech: ["SwiftUI"],
  },
  {
    title: "ExpenseTracker",
    subtitle: "Budget App",
    description:
      "Manage income and expenses with clear category-based breakdowns and spending visibility.",
    tech: ["SwiftUI"],
  },
  {
    title: "Pomodoro Timer",
    subtitle: "Focus Timer",
    description:
      "A minimal focus timer that supports productive work intervals and quick session resets.",
    tech: ["SwiftUI"],
  },
  {
    title: "Weather App",
    subtitle: "API-based Weather App",
    description:
      "Get current conditions and forecasts through a responsive API-driven weather interface.",
    tech: ["SwiftUI"],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function TechTag({ label }) {
  return (
    <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-medium text-black/80">
      {label}
    </span>
  );
}

function FeaturedProjectCard({ project }) {
  const imageAspectRatio =
    project.image?.width && project.image?.height
      ? `${project.image.width} / ${project.image.height}`
      : undefined;

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="w-full bg-gradient-to-br from-black/[0.04] via-black/[0.02] to-transparent p-6">
        {project.image ? (
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-black/10"
            style={{ aspectRatio: imageAspectRatio || "16 / 9" }}
          >
            <Image
              src={project.image}
              alt={`${project.title} mockup`}
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex h-52 w-full items-center justify-center rounded-2xl border border-dashed border-black/15 bg-white/70 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
            Image Placeholder
          </div>
        )}
      </div>

      <div className="space-y-6 p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-black">{project.title}</h3>
            <p className="mt-1 text-sm font-medium text-black/60">{project.subtitle}</p>
          </div>
          <span className="inline-flex shrink-0 rounded-full border border-black/10 bg-black px-3 py-1 text-xs font-semibold text-white">
            {project.status}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-black/70">{project.description}</p>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
            Key Features
          </p>
          <ul className="space-y-2 text-sm text-black/80">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-black/70" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center justify-center rounded-xl border border-black/20 px-4 py-2 text-sm font-semibold text-black transition group-hover:border-black/40 group-hover:bg-black group-hover:text-white"
        >
          View Details
        </Link>
      </div>
    </motion.article>
  );
}

function OtherProjectCard({ project }) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="h-36 w-full bg-gradient-to-br from-black/[0.045] via-black/[0.02] to-transparent p-4">
        <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-black/15 bg-white/70 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">
          Image
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-black">{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-black/60">{project.subtitle}</p>
        </div>
        <p className="text-sm leading-relaxed text-black/70">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechTag key={`${project.title}-${tech}`} label={tech} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12 md:mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/55">
              Featured Projects
            </p>
            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl">
              Product concepts crafted with clarity, usability, and focus.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid gap-7 lg:grid-cols-3"
          >
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.title} project={project} />
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10 mt-20 md:mb-12 md:mt-24">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/55">
              Other Projects
            </p>
            <h3 className="max-w-2xl text-3xl font-bold tracking-tight text-black md:text-4xl">
              Additional builds across productivity and everyday utility.
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {otherProjects.map((project) => (
              <OtherProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
