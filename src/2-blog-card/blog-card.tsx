import { RiArrowRightLine } from "@remixicon/react";
import { Badge } from "@ui/badge.tsx";
import { Card } from "@ui/card.tsx";
import { Link } from "@ui/link.tsx";
import type { Article } from "./article.ts";

type Props = {
  article: Article;
};

function BlogCard({ article }: Props) {
  return (
    <Card className="w-[340px]">
      <img
        className="w-full h-[288px] object-cover rounded-t-lg"
        src={article.img}
        alt={article.imgAlt ?? article.desc}
      />
      <div className="px-4 py-6">
        <Badge className="mb-2" variant="green">
          {article.tag.label}
        </Badge>
        <p className="mb-3 text-lg font-semibold text-neutral-900">
          {article.title}
        </p>
        <p className="mb-6 text-base text-neutral-600 line-clamp-2">
          {article.desc}
        </p>
        <Link iconRight={<RiArrowRightLine size={20} />}>
          {article.ctaText}
        </Link>
      </div>
    </Card>
  );
}

export { BlogCard };
