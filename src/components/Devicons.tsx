import Devicon from './Devicon';

type Props = {
    technologies: string[];
    isHidden?: boolean;
}

export default function Devicons({technologies, isHidden}: Props) {
    const style: object = {
        position: "absolute",
        bottom: "10px",
        left: "10px"
    }
    return (
        <span style={style}>
            {
                technologies?.map( technology => <Devicon technology={technology} clickable={false} /> )
            }
        </span>
    )
}