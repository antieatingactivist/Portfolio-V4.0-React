import React from 'react';
import image from '../image/weather.png'


export default function Project() {

    const projectStyle = {
        transition: 'all 2s',
        // padding: '35vh 0 0vh 0'
        position: 'relative',
        marginBottom: '100px'
    }

    const imageStyle = {
        transition: 'all 0.3s',
        filter: 'grayscale(.96)'
    }

    const imageFrameStyle = {
        width: '560px',
        borderStyle: 'solid',
        borderColor: 'var(--bgcolor)',
        borderRadius: '0 0 3px 0',
        boxShadow: '11px 7px 0 var(--bgcolor), 12px 8px var(--accentcolor), 16px 16px 10px var(--shadowcolor)' 
    }



    return (
        <section class="project" style = {projectStyle}>
            <h2>
                <span>./</span>Weather Widget
            </h2>
            <div class="img-frame" style={imageFrameStyle}>
                <img src={image} style={imageStyle} alt="screen shot of project"/>
            </div>
            <p>
                A simple, yet easy on the eye weather app. With the help of the Open Weather Map API it displays current weather conditions as well as the five day weather forcast. Moment.js is incorperated for time and date functions. Local Storage is used to store recent searches and to refresh your last search each time the app is launched. Lastly, this app utilizes Bootstrap Icons for weather condition graphics.
            </p>
            <a href="https://github.com/antieatingactivist/weather-widget/"  target="_blank" rel="noopener noreferrer">Project on GitHub</a>
            <a href="https://antieatingactivist.github.io/weather-widget/" target="_blank" rel="noopener noreferrer">Live Link</a>
        </section>
    );
  }