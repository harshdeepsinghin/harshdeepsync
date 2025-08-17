"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-6 py-12 md:py-20 text-center text-foreground bg-background">
      <div className="flex flex-col items-center justify-center gap-10 md:gap-14 max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center space-y-5 md:space-y-6">
          <h1 className="text-4xl md:text-7xl font-headline tracking-tight leading-[1.18] md:leading-[1.12]">
            i write. i flow. i produce.
          </h1>
            <h2 className="text-xl md:text-3xl font-headline tracking-tight leading-snug md:leading-snug">
            i am हर्षदीप, हर्षdeep, harshदीप, and harshdeep.
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto font-body leading-snug md:leading-normal">
            Original music dropping soon. Stay tuned.
          </p>
          <p className="text-xs md:text-sm font-body tracking-tight text-muted-foreground">
            UK07 • Dehradun
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <Button asChild size="lg" className="font-headline text-sm md:text-base tracking-tight px-8 md:px-10">
            <Link href="/about">Who I Am <ArrowRight className="ml-2" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-headline text-sm md:text-base tracking-tight px-8 md:px-10 border-2 hover:bg-foreground hover:text-background">
            <Link href="/connect">Connect <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
