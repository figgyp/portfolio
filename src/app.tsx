import { Link, Route, Router, Switch, useLocation } from "wouter";

import { TestimonialCardDemo } from "@/1-testimonial-card/testimonial-card-demo";
import { BlogCardDemo } from "@/2-blog-card/blog-card-demo.tsx";
import { ProfileCardDemo } from "@/3-profile-card/profile-card-demo.tsx";

function App() {
  const [location] = useLocation();

  return (
    <Router base="/portfolio">
      <main className="h-full w-full bg-gradient-to-b from-[rgb(249,250,251)] to-[rgb(210,214,219)]">
        {location === "/portfolio/" && (
          <nav className="py-10 px-16 flex flex-col">
            <Link
              href="/testimonial-card"
              className="text-blue-400 hover:text-blue-600 hover:underline"
            >
              1 - Testimonial Card
            </Link>
            <Link
              href="/blog-card"
              className="text-blue-400 hover:text-blue-600 hover:underline"
            >
              2 - Blog Card
            </Link>
            <Link
              href="/profile-card"
              className="text-blue-400 hover:text-blue-600 hover:underline"
            >
              3 - Profile Card
            </Link>
          </nav>
        )}
        <Switch>
          <Route path="/testimonial-card" component={TestimonialCardDemo} />
          <Route path="/blog-card" component={BlogCardDemo} />
          <Route path="/profile-card" component={ProfileCardDemo} />
        </Switch>
      </main>
    </Router>
  );
}

export { App };
