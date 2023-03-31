import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../styles/landing.css'
//import BackgroundImage from '../../assets/images/bg1.jpg'


function LandingPage() {

    useEffect(()=>{
        console.log(" ---- inside login ")
    },[])
    return (
        <div>
            <h1 className="main-title text-center">login / register </h1>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;