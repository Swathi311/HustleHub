import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../images/bg1.jpg';

import '../styles/login.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto body-container">
            <h2 className='login-h2'>LOGIN</h2>
            <form action="/home">
                <p>
                    <label><em>Username or email address</em></label>
                    <input type="text" name="first_name" className="input-box" required />
                </p>
                <p>
                    <label><em>Password</em></label>
                    <input type="password" name="password" className="input-box" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" to="/landing">Login</button>
                </p>
            </form>

        </div>
    )
}