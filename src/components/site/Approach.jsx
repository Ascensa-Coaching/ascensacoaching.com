import SectionLabel from '@/components/site/SectionLabel';

export default function Approach() {
  return (
    <section id="approach" className="relative scroll-mt-20 border-t border-border py-28 md:py-40">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 60% at 15% 20%, hsl(var(--mint) / 0.08), transparent 70%)',
        }}
      />
      <div className="container relative mx-auto px-6">
        <SectionLabel tone="flow">01 — Ethos</SectionLabel>

        <h2 className="max-w-5xl font-heading text-[2.4rem] font-medium leading-[1.06] tracking-[-0.035em] sm:text-6xl lg:text-[4.4rem]">
          Helping people{' '}
          <span className="whitespace-nowrap text-mint">
            ASCEND<span className="ml-3 align-top text-flow">↗</span>
          </span>
          <span className="block text-foreground/35">to their highest potential.</span>
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <p className="text-lg leading-[1.85] text-muted-foreground lg:col-span-6">
            Ascensa offers leadership coaching and technical consulting. Michael Parenti provides
            leadership coaching and consulting. Michael Parenti Jr. provides technical consulting
            in software, networking, audio engineering, and music production.
          </p>
          <p className="text-lg leading-[1.85] text-muted-foreground lg:col-span-5 lg:col-start-8">
            Leadership coaching focuses on direction, accountability, and judgment. Technical
            consulting provides guidance on systems and technical decisions. Explore the services
            below or meet the people at Ascensa.
          </p>
        </div>
      </div>
    </section>
  );
}