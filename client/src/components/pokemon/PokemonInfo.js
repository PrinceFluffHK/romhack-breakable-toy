import React from "react";
import getTypeDisplay from "../../services/getTypeDisplay";

const PokemonInfo = ({
    selectedId,
    baseHp,
    baseAtk,
    baseDef,
    baseSpA,
    baseSpD,
    baseSpe,
    types,
}) => {
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

    if (selectedId === 0) {
        return (
            <div className="poke-grid-list-info">
                <div className="flex-small-types">
                    <div className="">{typeDisplay}</div>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};

export default PokemonInfo;
