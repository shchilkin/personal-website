import React from "react";
import './Container.style.css'

const Container = (props) => {
    return <div className={'CRK-container'}>{props.children}</div>
};

export default Container;