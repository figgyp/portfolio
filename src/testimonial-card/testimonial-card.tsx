import type { Testimonial } from "@/testimonial-card/testimonial";

type Props = {
  testimonial: Testimonial;
};

function TestimonialCard({ testimonial }: Props) {
  const imageUrl = new URL(testimonial.avatarUrl, import.meta.url).href;
  return (
    <section className="rounded-lg">
      <header>
        <img src={imageUrl} alt="User avatar" />
        <div>
          <h2>{testimonial.name}</h2>
          <h4>{testimonial.login}</h4>
        </div>
      </header>
      <p>{testimonial.copy}</p>
    </section>
  );
}

export { TestimonialCard };
