import React from 'react';
import Header from './Header';
import Intro from './Intro';
import IntroHeadings from '../IntroHeadings';
import Carousell from './Carousel';
import AccButton from './AccButton';
import introImg1 from '../images/introImg1.png'; 
import introImg2 from '../images/introImg2.jpeg';
import introImg3 from '../images/introImg3.png'; 
import {Routes, Route} from 'react-router-dom';

function App() {


  const buttonNames = ["Sign-up","Login"];

  return (
    <div className='container-fluid'>
      
      <Header/>
      <div className='introHead'>
        One stop for you to<br/> stay on track.
      </div>
      <Intro head={IntroHeadings[0].head} content={IntroHeadings[0].content} id={IntroHeadings[0].id} image={introImg1}/>
      <Intro head={IntroHeadings[1].head} content={IntroHeadings[1].content} id={IntroHeadings[1].id} image={introImg2}/>
      <Intro head={IntroHeadings[2].head} content={IntroHeadings[2].content} id={IntroHeadings[2].id} image={introImg3}/> 

      <div className='accButton'>
        <p className='para'>Take minimal efforts to get your life organized and be focused.
          Have a predetermined time plan and we'll help you to stick with it.</p>
        <h3 className='head3'>Create a free account or login, and start organizing</h3>
          {buttonNames.map((button) => {
            return <AccButton name={button}/>
          })}
      </div>
      <Carousell/>
      <div style={{height:"500px", width:"500px"}}></div>
    </div>
  );
}

export default App;
