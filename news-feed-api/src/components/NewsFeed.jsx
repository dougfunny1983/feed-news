import React from 'react';
import Card from './Card';
import InputText from './InputText';

export default function CardBody() {

  return (
    <div className='news-feed'>
      <InputText/>
      <Card />
      <Card />
      <Card />
      <Card />
     
    </div>
  );
}
