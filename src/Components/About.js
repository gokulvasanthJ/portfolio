import React from 'react'
import '../Styles/About.css'
import image from './mypic.jpg'
import "../Styles/splash.jpg"


function About() {
  return<>
  
  <div id="about" className="about-container">
<div className="container-atext">
  <h1>About <span  style={{color:' rgb(16, 118, 91) ',fontWeight:'600'}}>Me</span></h1>
  {/* <p>My Introduction</p> */}

  <div className='aboutme-content'>
&nbsp;&nbsp;&nbsp;&nbsp;🐾Proficient in MERN Stack development, 
I focus on building <span  style={{color:' rgb(16, 118, 91) ',fontSize:'19px',fontWeight:'600'}}>Front-end Websites</span> with user-friendly UI designs. 
Dedicated to creating engaging in Back-end development.
  </div>
  <div className='about-button'>
    <a className='resume-button' href='https://drive.google.com/file/d/10qRycoGfjDHbYaP57LtOY4o8Bp0rnN06/view?usp=drivesdk' target='-blankdi'>Resume&nbsp;&nbsp;<i class="fa-solid fa-download" style={{"color": "#ffffff"}} ></i></a>
    <a className='uncover-button' href='#skills'>Uncover</a>
  </div>
</div>
<div className="container-apic">
<div className='for-splash'>
  <img className="my-image" src={image} alt=''/>
  </div>
</div>
  </div>
  
  
  </>
}

export default About