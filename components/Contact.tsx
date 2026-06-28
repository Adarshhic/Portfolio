"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import SectionTag from "@/components/ui/SectionTag";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Contact() {
  const line1 = "Ready to Build";
  const line2 = "Something Great?";

  const line1Words = line1.split(" ");
  const line2Words = line2.split(" ");

  return (
    <div id="contact" className="w-full relative bg-cream select-none">
      {/* Torn Paper Edge (black clip-path div) immediately above the dark contact block */}
      <div
        className="w-full bg-dark h-[36px] -mb-[1px] relative z-10"
        style={{
          clipPath:
            "polygon(0 40%, 2% 0%, 4% 50%, 6% 10%, 8% 60%, 10% 5%, 12% 55%, 14% 15%, 16% 65%, 18% 0%, 20% 50%, 22% 20%, 24% 70%, 26% 5%, 28% 55%, 30% 0%, 32% 60%, 34% 20%, 36% 65%, 38% 10%, 40% 50%, 42% 0%, 44% 45%, 46% 15%, 48% 60%, 50% 5%, 52% 55%, 54% 20%, 56% 70%, 58% 0%, 60% 50%, 62% 15%, 64% 60%, 66% 10%, 68% 55%, 70% 5%, 72% 65%, 74% 20%, 76% 50%, 78% 0%, 80% 60%, 82% 15%, 84% 55%, 86% 5%, 88% 65%, 90% 10%, 92% 50%, 94% 0%, 96% 55%, 98% 20%, 100% 40%, 100% 100%, 0 100%)",
        }}
      />

      {/* Main Contact Section */}
      <section className="bg-dark text-cream py-16 px-6 md:px-12 relative overflow-hidden">
        {/* Decorative Floating Circle Ambient Blur in Background */}
        <div className="absolute right-[5%] top-[10%] w-[180px] h-[180px] bg-yellow/15 blur-[60px] pointer-events-none rounded-full select-none" />

        <div className="max-w-[800px] mx-auto text-left relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-8">
            <SectionTag text="Let's Talk" icon={<FiSend className="text-[10px]" />} />
            <span className="font-dancing text-[#999] text-base sm:ml-3">
              open to work
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            {/* Word Staggered Heading */}
            <h2 className="font-playfair font-black text-4xl md:text-6xl text-white leading-none tracking-tight">
              {/* Line 1 */}
              <span className="block mb-2 overflow-hidden py-1">
                {line1Words.map((word, idx) => (
                  <motion.span
                    key={`l1-${idx}`}
                    variants={wordVariants}
                    className="inline-block mr-3 md:mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              {/* Line 2 (Yellow) */}
              <span className="block text-yellow overflow-hidden py-1">
                {line2Words.map((word, idx) => (
                  <motion.span
                    key={`l2-${idx}`}
                    variants={wordVariants}
                    className="inline-block mr-3 md:mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h2>

            {/* Subtext */}
            <motion.p
              variants={wordVariants}
              className="font-inter text-sm md:text-base text-[#888] leading-relaxed max-w-[500px] mt-6 mb-10"
            >
              Open to internships, freelance, and collabs — full-stack apps, real products.
            </motion.p>

            {/* 3 Buttons (no border-radius, Space Grotesk 700, 12px) */}
            <motion.div
              variants={wordVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              {/* Email Button */}
              <a
                href="mailto:adarsh.mishardu0001@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-yellow text-dark font-grotesk font-bold text-xs uppercase tracking-wider shadow-[4px_4px_0px_#fff] hover:shadow-[2px_2px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 text-center"
              >
                <FiMail className="text-sm" />
                <span>Send an Email</span>
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/adarshic/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-[#F2F0EB] font-grotesk font-bold text-xs uppercase tracking-wider border-2 border-[#444] hover:bg-[#F2F0EB] hover:text-dark hover:border-white transition-all duration-200 text-center"
              >
                <FiLinkedin className="text-sm" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub Button */}
              <a
                href="https://github.com/Adarshhic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-[#F2F0EB] font-grotesk font-bold text-xs uppercase tracking-wider border-2 border-[#444] hover:bg-[#F2F0EB] hover:text-dark hover:border-white transition-all duration-200 text-center"
              >
                <FiGithub className="text-sm" />
                <span>GitHub</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
