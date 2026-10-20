import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "@/components/cart-icon";
import { Placeholder } from "@/components/placeholder";
import { featuredPrintHref } from "@/lib/prints";

const container = "mx-auto box-border max-w-[1360px] px-5 sm:px-10";
const sectionHeading = "m-0 font-archivo text-4xl font-medium";
const textLink = "text-[15px] text-ink hover:text-ink-muted";

const collections = [1, 2, 3];
const newPrints = [1, 2, 3, 4];

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

const footerLinks = [
  { href: "#shipping", label: "Shipping" },
  { href: "#returns", label: "Returns" },
  { href: "#care", label: "Print care" },
  { href: "#contact", label: "Contact" },
  { href: "#instagram", label: "Instagram" },
];

export default function Home() {
  return (
    <div className="w-full bg-paper font-inter text-ink">
      <header className={`${container} flex flex-wrap items-center justify-between gap-5 py-7`}>
        <Link
          href="/"
          className="font-archivo text-[22px] font-semibold tracking-[0.32em] text-ink no-underline"
        >
          ARISTOS
        </Link>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-8 text-[15px]">
          <Link href={featuredPrintHref} className="text-ink no-underline hover:text-ink-muted">
            Shop prints
          </Link>
          <a href="#collections" className="text-ink no-underline hover:text-ink-muted">
            Collections
          </a>
          <a href="#about" className="text-ink no-underline hover:text-ink-muted">
            About
          </a>
          <a href="#contact" className="text-ink no-underline hover:text-ink-muted">
            Contact
          </a>
          <a
            href="#cart"
            aria-label="Cart"
            className="flex size-11 items-center justify-center text-ink hover:text-ink-muted"
          >
            <CartIcon size={22} strokeWidth={1.6} />
          </a>
        </nav>
      </header>

      <section className={container}>
        <div className="relative isolate box-border flex h-[560px] flex-col justify-end p-8 sm:h-[680px] sm:p-14">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            preload
            sizes="(min-width: 1360px) 1280px, 100vw"
            className="-z-10 object-cover"
          />
          <div className="flex max-w-[640px] flex-col gap-5">
            <h1 className="m-0 font-archivo text-[56px] font-medium leading-[1.05] text-white">
              A R I S T O S
            </h1>
            <p className="m-0 text-lg leading-normal text-hero-copy">
              [One line about what you shoot and where — e.g. coastlines and light across New South
              Wales]
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={featuredPrintHref}
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
          <a href="#collections" className={textLink}>
            All collections
          </a>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
          {collections.map((id) => (
            <Link key={id} href={featuredPrintHref} className="flex flex-col gap-4 text-ink no-underline">
              <Placeholder label="[Collection cover photo]" className="aspect-[4/5] p-6" />
              <div className="flex flex-col gap-1">
                <span className="text-lg font-medium">[Collection name]</span>
                <span className="text-sm text-ink-muted">[Number] prints</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={`${container} flex flex-col gap-10 pt-30`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className={sectionHeading}>New prints</h2>
          <Link href={featuredPrintHref} className={textLink}>
            Shop all prints
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-6">
          {newPrints.map((id) => (
            <Link key={id} href={featuredPrintHref} className="flex flex-col gap-3.5 text-ink no-underline">
              <Placeholder label="[Print photo]" className="aspect-[4/5]" />
              <div className="flex flex-col gap-1">
                <span className="text-base font-medium">[Print title]</span>
                <span className="text-sm text-ink-muted">From [YOUR PRICE]</span>
              </div>
            </Link>
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
          <h2 className="m-0 font-archivo text-[32px] font-medium">First look at new releases</h2>
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

      <footer className="border-t border-rule">
        <div
          className={`${container} flex flex-wrap justify-between gap-8 py-12 text-sm text-ink-muted`}
        >
          <span className="font-archivo text-base font-semibold tracking-[0.32em] text-ink">
            ARISTOS
          </span>
          <nav aria-label="Footer" className="flex flex-wrap gap-7">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-ink-muted hover:text-ink">
                {link.label}
              </a>
            ))}
          </nav>
          <span>© Aristos [YEAR] · ABN [YOUR ABN]</span>
        </div>
      </footer>
    </div>
  );
}
