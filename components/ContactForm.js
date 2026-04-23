"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-3xl px-6 py-20 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Start a Project
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-black/70 sm:text-base">
            Tell me about your app idea and I&apos;ll get back to you soon.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-black">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-md border border-black/15 px-4 py-3 text-sm text-black outline-none transition focus:border-black"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-black">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-md border border-black/15 px-4 py-3 text-sm text-black outline-none transition focus:border-black"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-black">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Share your project goals, timeline, and requirements..."
                className="w-full resize-none rounded-md border border-black/15 px-4 py-3 text-sm text-black outline-none transition focus:border-black"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
