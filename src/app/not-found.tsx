import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-5 text-center">
      <div className="max-w-md mx-auto flex flex-col items-center -mt-8 md:-mt-12">
        <h1 className="font-headline tracking-tight leading-none text-[clamp(4rem,18vw,7rem)] mb-3">
          40<span className="text-primary">4</span>
        </h1>
        <p className="font-headline text-xl md:text-2xl tracking-tight leading-snug mb-3 lowercase">
          this track doesn&apos;t exist
        </p>
        <p className="font-body text-muted-foreground md:text-lg leading-snug md:leading-normal mb-10 lowercase">
          wrong link, or it just hasn&apos;t dropped yet.
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
