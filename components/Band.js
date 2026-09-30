export default function Band() {
  return (
    <section className="relative overflow-hidden bg-[#0b0a09] text-stone-200">

      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      {/* Top ornament */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-6 pt-24">
        <div className="h-px flex-1 bg-stone-700/50" />

        <div className="mx-6 flex items-center gap-4 text-stone-500">
          <span className="text-xs">✦</span>
          <span className="font-serif text-xs tracking-[0.4em]">
            MMXXII
          </span>
          <span className="text-xs">✦</span>
        </div>

        <div className="h-px flex-1 bg-stone-700/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">

        {/* Heading */}
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-stone-500">
              The congregation
            </p>

            <h2 className="font-serif text-5xl uppercase tracking-[0.08em] text-stone-100 md:text-7xl">
              The Band
            </h2>
          </div>

          <span className="hidden font-serif text-6xl italic text-stone-700 md:block">
            II
          </span>
        </div>

        {/* PHOTO */}
        <div className="relative">

          {/* Side line */}
          <div className="absolute -left-8 top-0 hidden h-full w-px bg-stone-700/40 lg:block" />

          <div className="group relative overflow-hidden">

            <img
              src="/images/members/Wigo2.jpg"
              alt="THE CRYPT"
              className="
                h-125
                w-full
                object-cover
                object-center
                grayscale
                transition-all
                duration-1000
                group-hover:scale-[1.02]
                group-hover:grayscale-0
                md:h-162.5
              "
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

            {/* Subtle red */}
            <div className="absolute inset-0 bg-[#3a0808]/10 mix-blend-multiply" />

            {/* Frame */}
            <div className="pointer-events-none absolute inset-5 border border-stone-300/20" />

            {/* Corners */}
            <div className="absolute left-5 top-5 h-10 w-10 border-l border-t border-stone-300/50" />
            <div className="absolute right-5 top-5 h-10 w-10 border-r border-t border-stone-300/50" />
            <div className="absolute bottom-5 left-5 h-10 w-10 border-b border-l border-stone-300/50" />
            <div className="absolute bottom-5 right-5 h-10 w-10 border-b border-r border-stone-300/50" />

            {/* Image title */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <p className="mb-3 text-[9px] uppercase tracking-[0.5em] text-stone-400">
                Slovakia · Est. 2022
              </p>

              <h3 className="font-serif text-4xl uppercase tracking-[0.15em] text-stone-100 md:text-6xl">
                The Crypt
              </h3>
            </div>

            {/* Vertical text */}
            <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 md:block">
              <span
                className="
                  font-serif
                  text-sm
                  tracking-[0.5em]
                  text-stone-300/60
                  [writing-mode:vertical-rl]
                "
              >
                IN NOMINE TENEBRARUM
              </span>
            </div>
          </div>
        </div>

        {/* TEXT BELOW IMAGE */}
        <div className="relative mt-14 grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">

          {/* Left decorative column */}
          <div className="relative hidden md:block">

            <div className="flex items-center gap-4">
              <span className="text-xs text-stone-600">✦</span>
              <div className="h-px w-20 bg-stone-700" />
            </div>

            <p className="mt-8 font-serif text-6xl italic text-stone-800">
              II
            </p>

            <p className="mt-4 max-w-45 text-[9px] uppercase leading-5 tracking-[0.35em] text-stone-600">
              From the forest
              <br />
              into the concrete
            </p>
          </div>

          {/* Main text */}
          <div>

            {/* Small heading */}
            <div className="mb-7 flex items-center gap-4">
              <span className="text-xs text-stone-500">✦</span>

              <span className="font-serif text-xs uppercase tracking-[0.35em] text-stone-500">
                The Origin
              </span>

              <div className="h-px flex-1 bg-stone-800" />
            </div>

            {/* Main statement */}
            <p className="max-w-3xl font-serif text-3xl leading-[1.35] text-stone-200 md:text-4xl">
              Born from darkness somewhere between
              <span className="italic text-stone-400"> the forest </span>
              and
              <span className="italic text-stone-400"> concrete.</span>
            </p>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-sm leading-7 text-stone-500 md:text-base md:leading-8">
              THE CRYPT is a black metal band from Slovakia,
              formed in 2022. Rooted in darkness, ancient imagery
              and the collision of the sacred with the profane.
            </p>

            {/* Bottom information */}
            <div className="mt-10 flex items-center gap-5">
              <span className="font-serif text-xs tracking-[0.3em] text-stone-600">
                MMXXII
              </span>

              <div className="h-px flex-1 bg-stone-800" />

              <span className="text-sm text-stone-600">
                ✦
              </span>

              <span className="font-serif text-xs uppercase tracking-[0.3em] text-stone-600">
                Slovakia
              </span>
            </div>
          </div>
        </div>

        {/* Bottom ornament */}
        <div className="mt-24 flex items-center justify-center gap-6">
          <div className="h-px w-24 bg-stone-800" />

          <span className="font-serif text-lg text-stone-600">
            ✦
          </span>

          <p className="font-serif text-xs uppercase tracking-[0.4em] text-stone-600">
            Beyond the veil
          </p>

          <span className="font-serif text-lg text-stone-600">
            ✦
          </span>

          <div className="h-px w-24 bg-stone-800" />
        </div>

      </div>
    </section>
  );
}