import React from "react";

const ListItem = ({id, task}) => {
    // li.className =  'list-group-item';
    // li.style.backgroundColor = '#e0115f';
    // li.style.border = "1px solid rgba(0, 0, 0, 0.125)";
    // li.appendChild(button);
    // li.appendChild(document.createTextNode(Text));

    return <li className='list-group-item'>
        {task}
    </li>
};

export default ListItem