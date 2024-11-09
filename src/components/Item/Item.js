import React from 'react';
import './Item.css';

const Item = (Props) => {
  return (
    <div className='item'>
      <img src={Props.itemIMG} alt='#' />
      <h3 className='item-h2'>{Props.title}</h3>
      <p className='item-p'>{Props.paragraph}</p>
    </div>
  )
}

export default Item
