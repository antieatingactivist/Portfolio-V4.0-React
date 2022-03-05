const introStyle = {
    padding: '25vh 0 0vh 0'
}
const spanStyle = {
    position: 'relative',
    top: '-50px',
    left: '50px',
    fontSize: '70%',
    whiteSpace: 'nowrap'
}
const pStyle = {
    position: 'relative',
    top: '-50px',
    left: '60px'
}

export default function Intro() {

    return (
        <section id="intro" style={introStyle}>
            <h1>Hi, I'm Garrett.</h1>
            <h1><span style={spanStyle}>Developer, and builder of many things.</span></h1>
            <p style={pStyle}>scroll down and have a look.</p>
        </section>
    );
  }