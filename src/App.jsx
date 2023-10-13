import { useState } from 'react';
import './App.css';
import React from 'react';
import { Icon } from './Icon';
// import line from '../img/line.svg';
// import block from '../img/block.svg';

const Store = () => {
 const [state, setPosition] = useState(true);

  function toggle() {
    setPosition(!state)
  }

  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  return (
    <>
      <IconSwitch icon={state ? 'line' : 'block'} onSwitch = {state} />
      <CardsView cards={products} />
      <ListView items={products} />
    </>
  )
}

const IconSwitch = (icon, onSwitch) => {
  const sw = () => console.log(onSwitch)
  return (
    <Icon name={icon} onClick={sw}/>
  )
}
const CardsView = (cards) => {
  return (
    Object.keys(cards).map((el, index) => (
      <ShopCard card={el} key={index}/>
    ))
  )
}

const ShopCard = (card) => {
  return (
    <div>
      <p>{card.name}</p>
      <p>{card.price}</p>
      <p>{card.color}</p>
      <img src={card.img} alt="" />
    </div>
  )
}

const ListView = (items) => {
  return (
    Object.keys(items).map((el, index) => (
      <ShopItem card={el} key={index}/>
    ))
  )
}

const ShopItem = (card) => {
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
