import React from "react";
import AbilityDisplayShow from "./AbilityDisplayShow";
import EvolutionDisplay from "./EvolutionDisplay";
import TypeDisplay from "./TypeDisplay";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import getTypeColor from "../../services/getTypeColor";

const PokemonShow = ({ selectedMon, setEditing, setSelectedId }) => {
    const { baseHp, baseAtk, baseDef, baseSpA, baseSpD, baseSpe, profileUrl, abilities, types } =
        selectedMon;
    console.log(types);
    const primaryColor = getTypeColor(types[0].name);
    const handleCloseClick = () => {
        setSelectedId(0)
    }

    const handleEditClick = () => {
        setEditing(true)
    }

    const data = [
        {
            name: "HP",
            stat: baseHp,
        },
        {
            name: "Atk",
            stat: baseAtk,
        },
        {
            name: "Def",
            stat: baseDef,
        },
        {
            name: "SpA",
            stat: baseSpA,
        },
        {
            name: "SpD",
            stat: baseSpD,
        },
        {
            name: "Spe",
            stat: baseSpe,
        },
    ];

    const renderLabel = () => {
        return <text>{"value"}</text>;
    };
    return (
        <div id="whole-thing" className="">
            <div className="flex-between">
                <div className="">
                    <h4 className="button" onClick={handleCloseClick}>Close</h4>
                </div>
                <h1 className="text-height-varies-h1">{selectedMon.name}</h1>
                <div className="">
                    <h4 className="button" onClick={handleEditClick}>Edit {selectedMon.name}</h4>
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
                    <div id="stats" className="grid-y">
                        <div className="cell">
                            <div className="flex-around-top" style={{margin: "5px"}}>
                                <div className="text-bold" style={{margin: "0px 5px 0rem 0px"}}>HP</div>
                                <div className="text-bold" style={{margin: "0px 5px 0rem 0px"}}>Atk</div>
                                <div className="text-bold">Def</div>
                                <div className="text-bold">SpA</div>
                                <div className="text-bold">SpD</div>
                                <div className="text-bold">Spe</div>
                            </div>
                        </div>
                        <div className="cell">
                            <BarChart width={300} height={150} data={data}>
                                <Bar
                                    type="monotone"
                                    dataKey="stat"
                                    fill={primaryColor}
                                    stroke={"#FFFFFF"}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                    }}
                                    label={renderLabel}
                                />
                                <XAxis dataKey="stat" color={primaryColor} />
                            </BarChart>
                        </div>
                    </div>
                    <EvolutionDisplay selectedMon={selectedMon} />
                </div>
            </div>
            <div id="moves-row">
                <h1>[Moves]</h1>
            </div>
        </div>
    );
};

export default PokemonShow;
