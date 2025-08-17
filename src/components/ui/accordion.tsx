// Stubbed accordion (Radix dependency removed)
import * as React from 'react'
export const Accordion: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...p }) => <div {...p}>{children}</div>
export const AccordionItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...p }) => <div {...p}>{children}</div>
export const AccordionTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...p }) => <button type="button" {...p}>{children}</button>
export const AccordionContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...p }) => <div {...p}>{children}</div>
