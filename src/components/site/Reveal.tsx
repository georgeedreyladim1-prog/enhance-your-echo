import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.68, 0.25, 1.02] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy?: string;
}) {
  return (
    <Reveal className="mb-12 grid gap-6 border-b border-border pb-8 md:mb-16 md:grid-cols-[1.1fr_0.9fr] md:items-end">
      <div>
        <span className="eyebrow">{kicker}</span>
        <h2 className="mt-3 text-3xl leading-[1.05] text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      </div>
      {copy ? <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:justify-self-end">{copy}</p> : null}
    </Reveal>
  );
}
