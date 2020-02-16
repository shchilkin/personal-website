import React from "react";
import '../../../../Layout/Alert/Alert.style.css'

const Alert = ({message, type}) => {
    return(
        (message !== null && type !== null)  && (
            <div className={`Alert Alert-${type}`}>{message}</div>
        )
    )
};

export default Alert;
