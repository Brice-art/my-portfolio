export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="container-page">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="max-w-3xl text-[clamp(2.25rem,6vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.04em]">{title}</h1>
        {intro ? <p className="body-text mt-5 max-w-2xl text-lg">{intro}</p> : null}
      </div>
    </section>
  );
}
