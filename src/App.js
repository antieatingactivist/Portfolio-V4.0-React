// import logo from './logo.svg';
// import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Left from './components/Left';
import Intro from './components/Intro';
import Project from './components/Project';
import About from './components/About';
import projectData from './assets/js/project-data';


function App() {



  return (
    <div className="App">
      
        <Header data={"data"} />
        <Left />
        <main>
  
          <Intro />
          <h1 id="about"><span></span>About Me</h1>
          <About />
          

          <h1 id="projects"><span></span>Projects</h1>
          
          {projectData.map(project => (
            <Project project={project} key={project.name} />
          ))}
                      

        </main>
        <Footer />
        

      
    </div>
  );
}

export default App;
