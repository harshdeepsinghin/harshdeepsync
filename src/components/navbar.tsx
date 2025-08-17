"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/connect', label: 'Connect' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex md:mr-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold font-headline text-xl tracking-wider">
              Harshdeep.studio
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 md:hidden">
              <span className="font-bold font-headline text-xl tracking-wider">
                Harshdeep.studio
              </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm font-medium md:gap-6 ml-auto">
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
        </div>
      </div>
    </header>
  );
}
