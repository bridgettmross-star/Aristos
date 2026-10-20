import { container } from "@/components/site-header";

const footerLinks = [
  { href: "#shipping", label: "Shipping" },
  { href: "#returns", label: "Returns" },
  { href: "#care", label: "Print care" },
  { href: "/#contact", label: "Contact" },
  { href: "#instagram", label: "Instagram" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className={`${container} flex flex-wrap justify-between gap-8 py-12 text-sm text-ink-muted`}>
        <span className="font-playfair text-base font-semibold tracking-[0.32em] text-ink">
          ARISTOS
        </span>
        <nav aria-label="Footer" className="flex flex-wrap gap-7">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-ink-muted hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <span>© Aristos [YEAR] · ABN [YOUR ABN]</span>
      </div>
    </footer>
  );
}
