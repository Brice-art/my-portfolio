import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = ({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight text-paper no-underline">
          Brice<span className="text-accent">.</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {LINKS.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-paper md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <nav aria-label="Mobile navigation" className="border-t border-line bg-ink md:hidden">
          <div className="container-page flex flex-col py-3">
            {LINKS.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav-link py-3 ${isActive ? "nav-link-active" : ""}`}>
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
