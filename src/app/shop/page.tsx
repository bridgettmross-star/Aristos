import type { Metadata } from "next";
import { PrintCard } from "@/components/print-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader, container } from "@/components/site-header";
import { mixedPrints } from "@/lib/prints";

export const metadata: Metadata = { title: "Aristos — Shop prints" };

export default function ShopPage() {
  return (
    <div className="w-full bg-paper font-inter text-ink">
      <SiteHeader />

      <main className={`${container} flex flex-col gap-12 pt-12 pb-30 sm:pt-16`}>
        <h1 className="m-0 font-playfair text-5xl font-medium leading-[1.1] sm:text-[56px]">
          Shop prints
        </h1>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(240px,100%),1fr))] gap-x-6 gap-y-10">
          {mixedPrints().map((print) => (
            <PrintCard key={print.slug} print={print} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
