import React from 'react';
import FormXS from "../../widgets/form-xs/formXS";
import TextInput from "../../shared/text-input/text-input";
import { Link } from "react-router-dom";
import { paths } from "../paths";
import Button from "../../shared/button/button";
import arrowLeftIcon from "../../assets/img/icons/arrow-left.svg";

export type ForgotPasswordProps = {}

export default function ForgotPassword({}: ForgotPasswordProps) {
    return <div className="flex items-center justify-center min-h-screen p-8">
        <FormXS>
            <div className="flex mb-8 items-center justify-between w-full">
                <Link className='text-left' to={paths.auth()}><img src={arrowLeftIcon}/></Link>
                <div className="text-mallory self-center ">Reset your password</div>
                <div/>
            </div>
            <div className='text-cate text-center mb-15'>
                Enter the email address associated with your account and we’ll send you a link to reset your password.
            </div>
            <TextInput errorText='Пользователи не найдены' placeholder='Email'/>
            <div className='w-3/5 mx-auto '>
                <Link to={paths.restPassword()}><Button>Continue</Button></Link>
            </div>
        </FormXS>
    </div>;
}
