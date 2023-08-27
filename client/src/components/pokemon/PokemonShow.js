import React from "react";
import AbilityDisplayShow from "./AbilityDisplayShow";
import EvolutionDisplay from "./EvolutionDisplay";
import TypeDisplay from "./TypeDisplay";
import StatGrid from "./StatGrid";

const PokemonShow = ({ selectedMon, setEditing, setSelectedId }) => {
    const { profileUrl, abilities, types } = selectedMon;

    const handleCloseClick = () => {
        setSelectedId(0);
    };

    const handleEditClick = () => {
        setEditing(true);
    };

    return (
        <div id="whole-thing" className="">
            <div className="flex-between">
                <div className="">
                    <h4 className="button" onClick={handleCloseClick}>
                        Close
                    </h4>
                </div>
                <h1 className="text-height-varies-h1">{selectedMon.name}</h1>
                <div className="">
                    <h4 className="button" onClick={handleEditClick}>
                        Edit
                    </h4>
                </div>
            </div>
            <div id="top-row" className="poke-grid-abilities-list ">
                <div className="flex-right">
                    <TypeDisplay
                        typeList={types}
                        labelClass={"image-show-label"}
                        containerClass={"flex-show-top"}
                    />
                </div>
                <div className="flex-center">
                    <img src={profileUrl} className="sprite-show" />
                </div>
                <div className="flex-left">
                    <AbilityDisplayShow abilities={abilities} />
                </div>
            </div>
            <div id="middle bar">
                <div id="evo-and-stats-row" className="grid-x grid-margin-x" style={{ margin: "2rem" }}>
                    <div className="cell small-12 medium-5 flex-around">
                        <StatGrid selectedMon={selectedMon} />
                    </div>
                    <div className="cell small-12 medium-7 flex-around">
                        <EvolutionDisplay selectedMon={selectedMon} />
                    </div>
                </div>
            </div>
            <div id="moves-row"></div>
        </div>
    );
};

export default PokemonShow;
