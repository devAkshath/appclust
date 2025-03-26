"use client";

import Image from "next/image";
import logoimage from "@/app/assets/logo.svg";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
      <div className="container max-w-5xl mx-auto">
        <div className="border-1 border-white/18  rounded-[27px]  bg-white-950/70 backdrop-blur">
          <div className="grid grid-cols-2 lg:grid-cols-3  p-2 px-4 md:pr-2 items-center ">
            <div>
              <Image
                src={logoimage}
                alt="Layers logo"
                className="h-9 md:h-auto w-auto"
              />
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <nav className="flex gap-6 font-medium text-black">
                {navLinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    className="hover:text-white transition"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex justify-end gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus text-white flex-shrink-0 transition duration-300 lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "rotate-45 -translate-y-2"
                  )}
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={twMerge("transition", isOpen && "opacity-0")}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={twMerge(
                    "origin-left transition",
                    isOpen && "-rotate-45 -translate-y-0"
                  )}
                ></line>
              </svg>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-col items-center gap-2 py-2 text-white">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label} className="p-2">
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
