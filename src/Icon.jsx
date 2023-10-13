import React from 'react';
import { ReactComponent as  Line} from '../img/line.svg';
import { ReactComponent as  Block} from '../img/block.svg';

export const Icon = (name) => {
    if (name === 'line') return <Line />;
    if (name === 'block') return <Block />;
}