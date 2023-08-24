import React, { useState, useEffect } from "react";
import StatsForm from "./StatsForm.js";
import TypesAbilitiesForm from "./TypesAbilitiesForm.js";

const EditStats = ({
    projectId,
    selectedMon,
    setEditing,
    pokemonList,
    setPokemonList,
    setSelectedId,
}) => {
    const [monRecord, setMonRecord] = useState({
        name: "",
        type1: "",
        type2: "",
        ability1: "",
        ability2: "",
        ability3: "",
        baseHp: 0,
        baseAtk: 0,
        baseDef: 0,
        baseSpA: 0,
        baseSpD: 0,
        baseSpe: 0,
        evHp: 0,
        evAtk: 0,
        evDef: 0,
        evSpA: 0,
        evSpD: 0,
        evSpe: 0,
    });

    // console.log(monRecord)
    console.log(selectedMon.name, selectedMon.evolutions.postEvos);

    const editMonProperties = async () => {
        try {
            const submission = {
                currentMon: selectedMon,
                newMon: monRecord,
            };
            const response = await fetch(`/api/v1/pokemon/edit-stats/${projectId}`, {
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
                const { newMon } = responseBody;
                const newMonIndex = pokemonList.indexOf(selectedMon);
                const newList = pokemonList;
                newList.splice(newMonIndex, 1, newMon);
                setPokemonList(newList);
                setSelectedId(0);
                setSelectedId(newMon.id);
            }
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`);
        }
    };

    const setInitialMonRecord = () => {
        const ability1 = selectedMon.abilities.find((ability) => ability.slotNum === 1);
        const ability2 = selectedMon.abilities.find((ability) => ability.slotNum === 2);
        const ability3 = selectedMon.abilities.find((ability) => ability.slotNum === 3);

        const newMonRecord = {
            name: selectedMon.name,
            type1: selectedMon.types[0].name,
            type2: selectedMon.types[1] ? selectedMon.types[1].name : "",
            ability1: ability1 ? ability1.name : "",
            ability2: ability2 ? ability2.name : "",
            ability3: ability3 ? ability3.name : "",
            baseHp: selectedMon.baseHp,
            baseAtk: selectedMon.baseAtk,
            baseDef: selectedMon.baseDef,
            baseSpA: selectedMon.baseSpA,
            baseSpD: selectedMon.baseSpD,
            baseSpe: selectedMon.baseSpe,
            evHp: selectedMon.evHp,
            evAtk: selectedMon.evAtk,
            evDef: selectedMon.evDef,
            evSpA: selectedMon.evSpA,
            evSpD: selectedMon.evSpD,
            evSpe: selectedMon.evSpe,
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
        event.preventDefault();
        editMonProperties();
        setEditing(false);
    };

    return (
        <div className="grid-x " >
            <div className="cell small-4 flex-around">
                <img src={selectedMon.profileUrl} />
            </div>
            <form onSubmit={handleSubmit} className="cell small-8 grid-x grid-margin-x">
                <div className="cell small-6">
                    <TypesAbilitiesForm handleChange={handleChange} monRecord={monRecord} />
                </div>
                <div className="cell small-6">
                    <StatsForm handleChange={handleChange} monRecord={monRecord} />
                </div>
                <input type="submit" className="button" value="Save Changes" />
            </form>
        </div>
    );
};

export default EditStats;
