export type Option = { id: string; label: string };

export type Print = {
  slug: string;
  title: string;
  location: string;
  collection: string;
  image: { src: string; alt: string };
  details: { src: string; alt: string; position: string }[];
  sizes: Option[];
  papers: Option[];
  frames: Option[];
};

// Bracketed values are placeholders from the design — replace with real copy.
export const prints: Print[] = [
  {
    slug: "paloma",
    title: "Paloma",
    location: "Saint-Jean-Cap-Ferrat, France",
    collection: "[Riviera]",
    image: {
      src: "/images/paloma.jpg",
      alt: "Paloma: a pink villa among cypress trees above a turquoise cove and beach",
    },
    details: [
      {
        src: "/images/paloma.jpg",
        alt: "Detail: the villa and its arched loggia",
        position: "72% 38%",
      },
      {
        src: "/images/paloma.jpg",
        alt: "Detail: swimmers and paddleboarders in the cove",
        position: "8% 92%",
      },
    ],
    sizes: [
      { id: "s", label: "45 × 60 cm" },
      { id: "m", label: "60 × 80 cm" },
      { id: "l", label: "90 × 120 cm" },
    ],
    papers: [
      { id: "rag", label: "Cotton rag, matte" },
      { id: "baryta", label: "Baryta, satin" },
    ],
    frames: [
      { id: "none", label: "Unframed" },
      { id: "black", label: "Black, white mat" },
      { id: "oak", label: "Oak, white mat" },
    ],
  },
];

export function getPrint(slug: string) {
  return prints.find((print) => print.slug === slug);
}

export const featuredPrintHref = `/prints/${prints[0].slug}`;
