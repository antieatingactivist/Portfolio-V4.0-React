
import Nav from './Nav';




export default function Header({hidden, scrollPosition, windowHeight}) {



    const noBorder = (scrollPosition < 4);
    const style = {
        top: '0px',
        borderStyle: 'solid',
        borderWidth: '0 0 1px 0',
        borderColor: 'var(--accentcolor)',
        boxShadow: '10px 10px 10px var(--shadowcolor)',
        backgroundColor: 'var(--bgcolortransparent)',
        zIndex: '100'
    }
    

    if (hidden) {

        style.top = '-100px';
        
    }
    if (noBorder) {
        style.borderColor = '#00000000';
        style.boxShadow = 'none';
        style.backgroundColor = '#00000000';
    }

    return (
        <header style={style}>
            <div style={{marginTop: "6px", marginLeft: "6px"}}>
                <span className="accent">J.</span> Garrett Corbin
            </div>

            <Nav windowHeight={windowHeight} />
        </header>
    );
  }