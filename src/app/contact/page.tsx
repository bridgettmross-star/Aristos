import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader, container } from "@/components/site-header";
import { contactEmail, instagramHandle, instagramUrl } from "@/lib/contact";
import { prints } from "@/lib/prints";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about a print, sizing or framing? Get in touch with Aristos Collective.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-paper font-inter text-ink">
      <SiteHeader />

      <main className={`${container} flex flex-wrap items-start gap-12 pt-12 pb-30 sm:pt-16 lg:gap-20`}>
        <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-6">
          <h1 className="m-0 font-playfair text-5xl font-medium leading-[1.1] sm:text-[56px]">
            Contact
          </h1>
          <p className="m-0 max-w-[46ch] text-[17px] leading-[1.65] text-ink-body">
            Questions about a print, sizing or framing, or interested in a commission? Send an
            enquiry and we&apos;ll get back to you.
          </p>
          <div className="flex flex-col gap-1.5 border-t border-rule pt-6">
            <span className="text-[13px] font-medium tracking-[0.14em] text-ink-muted">EMAIL</span>
            <a href={`mailto:${contactEmail}`} className="w-fit text-[17px] text-ink hover:text-ink-muted">
              {contactEmail}
            </a>
          </div>
          <div className="flex flex-col gap-1.5 border-t border-rule pt-6">
            <span className="text-[13px] font-medium tracking-[0.14em] text-ink-muted">INSTAGRAM</span>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-[17px] text-ink hover:text-ink-muted"
            >
              @{instagramHandle}
            </a>
          </div>
        </div>

        <div className="min-w-0 flex-[2_1_480px]">
          <EnquiryForm printTitles={prints.map((print) => print.title)} />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
