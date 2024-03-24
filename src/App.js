import React from 'react'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Connect from './Components/Connect'
import Navbar from './Components/Navbar'
import Achievement from './Components/Achievement'
import Footer from './Components/Footer'

function App() {
  return <> 
    <div className='app-nav'>
    <Navbar/>
    </div>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/> 
    <Achievement/>
    <Connect/>
    <Footer/>
  </>
}

export default App