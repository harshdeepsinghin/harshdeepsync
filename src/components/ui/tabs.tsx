import * as React from 'react'
export const Tabs: React.FC<{children?: React.ReactNode}> = ({ children }) => <>{children}</>
export const TabsList: React.FC<any> = (p) => <div {...p} />
export const TabsTrigger: React.FC<any> = (p) => <button {...p} />
export const TabsContent: React.FC<any> = (p) => <div {...p} />
