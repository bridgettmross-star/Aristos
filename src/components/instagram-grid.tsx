import Image from "next/image";
import { container } from "@/components/site-header";
import { instagramHandle, instagramUrl } from "@/lib/contact";

// The latest Instagram post, shown until a live feed is connected.
const latestPost = {
  src: "/images/instagram-post-1.webp",
  alt: "The ARISTOS wordmark over a cream Riviera villa, its gardens and tennis court, above a bay full of yachts",
  width: 618,
  height: 824,
};

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
    <section aria-labelledby="instagram-heading" className={`${container} pb-30`}>
      <div className="flex flex-wrap items-center gap-x-16 gap-y-10 border-t border-rule pt-14">
        <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-5">
          <h2 id="instagram-heading" className="m-0 font-playfair text-4xl font-medium">
            Keep up to date
          </h2>
          <p className="m-0 max-w-[42ch] text-[17px] leading-[1.65] text-ink-body">
            New prints, collections and behind-the-scenes moments, first on Instagram.
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-fit items-center gap-2.5 border border-ink px-6 text-[15px] font-medium text-ink no-underline hover:bg-ink hover:text-white"
          >
            <InstagramIcon size={18} />
            Follow @{instagramHandle}
          </a>
        </div>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Latest post on Instagram: ${latestPost.alt}`}
          className="group relative block w-full max-w-[420px] flex-[0_1_420px] overflow-hidden bg-frame"
        >
          <Image
            src={latestPost.src}
            alt=""
            width={latestPost.width}
            height={latestPost.height}
            sizes="(min-width: 640px) 420px, 100vw"
            className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/35 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
            <InstagramIcon size={36} />
          </span>
        </a>
      </div>
    </section>
  );
}
