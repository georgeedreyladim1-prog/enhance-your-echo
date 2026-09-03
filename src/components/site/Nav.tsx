import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "./data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-[image:var(--gradient-signature)]"
      />
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled ? "border-border bg-background/80 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[70px] w-[min(1200px,calc(100%-40px))] items-center justify-between gap-6">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="size-7 rounded-[9px] bg-[image:var(--gradient-signature)] shadow-glow transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-display text-[0.95rem] font-bold tracking-tight text-foreground">{profile.name}</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-ink-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              Work with me
            </a>
          </div>

          <button
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {open ? (
          <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
            <div className="mx-auto flex w-[min(1200px,calc(100%-40px))] flex-col py-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 text-sm font-medium text-foreground last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-ink-foreground"
              >
                Work with me
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
