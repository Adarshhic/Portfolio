"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import TapeMark from "@/components/ui/TapeMark";
import SectionTag from "@/components/ui/SectionTag";
import { FiUser } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-12 bg-cream border-b-[2px] border-dark relative select-none"
    >
      {/* Decorative Tape Mark */}
      <div className="absolute top-8 right-[10%]">
        <TapeMark rotation="left" />
      </div>

      <div className="max-w-[800px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-12">
          <SectionTag text="About Me" icon={<FiUser />} />
          <span className="font-dancing text-muted text-base md:ml-3">
            — a little bit about who i am
          </span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex flex-col"
        >
          {/* Two Column Layout: Photo Box & Bio details */}
          <motion.div
            variants={itemVariants}
            className="w-full grid grid-cols-1 md:grid-cols-[130px_1fr] gap-8 items-start mb-12"
          >
            {/* Left: Photo Placeholder Frame */}
            <div className="relative flex flex-col items-center justify-self-center md:justify-self-start">
              <div className="absolute -top-4">
                <TapeMark rotation="right" />
              </div>
              {/* Photo Box */}
              <div className="w-[110px] h-[130px] bg-white border-[3px] border-dark flex items-center justify-center font-playfair font-black text-3xl shadow-[4px_4px_0px_#111]">
                {/* Replace with <Image> from next/image */}
                <span>AM</span>
              </div>
              <div className="absolute -bottom-3">
                <TapeMark rotation="left" />
              </div>
            </div>

            {/* Right: Bio & Social Handles */}
            <div className="flex flex-col text-left">
              <h3 className="font-playfair font-black text-2xl text-dark relative inline-block self-start">
                Adarsh Mishra
                <span className="absolute -bottom-1 left-0 w-20 h-[3px] bg-yellow" />
              </h3>
              
              <p className="font-inter text-sm md:text-base text-dark/85 leading-relaxed mt-5 max-w-[620px]">
                I'm Adarsh — a full stack developer who loves building real products. 
                I write clean code, ship fast, and obsess over user experience. 
                Currently pursuing my B.Tech in IT at SRCM, Lucknow (2023–2027).
              </p>

              {/* Icon Link List */}
              <div className="flex items-center gap-4 mt-5">
                <a
                  href="mailto:adarsh.mishardu0001@gmail.com"
                  className="p-2 border-2 border-dark bg-white hover:bg-yellow transition-all duration-200 shadow-[2px_2px_0px_#111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111]"
                  aria-label="Send Email"
                >
                  <FiMail className="text-lg text-dark" />
                </a>
                <a
                  href="https://github.com/Adarshhic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-dark bg-white hover:bg-yellow transition-all duration-200 shadow-[2px_2px_0px_#111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111]"
                  aria-label="GitHub Profile"
                >
                  <FiGithub className="text-lg text-dark" />
                </a>
                <a
                  href="https://www.linkedin.com/in/adarshic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-dark bg-white hover:bg-yellow transition-all duration-200 shadow-[2px_2px_0px_#111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111]"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin className="text-lg text-dark" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* 4 Stat Boxes (border: 2px solid #111, no border-radius) */}
          <motion.div
            variants={itemVariants}
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {/* Box 1 */}
            <div className="bg-white border-2 border-dark p-4 shadow-[4px_4px_0px_#111] flex flex-col justify-center text-left">
              <span className="font-grotesk font-bold text-2xl md:text-3xl text-dark tracking-tight">
                200+
              </span>
              <span className="font-grotesk font-bold text-[10px] text-muted uppercase tracking-wider mt-1">
                DSA Problems
              </span>
            </div>

            {/* Box 2: Yellow Bg */}
            <div className="bg-yellow border-2 border-dark p-4 shadow-[4px_4px_0px_#111] flex flex-col justify-center text-left">
              <span className="font-grotesk font-bold text-2xl md:text-3xl text-dark tracking-tight">
                8.0
              </span>
              <span className="font-grotesk font-bold text-[10px] text-dark uppercase tracking-wider mt-1">
                CGPA
              </span>
            </div>

            {/* Box 3 */}
            <div className="bg-white border-2 border-dark p-4 shadow-[4px_4px_0px_#111] flex flex-col justify-center text-left">
              <span className="font-grotesk font-bold text-2xl md:text-3xl text-dark tracking-tight">
                Top 10
              </span>
              <span className="font-grotesk font-bold text-[10px] text-muted uppercase tracking-wider mt-1">
                Google Study Jams
              </span>
            </div>

            {/* Box 4: Dark Bg with Yellow Text */}
            <div className="bg-dark border-2 border-dark p-4 shadow-[4px_4px_0px_#111] flex flex-col justify-center text-left">
              <span className="font-grotesk font-bold text-2xl md:text-3xl text-yellow tracking-tight">
                2+
              </span>
              <span className="font-grotesk font-bold text-[10px] text-yellow/85 uppercase tracking-wider mt-1">
                Prod Projects
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
