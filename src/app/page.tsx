import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-[calc(100dvh-3.5rem)] items-center justify-center px-5 py-8 text-center text-foreground bg-background">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center relative -mt-6 md:-mt-12">
        <div className="flex flex-col items-center w-full gap-4 md:gap-5">
          <h1 className="font-headline tracking-tight leading-[1.05] text-[clamp(4.25rem,22vw,6rem)] lowercase">
            tatv
          </h1>
          <p className="font-body text-muted-foreground text-base md:text-lg -mt-2 md:-mt-3" aria-hidden="true">
            तत्व
          </p>
          <p className="font-headline tracking-tight text-xl md:text-2xl leading-snug lowercase">
            musician and songwriter
          </p>
          <p className="font-body tracking-tight text-muted-foreground text-lg md:text-xl">
            uk07 • dehradun
          </p>
          <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto font-body leading-snug md:leading-normal lowercase">
            <Link
              href="/music/mere-baara-saal"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              mere baara saal is live now
            </Link>
          </p>
        </div>
        {/* CTAs */}
        <div className="mt-8 md:mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto font-headline tracking-tight border-2 hover:bg-foreground hover:text-background text-base px-8 sm:px-10 h-14">
            <Link href="/about">who i am <ArrowRight className="ml-2" /></Link>
          </Button>
          <Button asChild size="lg" className="w-full sm:w-auto font-headline tracking-tight border-2 border-primary text-base px-8 sm:px-10 h-14">
            <Link href="/catalog">catalog <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
