import React, { useEffect, useState } from "react";

const PokemonPage = props => {
    const [pokemonList, setPokemonList] = useState([])
    
    const getPokemon = async () => {
        //fetches pokemon list
        try {
            const response = await fetch("/api/v1/pokemon")
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

    useEffect(() => {
        getPokemon()
    }, [])

    return(
        <div className="poke-grid_pokedex">
            <div className="left-nav">
                <h1>Pokemon</h1>
                
            </div>
            <div>
                Info
            </div>
        </div>
    )
}

export default PokemonPage