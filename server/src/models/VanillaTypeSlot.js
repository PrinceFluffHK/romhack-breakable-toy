const Model = require("./Model");

class VanillaTypeSlot extends Model {
    static get tableName() {
        return "vanilla-type-slots" 
    }

    static get relationMappings() {
        const { VanillaType, VanillaPokemon } = require("./index.js")

        return {
            type: {
                relation: Model.BelongsToOneRelation,
                modelClass: VanillaType,
                join: {
                    from: "vanilla-type-slots.typeId",
                    to: "vanilla-types.id"
                }
            },
            pokemon: {
                relation: Model.BelongsToOneRelation,
                modelClass: VanillaPokemon, 
                join: {
                    from: "vanilla-type-slots.pokemonId",
                    to: "vanilla-pokemon.id"
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["slotNum"],
            properties: {
                slotNum: { type: ["string", "integer"] }
            }
        }
    }
}

module.exports = VanillaTypeSlot 