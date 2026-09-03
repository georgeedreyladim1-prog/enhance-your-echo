import { Reveal, SectionHead } from "./Reveal";
import { services } from "./data";

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-surface-2 py-20 md:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        <SectionHead
          kicker="Services"
          title="How I can support your business."
          copy="Focused support for teams that need stronger systems behind daily operations — without making the workflow more complicated than it needs to be."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.n}
              delay={(i % 3) * 0.06}
              className={s.featured ? "lg:col-span-3 xl:col-span-1" : ""}
            >

              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-aura opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-4">
                  <h3 className="max-w-[16ch] text-lg leading-snug text-foreground">{s.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                    {s.n}
                  </span>
                </div>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                {s.points.length ? (
                  <ul className="relative mt-4 space-y-2 border-t border-border pt-4">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
