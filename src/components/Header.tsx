import { CSSProperties, useEffect, useState } from "react";
import Nav from "./Nav";

type Props = {
    hidden: boolean;
    scrollPosition: number;
    windowHeight: number;
    windowWidth: number;
}

export default function Header({hidden, scrollPosition, windowHeight, windowWidth}: Props) {
    const [isBooted, setIsBooted] = useState(false);
    const noBorder = (scrollPosition < 4) && isBooted;

    const headerStyle: CSSProperties = { 
        display: "flex",
        flexDirection: (windowWidth < 500 ? "column" : "row"),
        top: "0px",
        borderStyle: "solid",
        borderWidth: "0 0 1px 0",
        borderColor: "var(--accentcolor)",
        boxShadow: "10px 10px 10px var(--shadowcolor)",
        backgroundColor: "var(--bgcolortransparent)",
        zIndex: "100"
    };
    
    const titleStyle: CSSProperties = {
        marginTop: "6px", 
        marginLeft: "6px", 
        fontSize: "1.5em",
    };
    if (hidden) {
        headerStyle.top = "-39px";   
    }
    if (noBorder) {
        headerStyle.borderColor = "#00000000";
        headerStyle.boxShadow = "none";
        headerStyle.backgroundColor = "#00000000";
    }

    useEffect(() => {
        setTimeout(() => {
            setIsBooted(true);
        }, 1400);
    },[]);
    
    return (
        <header style={headerStyle}>
            <div style={titleStyle}>
                {windowWidth < 500 ? <><span className="accent">J</span>GC</> : <><span className="accent">J.</span> Garrett Corbin</> }
            </div>
            <Nav windowHeight={windowHeight} mobile={windowWidth < 500}/> 
        </header>
    );
}