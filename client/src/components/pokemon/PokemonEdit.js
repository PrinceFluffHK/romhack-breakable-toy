import React, { useEffect, useState } from "react";

const PokemonEdit = ({ projectId, selectedMon, setEditing, pokemonList, setPokemonList, selectedId, setSelectedId }) => {
    const [monRecord, setMonRecord] = useState({
        name: "",
        type1: "",
        type2: "",
        ability1: "",
        ability2: "",
        ability3: "",
    });
    
    const editMonProperties = async () => {
        try {
            const submission = {
                currentMon: selectedMon,
                newMon: monRecord
            }
            const response = await fetch(`/api/v1/pokemon/edit/${projectId}`, {
                method: "PATCH",
                headers: new Headers({
                    "Content-Type": "application/json",
                }),
                body: JSON.stringify(submission),
            });
            if (!response.ok) {
                if (response.status === 422) {
                    const body = await response.json();
                    const newErrors = translateServerErrors(body.errors);
                    return setErrors(newErrors);
                } else {
                    throw new Error(`${response.status} (${response.statusText})`);
                }
            } else {
                const responseBody = await response.json();
                const { newMon } = responseBody
                const newMonIndex = pokemonList.indexOf( selectedMon )
                const newList = pokemonList
                newList.splice(newMonIndex, 1, newMon)
                setPokemonList(newList)
                setSelectedId(0)
                setSelectedId(newMon.id)
            }
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`);
        }
    };

    const setInitialMonRecord = () => {
        const ability1 = selectedMon.abilities.find((ability) => ability.slot === 1);
        const ability2 = selectedMon.abilities.find((ability) => ability.slot === 2);
        const ability3 = selectedMon.abilities.find((ability) => ability.slot === 3);

        const newMonRecord = {
            name: selectedMon.name,
            type1: selectedMon.types[0].name,
            type2: selectedMon.types[1] ? selectedMon.types[1].name : "",
            ability1: ability1 ? ability1.name : "",
            ability2: ability2 ? ability2.name : "",
            ability3: ability3 ? ability3.name : "",
        };
        setMonRecord(newMonRecord);
    };

    useEffect(() => {
        setInitialMonRecord();
    }, []);

    const handleChange = (event) => {
        setMonRecord({
            ...monRecord,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        editMonProperties()
        setEditing(false)
    };

    return (
        <div>
            <h1>Edit {selectedMon.name}</h1>
            <div className="grid-x grid-margin-x">
                <div className="cell small-6 small-offset-1">
                    <img src={selectedMon.profileUrl} />
                </div>
                <form onSubmit={handleSubmit} className="cell small-4">
                    <h3>Name</h3>
                    <label htmlFor="name">
                        <input
                            id="name"
                            name="name"
                            value={monRecord.name}
                            onChange={handleChange}
                            placeholder="Name"
                        ></input>
                    </label>
                    <h3>Types</h3>
                    <label htmlFor="type1">
                        <input
                            id="type1"
                            name="type1"
                            value={monRecord.type1}
                            onChange={handleChange}
                            placeholder="Type 1"
                        ></input>
                    </label>
                    <label htmlFor="type2">
                        <input
                            id="type2"
                            name="type2"
                            value={monRecord.type2}
                            onChange={handleChange}
                            placeholder="Type 2"
                        ></input>
                    </label>
                    <h3>Abilities</h3>
                    <label htmlFor="ability1">
                        <input
                            id="ability1"
                            name="ability1"
                            value={monRecord.ability1}
                            onChange={handleChange}
                            placeholder="Ability 1"
                        ></input>
                    </label>
                    <label htmlFor="ability2">
                        <input
                            id="ability2"
                            name="ability2"
                            value={monRecord.ability2}
                            onChange={handleChange}
                            placeholder="Ability 2"
                        ></input>
                    </label>
                    <label htmlFor="ability3">
                        <input
                            id="ability3"
                            name="ability3"
                            value={monRecord.ability3}
                            onChange={handleChange}
                            placeholder="Ability 3"
                        ></input>
                    </label>
                    <input type="submit" className="button" value="Save Changes" />
                </form>
            </div>
        </div>
    );
};

export default PokemonEdit;
