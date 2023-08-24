import React, { useEffect, useState } from "react";
import _ from "lodash"

const EditEvosTab = ({ setEditing, selectedMon }) => {
    // const patch

    const evoList = selectedMon.evolutions.postEvos.map((evolution, index) => {
        const [evoRecord, setEvoRecord] = useState({
            name: "",
            triggerName: "",
            parameter: "",
            levelReq: 0,
        })

        const seedRecord = () => {
            setEvoRecord
        }

        useEffect(() => {
            setEvoRecord({
                name: _.capitalize(evolution.name),
                triggerName: evolution.triggerName,
                parameter: evolution.parameter,
                levelReq: evolution.levelReq
            })
        },[])

        const handleChange = (event) => {
            setEvoRecord({
                ...evoRecord,
                [event.currentTarget.name]: event.currentTarget.value,
            });
        }

        const handleSubmit = () => {

        }

        return (
            <form className="button" key={index} onSubmit={handleSubmit}>
                <div className="grid-x grid-margin-x" style={{margin: ".7rem"}}>
                    <div className="cell auto">Evolution to</div>
                    <label htmlFor={index}>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={evoRecord.name}
                            onChange={handleChange}
                        />
                    </label>

                </div>
                <input
                    type="submit"
                    value="Update"
                    className="button"
                />
            </form>
        );
    });

    return (
        <div className="grid-x grid-margin-x" style={{margin: "1rem"}}>
            <div className="cell auto"></div>
            <div className="cell auto">{evoList}</div>
        </div>
    );
};

export default EditEvosTab;
