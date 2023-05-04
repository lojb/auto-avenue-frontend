import React from 'react'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h3>Username</h3>
            <input type={"text"}/>
            <h3>Password</h3>
            <input type={"text"}/>
            <button>Login</button>
            <a href="/register">
                <button>Register</button>
            </a>
        </div>
    )
}

export default Login