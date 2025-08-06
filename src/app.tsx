import { Link, Route, Router, Switch, useLocation } from "wouter";

import { TestimonialCardDemo } from "@/testimonial-card/testimonial-card-demo";

function App() {
  const [location] = useLocation();

  return (
    <Router base="/portfolio">
      <main className="h-screen w-screen bg-gradient-to-b from-[rgb(249,250,251)] to-[rgb(210,214,219)]">
        {location === "/portfolio/" && (
          <nav className="py-10 px-16">
            <Link
              href="/testimonial-card"
              className="text-blue-400 hover:text-blue-600 hover:underline"
            >
              Testimonial Card
            </Link>
          </nav>
        )}
        <Switch>
          <Route path="/testimonial-card" component={TestimonialCardDemo} />
        </Switch>
      </main>
    </Router>
  );
}

export { App };
