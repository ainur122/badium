import React from 'react';

export type AlertProps = {}

export default function Alert({}: AlertProps) {
    return (<div className='flex w-full text-center absolute'>
        <div
            className="bg-red h-15 text-white py-4 px-8 transition translate-y-15 -mt-15 rounded-bl-md rounded-br-md text-center inline-block mx-auto">The
            user
            with the
            specified
            email is
            not registered
        </div>
    </div>);

}
