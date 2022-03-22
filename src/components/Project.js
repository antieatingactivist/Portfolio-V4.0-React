import Image from './Image';
import { useEffect, useRef, useState } from 'react';

const projectStyle = {
    // transition: 'all 2s',
    // padding: '35vh 0 0vh 0'
    position: 'relative',
    marginBottom: '100px',
    width: '600px'
}


const imageFrameStyle = {
    position: 'relative',
    width: '560px',
    borderStyle: 'solid',
    borderColor: 'var(--bgcolor)',
    borderRadius: '0 0 3px 0',
    backgroundColor: 'var(--bgcolor)',
    boxShadow: '11px 7px 0 var(--bgcolor), 12px 8px var(--accentcolor), 16px 16px 10px var(--shadowcolor)' ,
    zIndex: '1',
 
}

const descriptionStyle = {
    position: 'relative',
    fontSize: '.8em',
    backgroundColor: '#33333322',
    padding: '100px 20px 20px 20px',
    top: '-80px',
    left: '100px',
    borderRadius: '3px',
    border: '1px solid #33333388',
    boxShadow: '3px 3px 5px var(--shadowcolor)' ,
    
}

export default function Project({project, scrollPosition, windowHeight, setOnScreenProject}) {
    const projectRef = useRef(null);
    const [projectOffset, setProjectOffset] = useState(0);
    
    useEffect(() => {
        setProjectOffset(projectRef.current.getBoundingClientRect().top);
        
        if (projectOffset<windowHeight/1.2) {
            setOnScreenProject(project.name);
        }

    }, [project.name, projectOffset, scrollPosition, setOnScreenProject, windowHeight])
    return (
        <section style={projectOffset<windowHeight/1.2 ? {transition: 'opacity 1.5s', opacity: '1'} : {transition: 'opacity .8s', opacity: '0'}}>
            <div style ={projectStyle} ref={projectRef}>
        
                <h2>
                    <span>./</span>{project.name}
                </h2>
                <div style={imageFrameStyle}>
                    <Image src={project.imgSrc} />
                </div>
                <div style={descriptionStyle}>
                    <p>{project.description}</p>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <a href={project.gitHub}  target="_blank" rel="noopener noreferrer">Project on GitHub</a>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Link</a>
                    </div>
                </div>
                
            </div>
        </section>
    );
  }