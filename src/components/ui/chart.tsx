import * as React from "react"

import { cn } from "@/lib/utils"

// Simple chart placeholder component
const Chart = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full h-64 bg-muted rounded-md flex items-center justify-center", className)}
    {...props}
  >
    <span className="text-muted-foreground">Chart Placeholder</span>
  </div>
))
Chart.displayName = "Chart"

export { Chart }
