import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 34,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const eased = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  const parallax = useTransform(eased, [0, 1], [y * 0.5, 0]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y: parallax }}
      initial={{ opacity: 0, y, filter: "blur(10px)", scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 0.68, 0.25, 1.02] }}
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
