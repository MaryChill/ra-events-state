import { useState } from 'react';
import './App.css';
import React from 'react';
import { IconSwitch } from './Icon';
//import { CardsView } from './CardsView';
import { ListView } from './ListView';
import { products } from './Products';

const Store = () => {
  const [position, setPosition] = useState(false);

  const toggle = () => {
    setPosition(position => !position);
  }

  return (
    <>
      <IconSwitch icon={position ? 'line' : 'block'} onSwitch={toggle} />
      {/* <CardsView cards={products} /> */}
      <ListView items={products} />
    </>
  )
}

function App() {
  return <Store />
}

export default App
