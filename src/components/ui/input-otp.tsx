import * as React from "react"

import { cn } from "@/lib/utils"

// Simple input OTP component
const InputOTP = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    maxLength?: number
    containerClassName?: string
  }
>(({ className, type = "text", maxLength = 6, containerClassName, ...props }, ref) => {
  return (
    <div className={cn("flex items-center gap-2", containerClassName)}>
      <input
        type={type}
        maxLength={maxLength}
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
})
InputOTP.displayName = "InputOTP"

export { InputOTP }
