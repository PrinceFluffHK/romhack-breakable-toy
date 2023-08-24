import React, { useEffect, useState } from "react";
import EditTopBar from "./Edit/EditTopBar.js";
import EditStats from "./Edit/EditStatsTab.js";
import EditEvosTab from "./Edit/EditEvosTab.js";

const PokemonEdit = ({ projectId, selectedMon, setEditing, pokemonList, setPokemonList, setSelectedId }) => {
    const [editTab, setEditTab] = useState("stats")

    const EditTabDisplay = () => {
        switch (editTab) {
            case "stats":
                return(
                    <EditStats
                        projectId={projectId}
                        selectedMon={selectedMon}
                        pokemonList={pokemonList}
                        setPokemonList={setPokemonList}
                        setSelectedId={setSelectedId}
                        setEditing={setEditing}
                    />
                );
            case "evolutions": 
                return(
                    <EditEvosTab
                        selectedMon={selectedMon}
                        setEditing={setEditing}
                    />
                )
            case "moves": 
                return(
                    <div>Hello from EditMoves</div>
                )
        }
    }

    return (
        <div>
            <EditTopBar
                setEditing={setEditing}
                setEditTab={setEditTab}
            />
            <EditTabDisplay/>
        </div>
    );
};

export default PokemonEdit;
