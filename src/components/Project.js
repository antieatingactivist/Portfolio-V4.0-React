import Image from './Image';

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

export default function Project(props) {
    
    return (
        <section style = {projectStyle}>
            <h2>
                <span>./</span>{props.project.name}
            </h2>
            <div style={imageFrameStyle}>
                <Image src={props.project.imgSrc} />
            </div>
            <p>
                {props.project.description}
            </p>
            <a href={props.project.gitHub}  target="_blank" rel="noopener noreferrer">Project on GitHub</a>
            <a href={props.project.liveLink} target="_blank" rel="noopener noreferrer">Live Link</a>
        </section>
    );
  }