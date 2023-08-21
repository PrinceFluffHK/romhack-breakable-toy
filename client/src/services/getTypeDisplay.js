import React from "react";

const getTypeDisplay = (typesList, divClass, labelClass) => {
    if (typesList.length === 1) {
        return (
            <div id="type-labels" className={divClass}>
                <img src={typesList[0].icon} className={labelClass} />
                <img src={typesList[0].icon} className={labelClass} />
            </div>
        );
    } else {
        return (
            <div id="type-labels" className={divClass}>
                <img src={typesList[0].icon} className={labelClass} />
                <img src={typesList[1].icon} className={labelClass} />
            </div>
        );
    }
};

export default getTypeDisplay;
