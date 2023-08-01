import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

interface ButtonProps extends ComponentProps<'button'> {
    isLoading?: boolean,
}

export function Button({ className, isLoading, disabled, ...props}: ButtonProps) {
    return (
        <button {...props} disabled={disabled || isLoading} className={cn('font-medium text-white tracking-[-0.5px] bg-teal-900 rounded-2xl h-12 px-6 mt-2 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all active:bg-emerald-900', className,)} type="submit"></button>
    );
}