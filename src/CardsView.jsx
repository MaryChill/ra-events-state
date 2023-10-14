import React from 'react';


const ShopCard = ({ card }) => {
    console.log(card)
    return (
      <div className='card'>
        <p>{card.name}</p>
        <p>{card.price}</p>
        <p>{card.color}</p>
        <img src={card.img} />
      </div>
    )
  } 
  
export const CardsView = ({ cards }) => {
    console.log(cards)
    return (
        cards.map((el, index) => {
            <ShopCard card={el} key={index} />
        })
    )
  }
