import type { Metadata } from "next";
import { CollectionCard } from "@/components/collection-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader, container } from "@/components/site-header";
import { collections } from "@/lib/prints";

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
            Choose a collection to see its prints.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
          {collections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
