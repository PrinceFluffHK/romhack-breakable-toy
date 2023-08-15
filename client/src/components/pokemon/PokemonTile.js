import React from "react";
import PokemonInfo from "./PokemonInfo";

const PokemonTile = ({ name, spriteUrl, selectedId, setSelectedId, id }) => {
    const handleSelect = () => {
        if (selectedId === id) {
            setSelectedId(0);
        } else {
            setSelectedId(id);
        }
    };

    let gridClassName = ""
    if(selectedId === 0) {
        gridClassName = "list-grid"
    }

    return (
        <div className={`${gridClassName} list-mon`}>
            <div onClick={handleSelect} className="flex-list-item">
                <img src={spriteUrl} className="sprite-list" />
                <p className="margins">{name}</p>
            </div>
            <PokemonInfo
                selectedId={selectedId}
            />
        </div>
    );
};

export default PokemonTile;
