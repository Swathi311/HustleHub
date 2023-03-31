import React from 'react'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import HomePage from './pages/home'
import IncomePage from './pages/income'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import MoneyManager from './elements/MoneyManager'



export default function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/incometracker" element={ <IncomePage /> } />
                    <Route path="/landing" element={ <LandingPage /> } />
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage /> } />
                </Routes>
        </Router>
    )
}


// export default function App() {
//     return (
//       <BrowserRouter>

//                     <Route path="/" component={ <HomePage /> } />
//                     <Route path="/incometracker" component={ <IncomePage /> } />
//                     <Route path="/landing" component={ <LandingPage /> } />
//                     <Route path="/login" component={ <LoginPage /> } />
//                     <Route path="/register" component={ <RegisterPage /> } />
//                     <Route path="/forget-password" component={ <ForgetPasswordPage /> } />
//       </BrowserRouter>
//     );
//   }
  