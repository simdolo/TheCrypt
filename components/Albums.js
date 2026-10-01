const albums = [
  {
    title: "Nec Plus Ultra",
    date: "2012",
    cover: "/images/albums/NecPlusUltra.jpg",
    spotify: "#",
    youtube: "#",
  },
  {
    title: "Weapons Recollected",
    date: "2005",
    cover: "/images/albums/WeaponsRecollected.jpg",
    spotify: "#",
    youtube: "#",
  },
  {
    title: "Bestialmente",
    date: "2007",
    cover: "/images/albums/Bestialmente.jpg",
    spotify: "#",
    youtube: "#",
  },
];

export default function Albums() {
  return (
    <section className="px-6 pb-24 text-stone-200 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 flex items-end justify-between border-b border-stone-800 pb-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-stone-500">
              Discography
            </p>

            <h2 className="font-serif text-4xl uppercase tracking-wide md:text-5xl">
              Our Albums
            </h2>
          </div>

          <span className="hidden text-xs uppercase tracking-[0.3em] text-stone-600 md:block">
            The Crypt
          </span>
        </div>

        {/* Albums */}
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {albums.map((album) => (
            <article key={album.title} className="group">

              {/* Album Cover */}
              <div className="relative aspect-square overflow-hidden bg-stone-900">
                <img
                  src={album.cover}
                  alt={album.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    grayscale
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-[1.02]
                    group-hover:grayscale-0
                  "
                />

                {/* Dark inactive overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/25
                    transition-opacity
                    duration-700
                    group-hover:opacity-0
                  "
                />
              </div>

              {/* Album Information */}
              <div className="relative mt-5">
                <h3 className="font-serif text-xl uppercase tracking-wide">
                  {album.title}
                </h3>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-600">
                  {album.date}
                </p>

                {/* Streaming Buttons */}
                <div
                  className="
                    absolute
                    left-0
                    top-full
                    z-10
                    mt-4
                    flex
                    gap-2
                    opacity-100
                    transition-all
                    duration-500

                    md:pointer-events-none
                    md:-translate-y-2
                    md:opacity-0
                    md:group-hover:pointer-events-auto
                    md:group-hover:translate-y-0
                    md:group-hover:opacity-100
                  "
                >
                  <a
                    href={album.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      min-h-10
                      items-center
                      justify-center
                      gap-2
                      border
                      border-stone-700
                      px-4
                      py-2
                      text-[10px]
                      uppercase
                      tracking-[0.15em]
                      text-stone-400
                      transition-all
                      duration-300
                      hover:border-stone-300
                      hover:bg-stone-200
                      hover:text-black
                    "
                  >
                    <span className="text-xs">▶</span>
                    Spotify
                  </a>

                  <a
                    href={album.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      min-h-10
                      items-center
                      justify-center
                      gap-2
                      border
                      border-stone-700
                      px-4
                      py-2
                      text-[10px]
                      uppercase
                      tracking-[0.15em]
                      text-stone-400
                      transition-all
                      duration-300
                      hover:border-stone-300
                      hover:bg-stone-200
                      hover:text-black
                    "
                  >
                    <span className="text-xs">▶</span>
                    YouTube
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}