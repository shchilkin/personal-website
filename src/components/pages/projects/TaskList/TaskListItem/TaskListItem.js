import React from "react";
import Cross from '../../../../../icons/Cross.svg'

const ListItem = ({id, task}) => {
    return (<li className='list-group-item' style={{backgroundColor:'#FC4365', border:'1px solid rgba(0, 0, 0, 0.125)'}}>
                 {task} <span><img src={Cross} style={{width:'24px'}}/></span>
            </li>)
};

export default ListItem