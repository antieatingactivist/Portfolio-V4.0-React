import React from 'react';
import Image from './Image';


export default function Project(prop) {
    
    const projectStyle = {
        transition: 'all 2s',
        // padding: '35vh 0 0vh 0'
        position: 'relative',
        marginBottom: '100px'
    }


    const imageFrameStyle = {
        width: '560px',
        borderStyle: 'solid',
        borderColor: 'var(--bgcolor)',
        borderRadius: '0 0 3px 0',
        boxShadow: '11px 7px 0 var(--bgcolor), 12px 8px var(--accentcolor), 16px 16px 10px var(--shadowcolor)' 
    }



    return (
        <section style = {projectStyle}>
            <h2>
                <span>./</span>{prop.project.name}
            </h2>
            <div style={imageFrameStyle}>
                <Image src={prop.project.imgSrc} />
            </div>
            <p>
                {prop.project.description}
            </p>
            <a href={prop.project.gitHub}  target="_blank" rel="noopener noreferrer">Project on GitHub</a>
            <a href={prop.project.liveLink} target="_blank" rel="noopener noreferrer">Live Link</a>
        </section>
    );
  }