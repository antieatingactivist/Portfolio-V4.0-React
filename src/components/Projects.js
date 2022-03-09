
import Project from './Project';
import projectData from '../assets/js/project-data';



const projectsStyle = {
    transition: 'all 2s',
    padding: '35vh 0 0vh 0'
}



export default function Projects() {
  
    return (
        <section style={projectsStyle} >
            <h1 id="projects"><span></span>Projects</h1>
            
            {projectData.map(project => (
                
              
                    <Project project={project} key={project.name}/>
              
            ))}
        </section>
    );
}