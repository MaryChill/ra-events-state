import { useState } from 'react';
import React from 'react';
import { IconSwitch } from './Icon';
import { CardsView } from './CardsView';
import { ListView } from './ListView';
import { products } from './Products';
import { ProjectList }from './ProjectList'
import { Toolbar } from './Toolbar';
import './App.css';

const Store = () => {
  const [position, setPosition] = useState(true);

  const toggle = () => {
    setPosition(position => !position);
  }

  return (
    <>
      <div className='box-nav'><IconSwitch icon={position ? 'line' : 'block'} onSwitch={toggle} /></div>
      <div>
        {position ? <div className='box-line'><ListView items={products} /></div> :  <div className='box-block'><CardsView cards={products} /></div>}
        
        
      </div>
      
    </>
  )
}

const Portfolio = () => {
  const [filter,setFilter] = useState('All');

  const onSelectFilter = (item) => {
    setFilter(item);
  }

  return (
    <>
      <Toolbar 
        filters={["All", "Websites", "Flayers", "Business Cards"]} 
        selected={filter} 
        onSelectFilter={onSelectFilter}/>
      <div className='img-box'><ProjectList selected={filter}/></div>
    </>
  )
}

function App() {
  return <><Portfolio/> <Store /></>
}

export default App
