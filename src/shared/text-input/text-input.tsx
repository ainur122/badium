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
            className={`px-4.5 pt-4.5 rounded-md pb-3.5 bg-grey-4 text-grey w-full mb-8 ${disabled ? 'disabled' : ''} ${classList || ''}`}
            type='text'
            disabled={disabled}
            placeholder={placeholder}/>);
}

