import React from "react";

const StatsForm = ({ monRecord, handleChange }) => {
    return (
        <div className="grid-x grid-margin-x">
            <div className="cell auto" id="base">
                <div id="hp" className="grid-x">
                    <h5 className="cell small-7">Base HP</h5>
                    <label htmlFor="baseHp" className="cell small-5">
                        <input
                            id="baseHp"
                            name="baseHp"
                            value={monRecord.baseHp}
                            onChange={handleChange}
                            placeholder="Base"
                            type="number"
                        ></input>
                    </label>
                </div>
                <div id="atk" className="grid-x">
                    <h5 className="cell small-7">Base Atk</h5>
                    <label htmlFor="baseAtk" className="cell small-5">
                        <input
                            id="baseAtk"
                            name="baseAtk"
                            value={monRecord.baseAtk}
                            onChange={handleChange}
                            placeholder="Base"
                            type="number"
                        ></input>
                    </label>
                </div>
                <div id="def" className="grid-x">
                    <h5 className="cell small-7">Base Def</h5>
                    <label htmlFor="baseDef" className="cell small-5">
                        <input
                            id="baseDef"
                            name="baseDef"
                            value={monRecord.baseDef}
                            onChange={handleChange}
                            placeholder="Base"
                            type="number"
                        />
                    </label>
                </div>
                <div id="spa" className="grid-x">
                    <h5 className="cell small-7">Base SpA</h5>
                    <label htmlFor="baseSpA" className="cell small-5">
                        <input
                            id="baseSpA"
                            name="baseSpA"
                            value={monRecord.baseSpA}
                            onChange={handleChange}
                            placeholder="Base"
                            type="number"
                        ></input>
                    </label>
                </div>
                <div id="spd" className="cell auto grid-x">
                    <h5 className="cell small-7">Base SpD</h5>
                    <label htmlFor="baseSpD" className="cell small-5">
                        <input
                            id="baseSpD"
                            name="baseSpD"
                            value={monRecord.baseSpD}
                            onChange={handleChange}
                            placeholder="Base"
                            type="number"
                        ></input>
                    </label>
                </div>
                <div id="spe" className="cell auto grid-x">
                    <h5 className="cell small-7">Base Spe</h5>
                    <label htmlFor="baseSpe" className="cell small-5">
                        <input
                            id="baseSpe"
                            name="baseSpe"
                            value={monRecord.baseSpe}
                            onChange={handleChange}
                            placeholder="Base"
                            type="number"
                        ></input>
                    </label>
                </div>
            </div>

            <div className="cell auto" id="ev">
                <div className="grid-x">
                    <h5 className="cell small-7">HP EVs</h5>
                    <label htmlFor="evHp" className="cell small-5">
                        <input
                            id="evHp"
                            name="evHp"
                            value={monRecord.evHp}
                            onChange={handleChange}
                            placeholder="EV"
                            type="number"
                        />
                    </label>
                </div>
                <div className="grid-x">
                    <h5 className="cell small-7">Atk EVs</h5>
                    <label htmlFor="evAtk" className="cell small-5">
                        <input
                            id="evAtk"
                            name="evAtk"
                            value={monRecord.evAtk}
                            onChange={handleChange}
                            placeholder="EV"
                            type="number"
                        ></input>
                    </label>
                </div>
                <div className="grid-x">
                    <h5 className="cell small-7">Def EVs</h5>
                    <label htmlFor="evDef" className="cell small-5">
                        <input
                            id="evDef"
                            name="evDef"
                            value={monRecord.evDef}
                            onChange={handleChange}
                            placeholder="EV"
                            type="number"
                        />
                    </label>
                </div>
                <div className="grid-x">
                    <h5 className="cell small-7">SpA EVs</h5>
                    <label htmlFor="evSpA" className="cell small-5">
                        <input
                            id="evSpA"
                            name="evSpA"
                            value={monRecord.evSpA}
                            onChange={handleChange}
                            placeholder="EV"
                            type="number"
                        ></input>
                    </label>
                    <h5 className="cell small-7">SpA EVs</h5>
                    <label htmlFor="evSpD" className="cell small-5">
                        <input
                            id="evSpD"
                            name="evSpD"
                            value={monRecord.evSpD}
                            onChange={handleChange}
                            placeholder="EV"
                            type="number"
                        ></input>
                    </label>
                </div>
                <div className="grid-x">
                    <h5 className="cell small-7">SpA EVs</h5>
                    <label htmlFor="evSpe" className="cell small-5">
                        <input
                            id="evSpe"
                            name="evSpe"
                            value={monRecord.evSpe}
                            onChange={handleChange}
                            placeholder="EV"
                            type="number"
                        ></input>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default StatsForm;
