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

pokemonRouter.patch("/edit/:projectId", async (req, res) => {
    const { projectId } = req.params;
    const { currentMon } = req.body
    const { name, type1, type2, ability1, ability2, ability3, } = req.body.newMon
    try {
        const newType1 = await PokemonPatch.updateType(type1, projectId, currentMon, 1)
        const newType2 = await PokemonPatch.updateType(type2, projectId, currentMon, 2)
        
        const newAbility1 = await PokemonPatch.updateAbility(ability1, projectId, currentMon, 1)
        const newAbility2 = await PokemonPatch.updateAbility(ability2, projectId, currentMon, 2)
        const newAbility3 = await PokemonPatch.updateAbility(ability3, projectId, currentMon, 3)

        const newMon = {
            ...currentMon,
            types: newType2 ? [newType1, newType2] : [newType1]
        }
        return res.status(200).json({ newMon })
    } catch (error) {
        return res.status(500).json({ errors: error });
    }
})

export default pokemonRouter;
