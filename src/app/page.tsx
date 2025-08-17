"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent)) {
      setIsAndroid(true);
    }
  }, []);

  return (
    <TooltipProvider delayDuration={120} skipDelayDuration={300}>
      <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-6 py-12 md:py-20 text-center text-foreground bg-background">
        <div className="flex flex-col items-center justify-center gap-10 md:gap-14 max-w-4xl mx-auto w-full">
          <div className="flex flex-col items-center space-y-5 md:space-y-6">
            <h1
              className={`font-headline tracking-tight leading-[1.18] md:leading-[1.12] ${
                isAndroid ? 'text-3xl sm:text-4xl md:text-6xl' : 'text-4xl md:text-7xl'
              }`}
            >
              i write. i flow. i produce.
            </h1>
            <h2
              className={`font-headline tracking-tight leading-snug md:leading-snug flex flex-wrap items-center justify-center gap-x-2 gap-y-1 ${
                isAndroid ? 'text-lg sm:text-xl md:text-2xl' : 'text-xl md:text-3xl'
              }`}
            >
              <span className="opacity-80">i am</span>
              {/* desktop tooltips */}
              <span className="hidden md:inline-flex gap-x-2 items-center flex-wrap">
                <Tooltip>
                  <TooltipTrigger className="cursor-default">हर्षदीप</TooltipTrigger>
                  <TooltipContent side="top" className="text-base md:text-lg py-2 px-3">light of happiness.</TooltipContent>
                </Tooltip>
                <span className="text-muted-foreground">,</span>
                <Tooltip>
                  <TooltipTrigger className="cursor-default">हर्षdeep</TooltipTrigger>
                  <TooltipContent side="top" className="text-base md:text-lg py-2 px-3">happiness that runs deep.</TooltipContent>
                </Tooltip>
                <span className="text-muted-foreground">,</span>
                <Tooltip>
                  <TooltipTrigger className="cursor-default">harshदीप</TooltipTrigger>
                  <TooltipContent side="top" className="text-base md:text-lg py-2 px-3">harsh flame that hits hard.</TooltipContent>
                </Tooltip>
                <span className="text-muted-foreground">, and</span>
                <Tooltip>
                  <TooltipTrigger className="cursor-default">harshdeep</TooltipTrigger>
                  <TooltipContent side="top" className="text-base md:text-lg py-2 px-3">harsh to hear, deep to feel.</TooltipContent>
                </Tooltip>
                <span className="text-muted-foreground">.</span>
              </span>
              {/* mobile view: inline popovers (non-Android) */}
              {!isAndroid && (
                <span className="md:hidden inline-flex gap-x-2 items-center flex-wrap">
                  <Popover>
                    <PopoverTrigger className="cursor-pointer">हर्षदीप</PopoverTrigger>
                    <PopoverContent side="top" className="text-sm py-2 px-3 w-auto">light of happiness.</PopoverContent>
                  </Popover>
                  <span className="text-muted-foreground">,</span>
                  <Popover>
                    <PopoverTrigger className="cursor-pointer">हर्षdeep</PopoverTrigger>
                    <PopoverContent side="top" className="text-sm py-2 px-3 w-auto">happiness that runs deep.</PopoverContent>
                  </Popover>
                  <span className="text-muted-foreground">,</span>
                  <Popover>
                    <PopoverTrigger className="cursor-pointer">harshदीप</PopoverTrigger>
                    <PopoverContent side="top" className="text-sm py-2 px-3 w-auto">harsh flame that hits hard.</PopoverContent>
                  </Popover>
                  <span className="text-muted-foreground">, and</span>
                  <Popover>
                    <PopoverTrigger className="cursor-pointer">harshdeep</PopoverTrigger>
                    <PopoverContent side="top" className="text-sm py-2 px-3 w-auto">harsh to hear, deep to feel.</PopoverContent>
                  </Popover>
                  <span className="text-muted-foreground">.</span>
                </span>
              )}
              {/* android: stacked lines */}
              {isAndroid && (
                <span className="md:hidden flex flex-col items-center leading-snug">
                  <span>हर्षदीप,</span>
                  <span>हर्षdeep,</span>
                  <span>harshदीप,</span>
                  <span>and harshdeep.</span>
                </span>
              )}
            </h2>
            <p className="text-lg md:text-xl font-body tracking-tight text-muted-foreground">
              uk07 • dehradun
            </p>
            <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto font-body leading-snug md:leading-normal">
              original music dropping soon. stay tuned.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <Button asChild size="lg" className="font-headline text-sm md:text-base tracking-tight px-8 md:px-10">
              <Link href="/about">who i am <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-headline text-sm md:text-base tracking-tight px-8 md:px-10 border-2 hover:bg-foreground hover:text-background">
              <Link href="/connect">connect <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
