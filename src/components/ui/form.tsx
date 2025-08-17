import * as React from 'react'

// Simplified no-op form helpers (react-hook-form removed)
export const Form: React.FC<{children?: React.ReactNode}> = ({ children }) => <>{children}</>
export const FormField: React.FC<{name?: string; children?: React.ReactNode}> = ({ children }) => <>{children}</>
export const FormItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = (p) => <div {...p} />
export const FormLabel: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = (p) => <label {...p} />
export const FormControl: React.FC<any> = (p) => <div {...p} />
export const FormDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (p) => <p {...p} />
export const FormMessage: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (p) => <p {...p} />
export const useFormField = () => ({})
