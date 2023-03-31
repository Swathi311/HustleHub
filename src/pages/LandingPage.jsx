import React from 'react';
import Header from './Header';
import Intro from './Intro';
import IntroHeadings from '../IntroHeadings';
import AccButton from './AccButton';
import introImg1 from '../images/introImg1.png'; 
import introImg2 from '../images/introImg2.jpeg';
import introImg3 from '../images/introImg3.png'; 
import introImg4 from '../images/introImg4.png'; 
import {Routes, Route} from 'react-router-dom';

function LandingPage() {


  const buttonNames = ["TODO","HABIT TRACKER","TIMER","INCOME TRACKER"];

  return (
    <div className='container-fluid'>
      
      <Header/>
      
        <Intro id={IntroHeadings[0].id} image={introImg1}/>
        <div className='landingButtons'>
            <p>{IntroHeadings[0].content}</p>
            <AccButton name={buttonNames[0]}/>
        </div>
      
        <Intro id={IntroHeadings[1].id} image={introImg2}/>
        <div className='landingButtons'>
            <p>{IntroHeadings[1].content}</p>
            <AccButton name={buttonNames[1]}/>
        </div>

        <Intro id={IntroHeadings[2].id} image={introImg3}/>
        <div className='landingButtons'>
            <p>{IntroHeadings[2].content}</p>
            <AccButton name={buttonNames[2]}/>
        </div>

        <Intro id={IntroHeadings[3].id} image={introImg4}/>
        <div className='landingButtons'>
            <p>{IntroHeadings[3].content}</p>
            <AccButton name={buttonNames[3]}/>
        </div>
      
      
      <div style={{height:"500px", width:"500px"}}></div>
    </div>
  );
}

export default LandingPage;
