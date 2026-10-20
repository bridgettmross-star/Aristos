import Link from "next/link";
import { CartIcon } from "@/components/cart-icon";
import { collectionsHref, shopHref } from "@/lib/prints";

export const container = "mx-auto box-border max-w-[1360px] px-5 sm:px-10";

const navLink = "text-ink no-underline hover:text-ink-muted";

export function SiteHeader() {
  return (
    <header className={`${container} flex flex-wrap items-center justify-between gap-5 py-7`}>
      <Link
        href="/"
        className="font-playfair text-[22px] font-semibold tracking-[0.32em] text-ink no-underline"
      >
        ARISTOS
      </Link>
      <nav aria-label="Main" className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[15px] sm:gap-8">
        <Link href={shopHref} className={navLink}>
          Shop prints
        </Link>
        <Link href={collectionsHref} className={navLink}>
          Collections
        </Link>
        <Link href="/#about" className={navLink}>
          About
        </Link>
        <Link href="/contact" className={navLink}>
          Contact
        </Link>
        <a
          href="#cart"
          aria-label="Cart"
          className="flex size-11 items-center justify-center text-ink hover:text-ink-muted"
        >
          <CartIcon size={22} strokeWidth={1.6} />
        </a>
      </nav>
    </header>
  );
}
