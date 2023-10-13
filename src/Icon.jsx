import React from 'react';
//import { ReactComponent as  Line} from '../img/line.svg';
//import { ReactComponent as  Block} from '../img/block.svg';

export const Icon = (name, sw) => {
    sw();
    if (name === 'line') return (
        <svg xmlns = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
            <path d=''></path>
        </svg>
        )
    if (name === 'block') return (
        <svg xmlns = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
            <path d=''></path>
        </svg>
        )
}