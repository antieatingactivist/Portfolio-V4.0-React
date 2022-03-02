import React from 'react';

export default function Nav() {
    const navStyle = {
        position: 'absolute',
        padding: '20px',
        right: 0
      }
    const linkPadding = {
        marginRight: '10px'
    }
    return (
      <nav style={navStyle}>
            <a style={linkPadding} href="#about"><span>./</span>About</a>
            <a style={linkPadding} href="#projects"><span>./</span>Projects</a>
            <a style={linkPadding} href="#contact"><span>./</span>Contact</a>
            <a style={linkPadding} href="./assets/pdf/resume.pdf" target="_blank" rel="noopener noreferrer"><span>./</span>Resume</a>
      </nav>
    );
  }
  