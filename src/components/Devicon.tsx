
// import { ReactComponent as CssIcon } from '../assets/svg/css3-plain-wordmark.svg'
import React, { useState } from 'react';
import Popup from './Popup'; 
type Props = {
    technology: string;
    color?: string;
    size?: string;
    clickable?: boolean;
}

export default function Devicon({technology, color, size, clickable}: Props) {
    const [isHover, setIsHover] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const iconStyle: object = {
        fontSize: size || "30px",
        color: isHover ? "white" : color || "var(--accentcolor)",
        margin: "2px",
        transitionProperty: 'color',
        transitionDuration: '1s',
        transitionTimingFunction: 'cubic-bezier(0,.11,0,1), ease-in',
    }


    function fetchIcon(technology: string) {
        switch (technology) {
            case "react": return "devicon-react-plain";
            case "embedded": return "devicon-embeddedc-plain-wordmark";
            case "cplusplus": return "devicon-cplusplus-plain";
            case "javascript": return "devicon-javascript-plain";
            case "typescript": return "devicon-typescript-plain";
            case "angular": return "devicon-angularjs-plain";
            case "mysql": return "devicon-mysql-plain";
            case "mongodb": return "devicon-mongodb-plain";
            case "bootstrap": return "devicon-bootstrap-plain";
            case "tailwind": return "devicon-tailwindcss-plain";
            case "handlebars": return "devicon-handlebars-plain";
            case "css": return "devicon-css3-plain-wordmark";
            case "html": return "devicon-html5-plain-wordmark";
            case "node": return "devicon-nodejs-plain";
            case "express": return "devicon-express-original";
            case "webpack": return "devicon-webpack-plain";
        }
    }
    return (
        <>    
            {clickable === false ? 
                <i className={fetchIcon(technology)} style={iconStyle}></i>
                :
                <i className={fetchIcon(technology)} style={iconStyle} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onClick={() => setIsActive(true)}></i>
                
            }

            {isActive && <Popup technology={technology} setIsActive={setIsActive} />}
        </>
    )
}