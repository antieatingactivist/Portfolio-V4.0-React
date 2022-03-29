
import Project from './Project';
import projectData from '../assets/json/project-data';



const projectsStyle = {
    transition: 'all 2s',
    padding: '35vh 0 50vh 0'
}



export default function Projects({scrollPosition, windowHeight, setOnScreenProject}) {

  
    return (
        <section style={projectsStyle} >
            <h1 id="projects"><span></span>Projects</h1>
            
            {projectData.map(project => (
          
             
                    <Project scrollPosition={scrollPosition} project={project} windowHeight={windowHeight} setOnScreenProject={setOnScreenProject} key={project.name}/>
             
            ))}
        </section>
    );
}