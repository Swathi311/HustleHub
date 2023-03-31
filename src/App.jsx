import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import HomePage from './pages/home'
import IncomePage from './pages/income'
import LandingPage from './pages/LandingPage'
import SignInPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage'




export default function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/incometracker" element={ <IncomePage /> } />
                    <Route path="/landing" element={ <LandingPage /> } />
                    <Route path="/login" element={ <SignInPage /> } />
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage /> } />
                </Routes>
        </Router>
    )
}


  