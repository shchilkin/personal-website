import React, {useContext} from "react";
import './Alert.style.css'
import ThemeContext from "../../../contexts/theme/ThemeContext";
import AlertContext from '../../../contexts/alert/AlertContext'

const Alerts = () => {
    const themeContext =  useContext(ThemeContext);
    const alertContext = useContext(AlertContext);

    const {darkMode} = themeContext;

    return(
        alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
            <div
                key={alert.id}
                className={`${darkMode ? 'Alert-Dark' : 'Alert-Light'} Alert-${alert.type}`}
            >
                {alert.message}
            </div>
        ))
    )
};

export default Alerts;
