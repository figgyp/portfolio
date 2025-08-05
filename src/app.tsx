import { Link, Route, Router, Switch, useLocation } from "wouter";
import { TestimonialCard } from "@/testimonial-card/testimonial-card.tsx";
import { usePathname } from "wouter/use-browser-location";

function App() {
  const [path] = usePathname();
  const [location] = useLocation();
  console.log(path);
  console.log(location);

  return (
    <Router base="/portfolio">
      <main className="m-10">
        {location === "/portfolio/" && (
          <Link href="/testimonial-card">Testimonial Card</Link>
        )}
        <Switch>
          <Route path="/testimonial-card" component={TestimonialCard} />
        </Switch>
      </main>
    </Router>
  );
}

export { App };
