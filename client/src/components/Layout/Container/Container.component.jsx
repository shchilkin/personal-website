import React from "react";
import './Container.style.css'

const Container = ({children, className = 'CRK-container'}) => {
    return <div className={className}>{children}</div>
};

export default Container;