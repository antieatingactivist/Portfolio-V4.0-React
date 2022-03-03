// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Left from './components/Left';
import Intro from './components/Intro';
import Project from './components/Project';
import About from './components/About';

function App() {
  return (
    <div className="App">
      
        <Header />
        <Left />
        <main>
          <Intro />

          <h1><span></span>About Me</h1>
          <About />

          <h1><span></span>Projects</h1>
          <Project />

        </main>
        <Footer />
        

      
    </div>
  );
}

export default App;
