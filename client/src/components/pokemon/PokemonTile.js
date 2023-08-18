import React from "react";
import PokemonInfo from "./PokemonInfo";

const PokemonTile = ({
    name,
    spriteUrl,
    selectedId,
    setSelectedId,
    id,
    nationalNum,
    baseHp,
    baseAtk,
    baseDef,
    baseSpA,
    baseSpD,
    baseSpe,
    types,
}) => {
    const handleSelect = () => {
        if (selectedId === id) {
            setSelectedId(0);
        } else {
            setSelectedId(id);
        }
    };

    let gridClassName = "";
    if (selectedId === 0) {
        gridClassName = "list-grid";
    }

    return (
        <div className={`${gridClassName} list-mon`} onClick={handleSelect}>
            <div  className="flex-list-item">
                <p className="margins-small">
                    #{nationalNum}: {name}
                </p>
                <img src={spriteUrl} className="sprite-list" />
            </div>
            <PokemonInfo
                selectedId={selectedId}
                baseHp={baseHp}
                baseAtk={baseAtk}
                baseDef={baseDef}
                baseSpA={baseSpA}
                baseSpD={baseSpD}
                baseSpe={baseSpe}
                types={types}
            />
        </div>
    );
};

export default PokemonTile;
