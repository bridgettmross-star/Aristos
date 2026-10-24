import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} | Fine Art Travel Photography Prints`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName,
    locale: "en_AU",
    images: [{ url: "/images/instagram-post-1.webp", width: 618, height: 824, alt: siteName }],
  },
  twitter: { card: "summary_large_image" },
  verification: { google: "ijMX3FztiXXu76EOTn15CL5KVNatHcp53-qK3Mz42jQ" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="m-0">{children}</body>
    </html>
  );
}
