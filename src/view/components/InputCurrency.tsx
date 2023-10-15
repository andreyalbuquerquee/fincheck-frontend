import { CrossCircledIcon } from '@radix-ui/react-icons';
import { NumericFormat } from 'react-number-format';
import { cn } from '../../app/utils/cn';

interface InputCurrencyProps {
    error?: string;
    value?: string | number;
    onChange?(value: string): void;
}

export function InputCurrency({ error, onChange, value }: InputCurrencyProps) {
    return (
        <div>
            <NumericFormat value={value} onChange={event => onChange?.(event.target.value)} thousandSeparator="." decimalSeparator=","
            className={cn(
                'text-gray-800 w-full text-[32px] tracking-[-1px] font-bold outline-none',
                error && 'text-red-900'
            )}/>

            {error && (
                <div className="flex flex-row gap-2 items-center mt-2 text-red-900">
                    <CrossCircledIcon className=""/>
                    <span className=" text-xs">{error}</span>
                </div>
            )}
        </div>
    )
}