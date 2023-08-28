import React from "react";
import getTypeDisplay from "../../services/getTypeDisplay";
import AbilityDisplayList from "./AbilityDisplayList";

const PokemonInfo = ({
    selectedId,
    baseHp,
    baseAtk,
    baseDef,
    baseSpA,
    baseSpD,
    baseSpe,
    types,
    abilities,
}) => {
    const typeDisplay = getTypeDisplay(types, "flex-type-icons", "image-type-label");

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

    let statTotal = 0;
    const statDisplay = statList.map((stat) => {
        statTotal += stat.value;
        return (
            <div key={stat.name} className="flex-single-stat">
                {stat.value}
            </div>
        );
    });

    if (selectedId === 0) {
        return (
            <div className="poke-grid-list-info">
                <div className="flex-small-types">
                    {typeDisplay}
                </div>
                <div id="stats-display" className="poke-grid-stats-list">
                    {statDisplay}
                    <div className="flex-single-stat text-bold">{statTotal}</div>
                </div>
                <AbilityDisplayList abilities={abilities} />
            </div>
        );
    } else {
        return <></>;
    }
};

export default PokemonInfo;
