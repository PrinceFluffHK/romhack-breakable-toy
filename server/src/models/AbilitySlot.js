const Model = require("./Model")

class AbilitySlot extends Model {
    static get tableName() {
        return "ability-slot"
    }

    static get relationMappings() {
        const { Pokemon, Ability } = require("./index")
        return {
            project: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project,
                join: {
                    from: "abilities.projectId",
                    to: "projects.id"
                }
            },
            pokemon: {
                relation: Model.BelongsToOneRelation,
                modelClass: Pokemon,
                join: {
                    from: "abilities.id",
                    through: {
                        from: "ability-slot.abilityId",
                        to: "ability-slot.pokemonId"
                    },
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

module.exports = AbilitySlot