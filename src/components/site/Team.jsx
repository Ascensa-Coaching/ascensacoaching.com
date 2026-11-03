import SectionLabel from '@/components/site/SectionLabel';
import { Image } from '@/components/ui/image';

const PEOPLE = [
  {
    role: 'Leadership Coach and Consultant',
    name: 'Michael Parenti',
    credential: 'John Maxwell Certified Coach',
    accent: 'text-mint',
    photo: `${import.meta.env.BASE_URL}assets/images/Ascensa%20Pic%20(edited).png`,
    bio: 'A John Maxwell Certified Coach with more than two decades of leadership and consulting experience, Michael pairs proven coaching methodology with practical technical strategy. He works where organizational decisions meet real systems, helping owners, managers, and technical leads clarify how work is owned, who decides, and how to keep critical knowledge from residing in a single person.',
    tags: ['Leadership coaching', 'Organizational systems', 'Technical strategy'],
  },
  {
    role: 'Technical Consultant and Engineer',
    name: 'Michael Parenti Jr.',
    credential: 'Leadership, Ethics & Engineering',
    accent: 'text-flow',
    photo:
      `${import.meta.env.BASE_URL}assets/images/Profile_Picture__mparenti_-removebg-preview(actual).png`,
    bio: 'Michael brings a consulting perspective shaped by work across several engineering disciplines — systems, multimedia, and technical operations — together with formal study in leadership and ethics. He advises technical teams on judgment and practical leadership habits, and counsels on the systems themselves: recording and live audio chains, network and infrastructure design, and the software that connects them.',
    tags: ['Audio engineering', 'Networking', 'Software advisory', 'Music production'],
  },
];

export default function Team() {
  return (
    <section id="team" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionLabel tone="flow">03 — The team</SectionLabel>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="font-heading text-3xl font-medium leading-[1.12] tracking-[-0.03em] lg:col-span-5 lg:text-[2.9rem]">
            Who you will
            <span className="block text-foreground/35">work with.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2px] border border-border bg-border md:grid-cols-2">
          {PEOPLE.map((p) => (
            <article key={p.name} className="group bg-background">
              <div className="relative flex h-56 w-full items-end justify-center overflow-hidden border-b border-border bg-ink/30 px-6 pb-0 pt-8 md:h-64">
                <Image
                  src={p.photo}
                  alt={p.name}
                  className="h-full w-auto max-w-full object-contain"
                  fittingType="fit"
                />
              </div>

              <div className="p-8 md:p-12">
                <h3 className="font-heading text-2xl font-medium tracking-[-0.02em] text-foreground md:text-[1.85rem]">
                  {p.name}
                </h3>
                <p className={`mt-2 font-mono text-[0.66rem] uppercase tracking-[0.24em] ${p.accent}`}>
                  {p.role}
                </p>
                <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground/70">
                  {p.credential}
                </p>
                <p className="mt-7 text-base leading-[1.85] text-muted-foreground">{p.bio}</p>

                <ul className="mt-9 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
