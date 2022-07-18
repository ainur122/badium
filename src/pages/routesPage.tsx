import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Login from './login/login';
import { paths } from './paths';
import ForgotPassword from "./forgot-password/forgot-password";

export default function RoutesPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={paths.auth()} element={<Login/>}/>
                <Route path={paths.forgotPassword()} element={<ForgotPassword/>}/>
                <Route path="*" element={<Navigate to={paths.auth()} replace/>}/>
            </Routes>
        </BrowserRouter>
    );
}
