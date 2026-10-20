import Image from "next/image";
import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { printCount, type Collection } from "@/lib/prints";

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group flex flex-col gap-4 text-ink no-underline"
    >
      {collection.cover ? (
        <div className="relative aspect-[4/5] overflow-hidden bg-frame">
          <Image
            src={collection.cover.src}
            alt={collection.cover.alt}
            fill
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
          />
        </div>
      ) : (
        <Placeholder label="[Collection cover photo]" className="aspect-[4/5] p-6" />
      )}
      <div className="flex flex-col gap-1">
        <span className="text-lg font-medium group-hover:text-ink-muted">{collection.name}</span>
        <span className="text-sm text-ink-muted">{printCount(collection.slug)}</span>
      </div>
    </Link>
  );
}
