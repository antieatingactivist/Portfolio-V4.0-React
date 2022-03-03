import React from 'react';
import Image from './Image';
import projectData from '../assets/js/project-data'


// const projects = [
//     {
//         name: 'Weather Widget',
//         description: 'A simple, yet easy on the eye weather app. With the help of the Open Weather Map API it displays current weather conditions as well as the five day weather forcast. Moment.js is incorperated for time and date functions. Local Storage is used to store recent searches and to refresh your last search each time the app is launched. Lastly, this app utilizes Bootstrap Icons for weather condition graphics.',
//         imgSrc: '../assets/images/weather.png',
//         gitHub: 'https://github.com/antieatingactivist/weather-widget/',
//         liveLink: 'https://antieatingactivist.github.io/weather-widget/'
//     }
// ]


export default function Project(prop) {

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
                <span>./</span>{projectData[prop.id].name}
            </h2>
            <div style={imageFrameStyle}>
                {/* <img src={images[0].src} style={imageStyle} alt="screen shot of project"/> */}
                <Image src={projectData[prop.id].imgSrc} />
            </div>
            <p>
                {projectData[prop.id].description}
            </p>
            <a href={projectData[prop.id].gitHub}  target="_blank" rel="noopener noreferrer">Project on GitHub</a>
            <a href={projectData[prop.id].liveLink} target="_blank" rel="noopener noreferrer">Live Link</a>
        </section>
    );
  }