
type Props = {
    src: string,
    isHidden: boolean,
}

export default function Image({src, isHidden}: Props) {
    let imgStyle = {
        width: 'calc(100vw - 20px)',
        maxWidth: '500px',
        filter: `grayscale(${isHidden ? 0 : 1})`,
        transition: 'filter 1s',
        transitionDelay: '2s',
    }
    const image = require(`../assets/images/${src}`)
    return <img src={image} alt="project" style={imgStyle}/>
}