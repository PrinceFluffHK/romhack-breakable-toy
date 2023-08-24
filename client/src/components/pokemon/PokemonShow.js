import React from "react";
import AbilityDisplayShow from "./AbilityDisplayShow";
import EvolutionDisplay from "./EvolutionDisplay";
import TypeDisplay from "./TypeDisplay";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import getTypeColor from "../../services/getTypeColor";
import StatGrid from "./StatGrid";

const PokemonShow = ({ selectedMon, setEditing, setSelectedId }) => {
    const { profileUrl, abilities, types } = selectedMon;
    const primaryColor = getTypeColor(types[0].name);
    
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
                <div id="evo-and-stats-row" className="flex-around">
                    <StatGrid selectedMon={selectedMon} />
                    <EvolutionDisplay selectedMon={selectedMon} />
                </div>
            </div>
            <div id="moves-row">{/* <h1>[Moves]</h1> */}</div>
        </div>
    );
};

export default PokemonShow;
