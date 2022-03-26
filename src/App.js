// import logo from './logo.svg';
// import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState, useRef } from "react";
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Left from './components/Left';
import Right from './components/Right';
import Intro from './components/Intro';
import Projects from './components/Projects';
import About from './components/About';
// import projectData from './assets/js/project-data';


function App() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  const [initialHeaderShow, setInitialHeaderShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [furthestDown, setFurthestDown] = useState(0);
  const [headerHidden, setHeaderHidden] = useState(true);  
  // const [introOffset, setIntroOffest] = useState(0);
  const [aboutOffset, setAboutOffest] = useState(0);
  const [projectsOffset, setProjectOffset] = useState(0);
  const [footerOffset, setFooterOffset] = useState(0);
  const [footerExpand, setFooterExpand] = useState(false);
  const [introHidden, setIntroHidden] = useState(false);  
  const [aboutHidden, setAboutHidden] = useState(false);
  const [onScreenProject, setOnScreenProject] = useState(0);
  // console.log(onScreenProject);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
    setAboutOffest(aboutRef.current.getBoundingClientRect().top);
    // setIntroOffest(introRef.current.getBoundingClientRect().top);
    setProjectOffset(projectsRef.current.getBoundingClientRect().top);
    setFooterOffset(footerRef.current.getBoundingClientRect().top);
  };


  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };
 
  if(scrollPosition > 200 && scrollPosition > furthestDown) {
    setFurthestDown(scrollPosition);
    if (initialHeaderShow) setHeaderHidden(true);
  } 
  if(scrollPosition < furthestDown-100) {
      setFurthestDown(scrollPosition);
      setHeaderHidden(false); 
  } 
  if (aboutOffset < 100 && !introHidden) {
    setIntroHidden(true);
  } 
  if (aboutOffset >= 300 && introHidden) {
    setIntroHidden(false);
  } 
  if (projectsOffset < 100 && !aboutHidden) {
    setAboutHidden(true);
  }
  if (projectsOffset >= 300 && aboutHidden) {
    setAboutHidden(false);
  }
  if (footerOffset <= windowHeight-50 && !footerExpand) {
    setFooterExpand(true);
  }
  if (footerOffset >= windowHeight+150 && footerExpand) {
    setFooterExpand(false);
  }

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    handleScroll();
    setTimeout(() => {
      setInitialHeaderShow(true);
      setHeaderHidden(false);
    }, 100)

    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  return (
    <div className="App">
      
        <Header hidden={headerHidden} scrollPosition={scrollPosition} windowHeight={windowHeight}/>
        <div className="noMobile">
          <Left scrollPosition={scrollPosition} footerExpand={footerExpand} windowHeight={windowHeight}/>
        </div>
        <div className="noMobile">
          <Right windowHeight={windowHeight} introHidden={introHidden} aboutHidden={aboutHidden} onScreenProject={onScreenProject} />
        </div>
   
        
        <main>
          
          <div ref={introRef} >
            <Intro />
          </div>
          

          <div ref={aboutRef} style={aboutOffset<windowHeight/2.5 ? {transition: 'opacity 1.5s', opacity: '1'} : {transition: 'opacity .8s', opacity: '0'}}>
            <About />
          </div>

          <div ref={projectsRef} style={projectsOffset<windowHeight/2.5 ? {transition: 'opacity 1.5s', opacity: '1'} : {transition: 'opacity .8s', opacity: '0'}}>
            <Projects scrollPosition={scrollPosition} windowHeight={windowHeight} setOnScreenProject={setOnScreenProject} />
          </div>
          
        </main>
        <div ref={footerRef}>
          {footerExpand ? <></> : <Footer/>}
        </div>
        
        

      
    </div>
  );
}

export default App;
