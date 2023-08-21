import React from "react";
import AbilityDisplayShow from "./AbilityDisplayShow";
import EvolutionDisplay from "./EvolutionDisplay";
import TypeDisplay from "./TypeDisplay";

const PokemonShow = ({ selectedMon }) => {
    return (
        <div id="whole-thing" className="">
            <div className="layer-1 flex-edit-button">
                <h4 className="button">Edit</h4>
            </div>
            <h1 className="text-height-varies-h1">{selectedMon.name}</h1>
            <div id="top-row" className="poke-grid-abilities-list ">
                <div className="flex-right">
                    <TypeDisplay
                        typeList={selectedMon.types}
                        labelClass={"image-show-label"}
                        containerClass={"flex-show-top"}
                    />
                </div>
                <div className="flex-center">
                    <img src={selectedMon.profileUrl} className="sprite-show" />
                </div>
                <div className="flex-left">
                    <AbilityDisplayShow abilities={selectedMon.abilities} />
                </div>
            </div>
            <div id="evo-and-stats-row" className="flex-center">
                <EvolutionDisplay selectedMon={selectedMon} />
            </div>
            <div id="moves-row">
                <h1>[Moves]</h1>
            </div>
        </div>
    );
};

export default PokemonShow;
