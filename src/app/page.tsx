"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center p-8 text-center text-foreground bg-background">
      <div className="flex flex-col items-center justify-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline tracking-wider text-center uppercase animate-fade-in-down">
            I write. I flow. I produce.
            <br />
            I am हर्षदीप, हर्षdeep, harshदीप, and harshdeep.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-body animate-fade-in-up">
            Original music dropping soon. Stay tuned.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Button asChild size="lg" className="font-headline text-lg tracking-wider">
            <Link href="/connect">Follow my journey <ArrowRight className="ml-2" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-headline text-lg tracking-wider border-2 hover:bg-foreground hover:text-background">
            <Link href="/connect">Contact me <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
