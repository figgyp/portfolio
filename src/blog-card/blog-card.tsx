import type { Article } from "@/blog-card/article.ts";

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
      <div className="flex flex-col px-4 py-6">
        <span className="mb-2">Interior</span>
        <p className="mb-3 text-lg font-semibold text-neutral-900">
          {article.title}
        </p>
        <p className="mb-6 text-base text-neutral-600">{article.desc}</p>
        <a className="text-base text-indigo-700 flex gap-[6px]">
          <span>{article.ctaText}</span>
          <span>→{/* TODO remix icons */}</span>
        </a>
      </div>
    </section>
  );
}

export { BlogCard };
