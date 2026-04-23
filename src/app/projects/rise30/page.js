"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const featureCards = [
  {
    title: "30-Day Guided Tracks",
    description:
      "Structured day-by-day habit programs that reduce decision fatigue and keep momentum.",
  },
  {
    title: "Daily Habit Check-ins",
    description:
      "Quick progress logs with clear completion states to support consistent daily behavior.",
  },
  {
    title: "Progress Visualization",
    description:
      "Visual streak and completion indicators to reinforce accountability and motivation.",
  },
  {
    title: "Local-first Data Storage",
    description:
      "Reliable local persistence to ensure speed and privacy while tracking user progress.",
  },
];

const techStack = ["Flutter", "Hive", "Dart", "Figma"];

function CaseStudySection({ title, content, dark = false }) {
  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={dark ? "bg-black text-white" : "bg-white text-black"}
    >
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-24">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <p
          className={`mt-6 text-base leading-relaxed md:text-lg ${
            dark ? "text-white/80" : "text-black/70"
          }`}
        >
          {content}
        </p>
      </div>
    </motion.section>
  );
}

export default function Rise30CaseStudyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-28">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
              Case Study
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">Rise30</h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-black/70 md:text-xl">
              30-Day Habit Building App
            </p>
            <div className="mt-12 rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.04] via-black/[0.02] to-transparent p-6 shadow-sm md:p-8">
              <div className="flex h-[280px] w-full items-center justify-center rounded-2xl border border-dashed border-black/15 bg-white/70 text-sm font-semibold uppercase tracking-[0.2em] text-black/45 md:h-[420px]">
                Large Image Placeholder
              </div>
            </div>
          </div>
        </motion.section>

        <CaseStudySection
          title="Overview"
          content="Rise30 is a habit-building app concept that helps users build consistency through structured 30-day challenges. The product is designed to turn long-term goals into manageable daily actions with clear progress feedback."
        />
        <CaseStudySection
          title="Problem"
          dark
          content="Users often start new habits with motivation but lose momentum after a few days due to unclear plans and weak reinforcement loops. Many habit apps feel either too generic or too complicated for sustained daily use."
        />
        <CaseStudySection
          title="Goal"
          content="The objective was to create a guided experience that makes habit formation feel achievable and measurable. The interface needed to be simple enough for daily repetition while still providing meaningful progress insight."
        />
        <CaseStudySection
          title="Solution"
          dark
          content="I designed Rise30 around guided 30-day journeys, lightweight check-ins, and visual milestones. By emphasizing clarity, rhythm, and micro-feedback, the app supports routine-building without overwhelming the user."
        />

        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Key Features</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {featureCards.map((feature, index) => (
                <motion.article
                  key={feature.title}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/70">
                    {feature.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="bg-black text-white"
        >
          <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-24">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Tech Stack</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <CaseStudySection
          title="My Role"
          content="I drove the product concept, UX structure, and interface system end-to-end. This included challenge framework planning, screen flow design, interaction details, and visual consistency for repeat daily usage."
        />
        <CaseStudySection
          title="Challenges & Learnings"
          dark
          content="The key challenge was designing motivation loops that feel encouraging without becoming noisy. I learned that simple milestones, clear completion states, and predictable interaction patterns are more effective than excessive gamification."
        />
        <CaseStudySection
          title="Outcome"
          content="Rise30 resulted in a clear and scalable concept for habit formation that demonstrates strong UX structure and behavior-driven design thinking. The final experience supports consistency while preserving a calm, modern interface."
        />
        <CaseStudySection
          title="Future Improvements"
          dark
          content="Future updates could include social accountability circles, adaptive habit intensity, reminder personalization, and richer trend analytics. A future testing round would validate retention impact across different user routines."
        />

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl border border-black/10 bg-black px-8 py-12 text-white shadow-sm md:px-12 md:py-16"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
                Explore More Work
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
                Discover the full collection of product case studies.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Back to Projects
                </Link>
                <Link
                  href="/projects/healsync"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  HealSync
                </Link>
                <Link
                  href="/projects/mindanchor"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  MindAnchor
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
