import React from 'react';
import Image from './Image';



export default function About() {

    return (
        <section id="about">
            <div>
                <Image src="photo.jpg" />
            </div>
            <p>
                My name is Garrett Corbin and I am a Developer from Richmond, Virginia and currently reside in Oakland, California. I develop interactive websites as well as other applications.
            </p>
            <a href="https://github.com/antieatingactivist/" target="_blank" rel="noopener noreferrer">Visit my GitHub</a>
            <a href="./assets/pdf/resume.pdf" target="_blank" rel="noopener noreferrer">See my Resume</a>
            
        </section>
    );
  }