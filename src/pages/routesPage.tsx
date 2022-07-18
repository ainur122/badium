import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Auth from './auth/auth';
import { paths } from './paths';

export default function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.auth()} element={<Auth />} />
        <Route path="*" element={<Navigate to={paths.auth()} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
