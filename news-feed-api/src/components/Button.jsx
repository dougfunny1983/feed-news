import React from 'react';

export default function Button({href}) {
  return (
    <button className="button button-primary">
      <a className="fa fa-chevron-right" target="_blank" href={href}  rel="noopener noreferrer">Saiba mais!!!</a>
    </button>
  )
  
}

