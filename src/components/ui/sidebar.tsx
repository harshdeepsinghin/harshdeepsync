// Minimal sidebar component stubs (original implementation removed).
import * as React from 'react'

export const SidebarProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => <>{children}</>
export const Sidebar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => <div {...props}>{children}</div>
export const SidebarTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => <button type="button" {...props}>{children}</button>
export const SidebarInset: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => <div {...props}>{children}</div>
export const useSidebar = () => ({ state: 'collapsed' as const })

// Legacy named exports kept for safety (no-op aliases)
export const SidebarContent = Sidebar
export const SidebarFooter = Sidebar
export const SidebarGroup = Sidebar
export const SidebarGroupAction: React.FC<any> = (p) => <div {...p} />
export const SidebarGroupContent = Sidebar
export const SidebarGroupLabel = Sidebar
export const SidebarHeader = Sidebar
export const SidebarInput: React.FC<any> = (p) => <input {...p} />
export const SidebarMenu: React.FC<any> = (p) => <ul {...p} />
export const SidebarMenuAction: React.FC<any> = (p) => <button {...p} />
export const SidebarMenuBadge: React.FC<any> = (p) => <span {...p} />
export const SidebarMenuButton: React.FC<any> = (p) => <button {...p} />
export const SidebarMenuItem: React.FC<any> = (p) => <li {...p} />
export const SidebarMenuSkeleton: React.FC<any> = (p) => <div {...p} />
export const SidebarMenuSub: React.FC<any> = (p) => <ul {...p} />
export const SidebarMenuSubButton: React.FC<any> = (p) => <a {...p} />
export const SidebarMenuSubItem: React.FC<any> = (p) => <li {...p} />
export const SidebarRail: React.FC<any> = (p) => <div {...p} />
export const SidebarSeparator: React.FC<any> = (p) => <div {...p} />
