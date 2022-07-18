import React from 'react';
import FormXS from "../../widgets/form-xs/formXS";
import logo from "../../assets/img/logo.svg";
import google from "../../assets/img/google.svg";
import facebook from "../../assets/img/facebook.svg";
import TextInput from "../../shared/text-input/text-input";
import { paths } from "../paths";
import { Link } from "react-router-dom";
import Button from "../../shared/button/button";

export type AuthProps = {};


export default function Login({}: AuthProps) {
    return <div className="flex items-center justify-center h-screen">
        <FormXS>
            <img className='fill-black w-28 mb-15' src={logo} alt=""/>
            <TextInput placeholder='Email'/>
            <TextInput placeholder='Password'/>
            <Link className='self-end mb-8' to={paths.forgotPassword()}>Forgot your password?</Link>
            <div className='w-3/5 mx-auto mb-15'>
                <Button>Login</Button>
            </div>
            <div className="flex justify-between items-center gap-2.5 w-full mb-8">
                <div className="border border-grey-4 h-px flex-grow"/>
                <div className="text-grey text-h2">Or login with</div>
                <div className="border border-grey-4 h-px flex-grow"/>
            </div>
            <div className="flex gap-8">
                <div className="rounded-full p-3.5 bg-grey-4 ">
                    <img src={facebook} alt="facebook"/>
                </div>
                <div className="rounded-full p-3.5 bg-grey-4 ">
                    <img src={google} alt="goggle"/>
                </div>
            </div>
        </FormXS>
    </div>;
}
