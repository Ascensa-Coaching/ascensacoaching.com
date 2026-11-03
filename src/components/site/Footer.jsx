import { useEffect, useState } from 'react';
import Logo from '@/components/site/Logo';

const CAPABILITIES = ['Leadership Coaching', 'Technical Consulting'];

const NAV = [
  { label: 'Approach', href: '#approach' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-border bg-ink/40">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-base leading-[1.85] text-muted-foreground">
              Leadership coaching with Michael Parenti.
              Technical consulting with Michael Parenti Jr.
            </p>
            <a
              href="https://ascensacoaching.com"
              className="mt-4 inline-block font-mono text-[0.78rem] uppercase tracking-[0.22em] text-flow/80 transition-colors duration-300 hover:text-flow"
            >
              ascensacoaching.com
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground/60">
              Capabilities
            </p>
            <ul className="mt-5 space-y-2.5">
              {CAPABILITIES.map((c) => (
                <li key={c} className="text-base text-muted-foreground">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-11">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground/60">
              Navigate
            </p>
            <ul className="mt-5 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-base text-muted-foreground transition-colors duration-300 hover:text-mint"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground/60">
            © {new Date().getFullYear()} Ascensa — All rights reserved
          </p>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground/60">
              Accepting new engagements — {time}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}