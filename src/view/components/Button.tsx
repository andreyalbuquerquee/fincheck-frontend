import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
    return (
        <button {...props} className="font-medium text-white tracking-[-0.5px] bg-teal-900 rounded-2xl h-12 px-6 mt-2 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all active:bg-emerald-900" type="submit"></button>
    );
}