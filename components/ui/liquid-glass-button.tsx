
"use client"
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const liquidbuttonVariants = cva(
  "inline-flex items-center transition-all justify-center cursor-pointer gap-2 whitespace-nowrap rounded-sm text-sm font-bold uppercase tracking-widest transition-[color,box-shadow,transform] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: "bg-transparent text-white",
        primary: "bg-[#00f5ff] text-black",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 text-xs px-4",
        lg: "h-12 px-8",
        xl: "h-14 px-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter id="container-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="70" xChannelSelector="R" yChannelSelector="B" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

export function LiquidButton({
  className, variant, size, children, ...props
}: React.ComponentProps<"button"> & VariantProps<typeof liquidbuttonVariants>) {
  return (
    <button
      className={cn("relative group", liquidbuttonVariants({ variant, size, className }))}
      {...props}
    >
      <div className="absolute inset-0 z-0 h-full w-full rounded-sm 
          shadow-[inset_0_0_10px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.5)] 
          transition-all border border-white/10 group-hover:border-white/30" />
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-sm" style={{ backdropFilter: 'url("#container-glass")' }} />
      <div className="relative z-10">{children}</div>
      <GlassFilter />
    </button>
  )
}
