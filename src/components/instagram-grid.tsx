import Image from "next/image";
import { container } from "@/components/site-header";
import { instagramHandle, instagramUrl } from "@/lib/contact";

// Photos shown in the grid until a live Instagram feed is connected.
const tiles = [
  { src: "/images/riviera.webp", alt: "Villa and beach on the Riviera", position: "center 60%" },
  { src: "/images/balear-boats.webp", alt: "Boats in a turquoise cove in Majorca", position: "center 70%" },
  { src: "/images/paname.webp", alt: "Eiffel Tower over Paris rooftops", position: "66% center" },
  { src: "/images/riviera-pool.webp", alt: "Pool on the rocks above the sea", position: "center 35%" },
  { src: "/images/hero-jetty.webp", alt: "Jetty and boat on dark water", position: "60% center" },
  { src: "/images/balear-sailboat.webp", alt: "Sailboat below a clifftop villa", position: "center 55%" },
];

export function InstagramIcon({ size }: { size: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function InstagramGrid() {
  return (
    <section aria-labelledby="instagram-heading" className={`${container} flex flex-col gap-10 pb-30`}>
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-rule pt-14">
        <div className="flex flex-col gap-2">
          <h2 id="instagram-heading" className="m-0 font-playfair text-4xl font-medium">
            Keep up to date
          </h2>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-[15px] text-ink-muted hover:text-ink"
          >
            @{instagramHandle}
          </a>
        </div>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-2.5 border border-ink px-6 text-[15px] font-medium text-ink no-underline hover:bg-ink hover:text-white"
        >
          <InstagramIcon size={18} />
          Follow on Instagram
        </a>
      </div>

      <ul className="m-0 grid list-none grid-cols-2 gap-1.5 p-0 sm:grid-cols-3 lg:grid-cols-6">
        {tiles.map((tile) => (
          <li key={tile.src}>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${tile.alt}, on Instagram`}
              className="group relative block aspect-square overflow-hidden bg-frame"
            >
              <Image
                src={tile.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05] motion-reduce:transition-none"
                style={{ objectPosition: tile.position }}
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/35 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                <InstagramIcon size={30} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
