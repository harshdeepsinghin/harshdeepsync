"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isAndroid, setIsAndroid] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const nameVariants = ["हर्षदीप", "हर्षdeep", "harshदीप", "harshdeep"] as const;

  useEffect(() => {
    if (typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent)) {
      setIsAndroid(true);
    }
    // small screen detection (<= 640px) to also enable animated variant
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(max-width: 640px)');
      const update = () => setIsSmallScreen(mq.matches);
      update();
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }
  }, []);

  // Disable scroll while on homepage
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  const showAnimated = isAndroid || isSmallScreen;

  // Animated variant component (Android only)
  const AnimatedVariant: React.FC = () => {
    const [text, setText] = useState<(typeof nameVariants)[number]>(nameVariants[0]);
    const [fading, setFading] = useState(false);
    const measureRef = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState<number | undefined>(undefined);

    // Measure widest variant to lock width and avoid layout shift
    useEffect(() => {
      if (!showAnimated) return;
      const measure = () => {
        if (!measureRef.current) return;
        let max = 0;
        Array.from(measureRef.current.children).forEach(c => {
          const w = (c as HTMLElement).getBoundingClientRect().width;
          if (w > max) max = w;
        });
        setWidth(Math.ceil(max));
      };
      measure();
      window.addEventListener('resize', measure);
      return () => window.removeEventListener('resize', measure);
    }, [showAnimated]);

    // Cycle every 500ms with fade
    useEffect(() => {
      if (!showAnimated) return;
      const id = setInterval(() => {
        setFading(true);
        setTimeout(() => {
          setText(prev => {
            const idx = nameVariants.indexOf(prev as typeof nameVariants[number]);
            return nameVariants[(idx + 1) % nameVariants.length];
          });
          setFading(false);
        }, 160); // fade out duration
      }, 500);
      return () => clearInterval(id);
    }, [showAnimated]);

    return (
      <span
        className="relative inline-block align-baseline"
        aria-live="polite"
        aria-atomic="true"
        style={width ? { width: width + 'px' } : undefined}
      >
        <span className={`block transition-opacity duration-160 ease-out ${fading ? 'opacity-0' : 'opacity-100'}`}>{text}</span>
        {/* hidden measurement clones (span instead of div to avoid block element inside <p>) */}
        <span ref={measureRef} className="absolute -z-10 opacity-0 pointer-events-none whitespace-nowrap">
          {nameVariants.map(v => (
            <span key={v} className="inline-block px-0">{v}</span>
          ))}
        </span>
      </span>
    );
  };

  // Removed AutoFitLine; Android now uses fixed responsive sizes similar to desktop with smooth animated variant.

  return (
    <TooltipProvider delayDuration={120} skipDelayDuration={300}>
      <div className="flex min-h-[calc(100vh-56px)] items-center justify-center px-5 text-center text-foreground bg-background overflow-x-hidden">
        <div className={`w-full max-w-3xl mx-auto flex flex-col items-center relative ${isAndroid ? '-mt-24 md:-mt-28' : '-mt-8 md:-mt-12'}`}>
          {/* Larger upward shift only on Android; modest shift on other devices */}
          {/* Headings */}
          <div className="flex flex-col items-center w-full gap-4 md:gap-5">
            <h1 className="font-headline tracking-tight leading-[1.05] whitespace-nowrap text-[clamp(1.65rem,7vw,3.4rem)]">
              i write. i flow. i produce.
            </h1>
            {showAnimated ? (
              <p className="font-headline tracking-tight text-xl md:text-2xl leading-tight flex items-baseline justify-center gap-2">
                <span className="opacity-80">i am</span>
                <AnimatedVariant />
              </p>
            ) : (
              <h2 className="font-headline tracking-tight text-2xl md:text-3xl leading-snug flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                <span className="opacity-80">i am</span>
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
                <span className="md:hidden inline-flex gap-x-2 items-center flex-wrap">
                  <Popover>
                    <PopoverTrigger className="cursor-pointer select-none font-semibold focus:outline-none focus:ring-2 focus:ring-foreground/30">हर्षदीप</PopoverTrigger>
                    <PopoverContent side="top" className="text-sm py-2 px-3 w-auto">light of happiness.</PopoverContent>
                  </Popover>
                  <span className="text-muted-foreground">,</span>
                  <Popover>
                    <PopoverTrigger className="cursor-pointer select-none font-semibold focus:outline-none focus:ring-2 focus:ring-foreground/30">हर्षdeep</PopoverTrigger>
                    <PopoverContent side="top" className="text-sm py-2 px-3 w-auto">happiness that runs deep.</PopoverContent>
                  </Popover>
                  <span className="text-muted-foreground">,</span>
                  <Popover>
                    <PopoverTrigger className="cursor-pointer select-none font-semibold focus:outline-none focus:ring-2 focus:ring-foreground/30">harshदीप</PopoverTrigger>
                    <PopoverContent side="top" className="text-sm py-2 px-3 w-auto">harsh flame that hits hard.</PopoverContent>
                  </Popover>
                  <span className="text-muted-foreground">, and</span>
                  <Popover>
                    <PopoverTrigger className="cursor-pointer select-none font-semibold focus:outline-none focus:ring-2 focus:ring-foreground/30">harshdeep</PopoverTrigger>
                    <PopoverContent side="top" className="text-sm py-2 px-3 w-auto">harsh to hear, deep to feel.</PopoverContent>
                  </Popover>
                  <span className="text-muted-foreground">.</span>
                </span>
              </h2>
            )}
            <p className="font-body tracking-tight text-muted-foreground text-lg md:text-xl">
              uk07 • dehradun
            </p>
            <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto font-body leading-snug md:leading-normal">
              original music dropping soon. stay tuned.
            </p>
          </div>
          {/* CTAs */}
          <div className="mt-8 md:mt-10 flex flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="font-headline tracking-tight border-2 text-base px-10 h-14">
              <Link href="/about">who i am <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-headline tracking-tight border-2 hover:bg-foreground hover:text-background text-base px-10 h-14">
              <Link href="/connect">connect <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
