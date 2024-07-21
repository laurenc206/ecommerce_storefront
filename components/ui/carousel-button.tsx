import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps 
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CarouselButton = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            className={cn(
                `   
                w-auto
                rounded-full  
                border
                justify-center
                relative
                flex
                items-center
                disabled:cursor-not-allowed
                disabled:opacity-0
                text-white
                font-semibold
                transition
                opacity-50
                `,
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
})

CarouselButton.displayName = "Button";

export default CarouselButton;