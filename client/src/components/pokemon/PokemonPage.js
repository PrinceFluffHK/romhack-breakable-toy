import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PokemonTile from "./PokemonTile.js";
import PokemonShow from "./PokemonShow.js";

const PokemonPage = props => {
    const [pokemonList, setPokemonList] = useState([])
    const [selectedId, setSelectedId] = useState(0)

    const location = useLocation()
    const trimFront = location.pathname.replace("/projects/", "")
    const trimBack = trimFront.replace("/pokemon", "")
    const projectId = parseInt(trimBack)
    
    const getPokemon = async () => {
        try {
            const response = await fetch(`/api/v1/pokemon/${projectId}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`;
                const error = new Error(errorMessage);
                throw error;
            }
            const responseBody = await response.json();
            setPokemonList(responseBody.pokemon);
        } catch (error) {
            console.error(`getPokemon error in Fetch: ${error.message}`);
        }
    }

    const selectedMon = pokemonList.filter(mon => {
        return mon.id === selectedId
    })[0]

    useEffect(() => {
        getPokemon()
    }, [])

    const pokemonTiles = pokemonList.map(mon => {
        return(
            <PokemonTile 
                {...mon}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
            />
        )
    })

    let gridClass = ""
    if(selectedId === 0) {
        return(
            <div className="poke-grid_pokedex-list">
                <div className="left-nav">
                    <h1>Filters</h1>
                </div>
                <div>
                    <h1>Pokemon</h1>
                    {pokemonTiles}
                </div>
            </div>
        )
    } else {
        return(
            <div className="poke-grid_pokedex-show">
                <div className="left-nav">
                    <h1>Filters</h1>
                </div>
                <div>
                    <h1>Pokemon</h1>
                    {pokemonTiles}
                </div>
                <div>
                    <h1>{selectedMon.name}</h1>
                    <PokemonShow
                        selectedMon={selectedMon}
                    />
                </div>
            </div>
        )
    }

}

export default PokemonPage