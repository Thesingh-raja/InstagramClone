import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Login from '../pages/login';

export default function ProtectedRoute({ user, component, ...rest }) {
    console.log(rest)
    return (
        <Routes>
            <Route {...rest} element={user ? component : <Login />}/>
        </Routes>
    );
}