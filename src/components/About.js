import Image from './Image';
const aboutStyle = {
    transition: 'all 2s',
    padding: '40vh 0 0vh 0',
    width: '600px'
}

export default function About() {
    return (
        <section style={aboutStyle}>
            <h1 id="about"><span></span>About Me</h1>
            <div>
                <Image src="photo2.jpg" />
            </div>
            <p>
                My name is Garrett Corbin and I am a Developer from Richmond, Virginia and currently reside in Oakland, California. I develop interactive websites as well as other applications.
            </p>
            <a href="https://github.com/antieatingactivist/" target="_blank" rel="noopener noreferrer">Visit my GitHub</a>
            <a href="./assets/pdf/resume.pdf" target="_blank" rel="noopener noreferrer">See my Resume</a>
            
        </section>
    );
  }