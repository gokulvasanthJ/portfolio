import React from 'react'
import '../Styles/Achievement.css'
import image from'./achievementimages.jpg'
import image1 from '../Components/certificates/Guvi.png'
import image2 from '../Components/certificates/tnhack.jpeg'
import image3 from '../Components/certificates/computra.jpeg'
import image4 from '../Components/certificates/scolar.jpeg'

function Achievement() {
  return <>
    <div id="achievement" className='achievement-container'>
      <div className='Achievement-heading'>Achieve<span  style={{color:'  black',textShadow:'1px 1px 1px white'}}>ment</span></div>
      <div className='overall-content'>
      
<div className='achievement-img-box' >
<img className='achievement-img' src={image} alt=''/>
</div>
<div className='achievement-contents'>

<div className='content-box12'>
{/* box-1 */}
  <div className='content-box'>
    
    <div className='certifications'>
      <div className='content-heading'>Guvi</div>
      <hr></hr>
      <div className='describe'>MERN-Stack<br></br>
      Certification</div>
      <hr></hr>
    <a download='guvi' href={image1}>Visit</a>
    </div>

    
  </div>

  {/* box-2 */}
<div className='content-box'>
    
    <div className='certifications'>
      <div className='content-heading'>Techno Hacks</div>
      <hr></hr>
      <div className='describe'>Web Developer<br></br>
      Certification</div>
      <hr></hr>
      <a download='Techno Hacks' href={image2}>Visit</a>
    </div>

    
  </div>
  </div>

  {/* //// */}
  <div className='content-box34'>
  {/* box-3 */}
<div className='content-box'>
    
    <div className='certifications'>
      <div className='content-heading'>Computira</div>
      <hr></hr>
      <div className='describe'>Full-Stack Developer<br></br>
      Certification</div>
      <hr></hr>
      <a download='Computira' href={image3}>Visit</a>
    </div>

    
  </div>
{/* box-4 */}
<div className='content-box'>
    
<div className='certifications'>
      <div className='content-heading'>The ScholarHat</div>
      <hr></hr>
      <div className='describe'>Front-End Workshop<br></br>
      Certification</div>
      <hr></hr>
      <a download='ScholarHat' href={image4}>Visit</a>
    </div>

    
  </div>
</div>

</div>
</div>

    </div>
  </>
}

export default Achievement