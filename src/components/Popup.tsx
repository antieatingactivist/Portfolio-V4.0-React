import { useEffect, useState } from 'react';

type Props = {
    isActive: boolean,
    setIsActive: Function
}


export default function Popup({ isActive, setIsActive}: Props) {

    const [opacity, setOpacity] = useState<number>(0);
    const headerStyle = {
        padding: "4px",
        // backgroundColor: "#444444",
        borderBottom: '1px solid var(--accentcolor)',
    }
    const popupStyle: object = {
        transitionProperty: 'opacity',
        transitionDuration: '.5s',
        transitionTimingFunction: 'cubic-bezier(0,.11,0,1), ease-in',
        display: "inline",
        position: "absolute",
        height: "600px",
        width: "400px",
        color: "#ffffff",
        backgroundColor: "var(--bgcolortransparent)",
        borderRadius: '3px',
        border: '1px solid var(--accentcolor)',
        boxShadow: '3px 3px 5px var(--shadowcolor)' , 
        zIndex: 100,
        opacity: opacity,
        left: "40px",
        top: "-40px",
    }
    useEffect(() => {
        setOpacity(1);
    },[])

        
    
    return (
            
            <div style={popupStyle} onClick={() => setIsActive(false)}>
                 <div style={headerStyle}><code>Test</code></div>
            
            
            </div>
        
    )
}