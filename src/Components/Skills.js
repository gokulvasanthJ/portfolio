import React from 'react'
import '../Styles/Skills.css'
import  image1 from './skillsimages.png'

function Skills() {
  return <>
  
  <div id="skills" className='skill-container'>
  <div className='skill-heading'>Skills</div>
<div className='skill-container2'>
<div className='fend-container'>

<div className='skill-box'>

<div className='skill-box1'>
<div className='skill-card'>
<i class="fa-brands fa-html5" style={{color: "#ff4000",}}></i>
<div>HTML</div>
<di>Good</di>
</div>

<div className='skill-card'>
<i class="fa-brands fa-css3-alt" style={{color: '#2363d1',}}></i>
<div>CSS</div>
<di>Good</di>
</div>
</div>

<div className='skill-box1'>
<div className='skill-card'>
<i class="fa-brands fa-js" style={{color: '#FFD43B'}}></i><div>Javascript</div>
<di>Strong</di>
</div>

<div className='skill-card'>
<i class="fa-brands fa-bootstrap" style={{color: '#013898'}}></i><div>bootstrap</div>
<di>Good</di>
</div>
</div>

<div className='skill-box1'>
<div className='skill-card'>
<i class="fa-brands fa-react" style={{color: "#1ccce9"}}></i><div>React</div>
<di>Strong</di>
</div>
</div>

</div>

  
  
</div>
<div className='pic-container'>
  <img  className='for-skill-images' src={image1} alt=''/>
</div>
<div className='bed-container'>
  {/* ..... */}
  

<div className='skill-box'>

<div className='skill-box1'>
<div className='skill-card'>
<i class="fa-brands fa-node-js" style={{color: '#1c8223'}}></i><div>NodeJS</div>
<di>Good</di>
</div>

<div className='skill-card'>
<i class="fa-solid fa-e" style={{color: '#64421b'}}></i><div>Express</div>
<di>Good</di>
</div>
</div>

<div className='skill-box1'>
<div className='skill-card'>
<i class="fa-solid fa-m" style={{color: '#167614'}}></i><div>Mongo Db</div>
<di>Good</di>
</div>

<div className='skill-card'>
<i class="fa-solid fa-database" style={{color: '#4788a9'}}></i><div>My SQL</div>
<di>Good</di>
</div>
</div>

<div className='skill-box1'>
<div className='skill-card'>
<i class="fa-brands fa-aws" style={{color: '#f79400'}}></i><div>aws</div>
<di>Basic</di>
</div>
</div>

</div>

  
  

  
  
</div>
</div>




  </div>
  
  </>
}


export default Skills