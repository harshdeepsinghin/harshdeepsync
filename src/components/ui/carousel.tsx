// Placeholder carousel component intentionally minimized.
// Original implementation removed along with embla-carousel-react to slim bundle size.
// Keeping a stub so any leftover imports won't break the build.
import * as React from "react"

export const Carousel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)
export const CarouselContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)
export const CarouselItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)
export const CarouselPrevious: React.FC = () => null
export const CarouselNext: React.FC = () => null
export type CarouselApi = undefined
