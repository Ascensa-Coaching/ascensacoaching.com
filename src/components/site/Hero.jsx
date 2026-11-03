import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const MARK = `${import.meta.env.BASE_URL}assets/images/Ascensa%20Logo%20WoB.png`;

const DISCIPLINES = [
  'Leadership coaching',
  'Software & systems',
  'Networking',
  'Audio engineering',
  'Music production',
];

function Waveform() {
  return (
    <>
    <div className="relative mt-20 h-44 w-full overflow-hidden border-t border-border md:mt-28 md:h-52">
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full animate-drift"
        aria-hidden="true"
      >
        <path
          d="M0 110 C 120 40, 240 160, 360 100 S 600 30, 720 100 S 960 165, 1080 95 S 1320 35, 1440 105"
          fill="none"
          stroke="hsl(var(--mint))"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
        <path
          d="M0 130 C 140 70, 260 155, 400 120 S 640 55, 780 120 S 1020 150, 1160 110 S 1350 60, 1440 125"
          fill="none"
          stroke="hsl(var(--flow))"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        {Array.from({ length: 36 }).map((_, i) => (
          <line
            key={i}
            x1={i * 40}
            y1="0"
            x2={i * 40}
            y2="160"
            stroke="hsl(var(--border))"
            strokeOpacity="0.4"
            strokeWidth="0.5"
          />
        ))}
      </svg>
    </div>
    <div className="mt-3 flex justify-between">
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground/60">
        Insight
      </span>
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground/60">
        Direction
      </span>
    </div>
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '104px 104px',
          maskImage: 'radial-gradient(ellipse 85% 65% at 62% 0%, black 15%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 62% 0%, black 15%, transparent 78%)',
        }}
      />
      <div className="pointer-events-none absolute -top-40 right-[-14%] h-[560px] w-[560px] rounded-full bg-mint/10 blur-[170px]" />
      <div className="pointer-events-none absolute top-52 left-[-18%] h-[460px] w-[460px] rounded-full bg-flow/10 blur-[170px]" />

      <div className="container relative mx-auto px-6">
        <div className="flex items-center gap-5 animate-rise">
          <Image src={MARK} alt="Ascensa" className="h-14 w-14 mix-blend-screen" fittingType="fit" />
          <div>
            <p className="font-heading text-2xl font-medium uppercase tracking-[0.42em] text-foreground md:text-3xl">
              Ascensa
            </p>
            <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground md:text-[0.75rem]">
              Leadership Coaching & Technical Consulting
            </p>
          </div>
        </div>

        <h1
          className="mt-12 max-w-5xl font-heading text-[2.8rem] font-medium leading-[1.05] tracking-[-0.035em] animate-rise sm:text-6xl lg:text-[5rem]"
          style={{ animationDelay: '80ms' }}
        >
          Stronger leaders.
          <span className="block text-foreground/35">Clearer decisions.</span>
        </h1>

        <p
          className="mt-10 max-w-2xl text-lg leading-[1.8] text-muted-foreground animate-rise"
          style={{ animationDelay: '160ms' }}
        >
          Ascensa is a leadership coaching and technical consulting practice. We work alongside owners,
          managers, and technical teams to strengthen judgment, clarify decisions, and resolve the
          technical questions that hold work back — across software, networking, and audio. Our role is
          advisory: we guide decisions and build clarity to enable your teams to ascend to the next
          level.
        </p>

        <div
          className="mt-11 flex flex-col gap-4 animate-rise sm:flex-row sm:items-center"
          style={{ animationDelay: '240ms' }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-between gap-6 rounded-[2px] bg-mint px-7 py-4 font-mono text-[0.72rem] uppercase tracking-[0.24em] text-background transition-colors duration-300 hover:bg-mint/85"
          >
            Request a consultation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-3 rounded-[2px] border border-border px-7 py-4 font-mono text-[0.72rem] uppercase tracking-[0.24em] text-foreground transition-colors duration-300 hover:border-flow/50 hover:text-flow"
          >
            Explore services
          </a>
        </div>

        <div
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 animate-rise"
          style={{ animationDelay: '320ms' }}
        >
          {DISCIPLINES.map((d) => (
            <span
              key={d}
              className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground/70"
            >
              {d}
            </span>
          ))}
        </div>

        <Waveform />
      </div>
    </section>
  );
}
