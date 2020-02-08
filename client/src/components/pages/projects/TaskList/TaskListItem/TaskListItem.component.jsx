import React from "react";
import Cross from '../../../../../icons/Cross.svg'

const ListItem = ({id, task, onDelete}) => {
    return (<li className={'list-group-item'} style={{backgroundColor:'#ffecf0'}}>
                 {task}
                 <button onClick={onDelete}/>
                 {/*<span><img style={{width:'15px'}} src={Cross}/></span>*/}
            </li>)
};

export default ListItem