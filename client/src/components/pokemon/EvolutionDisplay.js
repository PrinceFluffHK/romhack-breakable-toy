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
                <div className="sprite-circle">
                    <img src={spriteUrl} />
                </div>
                <div id="arrow" className="flex-center-vertical" style={{ margin: "1rem" }}>
                    <p style={{ marginBottom: ".6rem" }}>
                        {triggerName}
                        {level}
                    </p>
                    <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
                    <p style={{ marginTop: ".6rem" }}>{parameter}</p>
                </div>
            </div>
        );
    });

    const postEvos = selectedMon.evolutions.postEvos.map((mon) => {
        const { triggerName, levelReq, spriteUrl, parameter, id } = mon;
        let level = "";
        if (levelReq > 0) {
            level = `: ${levelReq}`;
        }
        return (
            <div key={id} className="flex-arrow">
                <div id="arrow" className="flex-center-vertical" style={{ margin: "1rem" }}>
                    <p style={{ marginBottom: ".6rem" }}>
                        {triggerName}
                        {level}
                    </p>
                    <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
                    <p style={{ marginTop: ".6rem" }}>{parameter}</p>
                </div>
                <div className="sprite-circle">
                    <img src={spriteUrl} />
                </div>
            </div>
        );
    });

    return (
        <div className="flex-single-stat">
            <div id="preEvos">{preEvos}</div>
            <div id="currentMon">
                <div className="sprite-circle">
                    <img src={selectedMon.spriteUrl} className="" />
                </div>
            </div>
            <div id="postEvos">{postEvos}</div>
        </div>
    );
};

export default EvolutionDisplay;
