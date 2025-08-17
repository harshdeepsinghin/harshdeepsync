import * as React from 'react'
export const Avatar: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (p) => <img {...p} />
export const AvatarImage = Avatar
export const AvatarFallback: React.FC<React.HTMLAttributes<HTMLDivElement>> = (p) => <div {...p} />
