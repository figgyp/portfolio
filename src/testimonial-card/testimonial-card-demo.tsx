import { TestimonialCard } from "@/testimonial-card/testimonial-card";

const testimonial = {
  name: "Sarah Dole",
  login: "@sarahdole",
  copy: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  avatarUrl: "./profile-thumbnail.png",
};

function TestimonialCardDemo() {
  return <TestimonialCard testimonial={testimonial} />;
}

export { TestimonialCardDemo };
