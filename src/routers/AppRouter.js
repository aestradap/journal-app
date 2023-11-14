import React from 'react'
import {LoginScreen} from "../components/auth/LoginScreen";
import {JournalScreen} from "../components/journal/JournalScreen";
import {RegisterScreen} from "../components/auth/RegisterScreen";
import {Link, Outlet, Route, Routes} from "react-router-dom";

export const AppRouter = () => {
    return <div>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<JournalScreen/>}/>
                <Route
                    path="*"
                    element={
                        <NoMatch/>
                    }
                />

            </Route>
            <Route path="/" element={<AuthLayout/>}>
                <Route
                    path="auth/login"
                    element={
                        <LoginScreen/>
                    }
                />
                <Route
                    path="auth/register"
                    element={
                        <RegisterScreen/>
                    }
                />
                <Route
                    path="auth/*"
                    element={
                        <LoginScreen/>
                    }
                />
            </Route>
        </Routes>
    </div>
}

const Layout = () => {
    return (
        <div>
            <div className='container mt-2'>
                <Outlet/>
            </div>
        </div>
    );
}
const AuthLayout = () => {
    return <div>
            <div className='auth__main'>
                <div className='auth__box-container'>
                    <Outlet/>
                </div>
            </div>
        </div>
}

const NoMatch = () => {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}


