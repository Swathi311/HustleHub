import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home";
import IncomePage from "./pages/income";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./elements/today/Home" ; 
import Weekly from "./elements/week/Weekly";
import TopNav from "./elements/today/TopNav";
export default function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/incometracker" element={ <IncomePage /> } />
                    <Route path="/landing" element={ <LandingPage /> } />
                    <Route path="/login" element={ <SignInPage /> } />
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/habittracker" element={<Home />} />
                    <Route path="/weekly" element={<Weekly />} />
                    {/*<Route path="/forget-password" element={ <ForgetPasswordPage /> } />*/}
                </Routes>
        </Router>
    )
}


