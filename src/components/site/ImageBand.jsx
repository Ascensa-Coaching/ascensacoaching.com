import { Image } from '@/components/ui/image';

const IMG = `${import.meta.env.BASE_URL}assets/images/Ascensa%20Cover%20Pic.jpg`;

const CAPTIONS = [
  { n: '01', label: 'Signal chains' },
  { n: '02', label: 'Network topology' },
  { n: '03', label: 'Shipped software' },
];

export default function ImageBand() {
  return (
    <section className="relative border-y border-border">
      <div className="relative h-[280px] w-full overflow-hidden md:h-[420px]">
        <Image
          src={IMG}
          alt="A mixing console lit faintly in a dark control room"
          className="h-full w-full object-cover"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-background/10" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container mx-auto flex flex-wrap gap-x-10 gap-y-3 px-6 pb-7">
            {CAPTIONS.map((c) => (
              <div key={c.n} className="flex items-center gap-3">
                <span className="font-mono text-[0.55rem] tracking-[0.24em] text-mint">{c.n}</span>
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-foreground/70">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
