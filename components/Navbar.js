"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("grand-mask");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "MERCH", href: "#merch" },
    { name: "LIVE", href: "#live" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        px-5
        py-5
        lg:px-10
        pointer-events-none
        transition-all
        duration-700
        ease-out
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }
      `}
    >
      <nav className="mx-auto max-w-[1600px] pointer-events-auto">
        <div
          className="
            relative
            overflow-hidden
            border
            border-stone-700/40
            bg-[#090807]/85
            backdrop-blur-md
            shadow-[0_10px_50px_rgba(0,0,0,0.45)]
          "
        >
          {/* Top decorative line */}
          <div
            className="
              absolute
              left-0
              top-0
              h-px
              w-full
              bg-linear-to-r
              from-transparent
              via-stone-500/70
              to-transparent
            "
          />

          {/* Main navbar */}
          <div className="flex h-20 items-center justify-between px-6 lg:px-10">

            {/* LOGO */}
            <a
              href="#"
              className="group flex h-full items-center"
            >
              <img
                src="/images/Icon_C_flat.png"
                alt="The Crypt"
                className="
                  h-10
                  w-auto
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-105

                  sm:h-12
                  lg:h-14
                "
              />
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-2 md:flex">
              {links.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    relative
                    px-6
                    py-3
                    text-[11px]
                    font-medium
                    tracking-[0.35em]
                    text-stone-400
                    transition-colors
                    duration-300
                    hover:text-stone-100
                  "
                >
                  {/* Number */}
                  <span
                    className="
                      absolute
                      -top-1
                      left-1
                      text-[8px]
                      tracking-normal
                      text-stone-700
                      transition-colors
                      duration-300
                      group-hover:text-stone-400
                    "
                  >
                    0{index + 1}
                  </span>

                  {link.name}

                  {/* Animated underline */}
                  <span
                    className="
                      absolute
                      bottom-1
                      left-6
                      right-6
                      h-px
                      origin-left
                      scale-x-0
                      bg-stone-400
                      transition-transform
                      duration-500
                      group-hover:scale-x-100
                    "
                  />
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                md:hidden
              "
              aria-label="Open navigation"
            >
              {/* Top line */}
              <span
                className={`
                  absolute
                  h-px
                  w-6
                  bg-stone-300
                  transition-transform
                  duration-300
                  ${
                    open
                      ? "rotate-45"
                      : "-translate-y-2"
                  }
                `}
              />

              {/* Middle line */}
              <span
                className={`
                  absolute
                  h-px
                  w-6
                  bg-stone-300
                  transition-opacity
                  duration-300
                  ${
                    open
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              />

              {/* Bottom line */}
              <span
                className={`
                  absolute
                  h-px
                  w-6
                  bg-stone-300
                  transition-transform
                  duration-300
                  ${
                    open
                      ? "-rotate-45"
                      : "translate-y-2"
                  }
                `}
              />
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`
              overflow-hidden
              border-t
              border-stone-700/30
              transition-all
              duration-500
              md:hidden
              ${
                open
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="flex flex-col px-6 py-5">
              {links.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-stone-800/70
                    py-5
                    text-sm
                    tracking-[0.3em]
                    text-stone-400
                    transition-colors
                    duration-300
                    hover:text-stone-100
                  "
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[9px] text-stone-700">
                      0{index + 1}
                    </span>

                    {link.name}
                  </span>

                  <span
                    className="
                      text-stone-700
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom decorative line */}
          <div
            className="
              absolute
              bottom-0
              left-0
              h-px
              w-full
              bg-linear-to-r
              from-transparent
              via-stone-700/50
              to-transparent
            "
          />
        </div>
      </nav>
    </header>
  );
}