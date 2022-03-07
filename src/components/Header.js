
import Nav from './Nav';



export default function Header({hidden, scrollPosition}) {

    
    // const hidden = (scrollPosition > 100 && scrollPosition > furthestDown-100);
    // console.log(hidden);
    const noBorder = (scrollPosition < 4);
    const style = {
        top: '0px',
        borderStyle: 'solid',
        borderWidth: '0 0 1px 0',
        borderColor: 'var(--accentcolor)',
        boxShadow: '10px 10px 10px var(--shadowcolor)',
        backgroundColor: 'var(--bgcolortransparent)',
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
            <div>
                <span>J.</span> Garrett Corbin
            </div>

            <Nav  />
        </header>
    );
  }