import { ComponentProps, forwardRef } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons"
import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<'input'> {
    name: string,
    error?: string,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({name, placeholder, error, id, className, ...props}, ref) => {
    const InputId = id ?? name;
    
    return (
        <div className="relative">
            <input name={name} id={InputId} {...props} ref={ref} className={cn('w-full bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 outline-none focus:border-gray-800 transition-all pt-4 placeholder-shown:pt-0 peer', error && '!border-red-900', className)}
            placeholder=" "/>

            <label 
            htmlFor={name} 
            className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700
            peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all">
                {placeholder}
            </label>

            {error && (
                <div className="flex flex-row gap-2 items-center mt-2 text-red-900">
                    <CrossCircledIcon className=""/>
                    <span className=" text-xs">{error}</span>
                </div>
            )}
        </div>
    );
})