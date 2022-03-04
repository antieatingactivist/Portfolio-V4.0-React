import React from 'react';


export default function Footer() {
    const stripeStyle = {
        borderStyle: 'solid',
        borderWidth: '0 0 2px 2px',
        borderColor: 'var(--accentcolor)',
        borderRadius: '0 6px 0px 6px',
        height: '10px'
      }

    return (
        <footer id="contact">
            <div id="h-stripe" style={stripeStyle}></div>
        </footer>
    );
  }