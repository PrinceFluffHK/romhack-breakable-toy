const Model = require("./Model")

class Ability extends Model {
    static get tableName() {
        return "abilities"
    }

    static get relationMappings() {
        const { Pokemon, Project, AbilitySlot } = require("./index")
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
                relation: Model.ManyToManyRelation,
                modelClass: Pokemon,
                join: {
                    from: "abilities.id",
                    through: {
                        from: "ability-slots.abilityId",
                        to: "ability-slots.pokemonId"
                    },
                    to: "pokemon.id"
                }
            },
            abilitySlots: {
                relation: Model.HasManyRelation,
                modelClass: AbilitySlot,
                join: {
                    from: "abilities.id",
                    to: "ability-slots.abilityId"
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name"],
            properties: {
                name: { type: "string" }
            }
        }
    }
}

module.exports = Ability