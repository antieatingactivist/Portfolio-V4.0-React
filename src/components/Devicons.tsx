
type Props = {
    technologies: string[];
    isHidden: boolean;
}

export default function Devicons({technologies, isHidden}: Props) {
    const style: object = {
        position: "absolute" ,
        display: 'flex', 
        justifyContent: 'flex-start',
    }
    const iconStyle: object = {
        fontSize: "35px",
    }
    return (
        <div style={style}>
            {technologies?.map(technology => (
                {
                    "react" : <i className="devicon-react-plain" style={iconStyle}></i>,
                    "embedded" : <i className="devicon-embeddedc-plain-wordmark" style={iconStyle}></i>,
                    "cplusplus" : <i className="devicon-cplusplus-plain" style={iconStyle}></i>,
                    "javascript" : <i className="devicon-javascript-plain" style={iconStyle}></i>,
                    "typescript" : <i className="devicon-typescript-plain" style={iconStyle}></i>,
                    "angular" : <i className="devicon-angularjs-plain" style={iconStyle}></i>,
                    "mysql" : <i className="devicon-mysql-plain" style={iconStyle}></i>,
                    "mongodb" : <i className="devicon-mongodb-plain" style={iconStyle}></i>,
                    "bootstrap" : <i className="devicon-bootstrap-plain" style={iconStyle}></i>,
                    "tailwind" : <i className="devicon-tailwindcss-plain" style={iconStyle}></i>,
                    "handlebars" : <i className="devicon-handlebars-plain" style={iconStyle}></i>,
                    "css" : <i className="devicon-css3-plain-wordmark" style={iconStyle}></i>,
                    "html" : <i className="devicon-html5-plain-wordmark" style={iconStyle}></i>,
                    "node" : <i className="devicon-nodejs-plain" style={iconStyle}></i>,
                    "express" : <i className="devicon-express-original" style={iconStyle}></i>,
                    "webpack" : <i className="devicon-webpack-plain" style={iconStyle}></i>,
                }[technology]
                
            ))}

        </div>
    )
}