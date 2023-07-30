import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<'input'> {
    name: string,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({name, placeholder, id, ...props}, ref) => {
    const InputId = id ?? name;
    
    return (
        <div className="relative">
            <input name={name} id={InputId} {...props} ref={ref} className="w-full bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 outline-none focus:border-gray-800 transition-all pt-4 placeholder-shown:pt-0 peer"
            placeholder=" "/>

            <label 
            htmlFor={name} 
            // className="absolute left-[13px] top-3.5 pointer-events-none text-gray-700"
            className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700
            peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all">
                {placeholder}
            </label>
        </div>
    );
})