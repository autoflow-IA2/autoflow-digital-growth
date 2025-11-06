import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-4 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1",
        outline: "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-[var(--shadow-md)] hover:border-primary hover:-translate-y-1",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-[var(--shadow-md)] hover:-translate-y-1",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-[var(--shadow-sm)]",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-glow)] hover:scale-110 hover:-translate-y-2 font-bold",
        glass: "glass text-primary hover:bg-primary/20 hover:shadow-[var(--shadow-glow)] hover:-translate-y-1",
        gradient: "bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground hover:from-primary/90 hover:via-secondary/90 hover:to-primary/90 shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] hover:scale-105 hover:-translate-y-1 animate-shimmer font-bold",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-10 text-lg",
        xl: "h-16 rounded-2xl px-12 text-xl font-bold",
        icon: "h-12 w-12",
        "2xl": "h-20 rounded-2xl px-16 text-2xl font-black",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
