import React from 'react';
import './ListView.css'

const ShopItem = ({ card }) => {
    return (
      <div className='item'>
        <img src={card.img} className='item_img'/>
        <p className='item_p bold'>{card.name}</p>
        <p className='item_p small'>{card.color}</p>
        <p className='item_p color'>${card.price}</p>
      </div>
    )
  } 
  
export const ListView = ({ items }) => {
    return items.map((el, index) =>  <ShopItem card={el} key={index} />)
  }