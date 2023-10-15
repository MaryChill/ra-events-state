import React from 'react';
import './CardsView.css'


const ShopCard = ({ card }) => {
    return (
      <div className='card'>
        <p className='item_p bold'>{card.name}</p>
        <p className='item_p small'>{card.color}</p>
        <img src={card.img} className='item_img'/>
        <p className='item_p color'>{card.price}</p>
      </div>
    )
  } 
  
export const CardsView = ({ cards }) => {
    return cards.map((el, index) => <ShopCard card={el} key={index} />)
  }
