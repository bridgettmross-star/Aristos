import type { Metadata } from "next";
import { CollectionCard } from "@/components/collection-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader, container } from "@/components/site-header";
import { collections } from "@/lib/prints";

export const metadata: Metadata = { title: "Aristos — Collections" };

export default function CollectionsPage() {
  return (
    <div className="w-full bg-paper font-inter text-ink">
      <SiteHeader />

      <main className={`${container} flex flex-col gap-12 pt-12 pb-30 sm:pt-16`}>
        <h1 className="m-0 font-playfair text-5xl font-medium leading-[1.1] sm:text-[56px]">
          Collections
        </h1>
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
