const Model = require("./Model")

class Ability extends Model {
    static get tableName() {
        return "abilities"
    }

    static get relationMappings() {
        const { Pokemon, Project } = require("./index")
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
            required: ["name"],
            properties: {
                name: { type: "string" }
            }
        }
    }
}

module.exports = Ability