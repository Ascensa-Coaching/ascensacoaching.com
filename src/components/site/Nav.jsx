import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/site/Logo';

const LINKS = [
  { label: 'Approach', href: '#approach' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-border bg-background/85 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <Logo />
          <span className="hidden font-mono text-[0.7rem] uppercase tracking-[0.26em] text-muted-foreground/70 lg:block">
            Coaching + Consulting
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:text-mint"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-[2px] border border-mint/40 px-5 py-2.5 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-mint transition-colors duration-300 hover:bg-mint hover:text-background"
          >
            Request a consultation
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-8 pt-4 md:hidden">
          <div className="flex flex-col gap-5">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[0.78rem] uppercase tracking-[0.24em] text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-[2px] border border-mint/40 px-5 py-3 text-center font-mono text-[0.78rem] uppercase tracking-[0.22em] text-mint"
            >
              Request a consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}