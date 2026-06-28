"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import TapeMark from "@/components/ui/TapeMark";

const ROLES = [
  "Full Stack Developer",
  "Competitive Programmer",
  "Open Source Builder"
];

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

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeRole = ROLES[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeRole.slice(0, currentText.length + 1));
        setTypingSpeed(80);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      setTypingSpeed(100);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen dot-grid flex flex-col justify-center items-center px-4 md:px-12 pt-28 pb-16 relative border-b-[2px] border-dark overflow-hidden select-none"
    >
      {/* Decorative Tape Marks */}
      <div className="absolute top-24 left-[8%] hidden sm:block">
        <TapeMark rotation="left" />
      </div>
      <div className="absolute top-28 right-[10%] hidden sm:block">
        <TapeMark rotation="right" />
      </div>

      {/* Floating Code Snippet Card in Background */}
      <motion.div
        initial={{ opacity: 0, x: 40, rotate: 4 }}
        animate={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-24 right-[5%] w-[280px] bg-white border-2 border-dark p-4 shadow-[4px_4px_0px_#111] font-mono text-[10px] text-dark select-none hidden lg:block select-none pointer-events-none"
      >
        <div className="flex items-center gap-1.5 border-b border-dark/15 pb-2 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-dark/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-dark/20" />
          <span className="font-grotesk text-[8px] text-muted uppercase tracking-wider ml-1">codzy_compiler.js</span>
        </div>
        <p className="text-yellow-600 font-bold">// Execute code via Judge0 API</p>
        <p><span className="text-pink-600 font-bold">const</span> executeCode = <span className="text-pink-600 font-bold">async</span> (src, id) =&gt; &#123;</p>
        <p className="pl-4"><span className="text-pink-600 font-bold">const</span> res = <span className="text-pink-600 font-bold">await</span> fetch(<span className="text-green-600">"/api/run"</span>, &#123;</p>
        <p className="pl-8">method: <span className="text-green-600">"POST"</span>,</p>
        <p className="pl-8">body: JSON.stringify(&#123; src, id &#125;)</p>
        <p className="pl-4">&#125;);</p>
        <p className="pl-4"><span className="text-pink-600 font-bold">const</span> &#123; token &#125; = <span className="text-pink-600 font-bold">await</span> res.json();</p>
        <p className="pl-4"><span className="text-pink-600 font-bold">return</span> pollStatus(token);</p>
        <p>&#125;;</p>
      </motion.div>

      {/* Floating Annotation in Top Left */}
      <div className="absolute top-36 left-[15%] pointer-events-none hidden lg:block">
        <span className="font-dancing text-muted text-sm rotate-[-12deg] inline-block">
          lucknow, india
        </span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[800px] flex flex-col items-center text-center md:text-left md:items-start z-10"
      >
        {/* Typewriter Subtitle */}
        <motion.div
          variants={itemVariants}
          className="font-grotesk font-bold text-xs uppercase tracking-widest text-muted mb-3 h-5 flex items-center"
        >
          <span>{currentText}</span>
          <span className="w-1.5 h-3.5 bg-yellow ml-1 animate-pulse" />
        </motion.div>

        {/* Large Brutalist Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-playfair font-black text-5xl md:text-7xl text-dark leading-tight"
        >
          Namaste ji,
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="font-playfair font-black text-4xl md:text-6xl text-dark leading-tight mt-1 mb-3"
        >
          This is my{" "}
          <span className="bg-yellow px-3 py-1 border-2 border-dark inline-block transform -rotate-1 shadow-[3px_3px_0px_#111]">
            dev portfolio
          </span>
        </motion.h2>

        {/* Handwritten annotation */}
        <motion.p
          variants={itemVariants}
          className="font-dancing text-xl text-muted mt-2 mb-10 pl-2"
        >
          — built with code, not Figma
        </motion.p>

        {/* CTA Buttons Row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto px-8 py-3 bg-dark border-2 border-dark text-yellow font-grotesk font-bold text-xs uppercase tracking-wider shadow-[4px_4px_0px_#E8F000] hover:shadow-[2px_2px_0px_#E8F000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 cursor-pointer"
          >
            View My Work
          </button>
          
          <a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto text-center px-8 py-3 bg-transparent border-2 border-dark text-dark font-grotesk font-bold text-xs uppercase tracking-wider hover:bg-dark hover:text-white transition-all duration-200"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator bouncing arrow */}
      <motion.button
        onClick={handleScrollToProjects}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted hover:text-dark transition-colors duration-200 focus:outline-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <span className="font-grotesk font-bold text-[9px] uppercase tracking-widest mb-1.5">
          Explore Projects
        </span>
        <FiArrowDown className="text-base" />
      </motion.button>
    </section>
  );
}
