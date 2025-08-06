import type { Testimonial } from "@/testimonial-card/testimonial";

type Props = {
  testimonial: Testimonial;
};

function TestimonialCard({ testimonial }: Props) {
  const imageUrl = new URL(testimonial.avatarUrl, import.meta.url).href;
  return (
    <section className="bg-white shadow-md rounded-lg w-[340px] p-6">
      <header className="flex gap-4">
        <img src={imageUrl} alt="User avatar" height={48} width={48} />
        <div>
          <h2 className="text-lg font-semibold text-neutral-900">
            {testimonial.name}
          </h2>
          <h4 className="font-noto text-sm text-neutral-600">
            {testimonial.login}
          </h4>
        </div>
      </header>
      <p className="text-base text-neutral-600 mt-4">{testimonial.copy}</p>
    </section>
  );
}

export { TestimonialCard };
