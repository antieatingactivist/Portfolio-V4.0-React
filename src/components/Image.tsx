
type Props = {
    src: string,
    isHidden: boolean,
}

export default function Image({src, isHidden}: Props) {
    const imgStyle = {
        height: "auto",
        width: "auto",
        maxWidth: "calc(100% - 10px)",
        maxHeight: "300px",
        filter: `grayscale(${isHidden ? 0 : 1})`,
        transition: "filter 1s",
        transitionDelay: "2s",
    };

    return <img src={`${process.env.PUBLIC_URL}/images/${src}`} alt="project" style={imgStyle}/>;
}