"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import mindanchorMockup from "./mindanchor-mockup.png";

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
    title: "Focused Session Modes",
    description:
      "Users can start guided focus blocks with a calm timer and structured break rhythm.",
  },
  {
    title: "Distraction-Reduced UI",
    description:
      "A minimal visual language with clear hierarchy to reduce cognitive noise during work.",
  },
  {
    title: "Daily Clarity Notes",
    description:
      "Simple journaling prompts help users reset attention and reflect after each session.",
  },
  {
    title: "Offline Progress Tracking",
    description:
      "Session streaks and productivity history are saved locally for fast, private access.",
  },
];

const techStack = ["Flutter", "Hive", "Dart", "Figma", "Material 3"];

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

export default function MindAnchorCaseStudyPage() {
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
            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">MindAnchor</h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-black/70 md:text-xl">
              Focus & Mental Clarity App
            </p>
            <div className="mt-12 rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.04] via-black/[0.02] to-transparent p-6 shadow-sm md:p-8">
              <div
                className="relative w-full overflow-hidden rounded-2xl border border-black/10"
                style={{ aspectRatio: `${mindanchorMockup.width} / ${mindanchorMockup.height}` }}
              >
                <Image
                  src={mindanchorMockup}
                  alt="MindAnchor app interface mockup"
                  fill
                  sizes="(min-width: 768px) 1200px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.section>

        <CaseStudySection
          title="Overview"
          content="MindAnchor is a productivity-focused mobile concept built to help users reduce distractions and maintain mental clarity. The app blends simple routines and focused interaction design to support deep work and intentional study blocks."
        />
        <CaseStudySection
          title="Problem"
          dark
          content="People often switch contexts too quickly, leading to fragmented attention and burnout. Many focus tools add complexity with noisy interfaces and too many controls, making it harder for users to stay mentally grounded."
        />
        <CaseStudySection
          title="Goal"
          content="The goal was to create an app that feels calm, lightweight, and instantly usable while still giving users meaningful progress feedback. The experience had to work well for both short focus sprints and longer study sessions."
        />
        <CaseStudySection
          title="Solution"
          dark
          content="I designed a minimal flow centered around starting focus sessions quickly, keeping key actions visible, and reducing unnecessary interface decisions. Local-first persistence was used to maintain performance and privacy without backend complexity."
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
          content="I led product direction and UX/UI design from concept to high-fidelity interface. This included user flow mapping, component-level interaction design, visual system definition, and iteration on readability and pacing across all primary screens."
        />
        <CaseStudySection
          title="Challenges & Learnings"
          dark
          content="The main challenge was balancing simplicity with utility. Through iterations, I learned that removing optional controls and relying on stronger typography hierarchy improved focus outcomes more than adding advanced configuration features."
        />
        <CaseStudySection
          title="Outcome"
          content="MindAnchor became a polished concept demonstrating intentional UX for focused productivity. The final result communicates calmness, direction, and measurable progress while staying approachable for first-time users."
        />
        <CaseStudySection
          title="Future Improvements"
          dark
          content="Future versions would add adaptive session recommendations, richer analytics, optional ambient soundscapes, and accessibility-focused modes for neurodivergent users. User testing would guide feature prioritization in the next iteration."
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
                See how this project connects with other product case studies.
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
                  href="/projects/rise30"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Rise30
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
