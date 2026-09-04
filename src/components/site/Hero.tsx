import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { profile } from "./data";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.06 * i, ease: [0.22, 0.68, 0.25, 1.02] as const },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="pointer-events-none absolute -top-56 -right-40 size-[640px] rounded-full bg-aura" />
      <div className="pointer-events-none absolute -bottom-72 -left-52 size-[560px] rounded-full bg-aura opacity-60" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.35] [mask-image:radial-gradient(circle_at_50%_0%,black,transparent_72%)]" />

      <div className="relative mx-auto grid w-[min(1200px,calc(100%-40px))] gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div custom={0} variants={fade} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">
              <span
                className="size-2 rounded-full bg-signal"
                style={{ animation: "pulse-dot 2.2s ease-in-out infinite" }}
              />
              Available for new clients · {profile.role}
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 text-[clamp(2.6rem,7.5vw,5.2rem)] font-bold leading-[0.94] text-foreground"
          >
            GEORGE EDREY <span className="text-gradient">LADIM</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl font-display text-lg leading-snug text-foreground/80 md:text-xl"
          >
            I build the quiet systems behind a business — CRM, lead follow-up, inbox, and reporting
            workflows that run without being chased.
          </motion.p>

          <motion.p
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            Technical Virtual Assistant supporting business owners with CRM and automation across
            Zapier, Make.com, n8n, and GoHighLevel — plus the everyday operations work that keeps
            everything moving.
          </motion.p>

          <motion.div custom={4} variants={fade} initial="hidden" animate="show" className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-signature)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-glow"
            >
              Explore case studies
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-primary hover:text-primary hover:shadow-glow"
            >
              <Mail className="size-4" />
              Email me
            </a>

          </motion.div>

          <motion.div
            custom={5}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
              <Mail className="size-3.5" /> {profile.email}
            </a>
            <a href={profile.phoneHref} className="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
              <Phone className="size-3.5" /> {profile.phone}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" /> {profile.location}
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Linkedin className="size-3.5" /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 0.68, 0.25, 1.02] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div
            className="absolute -inset-6 rounded-full bg-aura"
            style={{ animation: "photo-bounce 3s ease-in-out infinite" }}
          />
          <div
            className="pointer-events-none absolute inset-x-6 bottom-2 h-40 rounded-full bg-[image:var(--gradient-signature)] opacity-25 blur-3xl"
            style={{ animation: "photo-bounce 3s ease-in-out infinite reverse" }}
          />
          <motion.img
            src={profile.portrait}
            alt="Portrait of George Edrey Ladim, Technical Virtual Assistant"
            className="photo-bounce relative z-10 mx-auto w-full max-w-[420px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
          />
        </motion.div>
      </div>

    </section>
  );
}
