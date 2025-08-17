// Radix checkbox removed; provide minimal native input replacement.
import * as React from 'react'

export const Checkbox = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<'input'>>(({ className, ...props }, ref) => (
  <input ref={ref} type="checkbox" className={className} {...props} />
))
Checkbox.displayName = 'Checkbox'
