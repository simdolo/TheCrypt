"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MASK_START_SCALE = 1;
const MASK_END_SCALE = 80;
const MASK_ORIGIN = "50% 50%";

export default function GrandMask() {
  const sectionRef = useRef(null);
  const maskRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1025px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { isDesktop, reduce } = ctx.conditions;

          gsap.set(maskRef.current, {
            scale: MASK_START_SCALE,
            transformOrigin: MASK_ORIGIN,
          });

          gsap.set(overlayRef.current, {
            opacity: 1,
          });

          // Mobil / tablet / reduced motion
          if (!isDesktop || reduce) {
            gsap.set(maskRef.current, {
              scale: 1,
            });

            gsap.set(overlayRef.current, {
              opacity: 0,
            });

            return;
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=170%",
              scrub: "none",
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          tl.to(
            overlayRef.current,
            {
              opacity: 0,
              duration: 0.35,
              ease: "power1.out",
            },
            0,
          )
            .to(
              maskRef.current,
              {
                scale: MASK_END_SCALE,
                duration: 1,
                ease: "none",
              },
              0,
            )
            .to(
              maskRef.current,
              {
                opacity: 0,
                duration: 0.2,
                ease: "power2.in",
              },
              0.6,
            );

          /*
           * LOGO:
           * 1 → 80
           *
           * OVERLAY:
           * 1 → 0
           *
           * Obe animácie prebiehajú súčasne.
           */
          tl.to(
            maskRef.current,
            {
              scale: MASK_END_SCALE,
              duration: 1,
              ease: "none",
            },
            0,
          ).to(
            overlayRef.current,
            {
              opacity: 0,
              duration: 0.45,
              ease: "power1.out",
            },
            0,
          );
        },
      );

      return () => mm.revert();
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="grand-mask"
      className="relative h-screen overflow-hidden bg-white"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/images/Hero.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* WHITE OVERLAY */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 bg-white"
        aria-hidden="true"
      />

      {/* LOGO */}
      <img
        ref={maskRef}
        src="/images/mask_logo.svg"
        alt="THE CRYPT"
        className="
          absolute
          inset-0
          z-20
          h-full
          w-full
          object-cover
          object-center
        "
        style={{
          transform: `scale(${MASK_START_SCALE})`,
          transformOrigin: MASK_ORIGIN,
        }}
      />
    </section>
  );
}
