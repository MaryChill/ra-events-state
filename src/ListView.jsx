import React from 'react';

const ShopItem = ({ card }) => {
    console.log(card)
    return (
      <div className='item'>
        <p>{card.name}</p>
        <p>{card.price}</p>
        <p>{card.color}</p>
        <img src={card.img} />
      </div>
    )
  } 
  
export const ListView = ({ items }) => {
    console.log(items)
    return (
        items.map((el, index) => {
            <ShopItem card={el} key={index} />
        })
    )
  }