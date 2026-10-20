export type Option = { id: string; label: string };

// price is in Australian dollars; leave it out until it's decided
export type SizeOption = Option & { price?: number };

// position: which part of the photo stays in view when it's cropped (CSS object-position)
export type Photo = { src: string; alt: string; position?: string };

export type Collection = {
  slug: string;
  name: string;
  description: string;
  cover?: Photo;
};

export type Print = {
  slug: string;
  title: string;
  location: string;
  collection: string;
  // width and height keep the main image in its original proportions
  image: Photo & { width: number; height: number };
  details: Photo[];
  sizes: SizeOption[];
  papers: Option[];
  frames: Option[];
};

// Bracketed values are placeholders from the design — replace with real copy.
export const collections: Collection[] = [
  {
    slug: "riviera",
    name: "Riviera",
    description: "[A sentence about this collection — where you shot it and what ties the prints together]",
    cover: {
      src: "/images/riviera.webp",
      alt: "A villa among cypress trees above a busy beach and turquoise cove on the Riviera",
    },
  },
  {
    slug: "paname",
    name: "Paname",
    description: "[A sentence about this collection]",
    cover: {
      src: "/images/paname.webp",
      alt: "The Eiffel Tower rising above grey Paris rooftops and chimney pots",
      position: "86% center",
    },
  },
  {
    slug: "balear",
    name: "Balear",
    description: "[A sentence about this collection]",
    cover: {
      src: "/images/balear-boats.webp",
      alt: "Boats anchored in turquoise water below a pine-covered cliff and sea cave in Majorca",
    },
  },
];

const sizes: SizeOption[] = [
  { id: "s", label: "45 × 60 cm", price: 300 },
  { id: "m", label: "60 × 80 cm" },
  { id: "l", label: "90 × 120 cm" },
];

const papers: Option[] = [
  { id: "rag", label: "Cotton rag, matte" },
  { id: "baryta", label: "Baryta, satin" },
];

const frames: Option[] = [
  { id: "none", label: "Unframed" },
  { id: "black", label: "Black, white mat" },
  { id: "oak", label: "Oak, white mat" },
];

