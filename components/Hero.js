"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(Math.min(window.scrollY / 100, 1));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-stone-200">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,${scroll * 0.8}),
              rgba(0,0,0,${scroll * 0.95})
            ),
            url('/images/Hero.png')
          `,
        }}
      />

      {/* Text */}
      <div
        className="relative z-10 text-center transition-opacity duration-100"
        style={{
          opacity: scroll,
          transform: `translateY(${30 - scroll * 30}px)`,
        }}
      >
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-stone-400">
          Black Metal · 2026
        </p>

        <img
          src="images/LogoWhite_TheCrypt_vector.svg"
          alt="The Crypt"
          className="mx-auto w-[min(80vw,700px)]"
        />

        <p className="mx-auto mt-8 max-w-xl font-serif text-lg italic text-stone-400">
          Beneath the holy light, darkness remains.
        </p>
      </div>
    </section>
  );
}
