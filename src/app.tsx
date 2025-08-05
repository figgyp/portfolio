import { Link, Route, Router, Switch, useLocation } from "wouter";

import { TestimonialCardDemo } from "@/testimonial-card/testimonial-card-demo";

function App() {
  const [location] = useLocation();

  return (
    <Router base="/portfolio">
      <main className="m-10">
        <nav>
          {location === "/portfolio/" && (
            <Link href="/testimonial-card">Testimonial Card</Link>
          )}
        </nav>
        <Switch>
          <Route path="/testimonial-card" component={TestimonialCardDemo} />
        </Switch>
      </main>
    </Router>
  );
}

export { App };
