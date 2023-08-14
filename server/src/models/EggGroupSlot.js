const Model = require("./Model")

class EggGroupSlot extends Model {
    static get tableName() {
        return "egg-group-slots"
    }

    static get relationMappings() {
        const { Pokemon, EggGroup } = require("./index")
        return {
            eggGroup: {
                relation: Model.BelongsToOneRelation,
                modelClass: EggGroup,
                join: {
                    from: "egg-group-slots.eggGroupId",
                    to: "egg-groups.id"
                }
            },
            pokemon: {
                relation: Model.BelongsToOneRelation,
                modelClass: Pokemon,
                join: {
                    from: "egg-group-slots.pokemonId",
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

module.exports = EggGroupSlot