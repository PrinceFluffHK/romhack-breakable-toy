import React from "react";

const TypesAbilitiesForm = ({ monRecord, handleChange }) => {
    return (
        <div className="">
            <div className="grid-x ">
                <h5 className="cell small-4 stat-form-text">Name</h5>
                <label htmlFor="name" className="cell small-8">
                    <input
                        id="name"
                        name="name"
                        value={monRecord.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Add Name"
                    />
                </label>
            </div>
            <div className="grid-x">
                <h5 className="cell small-4 stat-form-text">Type 1</h5>
                <label htmlFor="type1" className="cell small-8">
                    <input
                        id="type1"
                        name="type1"
                        value={monRecord.type1}
                        onChange={handleChange}
                        type="text"
                        placeholder="No Type 1"
                    ></input>
                </label>
            </div>
            <div className="grid-x">
                <h5 className="cell small-4 stat-form-text">Type 2</h5>
                <label htmlFor="type2" className="cell small-8">
                    <input
                        id="type2"
                        name="type2"
                        value={monRecord.type2}
                        onChange={handleChange}
                        type="text"
                        placeholder="No Type 2"
                    />
                </label>
            </div>
            <div className="grid-x">
                <h5 className="cell small-4 stat-form-text">Ability 1</h5>
                <label htmlFor="ability1" className="cell small-8">
                    <input
                        id="ability1"
                        name="ability1"
                        value={monRecord.ability1}
                        onChange={handleChange}
                        type="text"
                        placeholder="No Ability 1"
                    />
                </label>
            </div>
            <div className="grid-x">
                <h5 className="cell small-4 stat-form-text">Ability 2</h5>
                <label htmlFor="ability2" className="cell small-8">
                    <input
                        id="ability2"
                        name="ability2"
                        value={monRecord.ability2}
                        onChange={handleChange}
                        type="text"
                        placeholder="No Ability 2"
                    ></input>
                </label>
            </div>
            <div className="grid-x">
                <h5 className="cell small-4 stat-form-text">Ability 3</h5>
                <label htmlFor="ability3" className="cell small-8">
                    <input
                        id="ability3"
                        name="ability3"
                        value={monRecord.ability3}
                        onChange={handleChange}
                        type="text"
                        placeholder="No Ability 3"
                    ></input>
                </label>
            </div>
        </div>
    );
};

export default TypesAbilitiesForm;
