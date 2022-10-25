import Image from './Image';
import resume from "../assets/pdf/resume.pdf";

const aboutStyle = {
    transition: 'all 2s',
    padding: '40vh 10px 0vh 10px',
    maxWidth: '600px'
}

type Props = {
    windowWidth: number
}

export default function About({ windowWidth }: Props) {
    return (
        <section style={aboutStyle}>
            <div id="about">
                <Image src="photo2.jpg" isHidden={false} />
            </div>
            <p>
                My name is Garrett Corbin and I am a Developer from Richmond, Virginia and currently reside in Oakland, California. I develop interactive websites as well as other applications.
            </p>
          
            <p>
                All of the projects listed below including the portfolio page itself are 100% my own work with the exception of collaborations, which are clearly marked with the collaborators credited on GitHub.
            </p>
            <div style={{display: 'flex', justifyContent: windowWidth < 500 ? 'center' : 'flex-start'}}>
                <a className="button" href="https://github.com/antieatingactivist/" target="_blank" rel="noopener noreferrer">Visit my GitHub</a>
                <a className="button" href={resume} target="_blank" rel="noopener noreferrer">See my Resume</a>
            </div>
        </section>
    );
  }