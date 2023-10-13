import { useState } from 'react';
import './App.css';
import React from 'react';
import { Icon } from './Icon';
import { products } from './Products';

const Store = () => {

 const [position, setPosition] = useState(false);

  const toggle = () => {
    setPosition(position => !position);
  }

  

  return (
    <>
      <IconSwitch icon={position ? 'line' : 'block'} onSwitch = {toggle} />
      <CardsView cards={products} />
      <ListView items={products} />
    </>
  )
}

const IconSwitch = ({icon, onSwitch}) => {
  console.log(icon)
  return (
    <button onClick={onSwitch} className = 'button'>
      <Icon name={icon} />
    </button>
  )
}
const CardsView = (cards) => {
  return (
    Object.keys(cards).map((el, index) => (
      <ShopCard card={el} key={index}/>
    ))
  )
}

const ShopCard = ({card}) => {
  return (
    <div>
      <p>{card.name}</p>
      <p>{card.price}</p>
      <p>{card.color}</p>
      <img src={card.img} alt="" />
    </div>
  )
}

const ListView = ({items}) => {
  return (
    Object.keys(items).map((el, index) => (
      <ShopItem card={el} key={index}/>
    ))
  )
}

const ShopItem = ({card}) => {
  return (
    <div>
      <p>{card.name}</p>
      <p>{card.price}</p>
      <p>{card.color}</p>
      <img src={card.img} ></img>
    </div>
  )
}


// const item = {
//   brand: 'Tiger of Sweden',
//   title: 'Leonard coat',
//   description: 'Minimalistic coat in cotton-blend',
//   descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
//   price: 399,
//   currency: '£'
// }

// const ProductItem = () => {
//   return (
//     <div className="main-content">
//       <h2>{item.brand}</h2>
//       <h1>{item.title}</h1>
//       <h3>{item.description}</h3>
//       <div className="description">
//         {item.descriptionFull}
//       </div>
//       <div className="highlight-window mobile"><div class="highlight-overlay"></div></div>
//       <div className="divider"></div>
//       <div className="purchase-info">
//         <div className="price">{item.currency + item.price + '.00'}</div>
//         <button>Добавить в корзину</button>
//       </div>
//     </div>
//   )
// }

// class Portfolio extends React.Component {
//   constructor() {
//     super();
//     this.state = {filter: 'All'};
//     this.filters = ["All", "Websites", "Flayers", "Business Cards"];
//     this.selected = 'All';
//   }
//   // state = {filter: 'All'}
//   // filters = ["All", "Websites", "Flayers", "Business Cards"]
//   // selected = 'All'
//   render() {
//     return (
//       <Toolbar/>
//       // <div className="main-content">
//       //   <h2>{item.brand}</h2>
//       //   <h1>{item.title}</h1>
//       //   <h3>{item.description}</h3>
//       //   <div className="description">
//       //     {item.descriptionFull}
//       //   </div>
//       //   <div className="highlight-window mobile"><div class="highlight-overlay"></div></div>
//       //   <div className="divider"></div>
//       //   <div className="purchase-info">
//       //     <div className="price">{item.currency + item.price + '.00'}</div>
//       //     <button>Добавить в корзину</button>
//       //   </div>
//       // </div>
//     )
//   }
//  }

// class Toolbar extends React.Component {

// }


function App() {
  return <Store />
}

export default App
