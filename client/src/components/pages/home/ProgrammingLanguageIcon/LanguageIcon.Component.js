import Icons from "../../../Icons";
import React from "react";

const LanguageIcon = (language) =>{

    return(
        <svg
            width="16px"
            height="16px"
            viewBox={Icons[language].viewBox}
            style={Icons[language].style}
        >
            {Icons[language].group ?
                (
                    <g>
                        {Icons[language].group.map( Path => <path d={Path} /> )}
                    </g>
                ) : <path d={Icons[language].path}/>}
        </svg>
    )
}

export default LanguageIcon;