import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CollectionCard } from "@/components/collection-card";
import { Placeholder } from "@/components/placeholder";
import { PrintCard } from "@/components/print-card";
import { PrintPurchase } from "@/components/print-purchase";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader, container } from "@/components/site-header";
import { collections, getCollection, getPrint, prints, printsIn, shopHref } from "@/lib/prints";

const sectionHeading = "m-0 font-playfair text-4xl font-medium";
const textLink = "text-[15px] text-ink hover:text-ink-muted";

const infoSections = [
  { title: "The print", body: "[Paper, inks, lab, signing and certificate of authenticity]" },
  { title: "Delivery", body: "[Printing time, delivery within Australia and overseas, packaging]" },
  { title: "Returns", body: "[Your returns and damaged-in-transit policy]" },
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
  const collection = getCollection(print.collection);
  const collectionHref = collection ? `/collections/${collection.slug}` : shopHref;
  const siblings = printsIn(print.collection).filter((other) => other.slug !== print.slug);
  const otherCollections = collections.filter((other) => other.slug !== print.collection);

  return (
    <div className="w-full bg-paper font-inter text-ink">
      <SiteHeader />

      <nav
        aria-label="Breadcrumb"
        className={`${container} flex flex-wrap gap-2 pt-8 pb-10 text-sm text-ink-muted sm:pt-10`}
      >
        <Link href={shopHref} className="text-ink-muted hover:text-ink">
          Shop prints
        </Link>
        <span aria-hidden="true">/</span>
        {collection && (
          <>
            <Link href={collectionHref} className="text-ink-muted hover:text-ink">
              {collection.name}
            </Link>
            <span aria-hidden="true">/</span>
          </>
        )}
        <span className="text-ink" aria-current="page">
          {print.title}
        </span>
      </nav>

      <section className={`${container} flex flex-wrap items-start gap-12 lg:gap-20`}>
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-5">
          <div className="box-border flex justify-center bg-paper-soft p-6 sm:p-16">
            <div className="box-border w-full max-w-[540px] bg-white p-4 shadow-[0_1px_3px_rgba(17,17,17,0.12)] sm:p-8">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={print.image.src}
                  alt={print.image.alt}
                  fill
                  preload
                  sizes="(min-width: 1024px) 480px, 90vw"
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
            <Placeholder label="[Framed print in a room]" className="aspect-square text-xs" />
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-9">
          <PrintPurchase print={print} />

          <div className="flex flex-col">
            {infoSections.map((section, index) => (
              <div
                key={section.title}
                className={`flex flex-col gap-2 border-t border-rule py-5 ${
                  index === infoSections.length - 1 ? "border-b" : ""
                }`}
              >
                <h2 className="m-0 text-[15px] font-semibold">{section.title}</h2>
                <p className="m-0 text-[15px] leading-[1.6] text-ink-muted">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${container} pt-30`}>
        <div className="flex flex-wrap items-center gap-12 bg-paper-soft p-6 sm:p-12 lg:gap-16">
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-5">
            <span className="text-[13px] font-medium tracking-[0.14em] text-ink-muted">IN SITU</span>
            <h2 className={`${sectionHeading} leading-[1.15]`}>See it on your wall</h2>
            <p className="m-0 text-[17px] leading-[1.65] text-ink-body">
              Each size shown to scale in a room, so you can judge how much of the wall it commands.
            </p>
          </div>
          <Placeholder
            label={`[Room mock-up with ${print.title} hung to scale]`}
            className="aspect-[16/10] min-w-0 flex-[999_1_520px]"
          />
        </div>
      </section>

      <section className={`${container} flex flex-col gap-10 pt-30 pb-30`}>
        {siblings.length > 0 ? (
          <>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className={sectionHeading}>More from {collection?.name}</h2>
              <Link href={collectionHref} className={textLink}>
                View collection
              </Link>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(min(240px,100%),1fr))] gap-x-6 gap-y-10">
              {siblings.map((other) => (
                <PrintCard key={other.slug} print={other} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className={sectionHeading}>Explore other collections</h2>
              <Link href={shopHref} className={textLink}>
                All prints
              </Link>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
              {otherCollections.map((other) => (
                <CollectionCard key={other.slug} collection={other} />
              ))}
            </div>
          </>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
