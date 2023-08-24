import express from "express";
import { Pokemon } from "../../../models/index.js";
import PokemonSerializer from "../../../serializers/PokemonSerializer.js";
import PokemonPatch from "../../../services/PokemonPatch.js";

const pokemonRouter = new express.Router();

pokemonRouter.get("/:projectId", async (req, res) => {
    const { projectId } = req.params;
    try {
        const pokemonList = await Pokemon.query()
            .where("projectId", projectId)
            .orderBy("nationalNum");
        const serializedPokemon = await PokemonSerializer.getSummary(pokemonList);
        return res.status(200).json({ pokemon: serializedPokemon, projectId });
    } catch (error) {
        return res.status(500).json({ errors: error });
    }
});

pokemonRouter.patch("/edit-stats/:projectId", async (req, res) => {
    const { projectId } = req.params;
    const { currentMon } = req.body;
    const {
        name,
        type1,
        type2,
        ability1,
        ability2,
        ability3,
        baseHp,
        baseAtk,
        baseDef,
        baseSpA,
        baseSpD,
        baseSpe,
        evHp,
        evAtk,
        evDef,
        evSpA,
        evSpD,
        evSpe,
    } = req.body.newMon;
    try {
        const newType1 = await PokemonPatch.updateType(type1, projectId, currentMon, 1);
        const newType2 = await PokemonPatch.updateType(type2, projectId, currentMon, 2);
        const typeArray = [newType1, newType2];
        const finalTypeArray = [];
        typeArray.forEach((type) => {
            if (type) {
                finalTypeArray.push(type);
            }
        });

        const newAbility1 = await PokemonPatch.updateAbility(ability1, projectId, currentMon, 1);
        const newAbility2 = await PokemonPatch.updateAbility(ability2, projectId, currentMon, 2);
        const newAbility3 = await PokemonPatch.updateAbility(ability3, projectId, currentMon, 3);
        const abilityArray = [newAbility1, newAbility2, newAbility3];

        //checkBaseStats
        const newBaseHp = await PokemonPatch.updateStat(currentMon, "baseHp", baseHp)
        const newBaseAtk = await PokemonPatch.updateStat(currentMon, "baseAtk", baseAtk)
        const newBaseDef = await PokemonPatch.updateStat(currentMon, "baseDef", baseDef)
        const newBaseSpA = await PokemonPatch.updateStat(currentMon, "baseSpA", baseSpA)
        const newBaseSpD = await PokemonPatch.updateStat(currentMon, "baseSpD", baseSpD)
        const newBaseSpe = await PokemonPatch.updateStat(currentMon, "baseSpe", baseSpe)
        const newEvHp = await PokemonPatch.updateStat(currentMon, "evHp", evHp)
        const newEvAtk = await PokemonPatch.updateStat(currentMon, "evAtk", evAtk)
        const newEvDef = await PokemonPatch.updateStat(currentMon, "evDef", evDef)
        const newEvSpA = await PokemonPatch.updateStat(currentMon, "evSpA", evSpA)
        const newEvSpD = await PokemonPatch.updateStat(currentMon, "evSpD", evSpD)
        const newEvSpe = await PokemonPatch.updateStat(currentMon, "evSpe", evSpe)

        const finalAbilityArray = [];
        abilityArray.forEach((ability) => {
            if (ability) {
                finalAbilityArray.push(ability);
            }
        });

        const newMon = {
            ...currentMon,
            baseHp: newBaseHp,
            baseAtk: newBaseAtk,
            baseDef: newBaseDef,
            baseSpA: newBaseSpA,
            baseSpD: newBaseSpD,
            baseSpe: newBaseSpe,
            evHp: newEvHp,
            evAtk: newEvAtk,
            evDef: newEvDef,
            evSpA: newEvSpA,
            evSpD: newEvSpD,
            evSpe: newEvSpe,
            types: finalTypeArray,
            abilities: finalAbilityArray,
        };
        return res.status(200).json({ newMon });
    } catch (error) {
        return res.status(500).json({ errors: error });
    }
});

pokemonRouter.patch("/edit-evos/:projectId", async (req, res) => {

})

export default pokemonRouter;
