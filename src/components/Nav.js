// import { useEffect, useState } from "react";
import { Link } from "react-scroll";



const navStyle = {
  position: 'absolute',
  padding: '20px',
  right: 0
}
const regular = {
  marginRight: '10px'
}
const highlighted = {
marginRight: '10px',
color: 'yellow'
}


export default function Nav() {

    return (
      <nav style={navStyle}>
            {/* <a style={linkPadding} href="#about"><span>./</span>About</a> */}
            <Link
              style={regular}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            ><span>./</span>About</Link>
            {/* <a style={linkPadding} href="#projects"><span>./</span>Projects</a> */}
            <Link
              style={regular}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            ><span>./</span>Projects</Link>


            {/* <a style={linkPadding} href="#contact"><span>./</span>Contact</a> */}
            <Link
              style={regular}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            ><span>./</span>Contact</Link>

            <a style={regular} href="./assets/pdf/resume.pdf" target="_blank" rel="noopener noreferrer"><span>./</span>Resume</a>

            
      </nav>
    );
  }
  