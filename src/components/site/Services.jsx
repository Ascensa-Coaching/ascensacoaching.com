import { Compass, Code2, Network, Mic, Music, LineChart, ArrowUpRight } from 'lucide-react';
import SectionLabel from '@/components/site/SectionLabel';

const SERVICES = [
  {
    icon: Compass,
    index: '01',
    name: 'Leadership Coaching',
    body: 'One-to-one and team coaching for owners, managers, and technical leads accountable for outcomes they cannot produce alone. We strengthen decision-making, communication, and the plans that make delegation and succession sustainable.',
    points: ['Team unity and alignment', 'Strategic vision and goal achievement', 'Conflict resolution and communication'],
  },
  {
    icon: Code2,
    index: '02',
    name: 'Software & Systems Advisory',
    body: 'Independent counsel on the software and systems your team operates or is preparing to build. We assess architecture, tooling, and process, and deliver a written recommendation your team can act on.',
    points: ['Architecture and tooling reviews', 'Build-versus-buy guidance', 'Process and workflow recommendations'],
  },
  {
    icon: Network,
    index: '03',
    name: 'Networking & Infrastructure Advisory',
    body: 'Objective review of the network and infrastructure your work depends on, with a prioritized roadmap your team or vendor can implement.',
    points: ['Network design reviews', 'Connectivity and failover guidance', 'Documentation and handover plans'],
  },
  {
    icon: Mic,
    index: '04',
    name: 'Audio Engineering Advisory',
    body: 'Guidance on studio and live sound systems — signal chains, calibration, and workflow — to help your team achieve repeatable results, without us performing the work for you.',
    points: ['Signal chain evaluation', 'System tuning guidance', 'Gear and workflow audits'],
  },
  {
    icon: Music,
    index: '05',
    name: 'Music Production Advisory',
    body: 'Counsel on production, arrangement, and technical finishing for artists and production teams working toward a release.',
    points: ['Production and arrangement guidance', 'Session and file management', 'Release-readiness reviews'],
  },
  {
    icon: LineChart,
    index: '06',
    name: 'Technical Advisory',
    body: 'Concise, candid assessments for teams facing a deferred decision, delivered as a written recommendation you can act on.',
    points: ['Systems and process audits', 'Build-versus-buy calls', 'Sequenced technical roadmaps'],
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionLabel tone="flow">02 — Services</SectionLabel>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="font-heading text-3xl font-medium leading-[1.12] tracking-[-0.03em] lg:col-span-5 lg:text-[2.9rem]">
            Coaching for your people.
            <span className="block text-foreground/35">Advisory for your systems.</span>
          </h2>
          <p className="text-lg leading-[1.8] text-muted-foreground lg:col-span-6 lg:col-start-7">
            Ascensa offers leadership coaching and technical advisory services. We help you
            understand the problem, weigh the options, and choose a sound path forward.
            Our role is advisory; we do not build or operate your systems.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2px] border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.name}
                className="group relative bg-background p-8 transition-colors duration-500 hover:bg-ink md:p-9"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-6 w-6 text-muted-foreground transition-colors duration-500 group-hover:text-mint" strokeWidth={1.25} />
                  <span className="font-mono text-[0.72rem] tracking-[0.2em] text-muted-foreground/50">
                    {s.index}
                  </span>
                </div>
                <h3 className="mt-8 font-heading text-xl font-medium tracking-[-0.01em] text-foreground md:text-[1.4rem]">
                  {s.name}
                </h3>
                <p className="mt-3 text-base leading-[1.7] text-muted-foreground">{s.body}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 font-mono text-[0.72rem] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground/80"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-flow/70" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-l-2 border-mint/60 bg-ink/40 px-8 py-7 md:flex-row md:items-center">
          <p className="max-w-2xl text-base leading-[1.8] text-foreground/85 md:text-lg">
            Have a question about a service? Tell us which area interests you and what you
            would like help with.
          </p>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-[2px] bg-mint px-6 py-3.5 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-background transition-colors duration-300 hover:bg-mint/85"
          >
            Request a consultation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}