// import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";



export default function Right( {introHidden, aboutHidden} ) {


    const rightStyle = {
        transition: 'all 0.5s',
        position: 'fixed',
        // top: `calc(45vh + ${scrollPosition/-20}px)`,
        top: '0',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1
    };

    const introStyle = {
        marginRight: '10px',
        textAlign: 'right',
        marginTop: '50vh',
        transition: 'all 0.5s'
    }

    const aboutStyle = {
        marginRight: '10px',
        textAlign: 'right',
        marginTop: '50vh',
        transition: 'all 0.5s'
    }

    const projectStyle = {
        marginTop: '30vh',
        transition: 'all 0.5s'
    }
    if (introHidden) {
        introStyle.marginTop = '-35px';
        projectStyle.marginTop = '100vh';
    }
    if (aboutHidden) {
        introStyle.marginTop = '-65px';
        aboutStyle.marginTop = '-30px';
        projectStyle.marginTop = '40vh';
        
    }


    return (
        <aside id="right" style={rightStyle}>
        <section>
            <div style={introStyle}>
                <p><span>{"<<"}</span>Intro</p>
            </div>
            <div style={aboutStyle}>
                <p><span>{"<<"}</span>About</p>
            </div>
            <div style={projectStyle}>
                <p>Projects/</p>
                 
                <p><span>├─</span> <a>Bender's Quiz</a></p>  
                <p><span>├─</span> <a>Weather Widget</a></p>   
                <p><span>├─</span> <a>Sound Lane</a></p>
                <p><span>├─</span> <a>Tetris</a></p>
                <p><span>├─</span> <a>Quizinator</a></p>
                <p><span>├─</span> <a>Portfolio-V2</a></p>
                <p><span>├─</span> <a>Portfolio-V1</a></p>  
            </div>
            
        </section>
  

    </aside>
    );
  }