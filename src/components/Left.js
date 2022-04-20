
import "bootstrap-icons/font/bootstrap-icons.css";
import {useEffect, useState, useRef} from "react";



export default function Left( {scrollPosition, footerExpand } ) {
    const sectionRef = useRef(null);
    const [spin, setSpin] = useState(180);
    const [angle, setAngle] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [height, setHeight] = useState(`calc(45vh + ${scrollPosition/-30}px)`);
    const [stripeHeight, setStripeHeight] = useState('0px');
    const [stripeHide, setStripeHide] = useState(true);
    const [width, setWidth] = useState('25px');
    const [left, setLeft] = useState('-54px');
    const [expandedContact, setExpandedContact] = useState(false);
    const [leftTransitionDuration, setLeftTransitionDuration] = useState('3s');
    const [sectionTransitionDuration, setSectionTransitionDuration] = useState('.3s, .1s, .3s');

    const leftStyle = {
        transitionDuration: leftTransitionDuration,
        transitionProperty: 'top',
        transitionTimingFunction: 'cubic-bezier(0,.11,0,1)',
        
        position: 'fixed',
        top: height,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1
        
    };


    const sectionStyle = {
        // transitionDelay: '.1s, 0s, 0s',
        transitionProperty: 'transform, width, margin-left',
        transitionDuration: sectionTransitionDuration,
        transitionTimingFunction: 'cubic-bezier(0,.11,0,1)',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '25px',
        marginLeft: left,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'var(--accentcolor)',
        borderRadius: '6px',
        backgroundColor: 'var(--bgcolor)',
        boxShadow:  '3px 3px 3px var(--shadowcolor)',
        padding: '4px',
        transform: `rotateX(${rotation}deg) rotateY(${spin}deg) rotateZ(${angle}deg)`,
        height: '120px',
        width: width,
        backfaceVisibility: 'hidden',
    };

    const stripeStyle = {
        transitionProperty: 'height',
        transitionDuration: '3s',
        transitionTimingFunction: 'cubic-bezier(0,.11,0,1), ease-in',
        position: 'relative',
        display: stripeHide ? 'none' : 'block',
        width: '2px',
        height: `calc(${stripeHeight} + 120px)`,
        top: '130px',
        left: '32px',
        bottom: 0,
        zIndex: 100,
        borderStyle: 'solid',
        borderWidth: '0 0 1px 1px',
        borderColor: 'var(--accentcolor)', 
    }

    useEffect(() => {
        
        setTimeout(() => {
            setLeft('-20px');
            setAngle(20);
        }, 1000);

        setTimeout(() => {
            
     
            
            
        }, 2800);
        setTimeout(() => {
            setSectionTransitionDuration('.5s, .1s, .3s');
            setSpin(0);
            setAngle(0);
            setLeft('16px');
            setHeight(`calc(10vh)`);
          
            
        }, 3000);
        setTimeout(() => {
            setHeight(`calc(45vh + ${scrollPosition/-30}px)`);
            setStripeHide(false);
        }, 3100);
        setTimeout(() => {
            
            setStripeHeight('100vh');
            
        }, 3200);
        setTimeout(() => {
            
            setLeftTransitionDuration('.5s');
            setSectionTransitionDuration('3s, .1s, .3s');
            setSpin(7200);
            

        }, 3600);
        setTimeout(() => {
            
          
            setSectionTransitionDuration('.3s, .1s, .3s');
         
            

        }, 6000);



    }, []);

    useEffect(() => {
        if (!footerExpand) {
                setWidth('25px');
                setHeight(`calc(45vh + ${scrollPosition/-30}px)`);
                setExpandedContact(false); 
                setAngle(0);
                setRotation(0);
        }
        if (footerExpand)  {
            setHeight(`calc(100vh - ${sectionRef.current.getBoundingClientRect().bottom - sectionRef.current.getBoundingClientRect().y + 20}px)`);
            setTimeout(() => {
                setAngle(180);
                setRotation(180);
            }, 10);
            setTimeout(() => {
                setWidth('calc(100vw - 50px)');
                
            }, 350);
            setTimeout(() => {
                setExpandedContact(true);
            }, 450);
            
        }
  
    }, [expandedContact, footerExpand, scrollPosition, width])

    return (
        <aside id="left" style={leftStyle}>
            <section style={{...sectionStyle, transform: `rotateX(${rotation}deg) rotateY(${spin + 180}deg) rotateZ(${angle}deg)`}}>
                { !expandedContact ?
                    <span style={{fontSize: '16px'}}>˙ ͜ʟ˙</span>
                    :
                    <div style={{display: 'flex'}}>
                        
                        <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                            <a href="https://github.com/antieatingactivist/" target="_blank" rel="noopener noreferrer" className="bi bi-github">
                                <span style={{fontSize: '.6em'}}> &nbsp; Check out some of my work on GitHub.</span> 
                            </a>
                            <a href="https://twitter.com/platevoltage" target="_blank" rel="noopener noreferrer" className="bi bi-twitter">
                                <span style={{fontSize: '.6em'}}> &nbsp; @platevoltage on Twitter.</span> 
                            </a>
                            <a href="https://www.linkedin.com/in/garrett-corbin-7a7777227/" target="_blank" rel="noopener noreferrer" className="bi bi-linkedin">
                                <span style={{fontSize: '.6em'}}> &nbsp; Connect with me on Linkedin.</span> 
                            </a>
                            <a href="mailto:jgarrettcorbin@gmail.com" className="bi bi-envelope">
                            <span style={{fontSize: '.6em'}}> &nbsp; Send me an e-mail.</span> 
                            </a>

                        </div>
                        <div style={{fontSize: '.6em', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
                            <p>This site was built by Garrett Corbin in 2022 using React.js.</p>
                            <a href="https://github.com/antieatingactivist/portfolio-v4.0-react" target="_blank" rel="noopener noreferrer">view the source code on GitHub</a>
                        </div>
                    </div>
                }
            </section>
            <section style={sectionStyle} ref={sectionRef}>
              
                    <>
                        <a href="https://github.com/antieatingactivist/" target="_blank" rel="noopener noreferrer" className="bi bi-github"> </a>
                        <a href="https://twitter.com/platevoltage" target="_blank" rel="noopener noreferrer" className="bi bi-twitter"> </a>
                        <a href="https://www.linkedin.com/in/garrett-corbin-7a7777227/" target="_blank" rel="noopener noreferrer" className="bi bi-linkedin"> </a>
                        <a href="mailto:jgarrettcorbin@gmail.com" className="bi bi-envelope"> </a>
                    </>
            </section>
        <div id="v-stripe" style={stripeStyle}></div>
        </aside>
    );
}