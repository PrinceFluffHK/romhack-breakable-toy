import React from "react";

const EvolutionDisplay = ({ selectedMon }) => {
    if (
        selectedMon.evolutions.preEvos.length === 0 &&
        selectedMon.evolutions.postEvos.length === 0
    ) {
        return <></>;
    }
    const preEvos = selectedMon.evolutions.preEvos.map((mon) => {
        const { triggerName, levelReq, spriteUrl, parameter, id } = mon;
        let level = "";
        if (levelReq) {
            level = `: ${levelReq}`;
        }
        return (
            <div key={id} className="flex-arrow">
                <img src={spriteUrl} />
                <div id="arrow" className="flex-center-vertical">
                    <p>
                        {triggerName}
                        {level}
                    </p>
                    <img
                        className="image-arrow"
                        src="https://pfrs-production.s3.amazonaws.com/Arrow-002.png"
                    />
                    <p>{parameter}</p>
                </div>
            </div>
        );
    });

    const postEvos = selectedMon.evolutions.postEvos.map((mon) => {
        const { triggerName, levelReq, spriteUrl, parameter, id } = mon;
        let level = "";
        if (levelReq) {
            level = `: ${levelReq}`;
        }
        return (
            <div key={id} className="flex-arrow">
                <div id="arrow" className="flex-center-vertical">
                    <p>
                        {triggerName}
                        {level}
                    </p>
                    <img
                        className="image-arrow"
                        src="https://pfrs-production.s3.amazonaws.com/Arrow-002.png"
                    />
                    <p>{parameter}</p>
                </div>
                <img src={spriteUrl} />
            </div>
        );
    });

    return (
        <div className="flex-single-stat">
            <div id="preEvos">{preEvos}</div>
            <div id="currentMon">
                <img src={selectedMon.spriteUrl} className="" />
            </div>
            <div id="postEvos">{postEvos}</div>
        </div>
    );
};

export default EvolutionDisplay;
