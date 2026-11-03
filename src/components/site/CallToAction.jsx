import { ArrowUpRight } from 'lucide-react';
import SectionLabel from '@/components/site/SectionLabel';

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 80% at 20% 120%, hsl(var(--mint) / 0.12), transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 50% 70% at 90% -10%, hsl(var(--flow) / 0.12), transparent 70%)',
        }}
      />

      <div className="container relative mx-auto px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Next step</SectionLabel>
            <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[4rem]">
              Bring us the question.
              <span className="block text-foreground/35">We will help you resolve it.</span>
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-[1.8] text-muted-foreground">
              Enquire about leadership coaching with Michael Parenti or technical consulting with
              Michael Parenti Jr. Use the form below to describe what you need.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="group inline-flex items-center gap-6 rounded-[2px] bg-mint px-8 py-5 font-mono text-[0.78rem] uppercase tracking-[0.22em] text-background transition-colors duration-300 hover:bg-mint/85"
            >
              Request a consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground/60">
              Replies within two business days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}