import type { Category } from "@/blog-card/category.ts";

export type Article = {
  tag: Category;
  title: string;
  desc: string;
  ctaText: string;
  ctaUrl: string;
  img: any;
  imgAlt?: string;
};
