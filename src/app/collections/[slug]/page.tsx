import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader, container } from "@/components/site-header";
import { collections, getCollection, printsIn, shopHref } from "@/lib/prints";

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/collections/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  return { title: collection ? `Aristos — ${collection.name}` : "Aristos" };
}

export default async function CollectionPage({ params }: PageProps<"/collections/[slug]">) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();
  const items = printsIn(collection.slug);

  return (
    <div className="w-full bg-paper font-inter text-ink">
      <SiteHeader />

      <main className={`${container} flex flex-col gap-14 pt-8 pb-30 sm:pt-10`}>
        <div className="flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-ink-muted">
            <Link href={shopHref} className="text-ink-muted hover:text-ink">
              Shop prints
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink" aria-current="page">
              {collection.name}
            </span>
          </nav>
          <div className="flex max-w-[640px] flex-col gap-4">
            <h1 className="m-0 font-playfair text-5xl font-medium leading-[1.1] sm:text-[56px]">
              {collection.name}
            </h1>
            <p className="m-0 text-[17px] leading-[1.65] text-ink-body">{collection.description}</p>
          </div>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-x-6 gap-y-10">
            {items.map((print) => (
              <Link
                key={print.slug}
                href={`/prints/${print.slug}`}
                className="group flex flex-col gap-3.5 text-ink no-underline"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-frame">
                  <Image
                    src={print.image.src}
                    alt={print.image.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-base font-medium group-hover:text-ink-muted">
                    {print.title}
                  </span>
                  <span className="text-sm text-ink-muted">From [YOUR PRICE]</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-start gap-4 border-t border-rule pt-10">
            <p className="m-0 text-[17px] text-ink-body">Prints from this collection are coming soon.</p>
            <Link href={shopHref} className="text-[15px] text-ink hover:text-ink-muted">
              See all collections
            </Link>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
