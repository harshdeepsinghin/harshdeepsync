import type { SVGProps } from 'react';

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M3.6,8.2C3.3,6,3.8,4.3,5.1,3.2c1.4-1.2,3.3-1.4,5.2-1.1c2.1,0.2,4.3,0.2,6.4,0c1.9-0.3,3.8,0,5,1.1 c1.3,1.2,1.8,2.8,1.5,5.1c-0.2,2.1-0.2,4.3,0,6.4c0.3,1.9,0,3.8-1.1,5c-1.2,1.3-2.8,1.8-5.1,1.5c-2.1-0.2-4.3-0.2-6.4,0 c-1.9,0.3-3.8,0-5-1.1c-1.3-1.2-1.8-2.8-1.5-5.1C3.8,12.5,3.8,10.3,3.6,8.2z"></path>
      <circle cx="12" cy="12" r="4.2"></circle>
      <circle cx="18.3" cy="5.7" r="1.1"></circle>
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.5,4.4c-0.3,1.3-1.6,2.6-3,3.3C19.3,7,20,6,20.5,4.8c-1.1,0.6-2.3,1-3.6,1.2C16,5,14.8,4.5,13.5,4.5 c-2.5,0-4.5,2-4.5,4.5c0,0.3,0,0.7,0.1,1c-3.7-0.2-7-2-9.2-4.7c-0.6,1.1-0.7,2.4-0.4,3.6c0.8,1.4,2.3,2.5,4,2.9 c-0.8,0-1.6-0.2-2.3-0.6c0,0,0,0.1,0,0.1c0,2.3,1.6,4.3,3.8,4.8c-0.7,0.2-1.5,0.2-2.2,0.1c0.6,1.9,2.5,3.4,4.6,3.4 c-2,1.6-4.5,2.3-7,2.1c3,1.9,6.5,2.9,10,2.5c7-0.4,11.5-5.9,11.9-12.2c0.8-0.6,1.5-1.3,2.1-2.2L21.5,4.4z"></path>
    </svg>
  );
}

export function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M7.2 15.9c3.1-1 7.1-.6 9.6.5" strokeWidth="1.4" />
      <path d="M7 13c2.7-.7 6.3-.4 8.5.6" strokeWidth="1.3" />
      <path d="M6.8 10.2c2.3-.5 5.5-.3 7.4.5" strokeWidth="1.2" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21,7.3c-0.2-0.8-0.8-1.4-1.6-1.6C18.2,5.5,12,5.5,12,5.5s-6.2,0-7.4,0.2C3.8,5.9,3.2,6.5,3,7.3 C2.8,8.5,2.8,12,2.8,12s0,3.5,0.2,4.7c0.2,0.8,0.8,1.4,1.6,1.6c1.2,0.2,7.4,0.2,7.4,0.2s6.2,0,7.4-0.2 c0.8-0.2,1.4-0.8,1.6-1.6c0.2-1.2,0.2-4.7,0.2-4.7S21.2,8.5,21,7.3z M10,14.8V9.2l4.4,2.8L10,14.8z"></path>
    </svg>
  );
}
