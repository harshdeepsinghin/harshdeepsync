"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/connect', label: 'Connect' },
  ];

  // Close sheet when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex md:mr-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold font-headline text-2xl md:text-3xl leading-none">
              harsh&deep
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <nav className="hidden md:flex items-center gap-6 text-base md:text-lg font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-foreground/80 font-body',
                  pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden -mr-8">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-expanded={open}
                  aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
                  onClick={() => setOpen(o => !o)}
                  className="relative flex items-center justify-center"
                >
                  <span className="relative block h-6 w-6">
                    <Menu className={cn('absolute inset-0 h-6 w-6 transition-opacity duration-150', open ? 'opacity-0' : 'opacity-100')} />
                    <X className={cn('absolute inset-0 h-6 w-6 transition-opacity duration-150', open ? 'opacity-100' : 'opacity-0')} />
                  </span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pt-4">
                <SheetTitle className="sr-only">Main navigation</SheetTitle>
                <div className="grid gap-4 py-4">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold font-headline text-2xl leading-none">
                      harsh&deep
                    </span>
                </Link>
                <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'flex w-full items-center py-2 text-lg font-semibold',
                        pathname === link.href ? 'text-foreground' : 'text-muted-foreground'
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
