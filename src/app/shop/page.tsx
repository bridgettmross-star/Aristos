import type { Metadata } from "next";
import Link from "next/link";
import { CollectionCard } from "@/components/collection-card";
import { PrintCard } from "@/components/print-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader, container } from "@/components/site-header";
import { collections, printsIn } from "@/lib/prints";

export const metadata: Metadata = { title: "Aristos — Shop prints" };

export default function ShopPage() {
  return (
    <div className="w-full bg-paper font-inter text-ink">
      <SiteHeader />

      <main className={`${container} flex flex-col gap-14 pt-12 pb-30 sm:pt-16`}>
        <div className="flex max-w-[640px] flex-col gap-4">
          <h1 className="m-0 font-playfair text-5xl font-medium leading-[1.1] sm:text-[56px]">
            Shop prints
          </h1>
          <p className="m-0 text-[17px] leading-[1.65] text-ink-body">
            Browse by collection, or see every print below.
          </p>
        </div>

        <section aria-labelledby="collections-heading" className="flex flex-col gap-8">
          <h2 id="collections-heading" className="m-0 font-playfair text-4xl font-medium">
            Collections
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
            {collections.map((collection) => (
              <CollectionCard key={collection.slug} collection={collection} />
            ))}
          </div>
        </section>

        <section aria-labelledby="prints-heading" className="flex flex-col gap-12 border-t border-rule pt-14">
          <h2 id="prints-heading" className="m-0 font-playfair text-4xl font-medium">
            All prints
          </h2>
          {collections.map((collection) => {
            const items = printsIn(collection.slug);
            return (
              <div key={collection.slug} id={collection.slug} className="flex flex-col gap-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="m-0 flex flex-wrap items-baseline gap-x-3 font-playfair text-[28px] font-medium">
                    {collection.name}
                    <span className="font-inter text-sm font-normal text-ink-muted">{collection.place}</span>
                  </h3>
                  <Link
                    href={`/collections/${collection.slug}`}
                    className="text-[15px] text-ink hover:text-ink-muted"
                  >
                    View collection
                  </Link>
                </div>
                {items.length > 0 ? (
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(min(240px,100%),1fr))] gap-x-6 gap-y-10">
                    {items.map((print) => (
                      <PrintCard key={print.slug} print={print} />
                    ))}
                  </div>
                ) : (
                  <p className="m-0 border-t border-rule pt-6 text-[15px] text-ink-muted">
                    Prints from {collection.name} are coming soon.
                  </p>
                )}
              </div>
            );
          })}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
