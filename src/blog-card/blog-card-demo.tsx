import blogCardImg from "./assets/spacejoy-YqFz7UMm8qE-unsplash.jpg";
import { BlogCard } from "./blog-card.tsx";

const article = {
  tag: {
    id: "1",
    label: "Interior",
  },
  title: "Top 5 Living Room Inspirations",
  desc: "Curated vibrants colors for your living, make it pop & calm in the same time.",
  ctaText: "Read more",
  ctaUrl: "TODO",
  img: blogCardImg,
};

function BlogCardDemo() {
  return (
    <div className="font-noto pt-[120px] max-w-md mx-auto flex justify-center">
      <BlogCard article={article} />
    </div>
  );
}

export { BlogCardDemo };
