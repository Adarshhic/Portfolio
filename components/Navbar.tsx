"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.href.replace("#", ""))
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[650px] bg-cream/85 backdrop-blur-[12px] border-2 border-dark px-4 py-2 flex items-center justify-between shadow-[4px_4px_0px_#111]"
      >
        <span
          onClick={() => handleLinkClick("#home")}
          className="font-grotesk font-bold text-sm tracking-wider uppercase cursor-pointer select-none text-dark hover:underline decoration-yellow decoration-2"
        >
          AM.
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={item.name}
                onClick={() => handleLinkClick(item.href)}
                className={`relative py-1 font-grotesk font-bold text-[11px] uppercase tracking-wider transition-colors duration-200 ${
                  isActive ? "text-dark font-black" : "text-muted hover:text-dark"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-dark"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-dark text-xl p-1 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-cream flex flex-col justify-center items-center border-b-4 border-dark"
          >
            {/* Close button in mobile menu overlay */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-7 right-[5%] text-dark text-xl p-2 border-2 border-dark bg-yellow shadow-[2px_2px_0px_#111]"
            >
              <FiX />
            </button>

            <div className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, index) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <motion.button
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    key={item.name}
                    onClick={() => handleLinkClick(item.href)}
                    className="font-playfair font-black text-4xl uppercase tracking-wide select-none relative"
                  >
                    <span className={`${isActive ? "text-dark" : "text-muted"}`}>
                      {item.name}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-1 left-0 right-0 h-4 bg-yellow -z-10 transform scale-x-105" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
