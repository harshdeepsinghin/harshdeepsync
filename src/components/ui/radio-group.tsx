import * as React from 'react'

export const RadioGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => <div {...props}>{children}</div>
export const RadioGroupItem: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => <input type="radio" {...props} />
