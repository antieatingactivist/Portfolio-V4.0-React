import Devicon from './Devicon';

type Props = {
    technologies: string[];
}

export default function Devicons({technologies}: Props) {
    const style: object = {
        position: "absolute",
        bottom: "10px",
        left: "10px",
        display: "flex"
    }
    
    return (
        <span style={style}>
            {
                technologies?.map( technology => <Devicon technology={technology} clickable={false} /> )
            }
        </span>
    )
}