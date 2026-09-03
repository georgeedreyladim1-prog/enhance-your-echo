import { Reveal, SectionHead } from "./Reveal";
import { toolCategories, toolsImage } from "./data";

export function Tools() {
  return (
    <section id="tools" className="py-20 md:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        <SectionHead
          kicker="Tools & Platforms"
          title="The stack I work in."
          copy="A working toolkit across CRM, automation, AI, project management, productivity, communication, and creative support."
        />

        <Reveal delay={0.05}>
          <div className="mb-8 flex flex-wrap gap-2">
            {toolCategories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-widest text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-shadow duration-500 hover:shadow-lift md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-aura opacity-0 transition-opacity duration-700 group-hover:opacity-60" />
            <img
              src={toolsImage}
              alt="Logos of tools and platforms George Edrey Ladim works with, including Zapier, Make.com, n8n, GoHighLevel, Google Workspace, Trello and Asana"
              loading="lazy"
              decoding="async"
              className="relative mx-auto w-full max-w-[1100px]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            New tool in your stack? I adapt to the systems your business already runs on.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
