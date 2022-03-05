// import React from 'react';
import { useEffect, useState } from "react";

import Nav from './Nav';



export default function Header() {

    let style = {
        top: '0px',
        border: 'none',
        boxShadow: 'none',
        backgroundColor: '#00000000',
    }
   

    const [scrollPosition, setScrollPosition] = useState(0);
    const [furthestDown, SetFurthestDown] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        // SetFurthestDown(scrollPosition);
        };
        
        
       
        console.log(furthestDown);
        
        if(scrollPosition > furthestDown) {
            console.log("set");
            
            style.top = "-60px";
            style.boxShadow = null;
            style.backgroundColor = null;
            style.border = null;
            SetFurthestDown(scrollPosition);
        }
        // if(scrollPosition < furthestDown-100) {
            
        //     console.log("cleared");
        //     // style.top = "0px";
        //     SetFurthestDown(scrollPosition);
        // }
        
        // if (scrollPosition < 60) {
            
        //     style.boxShadow = "none";
        //     style.backgroundColor = "#00000000";
        //     style.border = "none";
        // }
        // if (scrollPosition < 140) {
        //     style.top = null;
        // }   
        // if (scrollPosition < 4) {
        //     style.border = 'none';
        //     style.boxShadow = 'none';
        //     style.backgroundColor = '#00000000';
        // } else {
        //     style.border = null;
        //     style.boxShadow = null;
        //     style.backgroundColor = null;
        // }
        // if (scrollPosition < 300) {
        //     style.top = '0px';
        // } else {
        //     style.top = '-100px';
        // }

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