import React from 'react';
import Image from './Image';

// const Image = (props) => {
//     const image = require(`../assets/images/${props.src}`)

//     return <img src = {image} alt="test" />
// }
const projects = [
    {
        name: 'Weather Widget',
        description: 'A simple, yet easy on the eye weather app. With the help of the Open Weather Map API it displays current weather conditions as well as the five day weather forcast. Moment.js is incorperated for time and date functions. Local Storage is used to store recent searches and to refresh your last search each time the app is launched. Lastly, this app utilizes Bootstrap Icons for weather condition graphics.',
        imgSrc: '../assets/images/weather.png',
        gitHub: 'https://github.com/antieatingactivist/weather-widget/',
        liveLink: 'https://antieatingactivist.github.io/weather-widget/'
    }
]


export default function Project() {

    const projectStyle = {
        transition: 'all 2s',
        // padding: '35vh 0 0vh 0'
        position: 'relative',
        marginBottom: '100px'
    }


    const imageFrameStyle = {
        width: '560px',
        borderStyle: 'solid',
        borderColor: 'var(--bgcolor)',
        borderRadius: '0 0 3px 0',
        boxShadow: '11px 7px 0 var(--bgcolor), 12px 8px var(--accentcolor), 16px 16px 10px var(--shadowcolor)' 
    }



    return (
        <section style = {projectStyle}>
            <h2>
                <span>./</span>{projects[0].name}
            </h2>
            <div style={imageFrameStyle}>
                {/* <img src={images[0].src} style={imageStyle} alt="screen shot of project"/> */}
                <Image src="weather.png" />
            </div>
            <p>
                {projects[0].description}
            </p>
            <a href={projects[0].gitHub}  target="_blank" rel="noopener noreferrer">Project on GitHub</a>
            <a href={projects[0].liveLink} target="_blank" rel="noopener noreferrer">Live Link</a>
        </section>
    );
  }