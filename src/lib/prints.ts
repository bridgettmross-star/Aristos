export type Option = { id: string; label: string };

export type Photo = { src: string; alt: string };

export type Collection = {
  slug: string;
  name: string;
  place: string;
  description: string;
  cover?: Photo;
};

export type Print = {
  slug: string;
  title: string;
  location: string;
  collection: string;
  image: Photo;
  details: (Photo & { position: string })[];
  sizes: Option[];
  papers: Option[];
  frames: Option[];
};

// Bracketed values are placeholders from the design — replace with real copy.
export const collections: Collection[] = [
  {
    slug: "riviera",
    name: "Riviera",
    place: "French Riviera",
    description: "[A sentence about this collection — where you shot it and what ties the prints together]",
    cover: {
      src: "/images/paloma.jpg",
      alt: "A pink villa among cypress trees above a turquoise cove",
    },
  },
  {
    slug: "paname",
    name: "Paname",
    place: "Paris",
    description: "[A sentence about this collection]",
  },
  {
    slug: "balear",
    name: "Balear",
    place: "Majorca",
    description: "[A sentence about this collection]",
  },
];

export const prints: Print[] = [
  {
    slug: "paloma",
    title: "Paloma",
    location: "Saint-Jean-Cap-Ferrat, France",
    collection: "riviera",
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

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function printsIn(collectionSlug: string) {
  return prints.filter((print) => print.collection === collectionSlug);
}

export function printCount(collectionSlug: string) {
  const count = printsIn(collectionSlug).length;
  if (count === 0) return "Coming soon";
  return count === 1 ? "1 print" : `${count} prints`;
}

export const shopHref = "/shop";
export const featuredPrintHref = `/prints/${prints[0].slug}`;
