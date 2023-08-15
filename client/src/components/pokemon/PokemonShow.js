import React from "react";

const PokemonShow = ({ selectedMon }) => {
    return(
        <div>
            <h1>
                <img src={selectedMon.spriteUrl} className="sprite-show"/>
            </h1>
        </div>
    )
}

export default PokemonShow