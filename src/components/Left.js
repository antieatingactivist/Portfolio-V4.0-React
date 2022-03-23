// import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";



export default function Left( {scrollPosition} ) {


    const leftStyle = {
        transition: 'top 0.2s',
        position: 'fixed',
        top: `calc(45vh + ${scrollPosition/-20}px)`,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1
    };

    // console.log([scrollPosition, document.body.scrollHeight-window.innerHeight]);
    if (scrollPosition > document.body.scrollHeight-window.innerHeight) {
        // setTimeout(() => {
            // leftStyle.top = '140vh';
        // }, 1000)
        
    }

    const sectionStyle = {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '25px',
        marginLeft: '16px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'var(--accentcolor)',
        borderRadius: '6px',
        boxShadow:  '10px 10px 10px var(--shadowcolor)',
        padding: '4px'
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