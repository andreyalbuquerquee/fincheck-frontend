import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<'button'> {
    isLoading?: boolean,
}

export function Button({ className, isLoading, disabled, children, ...props}: ButtonProps) {
    return (
        <button {...props} disabled={disabled || isLoading} className={cn('font-medium text-white tracking-[-0.5px] bg-teal-900 rounded-2xl h-12 px-6 mt-2 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all active:bg-emerald-900 flex items-center justify-center', className,)} type="submit">
            {!isLoading && children}
            {isLoading && <Spinner className="h-6 w-6"/>}
        </button>
    );
}