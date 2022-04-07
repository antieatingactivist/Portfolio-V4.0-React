import Image from './Image';
import resume from "../assets/pdf/resume.pdf";
const aboutStyle = {
    transition: 'all 2s',
    padding: '40vh 10px 0vh 10px',
    maxWidth: '600px'
}



export default function About({windowWidth}) {
    return (
        <section style={aboutStyle}>
            <h1 id="about" style={{textAlign: windowWidth < 500 ? 'center' : 'left'}}>About Me</h1>
            <div>
                <Image src="photo2.jpg" />
            </div>
            <p>
                My name is Garrett Corbin and I am a Developer from Richmond, Virginia and currently reside in Oakland, California. I develop interactive websites as well as other applications.
            </p>
            <div style={{display: 'flex', justifyContent: windowWidth < 500 ? 'center' : 'flex-start'}}>
                <a href="https://github.com/antieatingactivist/" target="_blank" rel="noopener noreferrer">Visit my GitHub</a>
                <a href={resume} target="_blank" rel="noopener noreferrer">See my Resume</a>
            </div>
        </section>
    );
  }