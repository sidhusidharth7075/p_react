import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/image.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Sidhu is a skilled Computer Science and Engineering graduate with expertise in frontend and backend development, specializing in Java, C++, DSA, and SQL.</p>
                    <p>They are a content creator for The Curious Mind - TCM and DebugLife, exploring psychology, technology, and software development.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>PYTHON</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>C++</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Dart</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>0+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About