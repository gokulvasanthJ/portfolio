import React from 'react'
import '../Styles/Connect.css'

function Connect() {
  return <>
    <div id="connect" className='connect-section'>
<div className='connect-heading'>Connect</div>

<div className='connect-container'>
  <div className='social-media'>
    <div className='social-media-heading'>Keep Touch <i class="fa-regular fa-heart" style={{color: '#f08989'}}></i></div>
    <div  className='social-media-icons'>
    <div className='social-medias'>
    <a className='linkedin' href='https://www.linkedin.com/in/contact-gokul/' target='-blank'><i class="fa-brands fa-linkedin fa-2xl" style={{color: '#000000'}}></i></a>
    <a className='GitHub' href='https://github.com/gokulvasanthJ' target='-blank'><i class="fa-brands fa-github fa-2xl" style={{color: '#000000'}}></i></a>
    </div>
    <div className='social-medias'>
    <a className='Whatsapp' href="https://wa.me/7639495042?text=Hello%20there!" target="-blank"><i class="fa-brands fa-whatsapp fa-2xl" style={{color: '#000000'}}></i></a>
    <a className='Phone' href="tel:+917639495042" ><i class="fa-solid fa-phone fa-xl" style={{color: '#000000'}}></i></a>
    </div>
    <div className='social-medias'>
    <a className='email-social-media' href="mailto:gokul27mech@gmail.com"><i class="fa-solid fa-envelope fa-2xl" style={{color: '#080808'}}></i></a>
    </div>
    </div>
    

  </div>


  <form className='connect-message'>
    <div className='message-box'>
      <label className='contact-icon'><i  class="fa-regular fa-user"></i>&nbsp; Name</label>
      <input className='name' placeholder='Name' required/>

      <label className='contact-icon'><i  class="fa-regular fa-envelope"></i>  &nbsp;Email</label>
      <input className='email' placeholder='Email' required/>

      <textarea className='message' placeholder='Message :)'  required/>
      <button className='msg-send' type='submit'>Send&nbsp;<i class="fa-regular fa-paper-plane"></i></button>
    </div>
  </form>
</div>

</div>

  </>
}

export default Connect