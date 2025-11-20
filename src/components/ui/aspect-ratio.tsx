import * as React from "react"

import { cn } from "@/lib/utils"

const AspectRatio = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    ratio?: number
  }
>(({ className, ratio = 1, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative w-full", className)}
    style={{
      paddingBottom: `${100 / ratio}%`,
    }}
  >
    <div className="absolute inset-0" {...props} />
  </div>
))
AspectRatio.displayName = "AspectRatio"

export { AspectRatio }
