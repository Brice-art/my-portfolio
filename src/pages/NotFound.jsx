import { Link } from "react-router-dom";
import { ArrowRight } from "../components/Icons.jsx";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">This page doesn't exist.</h1>
      <p className="body-text mt-4">The link may be out of date. Let's get you back on track.</p>
      <Link to="/" className="btn-primary mt-8">
        Back home <ArrowRight />
      </Link>
    </section>
  );
}
