
type Props = {

}

export default function Devicons() {
    const style: object = {
        position: "absolute" ,
        display: 'flex', 
        justifyContent: 'flex-start'
    }
    const iconStyle: object = {
        fontSize: "35px"
    }

    return (
        <div style={style}>
            <i className="devicon-embeddedc-plain-wordmark" style={iconStyle}></i>
            <i className="devicon-cplusplus-plain" style={iconStyle}></i>
            <i className="devicon-react-plain-wordmark" style={iconStyle}></i>
            <i className="devicon-javascript-plain" style={iconStyle}></i>
        </div>
    )
}