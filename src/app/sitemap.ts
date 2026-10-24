import type { MetadataRoute } from "next";
import { collections, prints } from "@/lib/prints";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/shop", "/collections", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    priority: path === "" ? 1 : 0.8,
  }));
  const collectionPages = collections.map((collection) => ({
    url: `${siteUrl}/collections/${collection.slug}`,
    priority: 0.7,
  }));
  const printPages = prints.map((print) => ({
    url: `${siteUrl}/prints/${print.slug}`,
    priority: 0.6,
  }));
  return [...pages, ...collectionPages, ...printPages];
}
