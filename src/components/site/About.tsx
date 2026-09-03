import { Reveal } from "./Reveal";
import { aboutParagraphs, processSteps, values } from "./data";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">About</span>
              <h2 className="mt-3 text-3xl leading-[1.05] text-foreground sm:text-4xl">
                Factory-floor process discipline, applied to digital operations.
              </h2>
              <div className="mt-7 flex flex-wrap gap-2">
                {values.map((v) => (
                  <span
                    key={v}
                    className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-accent hover:text-primary"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-24">
          <Reveal>
            <span className="eyebrow">How I work</span>
            <h3 className="mt-3 text-2xl text-foreground sm:text-3xl">Four steps, every engagement.</h3>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.07}>
                <div className="group h-full bg-surface p-6 transition-colors duration-300 hover:bg-accent">
                  <div className="font-mono text-xs text-primary">{s.n}</div>
                  <h4 className="mt-3 text-lg text-foreground">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
