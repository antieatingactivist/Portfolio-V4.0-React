// import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import projectData from '../assets/json/project-data';
import { Link } from "react-scroll";



export default function Right( {windowHeight, introHidden, aboutHidden, onScreenProject } ) {


    const rightStyle = {
        transition: 'all 0.5s cubic-bezier(.4,.43,0,1.23)',
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
        transition: 'all 0.5s cubic-bezier(.4,.43,0,1.23)'
    }

    const aboutStyle = {
        marginRight: '10px',
        textAlign: 'right',
        marginTop: '50vh',
        transition: 'all 0.5s cubic-bezier(.4,.43,0,1.23)'
    }

    const projectStyle = {
        marginTop: '30vh',
        transition: 'all 0.5s cubic-bezier(.4,.43,0,1.23)'
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
        <code>
            <section>
                <div style={introStyle}>
                    <p><span className="accent">{"<< "}</span>Intro</p>
                </div>
                <div style={aboutStyle}>
                    <p><span className="accent">{"<< "}</span>About</p>
                </div>
                <div style={projectStyle}>
                    <p>Projects/</p>
                    {projectData.map(project => (
                        
                
                            <p key={project.name}>
                                { project.name===onScreenProject ? <span className="accent">&lt;&lt;&nbsp;</span> : <span className="accent">&nbsp;├─</span>} 
            
                                <Link
                                    
                                    activeClass="active"
                                    to={project.name}
                                    spy={true}
                                    smooth={true}
                                    offset={windowHeight/-4}
                                    duration={500}
                                >{project.name}
                                </Link>
                            </p> 
                    ))}
                    
                
                </div>
                
            </section>
        </code>
  

    </aside>
    );
  }