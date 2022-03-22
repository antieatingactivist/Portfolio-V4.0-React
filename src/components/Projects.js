
import Project from './Project';
import projectData from '../assets/js/project-data';



const projectsStyle = {
    transition: 'all 2s',
    padding: '35vh 0 0vh 0'
}



export default function Projects({scrollPosition, windowHeight}) {

  
    return (
        <section style={projectsStyle} >
            <h1 id="projects"><span></span>Projects</h1>
            
            {projectData.map(project => (
                <>
             
                    <Project scrollPosition={scrollPosition} project={project} windowHeight={windowHeight} key={project.name}/>
                </>
            ))}
        </section>
    );
}