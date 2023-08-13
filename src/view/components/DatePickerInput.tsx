import { CrossCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../../app/utils/cn";
import { useState } from "react";
import { formatDate } from "../../app/utils/formatDate";
import { Popover } from "./Popover";
import { DatePicker } from "./DatePicker";

interface DatePickerInputProps {
    error?: string;
    className?: string;
}

export function DatePickerInput({error, className}: DatePickerInputProps) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <Popover.Root>
            <Popover.Trigger>
            <button type="button" className={cn('w-full bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-700 outline-none focus:border-gray-800 transition-all text-left relative pt-4', 
                error && '!border-red-900', 
                className
                )}>
                <span className="text-gray-700 text-xs left-[13] top-2 pointer-events-none absolute">Data</span>
                <span>{formatDate(selectedDate)}</span>
                </button>
            </Popover.Trigger>
            <Popover.Content>
                <DatePicker value={selectedDate} onChange={date => setSelectedDate(date)}/>
            </Popover.Content>
            </Popover.Root>

                {error && (
                <div className="flex flex-row gap-2 items-center mt-2 text-red-900">
                <CrossCircledIcon/>
                <span className=" text-xs">{error}</span>
                </div>
        )}
        </div>
    )
}