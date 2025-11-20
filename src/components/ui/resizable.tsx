import * as React from "react"

import { cn } from "@/lib/utils"

// Simple resizable component
const Resizable = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("relative", className)} {...props} />
))
Resizable.displayName = "Resizable"

const ResizablePanel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
ResizablePanel.displayName = "ResizablePanel"

const ResizableHandle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-px bg-border hover:bg-border-hover cursor-col-resize", className)}
    {...props}
  />
))
ResizableHandle.displayName = "ResizableHandle"

export { Resizable, ResizablePanel, ResizableHandle }
