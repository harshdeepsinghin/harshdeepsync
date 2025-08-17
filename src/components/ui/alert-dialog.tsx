// Alert dialog removed; export minimal placeholders.
import * as React from 'react'
export const AlertDialog: React.FC<{children?: React.ReactNode}> = ({ children }) => <>{children}</>
export const AlertDialogTrigger: React.FC<any> = (p) => <button {...p} />
export const AlertDialogPortal: React.FC<any> = (p) => <div {...p} />
export const AlertDialogOverlay: React.FC<any> = (p) => <div {...p} />
export const AlertDialogContent: React.FC<any> = (p) => <div {...p} />
export const AlertDialogHeader: React.FC<any> = (p) => <div {...p} />
export const AlertDialogFooter: React.FC<any> = (p) => <div {...p} />
export const AlertDialogTitle: React.FC<any> = (p) => <h2 {...p} />
export const AlertDialogDescription: React.FC<any> = (p) => <p {...p} />
export const AlertDialogAction: React.FC<any> = (p) => <button {...p} />
export const AlertDialogCancel: React.FC<any> = (p) => <button {...p} />
