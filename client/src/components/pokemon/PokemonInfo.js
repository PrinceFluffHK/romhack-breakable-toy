import React from "react";
import getTypeDisplay from "../../services/getTypeDisplay";
import AbilityDisplay from "./AbilityDisplay";

const PokemonInfo = ({
    selectedId,
    baseHp,
    baseAtk,
    baseDef,
    baseSpA,
    baseSpD,
    baseSpe,
    types,
    abilities
}) => {

    console.log()
    const typeDisplay = getTypeDisplay(types, "", "image-type-label");

    const statList = [
        {
            name: "HP",
            value: baseHp,
        },
        {
            name: "Atk",
            value: baseAtk,
        },
        {
            name: "Def",
            value: baseDef,
        },
        {
            name: "SpA",
            value: baseSpA,
        },
        {
            name: "SpD",
            value: baseSpD,
        },
        {
            name: "Spe",
            value: baseSpe,
        },
    ];

    const statDisplay = statList.map(stat => {
        return(
            <div key={stat.name} className="flex-single-stat">
                {stat.value}
            </div>
        )
    })

    if (selectedId === 0) {
        return (
            <div className="poke-grid-list-info">
                <div className="flex-small-types">
                    <div className="">{typeDisplay}</div>
                </div>
                <AbilityDisplay
                    abilities={abilities}
                />
                <div id="stats-display" className="poke-grid-stats-list">
                    {statDisplay}
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};

export default PokemonInfo;
