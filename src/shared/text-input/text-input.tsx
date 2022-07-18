import React from 'react';

export type TextInputProps = {
    placeholder?: string,
    icon?: string,
    disabled?: boolean,
    classList?: string,
    errorText?: string;
}


export default function TextInput({placeholder, disabled = false, icon, classList, errorText}: TextInputProps) {
    return (
        <div className='relative w-full'>
            <input
                className={`
                ${errorText ? 'placeholder:text-red border-red focus:text-black' : 'placeholder:text-grey border-transparent'}
                ${!disabled || 'cursor-not-allowed opacity-50'}
                ${classList || ''}
                hover:bg-grey-3 transition focus:bg-white focus:border-grey-2  border  px-4.5 pt-4.5
             rounded-md pb-3.5 bg-grey-4  text-black w-full mb-8  
             `}
                type='text'
                disabled={disabled}
                placeholder={placeholder}/>
            <div className='absolute text-jennifer text-red bottom-1 left-4.5'>{errorText}</div>
        </div>);
}

