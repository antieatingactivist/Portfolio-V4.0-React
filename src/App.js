// import logo from './logo.svg';
// import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState, useRef } from "react";
import './App.css';
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

  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [furthestDown, setFurthestDown] = useState(0);
  const [headerHidden, setHeaderHidden] = useState(false);  
  const [introOffset, setIntroOffest] = useState(0);
  const [aboutOffset, setAboutOffest] = useState(0);
  const [projectsOffset, setProjectOffset] = useState(0);
  const [introHidden, setIntroHidden] = useState(false);  
  const [aboutHidden, setAboutHidden] = useState(false);  
  // const [projectsHidden, setProjectsHidden] = useState(false);  
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
    setAboutOffest(aboutRef.current.getBoundingClientRect().top);
    setIntroOffest(introRef.current.getBoundingClientRect().top);
    setProjectOffset(projectsRef.current.getBoundingClientRect().top);
  };
  const handleResize = () => {
    // handleScroll();
    setWindowHeight(window.innerHeight);
  };
 

  if(scrollPosition > 200 && scrollPosition > furthestDown) {
    setFurthestDown(scrollPosition);
    setHeaderHidden(true);
    
  } 
  if(scrollPosition < furthestDown-100) {
      setFurthestDown(scrollPosition);
      setHeaderHidden(false);
      
  } 
  if (aboutOffset < 100 && !introHidden) {
    setIntroHidden(true);

    // console.log(aboutOffset);
    
  } 
  if (aboutOffset >= 300 && introHidden) {
    setIntroHidden(false);

    // console.log(aboutOffset);
    
  } 
  if (projectsOffset < 100 && !aboutHidden) {
    setAboutHidden(true);

    
  }
  if (projectsOffset >= 300 && aboutHidden) {
    setAboutHidden(false);

    
  }
  // console.log([scrollPosition, aboutOffset, windowHeight]);

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  


  return (
    <div className="App">
      
        <Header hidden={headerHidden} scrollPosition={scrollPosition}/>
        <Left scrollPosition={scrollPosition} />
        <Right introHidden={introHidden} aboutHidden={aboutHidden} />
        
        <main>
          
          <div ref={introRef} >
            <Intro />
          </div>
          

          <div ref={aboutRef} style={aboutOffset<windowHeight/2.5 ? {transition: 'opacity 1.5s', opacity: '1'} : {transition: 'opacity .8s', opacity: '0'}}>
            <About />
          </div>

          <div ref={projectsRef} style={projectsOffset<windowHeight/2.5 ? {transition: 'opacity 1.5s', opacity: '1'} : {transition: 'opacity .8s', opacity: '0'}}>
            <Projects />
          </div>
          
        </main>

        <Footer />
        

      
    </div>
  );
}

export default App;
