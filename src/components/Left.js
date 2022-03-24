// import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import {useEffect, useState} from "react";



export default function Left( {scrollPosition} ) {

    const [spin, setSpin] = useState('rotateY(0deg)');
    const [height, setHeight] = useState('0px');
    const leftStyle = {
        transition: 'top .5s cubic-bezier(0,.11,0,1)',
        position: 'fixed',
        top: height,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1
    };


    const sectionStyle = {
        transition: 'transform 3s cubic-bezier(0,.11,0,1)',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '25px',
        marginLeft: '16px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'var(--accentcolor)',
        borderRadius: '6px',
        boxShadow:  '3px 3px 3px var(--shadowcolor)',
        padding: '4px',
        transform: spin
    };

    const stripeStyle = {
        position: 'relative',
        display: 'block',
        width: '2px',
        height: '100vh',
        left: '32px',
        bottom: 0,
        zIndex: 100,
        borderStyle: 'solid',
        borderWidth: '0 0 1px 1px',
        borderColor: 'var(--accentcolor)',
        borderRadius: '0 6px 6px 6px'   
    }



    useEffect(() => {
        setSpin('rotateY(2880deg)');
        setTimeout(() => {
            setSpin('rotateY(0deg)');
        }, 100000);
    }, []);

    useEffect(() => {
        setHeight(`calc(45vh + ${scrollPosition/-20}px)`);
    }, [scrollPosition])
   
    return (
        <aside id="left" style={leftStyle}>
            <section style={sectionStyle}>
                <a href="https://github.com/antieatingactivist/" target="_blank" rel="noopener noreferrer" className="bi bi-github"> </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bi bi-twitter"> </a>
                <a href="https://www.linkedin.com/in/garrett-corbin-7a7777227/" target="_blank" rel="noopener noreferrer" className="bi bi-linkedin"> </a>
                <a href="mailto:garrett@linkedin.com" className="bi bi-envelope"> </a>
            </section>
        <div id="v-stripe" style={stripeStyle}></div>
        </aside>
    );
  }