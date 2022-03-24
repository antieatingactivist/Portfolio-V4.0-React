// import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import resume from "../assets/pdf/resume.pdf";



const navStyle = {
  position: 'absolute',
  padding: '10px',
  right: 0
}
const regular = {
  marginRight: '10px',
  cursor: 'pointer'
}



export default function Nav({windowHeight}) {
    
    return (
      <nav style={navStyle}>
            {/* <a style={linkPadding} href="#about"><span>./</span>About</a> */}
          <code>
            <Link
              style={regular}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={windowHeight/-4}
              duration={500}
            ><span className="accent">./</span>About</Link>
            {/* <a style={linkPadding} href="#projects"><span>./</span>Projects</a> */}
            <Link
              style={regular}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={windowHeight/-4}
              duration={500}
            ><span className="accent">./</span>Projects</Link>


            {/* <a style={linkPadding} href="#contact"><span>./</span>Contact</a> */}
            <Link
              style={regular}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={windowHeight/-4}
              duration={500}
            ><span className="accent">./</span>Contact</Link>

         
            <a style={regular} href={resume} target="_blank" rel="noopener noreferrer"><span className="accent">./</span>Resume</a>

          </code>   
      </nav>
    );
  }
  