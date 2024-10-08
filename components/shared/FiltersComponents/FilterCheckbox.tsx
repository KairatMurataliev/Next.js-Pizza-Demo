import React from 'react';
import {Checkbox} from "@/components/ui";

export interface FilterCheckboxProps {
    className?: string;
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
    name?: string
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({text, value, endAdornment, onCheckedChange, checked, name}) => {
    return (
        <div className='flex items-center space-x-2'>
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className='rounded-[8px] w-6 h-6'
                id={`checkbox-${String(name)}-${String(value)}`}
            />
            <label htmlFor={`checkbox-${String(name)}-${String(value)}`} className='flex-1 cursor-pointer leading-none'>
                {text}
            </label>
            {endAdornment}
        </div>
    )
};