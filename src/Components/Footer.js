import React from 'react'
import '../Styles/Footer.css'
// import image from '../Components/logoimg.png'

function Footer() {
  return <>
    <div className='footer-container'>
    
        <div className='personal-details'>
        <div className="footer-logo">
        <div  className="logos" >v</div>
      </div>
<div className='navigation'>
<a href="#about">ABOUT</a>
<a href="#skills">SKILLS</a>
<a href="https://drive.google.com/file/d/1vDm6a7Y2-QbyRRbow1L09tROB48L-1w8/view?usp=sharing" target='-blank'>RESUME</a>
</div>
<div className='contact-info'>
  <ul>
  <div><i class="fa-solid fa-phone fa-l" style={{color: 'white'}}></i> &nbsp;<a className='Phone-footer' href="tel:+917639495042" >+91-7639495042</a></div>
 <div> <i class="fa-solid fa-envelope fa-l" style={{color: 'white'}}></i> &nbsp;<a className='email-footer' href="mailto:gokul27mech@gmail.com">gokul27mech@gmail.com</a></div>
<div><i class="fa-brands fa-linkedin fa-l" style={{color: 'white'}}></i> &nbsp;<a className='linkedin-footer' href='https://www.linkedin.com/in/contact-gokul/' target='-blank'>Linked in</a></div>
  </ul>
</div>
</div>
<hr className='hr-footer'></hr>
<div  className='social-footer-icons'>
    
    <a className='linkedin-footer' href='https://www.linkedin.com/in/contact-gokul/' target='-blank'><i class="fa-brands fa-linkedin fa-sm" style={{color: 'white'}}></i></a>
    <a className='GitHub-footer' href='https://github.com/gokulvasanthJ' target='-blank'><i class="fa-brands fa-github fa-sm" style={{color: 'white'}}></i></a>
   
    
    <a className='Whatsapp-footer' href="https://wa.me/7639495042?text=Hello%20there!" target="-blank"><i class="fa-brands fa-whatsapp fa-sm" style={{color: 'white'}}></i></a>
    <a className='Phone-footer' href="tel:+917639495042" ><i class="fa-solid fa-phone fa-sm" style={{color: 'white'}}></i></a>
    
    
    <a className='email--footer' href="mailto:gokul27mech@gmail.com"><i class="fa-solid fa-envelope fa-sm" style={{color: 'white'}}></i></a>
  
    </div>
<div className='copyright'>
<div> © 2024 Gokul Vasanth. All rights reserved.</div>
</div>

    </div>

  </>
}

export default Footer