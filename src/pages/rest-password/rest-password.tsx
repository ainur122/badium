import React from 'react';
import FormXS from "../../widgets/form-xs/formXS";
import TextInput from "../../shared/text-input/text-input";
import Button from "../../shared/button/button";
import { Link } from "react-router-dom";
import { paths } from "../paths";

export type RestPasswordProps = {}

export default function RestPassword({}: RestPasswordProps) {
    return <div className="flex items-center justify-center min-h-screen p-8">
        <FormXS>
            <div className="text-mallory mb-8">Create a new password</div>
            <div className='text-cate text-center mb-15'>
                Think of a strong password, use special characters for more security.
            </div>
            <TextInput placeholder='New password'/>
            <TextInput placeholder='Confirm password'/>
            <div className='w-3/5 mx-auto'>
                <Link to={paths.auth()}><Button>Continue</Button></Link>
            </div>
        </FormXS>
    </div>;
}
