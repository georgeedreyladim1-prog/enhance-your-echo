import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal, SectionHead } from "./Reveal";
import { caseStudies, type CaseStudy } from "./data";

export function Work() {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="bg-ink py-20 text-ink-foreground md:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        <div className="mb-12 grid gap-6 border-b border-white/10 pb-8 md:mb-16 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <Reveal>
            <span className="eyebrow !text-ink-foreground/55">Selected Work</span>
            <h2 className="mt-3 text-3xl leading-[1.05] sm:text-4xl md:text-5xl">Automation case studies.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-lg text-base leading-relaxed text-ink-foreground/65 md:justify-self-end">
              Four builds that show how I approach lead workflows, accounting data, AI-assisted
              processes, and content automation across different platforms.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.id} delay={(i % 2) * 0.08}>
              <article
                role="button"
                tabIndex={0}
                onClick={() => setActive(c)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(c);
                  }
                }}
                className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1.5 hover:border-violet-soft/60 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-soft"
              >
                <div className="relative overflow-hidden border-b border-white/10 bg-white">
                  <img
                    src={c.cover}
                    alt={`${c.platform} workflow preview`}
                    loading="lazy"
                    className="aspect-16/10 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-ink-foreground backdrop-blur">
                    {c.platform}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl leading-snug">{c.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-foreground/65">{c.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 px-2 py-1 text-[0.7rem] text-ink-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-1.5 border-t border-white/10 pt-4 text-sm font-semibold text-violet-soft">
                    View case study
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[88vh] gap-0 overflow-y-auto p-0 sm:max-w-3xl">
          {active ? (
            <div className="p-6 md:p-8">
              <DialogHeader className="text-left">
                <span className="inline-flex w-fit rounded-full bg-ink px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-ink-foreground">
                  {active.platform}
                </span>
                <DialogTitle className="mt-3 text-2xl leading-tight md:text-3xl">{active.title}</DialogTitle>
                <DialogDescription className="text-base leading-relaxed">{active.intro}</DialogDescription>
              </DialogHeader>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-surface-2 p-5">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-primary">The challenge</h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{active.challenge}</p>
                </div>
                <div className="rounded-xl border border-border bg-surface-2 p-5">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-primary">The solution</h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{active.solution}</p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-border p-5">
                <h4 className="font-mono text-xs uppercase tracking-widest text-primary">What it demonstrates</h4>
                <ul className="mt-3 space-y-2">
                  {active.demonstrates.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 grid gap-3">
                {active.gallery.map((g) => (
                  <img
                    key={g.src}
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full rounded-xl border border-border bg-surface"
                  />
                ))}
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
