/* eslint-disable jsx-a11y/anchor-is-valid */

import Devicon from './Devicon';

const skillsStyle: object = {
    transition: 'all 2s',
    padding: '40vh 10px 40vh 10px',
    maxWidth: '600px',

}
const headerStyle = {
    padding: "4px",
    // backgroundColor: "#444444",
    borderBottom: '1px solid var(--accentcolor)',
}
const categoryStyle: object = {
    position: 'absolute',
    backgroundColor: 'var(--bgcolor)',
    borderRadius: '3px',
    border: '1px solid var(--accentcolor)',
    boxShadow: '3px 3px 5px var(--shadowcolor)' , 
    // margin: "10px",
    paddingBottom: "50px",
    width: '500px',
    // paddingBottom: '40px'
    // top: "-100px"
}
const bodyStyle = {
    margin: "20px"
}
const iconSize = "45px";

type Props = {
    windowHeight: number
}

export default function Skills({ windowHeight }: Props) {


    return (
        <section style={skillsStyle}>
            <div style={{position: 'relative', height: '40vh'}}>
                <div style={{...categoryStyle, marginLeft: "0px", top: "0px"}}>
                    <div style={headerStyle}><code>Languages</code></div>
                    <div style={bodyStyle}>
                        <Devicon technology="cplusplus" color={"var(--accentcolor)"} size={iconSize} />
                        <Devicon technology="javascript" color={"var(--accentcolor)"} size={iconSize} />
                        <Devicon technology="typescript" color={"var(--accentcolor)"} size={iconSize} />
                        <Devicon technology="css" color={"var(--accentcolor)"} size={iconSize} />
                        <Devicon technology="html" color={"var(--accentcolor)"} size={iconSize} />
                    </div>
                </div>

                <div style={{...categoryStyle, marginLeft: "20px", top: "100px"}}>
                <div style={headerStyle}><code>Front End Technologies</code></div>
                    <div style={bodyStyle}>
                        <Devicon technology="react" color={"var(--accentcolor)"}  size={iconSize} />
                        <Devicon technology="angular" color={"var(--accentcolor)"} size={iconSize} />
                        <Devicon technology="handlebars" color={"var(--accentcolor)"} size={iconSize} />
                        <Devicon technology="bootstrap" color={"var(--accentcolor)"} size={iconSize} />
                        <Devicon technology="tailwind" color={"var(--accentcolor)"} size={iconSize} />
                    </div>
                </div>

                <div style={{...categoryStyle, marginLeft: "40px", top: "200px"}}>
                <div style={headerStyle}><code>Back End Technologies</code></div>
                    <div style={bodyStyle}>
                        <Devicon technology="node" color={"var(--accentcolor)"}  size={iconSize} />
                        <Devicon technology="express" color={"var(--accentcolor)"} size={iconSize} />
                        <Devicon technology="mysql" color={"var(--accentcolor)"} size={iconSize} />
                        <Devicon technology="mongodb" color={"var(--accentcolor)"} size={iconSize} />
                    </div>
                </div>

                <div style={{...categoryStyle, marginLeft: "60px", top: "300px"}}>
                <div style={headerStyle}><code>Other Technologies</code></div>
                    <div style={bodyStyle}>
                        <Devicon technology="embedded" color={"var(--accentcolor)"} size={iconSize}  />
                        <Devicon technology="webpack" color={"var(--accentcolor)"} size={iconSize} />

                    </div>
                </div>
            </div>

        </section>
    );
  }