import React, { useEffect, useState } from "react";
import _ from "lodash";

const EditEvosTab = ({ selectedMon, setEvos, evos }) => {
    // const patch

    const evoList = evos.map((evolution, index) => {
        const [evoRecord, setEvoRecord] = useState({
            ...evolution,
            name: _.capitalize(evolution.name),
        });

        const handleChange = (event) => {
            setEvoRecord({
                ...evoRecord,
                [event.currentTarget.name]: event.currentTarget.value,
            });
            const newEvoRecord = {
                ...evoRecord,
                [event.currentTarget.name]: event.currentTarget.value,
            };
            const newEvolutions = evos;
            newEvolutions.splice(index, 1, newEvoRecord);
            setEvos(newEvolutions);
        };

        return (
            <div className="container-evo-form" key={index}>
                <div className="grid-x grid-margin-x">
                    <div className="cell small-3" id="preEvo">
                        <h3>{selectedMon.name}</h3>
                        <img src={selectedMon.spriteUrl} />
                    </div>
                    <div className="cell small-6" id="forms">
                        <div className="grid-x ">
                            <div className="cell small-8">
                                <h4>Evo Trigger</h4>
                                <label className="" htmlFor="triggerName">
                                    <input
                                        type="text"
                                        name="triggerName"
                                        id="triggerName"
                                        value={evoRecord.triggerName}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="cell small-3 small-offset-1">
                                <h4>Level</h4>
                                <label htmlFor="levelReq">
                                    <input
                                        type="number"
                                        name="levelReq"
                                        id="levelReq"
                                        value={evoRecord.levelReq}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </div>

                        <h4>Parameter</h4>
                        <label htmlFor="parameter">
                            <input
                                type="text"
                                name="parameter"
                                id="parameter"
                                value={evoRecord.parameter}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="cell small-3" id="postEvo">
                        <label htmlFor="name">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={evoRecord.name}
                                onChange={handleChange}
                            />
                        </label>
                        <img src={evolution.spriteUrl} />
                    </div>
                </div>
            </div>
        );
    });

    return <div className="flex-center-vertical">{evoList}</div>;
};

export default EditEvosTab;
