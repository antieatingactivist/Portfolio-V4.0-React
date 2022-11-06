import Project from "./Project";
import projectData from "../assets/json/project-data.json";
import { CSSProperties } from "react";

type Props = {
    scrollPosition: number,
    windowHeight: number,
    windowWidth: number,
    setOnScreenProject: (project: string) => void,
}

export default function Projects({scrollPosition, windowHeight, windowWidth, setOnScreenProject}: Props) {

    const projectsStyle: CSSProperties = {
        transition: "all 2s",
        padding: windowWidth < 500 ? "10vh 10px 20vh 10px" : "10vh 10px 20vh 10px"
    };
  
    return (
        <section style={projectsStyle} >
            <h1 id="projects" style={{textAlign: windowWidth < 500 ? "center" : "left"}}>Projects</h1>
            {projectData.map(project => (  
                <Project scrollPosition={scrollPosition} project={project} windowHeight={windowHeight} windowWidth={windowWidth} setOnScreenProject={setOnScreenProject} key={project.name}/>    
            ))}
        </section>
    );
}