import React from 'react';
import './Toolbar.css';

export const Toolbar = ({filters, selected, onSelectFilter}) => {
    return (
      <div className='box-nav-filter'>{filters.map((el, index) => {
      return (
        <button onClick={() => onSelectFilter(el)} key={index} className= {(selected === el) ? 'selected' : 'unselected'}>
            {el}
        </button>
      )
      })}</div>
    )
  
  }