"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// scale masky - treba doladit podla situacie
const MASK_START_SCALE = 80;


// origin do ktoreho sa zoomuje - 50 50 stred
// ine hodnoty nevysvetlitelne driftuju na inom pomere obrazovky ako je svg
// takze stred masky musi byt diera cez ktoru sa zoomuje
// zoomin bod treba menit v svg teda
const MASK_ORIGIN = "50% 50%";

export default function GrandMask() {
  const t = useTranslations("HomePage.GrandMask");
  const sectionRef = useRef(null);
  const maskRef = useRef(null);
  const textRef = useRef(null);
  const textScrimRef = useRef(null);
  const videoRef = useRef(null);


  // prehravanie videa cez intersection observer
  // zapnut vidoe → nech hra pocas celeho pinu cely cas → a ma na sebe masku
  // pripravit video, nech hra uz skor ako ho je vidiet, pomocou posunu root marginu
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "60% 0px 60% 0px", threshold: 0 },
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

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

          gsap.set(maskRef.current, { transformOrigin: MASK_ORIGIN });

          // Mobil/tablet + reduced-motion - maska uz rovno sedi, tam sa neda spravit pekna animacia
          if (!isDesktop || reduce) {
            gsap.set(maskRef.current, { scale: 1 });
            gsap.set([textRef.current, textScrimRef.current], { autoAlpha: 0 });
            return;
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              // vacsi priestor nech sa title text nacita v chille pred odhalenim masky
              end: "+=230%",
              scrub: 0.65,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          tl.addLabel("titleIn", 0)
            // zatmavit nech je lepsi kotnrast bez glowu
            .fromTo(
              textScrimRef.current,
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 0.32, ease: "power1.out" },
              "titleIn",
            )
            // 1) text sa objavi
            .fromTo(
              textRef.current,
              { autoAlpha: 0, y: 32 },
              { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" },
              "titleIn",
            )
            // 2) titulok ostane na obraze dostatocne dlho na precitanie
            .to({}, { duration: 0.7 })
            .addLabel("titleOut")
            // 3) text a clona ustupia v chille
            .to(
              textRef.current,
              { autoAlpha: 0, y: -28, duration: 0.34, ease: "power2.in" },
              "titleOut",
            )
            .to(
              textScrimRef.current,
              { autoAlpha: 0, duration: 0.42, ease: "power1.in" },
              "titleOut",
            )
            // 4) maska padne zo Z-osi (scale 80 → 1) a usadi napis GRAND
            .fromTo(
              maskRef.current,
              { scale: MASK_START_SCALE },
              { scale: 1, duration: 1.2, ease: "none" },
              "titleOut+=0.08",
            )
            // 5) chvilu podrzat masku este 
            .to({}, { duration: 0.32 });
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* hscreen wscreen video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      >
        <source src="/videos/earth.mp4" type="video/mp4" />
      </video>
      {/* kontrast */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(120% 90% at 50% 50%, rgba(0,0,0,0), rgba(0,0,0,0.22))" }}
        aria-hidden="true"
      />


      {/* text co sa objavi a zmizne pred nastupom masky*/}
      <div
        ref={textRef}
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 text-center"
        style={{ visibility: "hidden" }}
      >
        <h2 className="max-w-[15ch] text-[clamp(40px,7vw,104px)] font-light leading-[1.02] tracking-[-0.045em] [text-shadow:0_3px_18px_rgba(0,0,0,0.95),0_1px_3px_rgba(0,0,0,1)]">
          {t("title")}
        </h2>
      </div>

      {/*
        maska = vyrezany text na ciernom posadi
        musi pokryt kazdu obrazovku, sclae 80 → 1 + slovo v strede


      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={maskRef}
        src="/images/mask-logo.svg"
        alt="GRAND"
        className="absolute inset-0 z-20 h-full w-full object-cover object-center"
        style={{ transform: `scale(${MASK_START_SCALE})`, transformOrigin: MASK_ORIGIN }}
      />
    </section>
  );
}
