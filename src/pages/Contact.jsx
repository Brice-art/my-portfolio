import { ArrowRight, ArrowUpRight } from "../components/Icons.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { socials } from "../content.js";

const EMAIL = "bricealibyilingiro@gmail.com";

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's solve something together."
        intro="Open to Laravel, full-stack, and backend work — or just a good technical conversation."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card p-7 sm:p-10">
            <p className="eyebrow mb-4">Email</p>
            <a href={`mailto:${EMAIL}`} className="block break-all text-2xl font-semibold text-paper no-underline transition-colors hover:text-accent sm:text-3xl">
              {EMAIL}
            </a>
            <p className="body-text mt-5 max-w-lg">
              Tell me what you're building, what's breaking, or what you'd like to improve. I'll get back to you as soon as I can.
            </p>
            <a href={`mailto:${EMAIL}`} className="btn-primary mt-8">
              Send an email <ArrowRight />
            </a>
          </div>

          <div className="card p-7 sm:p-10">
            <p className="eyebrow mb-6">Elsewhere</p>
            <div className="divide-y divide-line">
              {socials
                .filter(({ label }) => label !== "Email")
                .map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between py-4 text-paper no-underline transition-colors hover:text-accent">
                    <span className="font-medium">{label}</span>
                    <ArrowUpRight />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
