const Model = require("./Model");

class AbilitySlot extends Model {
    static get tableName() {
        return "abilities"
    }

    static get relationMappings() {
        const { Ability, Pokemon, Project } = require ("./index.js")
        return {
            ability: {
                relation: Model.BelongsToOneRelation,
                modelClass: Ability,
                join: {
                    from: "ability-slots.abilityId",
                    to: "abilities.id"
                }
            },
            pokemon: {
                relation: Model.BelongsToOneRelation,
                modelClass: Pokemon,
                join: {
                    from: "ability-slots.pokemonId",
                    to: "pokemon.id"
                }
            },
            project: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project,
                join: {
                    from: "ability-slots.projectId",
                    to: "projects.id"
                }
            },
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

module.exports = AbilitySlot