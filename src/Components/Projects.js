import React from 'react'
import '../Styles/Projects.css'
import image1 from  './pmtool.jpg'
import image2 from  './MMttool.jpg'
import image3 from './quizapp.jpg'
import image4 from  './blogapp.jpg'
import image5 from  './calsi.jpg'
import image6 from './weather.jpg'


function Projects() {
  return <>
    <div id="projects" className='projects-container'>
    <div className='projectpage-tittle'>Project <span style={{color:'rgb(134, 197, 204)',}}>Works</span> </div>
    

     {/* 1project */}
    
    <div className='portfolio-container'>
    <div className='portfolio-box'>
        <img src={image1} alt=''/>
        <div className='portfolio-layer'>
          <div className='project-name'>Project Management Tool</div>          
          <div className='project-list'>
          <div>React</div>
          <div>Node</div>
          <div>Express</div>
          <div>Mongo</div>
          </div>
          <div className='demo-button'>
          <a className='source-button' href='https://github.com/gokulvasanthJ/-Frontend-project-manager-' target='-blank'><i class="fa-brands fa-github"></i></a>
          <a className='source-button' href='https://github.com/gokulvasanthJ/BackEnd_Project-Management-Tool_' target='-blank'><i class="fa-brands fa-github"></i></a>
          <a className='live-button' href='https://projectmanagertool.netlify.app/'  target='-blank'><i class="fa-solid fa-arrow-up-right-from-square" style={{color:' #f5f9ff'}}></i></a>
          </div>
          
          
        </div>
      </div>
    {/* 2 nd project */}
    <div className='portfolio-box'>
        <img src={image2} alt=''/>
        <div className='portfolio-layer'>
          <div className='project-name'>Money Manager</div>          
          <div className='project-list'>
          <div>React</div>
          <div>Node</div>
          <div>Express</div>
          <div>Mongo</div>
          </div>
          <div className='demo-button'>
          <a className='source-button' href='https://github.com/gokulvasanthJ/webcode-2-money-fontend' target='-blank'><i class="fa-brands fa-github"></i></a>
          <a className='source-button' href='https://github.com/gokulvasanthJ/webcode-2-money-backend' target='-blank'><i class="fa-brands fa-github"></i></a>
          <a className='live-button' href='https://moneymanagertool.netlify.app/'  target='-blank'><i class="fa-solid fa-arrow-up-right-from-square" style={{color:' #f5f9ff'}}></i></a>
          </div>
          
          
        </div>
      </div>

    {/* 3rd projecet */}
    <div className='portfolio-box'>
        <img src={image3} alt=''/>
        <div className='portfolio-layer'>
          <div className='project-name'>Quiz App</div>          
          <div className='project-list'>
          <div>HTML</div>
          <div>CSS</div>
          <div>Javascript</div>
          </div>
          <div className='demo-button'>
          <a className='source-button' href='https://github.com/gokulvasanthJ/Quiz-Application-with-Timer-main' target='-blank'><i class="fa-brands fa-github"></i></a>
          <a className='live-button' href='https://quize-app-tool.netlify.app/'  target='-blank'><i class="fa-solid fa-arrow-up-right-from-square" style={{color:' #f5f9ff'}}></i></a>
          </div>
          
          
        </div>
      </div>
    {/* 4 th projecet */}
    <div className='portfolio-box'>
        <img src={image4} alt=''/>
        <div className='portfolio-layer'>
          <div className='project-name'>Blog App</div>          
          <div className='project-list'>
          <div>HTML</div>
          <div>CSS</div>
          <div>Javascript</div>
          <div>React</div>
          </div>
          <div className='demo-button'>
          <a className='source-button' href='https://github.com/gokulvasanthJ/blogingapp' target='-blank'><i class="fa-brands fa-github"></i></a>
          <a className='live-button' href='https://bloging-web-app.netlify.app/'  target='-blank'><i class="fa-solid fa-arrow-up-right-from-square" style={{color:' #f5f9ff'}}></i></a>
          </div>
          
          
        </div>
      </div>

{/* 5 nd project */}
      <div className='portfolio-box'>
        <img src={image5} alt=''/>
        <div className='portfolio-layer'>
          <div className='project-name'>Calculator</div>          
          <div className='project-list'>
          <div>HTML</div>
          <div>CSS</div>
          <div>Javascript</div>
          
          </div>
          <div className='demo-button'>
          <a className='source-button' href='https://github.com/gokulvasanthJ/Calculator-task' target='-blank'><i class="fa-brands fa-github"></i></a>
          <a className='live-button' href='https://calculator-app-tool.netlify.app/'  target='-blank'><i class="fa-solid fa-arrow-up-right-from-square" style={{color:' #f5f9ff'}}></i></a>
          </div>
          
          
        </div>
      </div>
    {/* 6 nd project */}
    <div className='portfolio-box'>
        <img src={image6} alt=''/>
        <div className='portfolio-layer'>
          <div className='project-name'>Weather Webapp</div>          
          <div className='project-list'>
          <div>HTML</div>
          <div>CSS</div>
          <div>Javascript</div>
          </div>
          <div className='demo-button'>
          <a className='source-button' href='https://github.com/gokulvasanthJ/session-task-4-countries-card' target='-blank'><i class="fa-brands fa-github"></i></a>
          <a className='live-button' href='https://weatherapp-tool.netlify.app/'  target='-blank'><i class="fa-solid fa-arrow-up-right-from-square" style={{color:' #f5f9ff'}}></i></a>
          </div>
          
          
        </div>
      </div>
      
    
    </div>



    </div>
  </>
}

export default Projects