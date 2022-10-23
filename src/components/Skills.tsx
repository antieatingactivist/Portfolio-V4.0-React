

import Devicon from './Devicon';

const skillsStyle: object = {
    transition: 'all 2s',
    padding: '40vh 10px 40vh 10px',
    maxWidth: '600px',

}
const headerStyle = {
    padding: "6px 10px 4px 10px",
    borderBottom: '1px solid var(--accentcolor)',
    display: 'flex',
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
const categoryStyle: object = {
    position: 'absolute',
    backgroundColor: 'var(--bgcolor)',
    borderRadius: '3px',
    border: '1px solid var(--accentcolor)',
    boxShadow: '3px 3px 5px var(--shadowcolor)' , 
    // margin: "10px",
    paddingBottom: "20px",
    width: '500px',

    // paddingBottom: '40px'
    // top: "-100px"
}
const bodyStyle = {
    margin: "20px",
    display: "flex"
}
const iconSize = "45px";
const iconMargin= "10px"

type Props = {
    windowHeight: number
    hidden: boolean
}

export default function Skills({ windowHeight, hidden }: Props) {


    return (
        <section style={skillsStyle}>
            <div style={{position: 'relative', height: '40vh'}}>
                <div style={{...categoryStyle, marginLeft: "0px", top: "0px"}}>
                    <div style={headerStyle}>
                        <code>Languages</code>
                        <div style={stripeStyle}></div>
                    
                    </div>
                    {!hidden && <div style={bodyStyle}>
                        <Devicon technology="cplusplus" color={"var(--accentcolor)"} size={iconSize} margin={iconMargin} />
                        <Devicon technology="javascript" color={"var(--accentcolor)"} size={iconSize} margin={iconMargin} />
                        <Devicon technology="typescript" color={"var(--accentcolor)"} size={iconSize} margin={iconMargin} />
                        <Devicon technology="css" color={"var(--accentcolor)"} size={iconSize} margin={iconMargin} />
                        <Devicon technology="html" color={"var(--accentcolor)"} size={iconSize} margin={iconMargin} />
                    </div> }
                </div>

                <div style={{...categoryStyle, marginLeft: "20px", top: "130px"}}>
                <div style={headerStyle}>
                    <code style={{whiteSpace: "nowrap"}}>Front End Technologies</code>
                    <div style={stripeStyle}></div>
                </div>
                    {!hidden && <div style={bodyStyle}>
                        <Devicon technology="react" color={"var(--accentcolor)"}  size={iconSize} margin={iconMargin} />
                        <Devicon technology="angular" color={"var(--accentcolor)"} size={iconSize} margin={iconMargin} />
                        <Devicon technology="handlebars" color={"var(--accentcolor)"} size={iconSize} margin={iconMargin} />
                        <Devicon technology="bootstrap" color={"var(--accentcolor)"} size={iconSize} margin={iconMargin} />
                        <Devicon technology="tailwind" color={"var(--accentcolor)"} size={iconSize} margin={iconMargin} />
                    </div> }
                </div>

                <div style={{...categoryStyle, marginLeft: "40px", top: "260px"}}>
                <div style={headerStyle}>
                    <code style={{whiteSpace: "nowrap"}}>Back End Technologies</code>
                    <div style={stripeStyle}></div>
                </div>
                    {!hidden && <div style={bodyStyle}>
                        <Devicon technology="node" color={"var(--accentcolor)"}  size={iconSize} margin={iconMargin}/>
                        <Devicon technology="express" color={"var(--accentcolor)"} size={iconSize} margin={iconMargin} />
                        <Devicon technology="mysql" color={"var(--accentcolor)"} size={iconSize} margin={iconMargin} />
                        <Devicon technology="mongodb" color={"var(--accentcolor)"} size={iconSize} margin={iconMargin} />
                    </div> }
                </div>

                <div style={{...categoryStyle, marginLeft: "60px", top: "390px"}}>
                <div style={headerStyle}>
                    <code style={{whiteSpace: "nowrap"}}>Other Technologies</code>
                    <div style={stripeStyle}></div>
                </div>
                    {!hidden && <div style={bodyStyle}>
                        <Devicon technology="embedded" color={"var(--accentcolor)"} size={iconSize} margin={iconMargin}  />
                        <Devicon technology="webpack" color={"var(--accentcolor)"} size={iconSize} margin={iconMargin} />

                    </div> }
                </div>
            </div>

        </section>
    );
  }