export const prints: Print[] = [
  {
    slug: "paloma",
    title: "Paloma",
    location: "Saint-Jean-Cap-Ferrat, France",
    collection: "riviera",
    image: {
      src: "/images/riviera.webp",
      alt: "Paloma: a villa among cypress trees above a busy beach and turquoise cove",
      width: 992,
      height: 1403,
    },
    details: [
      {
        src: "/images/riviera.webp",
        alt: "Detail: the villa and its arched loggia",
        position: "72% 42%",
      },
      {
        src: "/images/riviera.webp",
        alt: "Detail: swimmers and paddleboarders in the cove",
        position: "8% 90%",
      },
    ],
    sizes,
    papers,
    frames,
  },
  {
    slug: "tennis",
    title: "Tennis",
    location: "Saint-Jean-Cap-Ferrat, France",
    collection: "riviera",
    image: {
      src: "/images/riviera-tennis.webp",
      alt: "Tennis: a cream villa above a turquoise cove, with a tennis court cut into the cliffside garden",
      width: 992,
      height: 1324,
    },
    details: [
      {
        src: "/images/riviera-tennis.webp",
        alt: "Detail: the villa and its terraces",
        position: "35% 15%",
      },
      {
        src: "/images/riviera-tennis.webp",
        alt: "Detail: the green tennis court below the cliff",
        position: "75% 85%",
      },
    ],
    sizes,
    papers,
    frames,
  },
  {
    slug: "piscine",
    title: "Piscine",
    location: "Saint-Jean-Cap-Ferrat, France",
    collection: "riviera",
    image: {
      src: "/images/riviera-pool.webp",
      alt: "Piscine: a pool perched on stone walls above the sea, with pines, palms and a small beach below",
      width: 992,
      height: 1403,
    },
    details: [
      {
        src: "/images/riviera-pool.webp",
        alt: "Detail: the pool on the rocks",
        position: "22% 32%",
      },
      {
        src: "/images/riviera-pool.webp",
        alt: "Detail: swimmers on the beach beside a giant chessboard",
        position: "72% 88%",
      },
    ],
    sizes,
    papers,
    frames,
  },
  {
    slug: "toits",
    title: "Toits",
    location: "Paris, France",
    collection: "paname",
    image: {
      src: "/images/paname.webp",
      alt: "Toits: the Eiffel Tower rising above grey Paris rooftops and chimney pots",
      width: 2000,
      height: 1415,
      position: "86% center",
    },
    details: [
      {
        src: "/images/paname.webp",
        alt: "Detail: the Eiffel Tower in the haze",
        position: "66% center",
      },
      {
        src: "/images/paname.webp",
        alt: "Detail: the gilded dome of Les Invalides above the rooftops",
        position: "8% center",
      },
    ],
    sizes,
    papers,
    frames,
  },
  {
    slug: "cova",
    title: "Cova",
    location: "Majorca, Spain",
    collection: "balear",
    image: {
      src: "/images/balear-boats.webp",
      alt: "Cova: boats anchored in turquoise water below a pine-covered cliff and sea cave",
      width: 992,
      height: 1323,
    },
    details: [
      {
        src: "/images/balear-boats.webp",
        alt: "Detail: boats and a paddleboard on the turquoise water",
        position: "40% 88%",
      },
      {
        src: "/images/balear-boats.webp",
        alt: "Detail: the sea cave under the cliff",
        position: "88% 55%",
      },
    ],
    sizes,
    papers,
    frames,
  },
  {
    slug: "vela",
    title: "Vela",
    location: "Majorca, Spain",
    collection: "balear",
    image: {
      src: "/images/balear-sailboat.webp",
      alt: "Vela: a sailboat and a small motorboat anchored below a pine-covered headland with a villa on top",
      width: 992,
      height: 1403,
    },
    details: [
      {
        src: "/images/balear-sailboat.webp",
        alt: "Detail: the villa on the clifftop",
        position: "10% 24%",
      },
      {
        src: "/images/balear-sailboat.webp",
        alt: "Detail: the two boats at anchor",
        position: "80% 60%",
      },
    ],
    sizes,
    papers,
    frames,
  },
  {
    slug: "cala",
    title: "Cala",
    location: "Majorca, Spain",
    collection: "balear",
    image: {
      src: "/images/balear-cove.webp",
      alt: "Cala: swimmers in a turquoise cove between pine-covered cliffs",
      width: 992,
      height: 702,
      position: "55% center",
    },
    details: [
      {
        src: "/images/balear-cove.webp",
        alt: "Detail: boats anchored at the mouth of the cove",
        position: "8% center",
      },
      {
        src: "/images/balear-cove.webp",
        alt: "Detail: the crowded beach and clear shallows",
        position: "80% center",
      },
    ],
    sizes,
    papers,
    frames,
  },
  {
    slug: "moll",
    title: "Moll",
    location: "Majorca, Spain",
    collection: "balear",
    image: {
      src: "/images/hero-jetty.webp",
      alt: "Moll: a wooden jetty over dark rocks beside a moored boat on glittering water",
      width: 992,
      height: 702,
      position: "65% center",
    },
    details: [
      {
        src: "/images/hero-jetty.webp",
        alt: "Detail: the wooden jetty and its rope railing",
        position: "45% center",
      },
      {
        src: "/images/hero-jetty.webp",
        alt: "Detail: the moored boat on the water",
        position: "100% center",
      },
    ],
    sizes,
    papers,
    frames,
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

// Every print, taking one from each collection in turn so no collection is bunched together
export function mixedPrints() {
  const groups = collections.map((collection) => printsIn(collection.slug));
  const longest = Math.max(...groups.map((group) => group.length));
  return Array.from({ length: longest }, (_, i) => groups.flatMap((group) => group[i] ?? [])).flat();
}

const priceFormat = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  currencyDisplay: "narrowSymbol",
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number) {
  return priceFormat.format(amount);
}

// The lowest size price, for "From $300" on cards
export function startingPrice(print: Print) {
  const prices = print.sizes.flatMap((size) => (size.price === undefined ? [] : [size.price]));
  return prices.length > 0 ? formatPrice(Math.min(...prices)) : "[YOUR PRICE]";
}

export const shopHref = "/shop";
export const collectionsHref = "/collections";
