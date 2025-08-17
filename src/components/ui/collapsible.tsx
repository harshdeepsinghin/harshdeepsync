import * as React from 'react'
export const Collapsible: React.FC<{children?: React.ReactNode}> = ({ children }) => <>{children}</>
export const CollapsibleTrigger: React.FC<any> = (p) => <button {...p} />
export const CollapsibleContent: React.FC<any> = (p) => <div {...p} />
