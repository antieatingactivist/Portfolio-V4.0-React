
export default function Image({src}) {

    const imgStyle = {
        // marginLeft: '50px',
        width: 'calc(100vw - 20px)',
        maxWidth: '500px'
    }
    

    const image = require(`../assets/images/${src}`)
    return <img src = {image} alt="project" style={imgStyle}/>
}