import { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      {image && (
        <div className="absolute inset-0 opacity-30">
          <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
      )}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> {eyebrow}
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-up">{subtitle}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-up">{children}</div>}
      </div>
    </section>
  );
}
