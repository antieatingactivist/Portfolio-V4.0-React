import Image from './Image';
import { useEffect, useRef, useState } from 'react';




export default function Project({project, scrollPosition, windowHeight, windowWidth, setOnScreenProject}) {
    const projectStyle = {
        // transition: 'all 2s',
        // padding: '35vh 0 0vh 0'
        position: 'relative',
        marginBottom: windowWidth < 500 ? '0vh' : '20vh',
        maxWidth: '600px'
    }
    
    
    const imageFrameStyle = {
        position: 'relative',
        maxWidth: '90vw',
        borderStyle: 'solid',
        borderColor: 'var(--bgcolor)',
        borderRadius: '0 0 3px 0',
        backgroundColor: 'var(--bgcolor)',
        boxShadow: windowWidth < 500 ? 'none' : '11px 7px 0 var(--bgcolor), 12px 8px var(--accentcolor), 16px 16px 10px var(--shadowcolor)' ,
        zIndex: '1',
     
    }
    const descriptionStyle = {
    
        position: 'relative',
        fontSize: '.8em',
        backgroundColor: '#33333311',
        padding: '100px 20px 20px 20px',
        top: '-80px',
        left: windowWidth < 500 ? '0px' : '100px',
        maxWidth: '100vw',
        borderRadius: '3px',
        border: '1px solid #33333344',
        boxShadow: '3px 3px 5px var(--shadowcolor)' ,
    
        
    }
   
    
    const projectRef = useRef(null);
    const [projectOffset, setProjectOffset] = useState(0);
    const isHidden = projectOffset < windowHeight/1.5 && projectOffset > -500 ;
    
    useEffect(() => {
        setProjectOffset(projectRef.current.getBoundingClientRect().top);
        
        if (projectOffset<windowHeight/1.5) {
            setOnScreenProject(project.name);
        }

    }, [project.name, projectOffset, scrollPosition, setOnScreenProject, windowHeight]);

    return (
        <section style={ isHidden ? {transition: 'opacity 1.5s', opacity: '1' } : {transition: 'opacity .8s', opacity: '0' }}>
            <div id={project.name} style={projectStyle} ref={projectRef}>
        
                
                <div style={imageFrameStyle}>
                    <h2>
                        <span className="accent">./</span>{project.name}
                    </h2>
                    <Image src={project.imgSrc} />
                </div>
                <div style={ isHidden ? {...descriptionStyle, transitionDuration: '1.5s', opacity: '1', transitionDelay: '.5s' } : {...descriptionStyle, transitionDuration: '.8s', transitionDelay: '.5s', opacity: '0' } }>
                    <p style={ isHidden ? {transitionDuration: '2.5s', opacity: '1', transitionDelay: '1s' } : {transitionDuration: '1.8s', transitionDelay: '1s', opacity: '0' } }>{project.description}</p>
                    <div style={{display: 'flex', justifyContent: windowWidth < 500 ? 'center' : 'flex-end'}}>
                        <a href={project.gitHub}  target="_blank" rel="noopener noreferrer">Project on GitHub</a>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Link</a>
                    </div>
                </div>
                
            </div>
        </section>
    );
  }