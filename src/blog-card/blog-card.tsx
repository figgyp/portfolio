import { RiArrowRightLine } from "@remixicon/react";
import type { Article } from "./article.ts";
import { Badge } from "@/components/badge.tsx";
import { Link } from "@/components/link.tsx";

type Props = {
  article: Article;
};

function BlogCard({ article }: Props) {
  return (
    <section className="w-[340px] shadow-md rounded-lg bg-white">
      <img
        className="object-cover w-full rounded-t-lg"
        src={article.img}
        alt={article.imgAlt ?? article.desc}
      />
      <div className="px-4 py-6">
        <Badge className="mb-2" variant="green">
          Interior
        </Badge>
        <p className="mb-3 text-lg font-semibold text-neutral-900">
          {article.title}
        </p>
        <p className="mb-6 text-base text-neutral-600">{article.desc}</p>
        <Link
          className="text-indigo-700"
          iconRight={<RiArrowRightLine size={20} />}
        >
          {article.ctaText}
        </Link>
      </div>
    </section>
  );
}

export { BlogCard };
