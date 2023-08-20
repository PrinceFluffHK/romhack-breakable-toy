import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PokemonTile from "./PokemonTile.js";
import PokemonShow from "./PokemonShow.js";

const PokemonPage = (props) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedId, setSelectedId] = useState(0);

    const location = useLocation();
    const trimFront = location.pathname.replace("/projects/", "");
    const trimBack = trimFront.replace("/pokemon", "");
    const projectId = parseInt(trimBack);

    const getPokemon = async () => {
        try {
            const response = await fetch(`/api/v1/pokemon/${projectId}`);
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
    };

    const selectedMon = pokemonList.filter((mon) => {
        return mon.id === selectedId;
    })[0];

    useEffect(() => {
        getPokemon();
    }, []);

    const pokemonTiles = pokemonList.map((mon) => {
        return (
            <PokemonTile
                key={mon.id}
                {...mon}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
            />
        );
    });

    if (selectedId === 0) {
        return (
            <div className="poke-grid-pokedex-list">
                <div className="nav-pane-left">
                    <h1>Filters</h1>
                </div>
                <div className="list-grid overflow-scroll">
                    <h1>Pokemon</h1>
                    <h1>List of Other Things</h1>
                    <div className="poke-grid-normalized poke-grid-list-info-header">
                        <div className="flex-between margins-even-1rem">
                            <h4>#: Pokemon</h4>
                        </div>
                        <h4>Types</h4>
                        <div className="poke-grid-abilities-list">
                            <h4 className="flex-single-ability">Ability 1</h4>
                            <h4 className="flex-single-ability">Ability 2</h4>
                            <h4 className="flex-single-ability">Ability 3</h4>
                        </div>
                        <div className="poke-grid-stats-list">
                            <div className="flex-single-stat">HP</div>
                            <div className="flex-single-stat">Atk</div>
                            <div className="flex-single-stat">Def</div>
                            <div className="flex-single-stat">SpA</div>
                            <div className="flex-single-stat">SpD</div>
                            <div className="flex-single-stat">Spe</div>
                            <div className="flex-single-stat text-bold">BST</div>
                        </div>
                    </div>
                    <div className="poke-grid-normalized">{pokemonTiles}</div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="poke-grid-pokedex-show">
                <div className="nav-pane-left">
                    <h1>Filters</h1>
                </div>
                <div className="overflow-scroll">
                    <h1>Pokemon</h1>
                    <div className="flex-between margins-even-1rem">
                        <h4>#: Pokemon</h4>
                    </div>
                    {pokemonTiles}
                </div>
                <div className="overflow-scroll nav-pane-right">
                    <h1>{selectedMon.name}</h1>
                    <PokemonShow selectedMon={selectedMon} />
                </div>
            </div>
        );
    }
};

export default PokemonPage;
