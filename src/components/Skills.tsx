
const skillsStyle: object = {
    transition: 'all 2s',
    padding: '40vh 10px 0vh 10px',
    maxWidth: '600px',

}
const headerStyle = {
    marginTop: 0,
}
const categoryStyle: object = {
    position: 'absolute',
    backgroundColor: 'var(--bgcolor)',
    borderRadius: '3px',
    border: '1px solid var(--accentcolor)',
    boxShadow: '3px 3px 5px var(--shadowcolor)' , 
    // margin: "10px",
    padding: '2px 10px 10px 2px',
    width: '500px',
    paddingBottom: '40px'
    // top: "-100px"
}
const iconStyle: object = {
    fontSize: "50px",
    color: "var(--accentcolor)",
    margin: "6px"

}

type Props = {
    windowWidth: number
}

export default function Skills({ windowWidth }: Props) {
    return (
        <section style={skillsStyle}>
            <div style={{position: 'relative', height: '40vh'}}>
                <div style={{...categoryStyle, marginLeft: "0px", top: "0px"}}>
                    <p style={headerStyle}>Languages</p>
                    <div>
                        <i className="devicon-cplusplus-plain" style={iconStyle}></i>
                        <i className="devicon-javascript-plain" style={iconStyle}></i>
                        <i className="devicon-typescript-plain" style={iconStyle}></i>
                        <i className="devicon-css3-plain-wordmark" style={iconStyle}></i>
                        <i className="devicon-html5-plain-wordmark" style={iconStyle}></i>
                    </div>
                </div>

                <div style={{...categoryStyle, marginLeft: "20px", top: "100px"}}>
                <p style={headerStyle}>Front End Technologies</p>
                    <div>
                        <i className="devicon-react-plain" style={iconStyle}></i>
                        <i className="devicon-angularjs-plain" style={iconStyle}></i>
                        <i className="devicon-handlebars-plain" style={iconStyle}></i>
                        <i className="devicon-bootstrap-plain" style={iconStyle}></i>
                        <i className="devicon-tailwindcss-plain" style={iconStyle}></i>
                    </div>
                </div>

                <div style={{...categoryStyle, marginLeft: "40px", top: "200px"}}>
                <p style={headerStyle}>Back End Technologies</p>
                    <div>
                        <i className="devicon-nodejs-plain" style={iconStyle}></i>
                        <i className="devicon-express-original" style={iconStyle}></i>
                        <i className="devicon-mysql-plain" style={iconStyle}></i>
                        <i className="devicon-mongodb-plain" style={iconStyle}></i>
                    </div>
                </div>

                <div style={{...categoryStyle, marginLeft: "60px", top: "300px"}}>
                <p style={headerStyle}>Other Technologies</p>
                    <div>
                        <i className="devicon-embeddedc-plain-wordmark" style={iconStyle}></i>
                        <i className="devicon-webpack-plain" style={iconStyle}></i>
                    </div>
                </div>
            </div>

        </section>
    );
  }