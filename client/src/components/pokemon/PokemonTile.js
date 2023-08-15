import React from "react";

const PokemonTile = ({ name, spriteUrl, selectedId, setSelectedId, id }) => {

    const handleSelect = () => {
        if(selectedId === id) {
            setSelectedId(0)
        } else {
            setSelectedId(id)
        }
    }

    return(
        <div onClick={handleSelect}>
            <h4 className="margins">
                {name}
                <img src={spriteUrl} className="sprite-list"/>
            </h4>
        </div>
    )
}

export default PokemonTile