// import React from 'react';
import { useEffect, useState } from "react";

import Nav from './Nav';



export default function Header() {
    let hidden = false;
    let style = {
        top: '-100px',
        border: 'none',
        boxShadow: 'none',
        backgroundColor: '#00000000',
    }
   

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        };
        console.log([scrollPosition]);
        if (scrollPosition < 4) {
            style.border = 'none';
            style.boxShadow = 'none';
            style.backgroundColor = '#00000000';
        } else {
            style.border = null;
            style.boxShadow = null;
            style.backgroundColor = null;
        }
        if (scrollPosition < 300) {
            style.top = '0px';
        } else {
            style.top = '-100px';
        }

        useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header style={style}>
            <div>
                <span>J.</span> Garrett Corbin
            </div>

            <Nav  />
        </header>
    );
  }