import React from 'react';

export default function CardBody({text, title, date}) {
  return (
    <div className="card-body">
      <p className="date">{date}</p> 
      <h2 data-testid="text-title">{title}</h2>
      <p className="body-content">{text}</p>
    </div>
  )
  
}

