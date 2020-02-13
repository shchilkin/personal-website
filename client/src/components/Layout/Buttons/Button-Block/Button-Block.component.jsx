import React from 'react';
import './Button-Block.style.css'
import '../Button/Button.style.css'

const ButtonBlock = ({text, onClick}) => {
    return (<button className='Button-Block button' onClick={onClick}>{text || 'Placeholder'}</button>)
};


export default ButtonBlock;