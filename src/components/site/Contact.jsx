import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from '@/components/site/SectionLabel';

// Update this to the address where enquiries should arrive.
const CONTACT_EMAIL = 'connect@ascensacoaching.com';

const INTERESTS = [
  'Leadership coaching',
  'Software & systems advisory',
  'Networking & infrastructure advisory',
  'Audio engineering advisory',
  'Music production advisory',
  'Technical advisory',
  'Not sure yet',
];

const FIELD =
  'w-full rounded-[2px] border border-border bg-ink/40 px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 transition-colors duration-300 focus:border-flow/60 focus:outline-none';

const EMPTY = { full_name: '', email: '', organization: '', interest: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.full_name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('A name, an email, and a brief description are required.');
      return;
    }
    setError('');

    const subject = `Consultation enquiry — ${form.interest || 'Ascensa'}`;
    const lines = [
      `Name: ${form.full_name}`,
      `Email: ${form.email}`,
      form.organization ? `Organization: ${form.organization}` : null,
      form.interest ? `Area of interest: ${form.interest}` : null,
      '',
      form.message,
    ].filter((l) => l !== null);
    const body = lines.join('\n');

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailto;
      setForm(EMPTY);
      setStatus('sent');
    } catch (err) {
      setStatus('idle');
      setError('Could not open your email app. Please email us directly.');
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel tone="flow">04 — Contact</SectionLabel>
            <h2 className="font-heading text-3xl font-medium leading-[1.12] tracking-[-0.03em] lg:text-[2.9rem]">
              Request a
              <span className="block text-foreground/35">consultation.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-[1.8] text-muted-foreground">
              Tell us whether your enquiry is for leadership coaching or technical consulting,
              and briefly describe what you need.
            </p>


          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {status === 'sent' ? (
              <div className="border border-mint/30 bg-mint/[0.04] p-9 md:p-11">
                <p className="font-mono text-[0.78rem] uppercase tracking-[0.28em] text-mint">
                  Draft ready
                </p>
                <h3 className="mt-6 font-heading text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                  Your email app should be open.
                </h3>
                <p className="mt-5 text-base leading-[1.85] text-muted-foreground">
                  We have prefilled a message with your details. Press send in your email app and we
                  will reply within two business days.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-9 inline-flex items-center gap-3 border border-border px-6 py-3 font-mono text-[0.78rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:border-flow/50 hover:text-flow"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="full_name" className="mb-2 block font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="full_name"
                      className={FIELD}
                      placeholder="Your name"
                      value={form.full_name}
                      onChange={update('full_name')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={FIELD}
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={update('email')}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="organization" className="mb-2 block font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground">
                      Organization
                    </label>
                    <input
                      id="organization"
                      className={FIELD}
                      placeholder="Company or studio"
                      value={form.organization}
                      onChange={update('organization')}
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="mb-2 block font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground">
                      Area of interest
                    </label>
                    <select
                      id="interest"
                      className={`${FIELD} appearance-none`}
                      value={form.interest}
                      onChange={update('interest')}
                    >
                      <option value="">Select one</option>
                      {INTERESTS.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground">
                    Describe the situation
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className={`${FIELD} resize-none`}
                    placeholder="The team, the system, or the decision you are weighing…"
                    value={form.message}
                    onChange={update('message')}
                  />
                </div>

                {error && (
                  <p className="font-mono text-[0.78rem] uppercase tracking-[0.14em] text-destructive">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="group mt-2 inline-flex w-full items-center justify-between gap-6 rounded-[2px] bg-mint px-7 py-4 font-mono text-[0.78rem] uppercase tracking-[0.22em] text-background transition-colors duration-300 hover:bg-mint/85 sm:w-auto"
                >
                  Request a consultation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}