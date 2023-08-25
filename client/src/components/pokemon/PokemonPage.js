import React, { useEffect, useState } from "react";
import PokemonTile from "./PokemonTile.js";
import PokemonShow from "./PokemonShow.js";
import PokemonEdit from "./PokemonEdit.js";

const PokemonPage = (props) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedId, setSelectedId] = useState(0);
    const [editing, setEditing] = useState(false);
    const projectId = props.computedMatch.params.id;

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

    const LastPanel = () => {
        if (editing) {
            return (
                <div className="overflow-scroll nav-pane-right">
                    <PokemonEdit
                        projectId={projectId}
                        selectedMon={selectedMon}
                        setEditing={setEditing}
                        pokemonList={pokemonList}
                        setPokemonList={setPokemonList}
                        setSelectedId={setSelectedId}
                    />
                </div>
            );
        } else {
            return (
                <div className="overflow-scroll nav-pane-right">
                    <PokemonShow
                        selectedMon={selectedMon}
                        setEditing={setEditing}
                        setSelectedId={setSelectedId}
                    />
                </div>
            );
        }
    };

    if (selectedId === 0) {
        return (
            <div className="poke-grid-pokedex-list">
                <div className="nav-pane-left">
                    <h1>Filters</h1>
                </div>
                <div
                    className="list-grid overflow-scroll"
                    style={{ padding: ".8rem 0rem 0rem 0rem" }}
                >
                    <div className="poke-grid-normalized poke-grid-list-info-header">
                        <div className="flex-between margins-even-1rem">
                            <h4>#: Pokemon</h4>
                        </div>
                        <h4>Types</h4>
                        <div className="poke-grid-stats-list">
                            <div className="flex-single-stat">HP</div>
                            <div className="flex-single-stat">Atk</div>
                            <div className="flex-single-stat">Def</div>
                            <div className="flex-single-stat">SpA</div>
                            <div className="flex-single-stat">SpD</div>
                            <div className="flex-single-stat">Spe</div>
                            <div className="flex-single-stat text-bold">BST</div>
                        </div>
                        <div className="poke-grid-abilities-list">
                            <h4 className="flex-single-ability">Ability 1</h4>
                            <h4 className="flex-single-ability">Ability 2</h4>
                            <h4 className="flex-single-ability">Ability 3</h4>
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
                <div className="overflow-scroll" style={{ padding: ".8rem 0rem 0rem 0rem" }}>
                    <div className="flex-between margins-even-1rem">
                        <h4>#: Pokemon</h4>
                    </div>
                    {pokemonTiles}
                </div>
                <LastPanel />
            </div>
        );
    }
};

export default PokemonPage;
