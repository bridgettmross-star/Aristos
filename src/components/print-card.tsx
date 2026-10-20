import Image from "next/image";
import Link from "next/link";
import { startingPrice, type Print } from "@/lib/prints";

export function PrintCard({ print }: { print: Print }) {
  return (
    <Link href={`/prints/${print.slug}`} className="group flex flex-col gap-3.5 text-ink no-underline">
      <div className="relative aspect-[4/5] overflow-hidden bg-frame">
        <Image
          src={print.image.src}
          alt={print.image.alt}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
          style={{ objectPosition: print.image.position }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-base font-medium group-hover:text-ink-muted">{print.title}</span>
        <span className="text-sm text-ink-muted">From {startingPrice(print)}</span>
      </div>
    </Link>
  );
}
