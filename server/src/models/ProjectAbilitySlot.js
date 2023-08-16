const Model = require("./Model");

class ProjectAbilitySlot extends Model {
    static get tableName() {
        return "vanilla-ability-slots"
    }

    static get relationMappings() {
        const { ProjectAbility, ProjectPokemon, Project } = require ("./index.js")
        return {
            ability: {
                relation: Model.BelongsToOneRelation,
                modelClass: ProjectAbility,
                join: {
                    from: "project-ability-slots.abilityId",
                    to: "project-abilities.id"
                }
            },
            pokemon: {
                relation: Model.BelongsToOneRelation,
                modelClass: ProjectPokemon,
                join: {
                    from: "project-ability-slots.pokemonId",
                    to: "project-pokemon.id"
                }
            },
            project: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project,
                join: {
                    from: "project-ability-slots.projectId",
                    to: "projects.id"
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

module.exports = ProjectAbilitySlot