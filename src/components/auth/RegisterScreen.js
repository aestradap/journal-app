import React from 'react'
import {Link} from "react-router-dom";

export const RegisterScreen = () => {
    return <>
        <h3 className="auth__title">Register</h3>

        <form>
            <input
                type="text"
                placeholder="Name"
                name="name"
                className="auth__input"
                autoComplete="off"
            />

            <input
                type="password"
                placeholder="Password"
                name="password1"
                className="auth__input"
            />

            <input
                type="password"
                placeholder="Confirm"
                name="password2"
                className="auth__input"
            />

            <button
                type="submit"
                className="btn btn-primary btn-block"
            >
                Register
            </button>

            <Link
                className="link"
                to="/auth/login"
            >
                Already registerd?
            </Link>
        </form>
    </>
}
