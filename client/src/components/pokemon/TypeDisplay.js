import React from "react";

const TypeDisplay = ({ typeList, labelClass, containerClass}) => {
    if (typeList.length === 1) {
        return (
            <div className={containerClass}>
                <img src={typeList[0].label} className={labelClass} />
                <img src={typeList[0].label} className={labelClass} />
            </div>
        );
    } else {
        return (
            <div className={containerClass}>
                <img src={typeList[0].label} className={labelClass} />
                <img src={typeList[1].label} className={labelClass} />
            </div>
        );
    }
};

export default TypeDisplay;
