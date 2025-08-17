import * as React from 'react'
export const Progress: React.FC<{ value?: number; max?: number; className?: string }> = ({ value = 0, max = 100, className }) => (
  <progress className={className} value={value} max={max} />
)
Progress.displayName = 'Progress'
