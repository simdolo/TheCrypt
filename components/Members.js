"use client";

import { useState } from "react";

const romanNumerals = ["I", "II", "III", "IV"];

const members = [
  {
    role: "Singer",
    name: "Bestial",
    info: "Vocals, guitar and the voice behind the band's darkest hymns.",
    image: "/images/members/Duko.jpg",
  },
  {
    role: "Guitar",
    name: "Wigo",
    info: "Guitarist responsible for the riffs, melodies and atmospheric passages.",
    image: "/images/members/Wigo.jpg",
  },
  {
    role: "Bass",
    name: "LowBorn",
    info: "Bass player holding together the foundation beneath the chaos.",
    image: "/images/members/LowBorn.jpg",
  },
  {
    role: "Drums",
    name: "Gala",
    info: "Drums, percussion and the relentless pulse of the band.",
    image: "/images/members/Gala.jpg",
  },
];

export default function Members() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-black text-stone-200">
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-24 md:px-10 md:pt-32">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-stone-500">
          The congregation
        </p>

        <h2 className="font-serif text-4xl uppercase tracking-wide md:text-6xl">
          Members
        </h2>
      </div>

      {/* Desktop */}
      <div className="hidden h-162.5 w-full overflow-hidden border-y border-stone-800 md:flex">
        {members.map((member, index) => (
          <div
            key={member.role}
            className={`
              group relative h-full overflow-hidden
              border-r border-stone-800 last:border-r-0
              transition-[flex] duration-700 ease-[cubic-bezier(.22,1,.36,1)]
              ${active === index ? "flex-[2.2]" : "flex-1"}
            `}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Background image */}
            <img
              src={member.image}
              alt={member.name}
              className={`
                absolute inset-0 h-full w-full object-cover
                grayscale
                transition-all duration-700
                ${
                  active === index
                    ? "scale-100 opacity-100"
                    : "scale-110 opacity-0"
                }
              `}
            />

            {/* Dark overlay */}
            <div
              className={`
                absolute inset-0 bg-black
                transition-opacity duration-700
                ${active === index ? "opacity-40" : "opacity-0"}
              `}
            />

            {/* Closed state */}
            <div
              className={`
                absolute inset-0 flex items-center justify-center
                px-6
                transition-all duration-500
                ${active === index ? "scale-95 opacity-0" : "scale-100 opacity-100"}
            `}
            >
              <span
                className="
                    text-center
                    font-serif
                    text-xl
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-stone-300
                    lg:text-2xl
                    xl:text-3xl
                    "
              >
                {member.role}
              </span>
            </div>

            {/* Open state */}
            <div
              className={`
                absolute inset-0
                bg-linear-to-t
                from-black via-black/70 via-40% to-transparent
                transition-opacity duration-700
                ${active === index ? "opacity-100" : "opacity-0"}
              `}
            />
            <div
              className={`
                absolute inset-x-0 bottom-0 p-8 lg:p-12
                transition-all duration-700
                ${
                  active === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-stone-300">
                {member.role}
              </p>

              <h3 className="font-serif text-4xl uppercase tracking-wide text-white lg:text-6xl">
                {member.name}
              </h3>

              <div className="mt-5 h-px w-16 bg-stone-300/60" />

              <p className="mt-5 max-w-md text-sm leading-7 text-stone-200">
                {member.info}
              </p>
            </div>

            {/* Number */}
            <span
              className={`
                absolute right-6 top-6
                font-serif
                text-sm
                tracking-[0.25em]
                transition-all duration-500
                ${
                  active === index
                    ? "translate-y-[-8px] opacity-0"
                    : "translate-y-0 opacity-100 text-stone-600"
                }
            `}
            >
              {romanNumerals[index]}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="px-4 pb-20 md:hidden">
        <div className="divide-y divide-stone-800 border-y border-stone-800">
          {members.map((member, index) => {
            const isActive = active === index;

            return (
              <button
                key={member.role}
                type="button"
                onClick={() => setActive(isActive ? null : index)}
                className="relative block w-full text-left"
              >
                {/* Header */}
                <div className="flex min-h-22.5 items-center justify-between px-3">
                  <div className="flex items-center gap-5">
                    <span className="text-xs tracking-[0.2em] text-stone-600">
                      0{index + 1}
                    </span>

                    <span className="font-serif text-lg uppercase tracking-[0.15em] text-stone-300">
                      {member.role}
                    </span>
                  </div>

                  <span
                    className={`
                      text-xl font-light text-stone-500
                      transition-transform duration-500
                      ${isActive ? "rotate-45" : "rotate-0"}
                    `}
                  >
                    +
                  </span>
                </div>

                {/* Expanded content */}
                <div
                  className={`
                    grid transition-[grid-template-rows,opacity]
                    duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                    ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="relative mb-5 aspect-4/5 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover grayscale"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                      <div className="absolute bottom-0 left-0 p-6">
                        <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-stone-400">
                          {member.role}
                        </p>

                        <h3 className="font-serif text-4xl uppercase text-white">
                          {member.name}
                        </h3>
                      </div>
                    </div>

                    <p className="px-3 pb-7 text-sm leading-7 text-stone-400">
                      {member.info}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
