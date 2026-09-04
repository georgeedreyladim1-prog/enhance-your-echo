import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";
import { certificates } from "./data";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function Certificates() {
  const [active, setActive] = useState<number | null>(null);
  const cert = active === null ? null : certificates[active];

  return (
    <section id="certificates" className="border-y border-border bg-surface-2 py-20 md:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        <SectionHead
          kicker="Professional Development"
          title="Training & certificates."
          copy="Hands-on learning focused on no-code automation, CRM workflows, APIs, AI agents, integrations, and practical business automation. Click any certificate to view it full size."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 0.07}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Zoom in on ${c.title} certificate`}
                className="group block h-full w-full overflow-hidden rounded-2xl border border-border bg-surface text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift"
              >
                <div className="relative overflow-hidden border-b border-border">
                  <img
                    src={c.img}
                    alt={`${c.title} certificate issued by ${c.issuer}`}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-background/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-400 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-signature)] px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-glow">
                      <ZoomIn className="size-4" /> View full size
                    </span>
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base leading-snug text-foreground">{c.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {c.issuer} · {c.date}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={cert !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl border-border bg-surface p-3 sm:p-5">
          {cert ? (
            <>
              <DialogTitle className="px-1 text-base text-foreground">{cert.title}</DialogTitle>
              <DialogDescription className="px-1 text-xs text-muted-foreground">
                {cert.issuer} · {cert.date}
              </DialogDescription>
              <div className="max-h-[75vh] overflow-auto rounded-xl border border-border bg-background">
                <img
                  src={cert.img}
                  alt={`${cert.title} certificate issued by ${cert.issuer}, full size`}
                  className="w-full object-contain"
                />
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
