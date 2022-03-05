
export default function Image({src}) {

    const image = require(`../assets/images/${src}`)
    return <img src = {image} alt="project" />
}