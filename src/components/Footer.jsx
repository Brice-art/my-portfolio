import { socials } from "../content.js";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0">© {new Date().getFullYear()} Brice Byiringiro</p>
        <div className="flex flex-wrap gap-5">
          {socials.map(({ label, href }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-muted no-underline transition-colors hover:text-paper">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
