import * as React from "react"

import { cn } from "@/lib/utils"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right"
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, side = "left", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex h-full w-64 flex-col border-r bg-background",
        side === "right" && "border-l border-r-0",
        className
      )}
      {...props}
    />
  )
)
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between p-6", className)}
    {...props}
  />
))
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-1 overflow-auto p-6", className)} {...props} />
))
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
))
SidebarFooter.displayName = "SidebarFooter"

export { Sidebar, SidebarHeader, SidebarContent, SidebarFooter }
