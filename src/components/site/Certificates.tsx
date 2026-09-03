import { Reveal, SectionHead } from "./Reveal";
import { certificates } from "./data";

export function Certificates() {
  return (
    <section id="certificates" className="border-y border-border bg-surface-2 py-20 md:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        <SectionHead
          kicker="Professional Development"
          title="Training & certificates."
          copy="Hands-on learning focused on no-code automation, CRM workflows, APIs, AI agents, integrations, and practical business automation."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 0.07}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
                <div className="overflow-hidden border-b border-border">
                  <img
                    src={c.img}
                    alt={`${c.title} certificate issued by ${c.issuer}`}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base leading-snug text-foreground">{c.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {c.issuer} · {c.date}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
