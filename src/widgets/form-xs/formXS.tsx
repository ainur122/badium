import React from 'react';

export type FormProps = {
    children: React.ReactNode
}

export default function FormXS({children}: FormProps) {
    return (
        <div className="w-114 py-14 px-8 flex items-center justify-center flex-col bg-white rounded-md">
            {children}
        </div>
    );
}
