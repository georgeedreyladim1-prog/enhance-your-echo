import { ArrowRight, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "./data";

const pills = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Mobile", value: profile.phone, href: profile.phoneHref, Icon: Phone },
  { label: "Location", value: profile.location, href: undefined, Icon: MapPin },
  { label: "LinkedIn", value: "View profile ↗", href: profile.linkedin, Icon: Linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-40px))]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink p-8 text-ink-foreground md:p-14">
            <div className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-aura" />
            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="eyebrow !text-ink-foreground/55">Contact</span>
                <h2 className="mt-3 text-3xl leading-[1.06] sm:text-4xl md:text-[2.75rem]">
                  Need a more organized workflow behind your business?
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink-foreground/65">
                  Tell me which part of the week eats the most time — the recurring admin, the CRM
                  updates, the follow-ups, the inbox — and I'll tell you honestly what can be
                  automated and what shouldn't be.
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                >
                  Start a conversation
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {pills.map(({ label, value, href, Icon }) => {
                  const inner = (
                    <>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-ink-foreground/50">
                        <Icon className="size-3.5" />
                        {label}
                      </span>
                      <strong className="mt-1.5 block break-words text-sm font-semibold">{value}</strong>
                    </>
                  );
                  const cls =
                    "block rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-soft/60 hover:bg-white/[0.08]";
                  return href ? (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener"
                      className={cls}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={label} className={cls}>
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-[min(1200px,calc(100%-40px))] flex-col items-center justify-between gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {profile.name} · Technical Virtual Assistant
        </p>
        <p>CRM & Automation Support · Metro Manila, Philippines</p>
      </div>
    </footer>
  );
}
