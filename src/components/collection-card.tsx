import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/lib/prints";

// The collection name sits over the photo and fades in on hover or keyboard focus.
// Devices without hover (phones, tablets) show it all the time.
export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden bg-frame text-white no-underline outline-offset-4"
    >
      {collection.cover ? (
        <Image
          src={collection.cover.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
          style={{ objectPosition: collection.cover.position }}
        />
      ) : (
        <span className="absolute inset-x-0 top-6 text-center text-[13px] text-frame-label">
          [Collection cover photo]
        </span>
      )}
      <span className="absolute inset-0 flex items-center justify-center bg-black/40 p-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none [@media(hover:none)]:opacity-100">
        <span className="font-playfair text-[32px] font-medium leading-tight">{collection.name}</span>
      </span>
    </Link>
  );
}
