import * as React from 'react'
export const ScrollArea: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => <div {...props}>{children}</div>
export const ScrollBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => <div {...props} />
