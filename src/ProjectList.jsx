import React from 'react';
import { projects } from './Projects';
import './ProjectList.css';



export const ProjectList = (filter) => {
    return projects.map((el) =>  {
        return (
            <div className='img-item'>
                {(el.category === filter.selected) && 
                    <img src={el.img} alt="" />
                }
                {(filter.selected === 'All') &&
                    <img src={el.img} alt="" />
                }
            </div>
        
        )
    })
}