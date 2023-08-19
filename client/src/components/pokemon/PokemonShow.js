import React from "react";
import getTypeDisplay from "../../services/getTypeDisplay";
import AbilityDisplayShow from "./AbilityDisplayShow";

const PokemonShow = ({ selectedMon }) => {
    const typeDisplay = getTypeDisplay(selectedMon.types, "flex-show-top", "image-show-label");
    return (
        <div id="whole-thing" className="poke-grid-vert-show">
            <div id="top-row" className="poke-grid-show-top">
                {typeDisplay}
                <div id="type-cell" className="">
                    <img src={selectedMon.profileUrl} className="sprite-show" />
                </div>
                <AbilityDisplayShow abilities={selectedMon.abilities} />
            </div>
            <div id="evo-and-stats-row">
                <h1>[Evos and Stats]</h1>
            </div>
            <div id="moves-row">
                <h1>[Moves]</h1>
            </div>
        </div>
    );
};

export default PokemonShow;
