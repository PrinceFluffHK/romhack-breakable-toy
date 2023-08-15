import React from "react";

const PokemonInfo = ({ selectedId }) => {
    if(selectedId === 0) {
        return(
            <div className="flex-list-item">
                hello from PokemonInfo
            </div>
        )
    } else {
        return(
            <></>
        )
    }
}

export default PokemonInfo