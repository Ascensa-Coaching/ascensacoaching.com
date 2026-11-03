import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';

const MARK = `${import.meta.env.BASE_URL}assets/images/Ascensa%20Logo%20WoB.png`;

export default function Logo({ className, showWordmark = true }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Image
        src={MARK}
        alt="Ascensa"
        className="h-9 w-9 shrink-0 mix-blend-screen"
        fittingType="fit"
      />
      {showWordmark && (
        <span className="font-heading text-[0.95rem] font-medium uppercase tracking-[0.42em] text-foreground">
          Ascensa
        </span>
      )}
    </div>
  );
}
