import React from 'react';
import Header from '../elements/Header';
import Intro from '../elements/Intro';
import IntroHeadings from '../IntroHeadings';
import Carousell from '../elements/Carousel';
import AccButton from '../elements/AccButton';
import introImg1 from '../images/introImg1.png';
import introImg2 from '../images/introImg2.jpeg';
import introImg3 from '../images/introImg3.png';
import introImg4 from '../images/introImg4.png';
import '../styles/home.css'

function HomePage() {


  const buttonNames = [
    {
    name:"Sign-up",
    link:"/register"
    },
    
    {
    name: "Login",
    link: "/login"
    }
  ];

  return (
    <div className='container-fluid'>
      
      <Header/>
      <div className='introHead'>
        One stop for you to<br/> stay on track.
      </div>
      <Intro head={IntroHeadings[0].head} content={IntroHeadings[0].content} id={IntroHeadings[0].id} image={introImg1}/>
      <Intro head={IntroHeadings[1].head} content={IntroHeadings[1].content} id={IntroHeadings[1].id} image={introImg2}/>
      <Intro head={IntroHeadings[2].head} content={IntroHeadings[2].content} id={IntroHeadings[2].id} image={introImg3}/>
      <Intro head={IntroHeadings[3].head} content={IntroHeadings[3].content} id={IntroHeadings[3].id} image={introImg4}/>

      <div className='accButton'>
        <p className='para'>Take minimal efforts to get your life organized and be focused.
          Have a predetermined time plan and we'll help you to stick with it.</p>
        <h3 className='head3'>Create a free account or login, and start organizing</h3>
          {buttonNames.map((button) => {
              return <AccButton name={button.name} link={button.link}/>
          })}
      </div>
      <Carousell/>
      <div style={{height:"500px", width:"500px"}}></div>
      
    </div>
  );
}

export default HomePage;
