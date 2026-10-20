import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CartIcon } from "@/components/cart-icon";
import { Placeholder } from "@/components/placeholder";
import { PrintPurchase } from "@/components/print-purchase";
import { getPrint, prints } from "@/lib/prints";

const container = "mx-auto box-border max-w-[1440px] px-5 sm:px-14";
const navLink = "text-cream no-underline hover:text-gold";

const infoSections = [
  { title: "THE PRINT", body: "[Paper, inks, lab, signing and certificate of authenticity]" },
  { title: "DELIVERY", body: "[Printing time, delivery within Australia and overseas, packaging]" },
  { title: "RETURNS", body: "[Your returns and damaged-in-transit policy]" },
];

const morePrints = [1, 2, 3, 4];

const footerLinks = [
  { href: "#shipping", label: "SHIPPING" },
  { href: "#returns", label: "RETURNS" },
  { href: "#care", label: "PRINT CARE" },
  { href: "#instagram", label: "INSTAGRAM" },
  { href: "/#contact", label: "CONTACT" },
];

export function generateStaticParams() {
  return prints.map((print) => ({ slug: print.slug }));
}

export async function generateMetadata({ params }: PageProps<"/prints/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const print = getPrint(slug);
  return { title: print ? `Aristos — ${print.title}` : "Aristos" };
}

export default async function PrintPage({ params }: PageProps<"/prints/[slug]">) {
  const { slug } = await params;
  const print = getPrint(slug);
  if (!print) notFound();

  return (
    <div className="min-h-screen w-full bg-night font-jost font-light text-cream">
      <header
        className={`${container} flex flex-wrap items-center justify-between gap-5 border-b border-night-rule py-8`}
      >
        <nav aria-label="Main" className="flex flex-wrap gap-9 text-[13px] font-normal tracking-[0.2em]">
          <Link href={`/prints/${print.slug}`} className={navLink}>
            SHOP
          </Link>
          <Link href="/#collections" className={navLink}>
            COLLECTIONS
          </Link>
          <Link href="/#about" className={navLink}>
            ABOUT
          </Link>
        </nav>
        <Link
          href="/"
          className={`${navLink} pl-[0.42em] font-cormorant text-[30px] font-normal tracking-[0.42em]`}
        >
          ARISTOS
        </Link>
        <div className="flex items-center gap-7 text-[13px] font-normal tracking-[0.2em]">
          <Link href="/#contact" className={navLink}>
            CONTACT
          </Link>
          <a href="#cart" aria-label="Cart" className={`${navLink} flex size-11 items-center justify-center`}>
            <CartIcon size={20} strokeWidth={1.3} />
          </a>
        </div>
      </header>

      <nav
        aria-label="Breadcrumb"
        className={`${container} flex flex-wrap gap-3 pt-7 pb-12 text-[11px] uppercase tracking-[0.22em] text-stone`}
      >
        <Link href="/" className="text-stone no-underline hover:text-gold">
          HOME
        </Link>
        <span aria-hidden="true">—</span>
        <Link href="/#collections" className="text-stone no-underline hover:text-gold">
          {print.collection}
        </Link>
        <span aria-hidden="true">—</span>
        <span className="text-cream" aria-current="page">
          {print.title}
        </span>
      </nav>

      <section className={`${container} flex flex-wrap items-start gap-12 lg:gap-24`}>
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-5">
          <div className="box-border flex justify-center bg-night-raised p-6 sm:p-18">
            <div className="box-border w-full max-w-[560px] bg-cream p-4 sm:p-8">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={print.image.src}
                  alt={print.image.alt}
                  fill
                  preload
                  sizes="(min-width: 1024px) 500px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {print.details.map((detail) => (
              <div key={detail.alt} className="relative aspect-square">
                <Image
                  src={detail.src}
                  alt={detail.alt}
                  fill
                  sizes="(min-width: 1024px) 260px, 30vw"
                  className="object-cover"
                  style={{ objectPosition: detail.position }}
                />
              </div>
            ))}
            <Placeholder
              label="[Framed print in a room]"
              tone="dark"
              className="aspect-square text-xs"
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-10">
          <PrintPurchase print={print} />

          <div className="flex flex-col">
            {infoSections.map((section, index) => (
              <div
                key={section.title}
                className={`flex flex-col gap-2.5 border-t border-night-rule py-6 ${
                  index === infoSections.length - 1 ? "border-b" : ""
                }`}
              >
                <h2 className="m-0 text-[11px] font-medium tracking-[0.28em]">{section.title}</h2>
                <p className="m-0 text-sm leading-[1.75] text-stone">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-40 bg-night-raised">
        <div className={`${container} flex flex-wrap items-center gap-12 py-30 lg:gap-24`}>
          <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-6">
            <span className="text-xs tracking-[0.32em] text-gold">IN SITU</span>
            <h2 className="m-0 font-cormorant text-5xl font-light leading-none sm:text-[64px]">
              See it <span className="italic">on your wall</span>
            </h2>
            <p className="m-0 text-base leading-[1.8] text-stone-light">
              Each size shown to scale in a room, so you can judge how much of the wall it commands.
            </p>
          </div>
          <Placeholder
            label={`[Room mock-up with ${print.title} hung to scale]`}
            tone="dark"
            className="aspect-[16/10] min-w-0 flex-[999_1_560px]"
          />
        </div>
      </section>

      <section className={`${container} flex flex-col gap-12 py-40`}>
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-night-rule pt-7">
          <h2 className="m-0 font-cormorant text-[44px] font-light sm:text-[56px]">
            From the collection
          </h2>
          <Link
            href="/#collections"
            className="text-xs font-normal tracking-[0.24em] text-cream underline-offset-8 hover:text-gold"
          >
            VIEW ALL
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-6">
          {morePrints.map((id) => (
            <Link
              key={id}
              href={`/prints/${print.slug}`}
              className="flex flex-col gap-[18px] text-cream no-underline hover:text-gold"
            >
              <Placeholder label="[Print photo]" tone="dark" className="aspect-[3/4]" />
              <div className="flex flex-col gap-1.5">
                <span className="font-cormorant text-2xl font-normal">[Print title]</span>
                <span className="text-xs tracking-[0.2em] text-stone">FROM [PRICE]</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className={`${container} flex flex-col items-center gap-9 pb-16`}>
        <span className="pl-[0.42em] font-cormorant text-[44px] font-light tracking-[0.42em]">
          ARISTOS
        </span>
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-9 text-[11px] tracking-[0.24em]"
        >
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-stone no-underline hover:text-cream">
              {link.label}
            </a>
          ))}
        </nav>
        <span className="text-xs text-stone-dim">© Aristos [YEAR] · ABN [YOUR ABN]</span>
      </footer>
    </div>
  );
}
