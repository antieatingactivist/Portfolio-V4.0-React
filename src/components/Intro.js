import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';



export default function Intro() {
    const [introOpacity, setIntroOpacity] = useState(0);
    const [spanOpacity, setSpanOpacity] = useState(0);
    const [pOpacity, setPOpacity] = useState(0);
    const introStyle = {
        
        padding: '25vh 0 0vh 0',
        
    }
    const h1Style = {
        
        transition: 'opacity 1.5s',
        transitionDelay: '.1s',
        opacity: introOpacity,
    }
    const spanStyle = {
        transition: 'opacity 1.5s',
        transitionDelay: '.3s',
        position: 'relative',
        top: '-50px',
        left: '50px',
        fontSize: '70%',
        whiteSpace: 'nowrap',
        opacity: spanOpacity,
    }
    const pStyle = {
        
        transition: 'opacity 5s',
        transitionDelay: '2s',
        position: 'relative',
        top: '-50px',
        left: '60px',
        opacity: pOpacity,
    }
    
    useEffect(() => {
        setIntroOpacity(1);
        setSpanOpacity(1);
        setPOpacity(1);
    }, []);

    return (
        <section id="intro" style={introStyle}>
        
            <h1 style={h1Style}>Hi, I'm Garrett.</h1>
            <h1><span style={spanStyle} className="accent">Developer, and builder of many things.</span></h1>

            <code style={pStyle}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('scroll down and have a look.')        
                        .start();
                    }}
                    options={{
                        delay: 'natural'
                      
                    }}
                />
            </code>
        </section>
    );
  }