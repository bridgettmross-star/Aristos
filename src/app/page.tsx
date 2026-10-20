import Image from "next/image";
import Link from "next/link";
import { CollectionCard } from "@/components/collection-card";
import { Placeholder } from "@/components/placeholder";
import { PrintCard } from "@/components/print-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader, container } from "@/components/site-header";
import { collections, prints, shopHref } from "@/lib/prints";

const sectionHeading = "m-0 font-playfair text-4xl font-medium";
const textLink = "text-[15px] text-ink hover:text-ink-muted";

const promises = [
  {
    title: "Archival materials",
    body: "[Name your paper and inks — e.g. cotton rag paper, pigment inks — and your print lab]",
  },
  {
    title: "Printed to order",
    body: "[How long printing takes, and whether prints are signed or numbered]",
  },
  {
    title: "Shipped with care",
    body: "[Where you ship to, delivery times, and how prints are packed]",
  },
];

export default function Home() {
  return (
    <div className="w-full bg-paper font-inter text-ink">
      <SiteHeader />

      <section className={container}>
        <div className="relative isolate box-border flex h-[560px] flex-col justify-end p-8 sm:h-[680px] sm:p-14">
          <Image
            src="/images/hero-jetty.webp"
            alt="A wooden jetty over rocks beside a moored boat on glittering dark water"
            fill
            preload
            // Serve the original file; re-encoding a small photo softens it further
            unoptimized
            sizes="(min-width: 1360px) 1280px, 100vw"
            className="-z-10 object-cover object-center"
          />
          {/* Darkens the bottom of the photo so the white headline stays readable */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-t from-black/55 via-black/15 to-transparent"
          />
          <div className="flex max-w-[640px] flex-col gap-5">
            <h1 className="m-0 whitespace-nowrap font-playfair text-[34px] font-medium leading-[1.05] text-white sm:text-[56px]">
              A R I S T O S
            </h1>
            <p className="m-0 text-[15px] font-medium tracking-[0.24em] text-hero-copy">
              FINE ART PHOTOGRAPHY
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={shopHref}
                className="inline-flex min-h-12 items-center bg-white px-7 text-[15px] font-medium text-ink no-underline"
              >
                Shop prints
              </Link>
              <a
                href="#collections"
                className="inline-flex min-h-12 items-center border border-white px-7 text-[15px] font-medium text-white no-underline"
              >
                View collections
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className={`${container} flex flex-col gap-10 pt-30`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className={sectionHeading}>Collections</h2>
          <Link href={shopHref} className={textLink}>
            All collections
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
          {collections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </section>

      <section className={`${container} flex flex-col gap-10 pt-30`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className={sectionHeading}>New prints</h2>
          <Link href={shopHref} className={textLink}>
            Shop all prints
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-6">
          {prints.slice(0, 4).map((print) => (
            <PrintCard key={print.slug} print={print} />
          ))}
        </div>
      </section>

      <section className={`${container} pt-30`}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-10 border-t border-rule pt-12">
          {promises.map((item) => (
            <div key={item.title} className="flex flex-col gap-2.5">
              <h3 className="m-0 text-[17px] font-semibold">{item.title}</h3>
              <p className="m-0 text-[15px] leading-[1.6] text-ink-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className={`${container} pt-30`}>
        <div className="flex flex-wrap items-center gap-16">
          <Placeholder
            label="[Portrait of you, or you at work]"
            className="aspect-square flex-[1_1_420px]"
          />
          <div className="flex flex-[1_1_420px] flex-col gap-5">
            <span className="text-[13px] font-medium tracking-[0.14em] text-ink-muted">
              ABOUT ARISTOS
            </span>
            <h2 className={`${sectionHeading} leading-[1.15]`}>Behind the lens</h2>
            <p className="m-0 text-[17px] leading-[1.65] text-ink-body">
              [A short paragraph about you — how you started, what draws you to a subject, and what
              you want people to feel when a print is on their wall.]
            </p>
            <a href="#about" className={textLink}>
              Read the full story
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className={`${container} py-30`}>
        <div className="box-border flex flex-col items-center gap-5 bg-paper-soft px-6 py-16 text-center sm:px-12">
          <h2 className="m-0 font-playfair text-[32px] font-medium">First look at new releases</h2>
          <p className="m-0 max-w-[520px] text-base text-ink-muted">
            Join the list to hear about new collections and limited editions before anyone else.
          </p>
          <form className="flex w-full max-w-[520px] flex-wrap items-end justify-center gap-3">
            <div className="flex flex-[1_1_260px] flex-col gap-1.5 text-left">
              <label htmlFor="email" className="text-[13px] font-medium">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="min-h-12 border border-field bg-white px-4 font-inter text-[15px]"
              />
            </div>
            <button
              type="button"
              className="min-h-12 cursor-pointer border-0 bg-ink px-7 font-inter text-[15px] font-medium text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
