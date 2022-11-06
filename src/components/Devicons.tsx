import Devicon from "./Devicon";

type Props = {
    technologies: string[];
    mobile: boolean
}

export default function Devicons({technologies, mobile}: Props) {
    const style: object = {
        position: mobile ? "absolute" : "relative" ,
        marginTop: mobile ? "0px" : "30px",
        bottom: "10px",
        left: "10px",
        display: "flex"
    };
    
    return (
        <span style={style}>
            {
                technologies?.map( technology => <Devicon technology={technology} clickable={false} /> )
            }
        </span>
    );
}