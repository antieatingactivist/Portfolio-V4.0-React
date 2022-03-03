// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Left from './components/Left';
import Intro from './components/Intro';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      
        <Header />
        <Left />
        <main>
          <Intro />
          <Project />
        </main>
        <Footer />
        

      
    </div>
  );
}

export default App;
