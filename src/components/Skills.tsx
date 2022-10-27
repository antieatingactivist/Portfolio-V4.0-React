import Devicon from './Devicon';

const iconSize = "45px";
const iconMargin= "10px"

type Props = {
    windowHeight: number
    hidden: boolean
}

export default function Skills({ windowHeight, hidden }: Props) {
    const skillsStyle: object = {
        transition: 'all .1s',
        padding: '35vh 10px 20vh 10px',
        maxWidth: '600px',
        minHeight: "600px"
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
        transition: 'opacity 2s, left .5s',
        position: 'absolute',
        backgroundColor: 'var(--bgcolor)',
        borderRadius: '5px',
        border: '1px solid var(--accentcolor)',
        boxShadow: '3px 3px 5px var(--shadowcolor)' , 
        paddingBottom: "20px",
        width: '500px',
        opacity: hidden ? 0 : 1
    }
    const bodyStyle = {
        margin: "20px",
        display: "flex",
    }



    return (
        <section style={skillsStyle}>
            <div style={{position: 'relative', height: '40vh'}}>
                <div style={{...categoryStyle, left: hidden ? "-1500px" : "0px", top: "0px"}}>
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

                <div style={{...categoryStyle, left: hidden ? "-1500px" : "18px", top: "130px", transitionDelay: ".3s, .3s"}}>
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

                <div style={{...categoryStyle, left:  hidden ? "-1500px" : "50px", top: "260px", transitionDelay: ".6s"}}>
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

                <div style={{...categoryStyle, left:  hidden ? "-1500px" : "100px", top: "390px", transitionDelay: ".9s"}}>
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