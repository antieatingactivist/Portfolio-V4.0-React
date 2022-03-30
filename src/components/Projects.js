
import Project from './Project';
import projectData from '../assets/json/project-data';



const projectsStyle = {
    transition: 'all 2s',
    padding: '35vh 10px 50vh 10px'
}



export default function Projects({scrollPosition, windowHeight, windowWidth, setOnScreenProject}) {

  
    return (
        <section style={projectsStyle} >
            <h1 id="projects" style={{textAlign: windowWidth < 500 ? 'center' : 'left'}}>Projects</h1>
            
            {projectData.map(project => (
          
             
                    <Project scrollPosition={scrollPosition} project={project} windowHeight={windowHeight} windowWidth={windowWidth} setOnScreenProject={setOnScreenProject} key={project.name}/>
             
            ))}
        </section>
    );
}