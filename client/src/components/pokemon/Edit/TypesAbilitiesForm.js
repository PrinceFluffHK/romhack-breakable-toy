import React from "react";

const TypesAbilitiesForm = ({ monRecord, handleChange }) => {
    return (
        <div className="">
            <div className="grid-x">
                <h4 className="cell small-4">Name</h4>
                <label htmlFor="name" className="cell small-8">
                    <input
                        id="name"
                        name="name"
                        value={monRecord.name}
                        onChange={handleChange}
                        type="text"
                    />
                </label>
            </div>
            <div className="grid-x" style={{ margin: "1rem 0rem 0rem 0rem" }}>
                <h4 className="cell small-4">Type 1</h4>
                <label htmlFor="type1" className="cell small-8">
                    <input
                        id="type1"
                        name="type1"
                        value={monRecord.type1}
                        onChange={handleChange}
                        type="text"
                    ></input>
                </label>
            </div>
            <div className="grid-x">
                <h4 className="cell small-4">Type 2</h4>
                <label htmlFor="type2" className="cell small-8">
                    <input
                        id="type2"
                        name="type2"
                        value={monRecord.type2}
                        onChange={handleChange}
                        type="text"
                    />
                </label>
            </div>
            <div className="grid-x" style={{ margin: "1rem 0rem 0rem 0rem" }}>
                <h4 className="cell small-4">Ability 1</h4>
                <label htmlFor="ability1" className="cell small-8">
                    <input
                        id="ability1"
                        name="ability1"
                        value={monRecord.ability1}
                        onChange={handleChange}
                        type="text"
                    />
                </label>
            </div>
            <div className="grid-x">
                <h4 className="cell small-4">Ability 2</h4>
                <label htmlFor="ability2" className="cell small-8">
                    <input
                        id="ability2"
                        name="ability2"
                        value={monRecord.ability2}
                        onChange={handleChange}
                        type="text"
                    ></input>
                </label>
            </div>
            <div className="grid-x">
                <h4 className="cell small-4">Ability 3</h4>
                <label htmlFor="ability3" className="cell small-8">
                    <input
                        id="ability3"
                        name="ability3"
                        value={monRecord.ability3}
                        onChange={handleChange}
                        type="text"
                    ></input>
                </label>
            </div>
        </div>
    );
};

export default TypesAbilitiesForm;
