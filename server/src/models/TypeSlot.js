const Model = require("./Model")

class TypeSlot extends Model {
    static get tableName() {
        return "type-slots"
    }

    static get relationMappings() {
        const { Pokemon, Type } = require("./index")
        return {
            eggGroup: {
                relation: Model.BelongsToOneRelation,
                modelClass: Type,
                join: {
                    from: "type-slots.typeId",
                    to: "types.id"
                }
            },
            pokemon: {
                relation: Model.BelongsToOneRelation,
                modelClass: Pokemon,
                join: {
                    from: "type-slots.pokemonId",
                    to: "pokemon.id"
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["slot"],
            properties: {
                slot: { type: ["string", "integer"] }
            }
        }
    }
}

module.exports = TypeSlot