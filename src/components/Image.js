import React from 'react';

export default function Image(props) {
    const image = require(`../assets/images/${props.src}`)

    return <img src = {image} alt="test" />
}