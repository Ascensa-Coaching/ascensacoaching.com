export default function SectionLabel({ children, tone = 'mint' }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className={tone === 'flow' ? 'h-px w-12 bg-flow/70' : 'h-px w-12 bg-mint/70'} />
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-muted-foreground">
        {children}
      </span>
    </div>
  );
}