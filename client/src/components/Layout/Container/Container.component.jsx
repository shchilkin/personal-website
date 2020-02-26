import React from "react";
import './Container.style.css'

const Container = ({children, className = 'CRK-container', style}) => {
    return <div className={className} style={style}>{children}</div>
};

export default Container;