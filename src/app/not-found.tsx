import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-5 text-center">
      <div className="max-w-md mx-auto flex flex-col items-center -mt-8 md:-mt-12">
        <svg
          viewBox="0 0 200 200"
          className="w-40 h-40 md:w-52 md:h-52 mb-8 md:mb-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="100" cy="100" r="88" />
          <circle cx="100" cy="100" r="68" opacity="0.35" />
          <circle cx="100" cy="100" r="52" opacity="0.35" />
          <circle cx="100" cy="100" r="38" opacity="0.35" />
          <circle cx="100" cy="100" r="13" fill="currentColor" stroke="none" />
          <circle cx="100" cy="100" r="4" className="fill-background" stroke="none" />
          <line
            x1="34"
            y1="58"
            x2="166"
            y2="142"
            className="stroke-primary"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <p className="font-body text-muted-foreground text-sm md:text-base tracking-tight mb-3 lowercase">
          404 · needle skipped
        </p>
        <h1 className="font-headline text-3xl md:text-5xl tracking-tight leading-tight mb-4 lowercase">
          this track doesn&apos;t exist
        </h1>
        <p className="font-body text-muted-foreground md:text-lg leading-snug md:leading-normal mb-10 lowercase">
          the page you&apos;re looking for got lost between b-sides. maybe it never dropped.
        </p>

        <div className="flex flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="font-headline tracking-tight border-2 text-base px-8 h-12">
            <Link href="/">back home <ArrowRight className="ml-2" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-headline tracking-tight border-2 hover:bg-foreground hover:text-background text-base px-8 h-12">
            <Link href="/catalog">catalog</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
