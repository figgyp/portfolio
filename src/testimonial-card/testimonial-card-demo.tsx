import { TestimonialCard } from "@/testimonial-card/testimonial-card";
import profileThumbnail from "./assets/profile-thumbnail.png";

const testimonial = {
  name: "Sarah Dole",
  login: "@sarahdole",
  copy: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  avatarUrl: profileThumbnail,
};

function TestimonialCardDemo() {
  return (
    <div className="font-noto pt-[200px] max-w-md mx-auto flex justify-center">
      <TestimonialCard testimonial={testimonial} />
    </div>
  );
}

export { TestimonialCardDemo };
