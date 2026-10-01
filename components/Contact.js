"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 text-stone-200 lg:px-16 lg:py-36"
    >
      {/* Background title */}
      <div className="pointer-events-none absolute inset-x-0 -top-8 select-none overflow-hidden">
        <span className="block w-full text-center font-serif text-[18vw] font-bold uppercase leading-none tracking-wider text-stone-800/20">
          Contact
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex items-end justify-between border-b border-stone-700/50 pb-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-stone-500">
              Reach out
            </p>

            <h2 className="font-serif text-5xl uppercase tracking-tight text-stone-100 md:text-7xl">
              Contact
            </h2>
          </div>

          <span className="hidden text-xs uppercase tracking-[0.3em] text-stone-600 md:block">
            The Crypt / Slovakia
          </span>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2">
          {/* ORGANIZERS */}
          <div className="group relative border-b border-stone-700/50 pb-16 lg:border-b-0 lg:border-r lg:pr-20">
            <span className="absolute right-10 top-0 font-serif text-7xl text-stone-800/40 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2">
              I
            </span>

            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-stone-500">
              For organizers
            </p>

            <h3 className="mb-6 max-w-lg font-serif text-4xl uppercase leading-[0.95] text-stone-100 md:text-5xl">
              Book
              <br />
              The Crypt
            </h3>

            <p className="mb-10 max-w-md text-sm leading-7 text-stone-400">
              Want THE CRYPT to play at your venue, festival or event? Get in
              touch with us and let&apos;s make some noise.
            </p>

            <div className="mb-8">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-stone-600">
                Booking
              </span>

              <a
                href="mailto:booking@thecrypt.sk"
                className="text-lg text-stone-200 transition-colors duration-300 hover:text-white md:text-xl"
              >
                booking@thecrypt.sk
              </a>
            </div>

            <a
              href="mailto:booking@thecrypt.sk"
              className="group/button inline-flex items-center gap-5 border border-stone-600 px-6 py-4 text-xs uppercase tracking-[0.25em] text-stone-200 transition-all duration-300 hover:border-stone-300 hover:bg-stone-100 hover:text-black"
            >
              Book the band
              <span className="text-lg transition-transform duration-300 group-hover/button:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* FANS */}
          <div className="group relative pt-16 lg:pl-20 lg:pt-0">
            <span className="absolute right-0 top-0 font-serif text-7xl text-stone-800/40 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2">
              II
            </span>

            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-stone-500">
              For fans
            </p>

            <h3 className="mb-6 max-w-lg font-serif text-4xl uppercase leading-[0.95] text-stone-100 md:text-5xl">
              Follow
              <br />
              The Crypt
            </h3>

            <p className="mb-10 max-w-md text-sm leading-7 text-stone-400">
              Stay close to the darkness. Follow us for new music, photos,
              announcements and everything happening inside THE CRYPT.
            </p>

            {/* Socials */}
            <div className="mb-10 space-y-0 border-y border-stone-700/50">
              <a
                href="#"
                className="flex items-center justify-between border-b border-stone-700/50 py-5 text-sm uppercase tracking-[0.2em] text-stone-300 transition-all duration-300 hover:px-3 hover:text-white"
              >
                <span>Instagram</span>
                <span>↗</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-between border-b border-stone-700/50 py-5 text-sm uppercase tracking-[0.2em] text-stone-300 transition-all duration-300 hover:px-3 hover:text-white"
              >
                <span>Facebook</span>
                <span>↗</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-between py-5 text-sm uppercase tracking-[0.2em] text-stone-300 transition-all duration-300 hover:px-3 hover:text-white"
              >
                <span>YouTube</span>
                <span>↗</span>
              </a>
            </div>

            {/* Live shows */}
            <a
              href="/live"
              className="group/live relative flex items-center justify-between overflow-hidden border border-stone-600 px-6 py-5 transition-all duration-500 hover:border-stone-300"
            >
              <div className="relative z-10">
                <span className="mb-1 block text-[10px] uppercase tracking-[0.3em] text-stone-600">
                  See where we play
                </span>

                <span className="font-serif text-2xl uppercase transition-transform duration-500 group-hover/live:translate-x-2">
                  Live Shows
                </span>
              </div>

              <span className="relative z-10 text-2xl transition-transform duration-500 group-hover/live:translate-x-2">
                →
              </span>

              <div className="absolute inset-0 -translate-x-full bg-stone-100 transition-transform duration-500 group-hover/live:translate-x-0" />

              <style jsx>{`
                a:hover span {
                  position: relative;
                }
              `}</style>
            </a>
          </div>
        </div>

        {/* Bottom ornament */}
        <div className="mt-20 flex items-center gap-4">
          <div className="h-px flex-1 bg-stone-800" />
          <span className="text-xs text-stone-700">✦</span>
          <div className="h-px flex-1 bg-stone-800" />
        </div>
      </div>
    </section>
  );
}
