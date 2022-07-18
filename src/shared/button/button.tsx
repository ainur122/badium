import React from 'react';

export type ButtonProps = {
    children: React.ReactNode,
    disabled?: boolean,
    classList?: string;
}


export default function Button({children, classList, disabled}: ButtonProps) {
    return (<div
        className={`rounded-md bg-brand text-h2 text-white text-center w-full px-8 py-5 cursor-pointer hover:bg-brand-light
         transition-opacity ${classList || ''} ${disabled ? 'disabled' : ''}`}>
        {children}
    </div>);
}
