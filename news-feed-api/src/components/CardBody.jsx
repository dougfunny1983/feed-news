import React from 'react';
import Button from './Button'

export default function CardBody({text, title}) {
  return (
    <div className="card-body">
      <p className="date">March 20 2015</p>
      
      <h2>{title}</h2>
      
      <p className="body-content">{text}</p>
      
      <Button />
    </div>
  )
  
}

