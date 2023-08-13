import { NumericFormat } from 'react-number-format';

export function InputCurrency() {
    return (
        <NumericFormat defaultValue="0" thousandSeparator="." decimalSeparator="," 
        className="text-gray-800 w-full text-[32px] tracking-[-1px] font-bold outline-none"/>
    )
}