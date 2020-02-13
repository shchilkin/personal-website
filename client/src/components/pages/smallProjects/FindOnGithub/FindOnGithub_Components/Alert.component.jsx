import React from "react";

const Alert = ({message, type}) => {
    return(
        (message !== null && type !== null)  && (
            <div className={`alert alert-${type}`}>{message}</div>
        )
    )
};

export default Alert;
