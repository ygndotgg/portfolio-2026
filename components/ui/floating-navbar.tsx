/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    external?: boolean;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-6 inset-x-0 mx-auto z-[5000] px-4 sm:px-0",
          className
        )}
      >
        {/* Desktop Navbar */}
        <div className="hidden md:flex max-w-fit mx-auto rounded-2xl bg-white/10 backdrop-blur-xl backdrop-saturate-150 border border-white/20 shadow-2xl px-8 py-3 items-center justify-center space-x-6">
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              target={navItem.external ? "_blank" : undefined}
              rel={navItem.external ? "noopener noreferrer" : undefined}
              className="relative text-white items-center flex space-x-2 hover:text-sky-400 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 text-sm font-medium"
            >
              <span>{navItem.icon}</span>
              <span>{navItem.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden max-w-fit mx-auto rounded-2xl bg-white/10 backdrop-blur-xl backdrop-saturate-150 border border-white/20 shadow-2xl px-4 py-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-sky-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-4 right-4 mt-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden"
              >
                {navItems.map((navItem: any, idx: number) => (
                  <a
                    key={`mobile-link=${idx}`}
                    href={navItem.link}
                    target={navItem.external ? "_blank" : undefined}
                    rel={navItem.external ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-white hover:text-sky-400 hover:bg-white/10 transition-all duration-300 px-4 py-3 text-sm font-medium border-b border-white/10 last:border-b-0"
                  >
                    {navItem.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
