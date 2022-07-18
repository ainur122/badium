import React from 'react';

export type TextInputProps = {
    placeholder?: string,
    icon?: string,
    disabled?: boolean,
    classList?: string
}


export default function TextInput({placeholder, disabled = false, icon, classList}: TextInputProps) {
    return (
        <input
            className={`hover:bg-grey-3 transition focus:bg-white focus:border-grey-2 border border-transparent px-4.5 pt-4.5
             rounded-md pb-3.5 bg-grey-4 text-black placeholder:text-grey w-full mb-8 ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${classList || ''}`}
            type='text'
            disabled={disabled}
            placeholder={placeholder}/>);
}

