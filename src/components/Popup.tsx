import { useEffect, useState } from 'react';
import Devicon from './Devicon';
import projectData from '../assets/json/project-data.json';
import technologyDescriptions from '../assets/json/technologies.json';
import { Link } from "react-scroll";

type Props = {
    technology: string,
    setIsActive: Function
}
  


export default function Popup({ technology, setIsActive}: Props) {
    const text = technologyDescriptions[technology as keyof typeof technologyDescriptions] 
    const [opacity, setOpacity] = useState<number>(0);
    const headerStyle = {
        padding: "6px 10px 4px 10px",
        // backgroundColor: "#444444",
        borderBottom: '1px solid var(--accentcolor)',
        display: "flex"
    }
    const popupStyle: object = {
        transitionProperty: 'opacity',
        transitionDuration: '.5s',
        transitionTimingFunction: 'cubic-bezier(0,.11,0,1), ease-in',
        display: "inline",
        position: "absolute",
        // height: "600px",
        width: "400px",
        color: "#ffffff",
        backgroundColor: "var(--bgcolortransparent)",
        borderRadius: '3px',
        border: '1px solid var(--accentcolor)',
        boxShadow: '8px 8px 15px var(--shadowcolor)' , 
        zIndex: 100,
        opacity: opacity,
        left: "40px",
        top: "-40px",
        backdropFilter: "blur(8px)",
        webkitBackdropFilter: "blur(8px)",
        mozBackdropFilter: "blur(8px)"
    }
    const xStyle: object = {
        color: 'var(--accentcolor)',
        position: "absolute",
        right: "5px"
    }
    const stripeStyle: object = {

        borderStyle: 'solid',
        borderColor: 'var(--accentcolor)',
        borderWidth: '1px 0 1px 0',
        height: "12px",
        width: "100%",
        margin: "2px 2px 2px 20px",
        opacity: "0.3",
    }
    const bodyStyle = {
        margin: "10px"
    }
    function getTitle(technology: string) {
        switch (technology) {
            case "react": return "React.js";
            case "embedded": return "Embedded";
            case "cplusplus": return "C++";
            case "javascript": return "Javascript";
            case "typescript": return "Typescript";
            case "angular": return "Angular";
            case "mysql": return "MySQL";
            case "mongodb": return "MongoDB";
            case "bootstrap": return "Bootstrap";
            case "tailwind": return "Tailwind";
            case "handlebars": return "Handlebars";
            case "css": return "CSS 3";
            case "html": return "HTML 5";
            case "node": return "Node.js";
            case "express": return "Express.js";
            case "webpack": return "Webpack";
        }
    }
    useEffect(() => {
        setOpacity(1);
    },[]) 
    
    return (
            
            <div style={popupStyle}>
                 <div style={headerStyle}>
                    <code>{getTitle(technology)}</code>
                    <div style={stripeStyle}></div>
                    <i className="bi bi-x-square" style={xStyle} onClick={() => setIsActive(false)}></i>
                 </div>
                 <div style={bodyStyle}>
                    <Devicon technology={technology} color={"var(--accentcolor)"}  size="60px" clickable={false} /><br/>
                    <div>
                        <br />
                        {/* <code>{text}</code> */}
                        <br /> <br />               
                    </div>
                    
                        <code style={{color: "var(--accentcolor)"}}>~/projects/{technology} &gt;&gt; ls</code><br />
                    

                    {projectData.map(project => (  
                        
                            project.technologies.includes(technology) ?
                                <>
                                    <Link
                                        activeClass="active"
                                        to={project.name}
                                        spy={true}
                                        smooth={true}
                                        offset={window.innerHeight/-4}
                                        duration={500}
                                        onClick={() => setIsActive(false)}
                                    ><code>{project.name}</code>
                                    </Link>
                                    <br />
                                </> :
                                <></>
                        
                    ))}


                 </div>
            
            
            </div>
        
    )
}