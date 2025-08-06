import type { Category } from "@/2-blog-card/category.ts";

export type Article = {
  tag: Category;
  title: string;
  desc: string;
  ctaText: string;
  ctaUrl: string;
  img: string;
  imgAlt?: string;
};
