import express from "express"
// import { Pokemon } from "../../../models/index.js"
import PokemonSerializer from "../../../serializers/PokemonSerializer.js"

const pokemonRouter = new express.Router()

pokemonRouter.get("/:projectId", async (req, res) =>{
    const { projectId } = req.params
    try {
        const pokemonList = await Pokemon.query().where('projectId', projectId).orderBy('nationalNum')
        const serializedPokemon = await PokemonSerializer.getSummary(pokemonList)
        return res.status(200).json({ pokemon: serializedPokemon })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default pokemonRouter