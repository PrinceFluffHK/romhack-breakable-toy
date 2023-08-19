const Model = require("./Model");

class TypeSlot extends Model {
    static get tableName() {
        return "type-slots" 
    }

    static get relationMappings() {
        const { Type, Pokemon } = require("./index.js")

        return {
            type: {
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
            required: ["slotNum"],
            properties: {
                slotNum: { type: ["string", "integer"] }
            }
        }
    }
}

module.exports = TypeSlot 