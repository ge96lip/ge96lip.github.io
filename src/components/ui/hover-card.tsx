import * as React from "react"

import { cn } from "@/lib/utils"

// Simple hover card component
const HoverCard = ({ children, ...props }: { children: React.ReactNode }) => (
  <div {...props}>{children}</div>
)

const HoverCardTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("cursor-pointer", className)} {...props} />
))
HoverCardTrigger.displayName = "HoverCardTrigger"

const HoverCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = "HoverCardContent"

export { HoverCard, HoverCardTrigger, HoverCardContent }
