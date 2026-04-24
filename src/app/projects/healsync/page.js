"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import CTA from "../../../../components/CTA";
import healsyncMockup from "./healsync-mockup.png";

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
    title: "Secure Authentication",
    description:
      "Role-based sign-in flow for therapists and clients with a simple onboarding sequence.",
  },
  {
    title: "Real-time Chat",
    description:
      "Low-friction messaging experience to support communication between scheduled sessions.",
  },
  {
    title: "Audio & Video Sessions",
    description:
      "Integrated call interfaces to simulate private remote therapy sessions in-app.",
  },
  {
    title: "Session Tracking",
    description:
      "Session history and timeline views to help users stay consistent with treatment plans.",
  },
];

const techStack = ["UIKit", "Firebase", "Cloud Firestore", "Firebase Auth", "Figma"];

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

export default function HealSyncCaseStudyPage() {
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
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-black md:text-7xl">
              HealSync
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-black/70 md:text-xl">
              Remote Therapy Mobile Application
            </p>

            <div className="mt-12 rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.04] via-black/[0.02] to-transparent p-6 shadow-sm md:p-8">
              <div
                className="relative w-full overflow-hidden rounded-2xl border border-black/10"
                style={{ aspectRatio: `${healsyncMockup.width} / ${healsyncMockup.height}` }}
              >
                <Image
                  src={healsyncMockup}
                  alt="HealSync app interface mockup"
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
          content="HealSync is a concept mobile app designed to make therapy more accessible through secure, remote-first interactions. The product focuses on creating a calm and trustworthy experience for both therapists and clients while preserving privacy and usability."
        />

        <CaseStudySection
          title="Problem"
          dark
          content="Many users struggle to maintain continuity in therapy due to scheduling barriers, travel constraints, and disconnected communication channels. Existing solutions often feel clinical or overly complex, which can increase friction for users already navigating emotional stress."
        />

        <CaseStudySection
          title="Goal"
          content="The core goal was to design a clean and intuitive mobile experience that supports secure communication, structured session flow, and consistent engagement. The interface needed to feel human-centered while still handling the technical demands of remote care."
        />

        <CaseStudySection
          title="Solution"
          dark
          content="I designed HealSync with a minimal UI system, clear visual hierarchy, and focused feature set: authentication, messaging, calls, and session tracking. Every screen was built to reduce cognitive load, helping users quickly understand next steps and feel comfortable using the app."
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
          content="I owned the product concept and end-to-end design direction, including user flow mapping, interface design, interaction behavior, and component-level visual consistency. I also defined the information architecture and interaction patterns for all key features."
        />

        <CaseStudySection
          title="Challenges & Learnings"
          dark
          content="The biggest challenge was balancing emotional sensitivity with functional clarity. I learned that subtle copy, spacing, and interaction timing significantly affect perceived trust in healthcare-related experiences. Iterating on hierarchy and reducing visual noise improved usability quickly."
        />

        <CaseStudySection
          title="Outcome"
          content="HealSync became a strong concept case study that demonstrates product thinking, UX clarity, and visual system consistency. The final design communicates a clear therapy flow and showcases how remote mental health experiences can remain both secure and approachable."
        />

        <CaseStudySection
          title="Future Improvements"
          dark
          content="Next iterations would include therapist availability management, richer progress analytics, push reminders, and accessibility enhancements such as voice guidance and larger touch targets. A future usability test cycle would further validate flow decisions with real users."
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
                Interested in similar work?
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
                Explore connected case studies and product thinking.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Back to Projects
                </Link>
                <Link
                  href="/projects/mindanchor"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  MindAnchor
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

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
