const Model = require("./Model");

class VanillaAbilitySlot extends Model {
    static get tableName() {
        return "vanilla-abilities"
    }

    static get relationMappings() {
        const { VanillaAbility, VanillaPokemon, Project } = require ("./index.js")
        return {
            ability: {
                relation: Model.BelongsToOneRelation,
                modelClass: VanillaAbility,
                join: {
                    from: "vanilla-ability-slots.abilityId",
                    to: "vanilla-abilities.id"
                }
            },
            pokemon: {
                relation: Model.BelongsToOneRelation,
                modelClass: VanillaPokemon,
                join: {
                    from: "vanilla-ability-slots.pokemonId",
                    to: "vanilla-pokemon.id"
                }
            },
            project: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project,
                join: {
                    from: "vanilla-ability-slots.projectId",
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

module.exports = VanillaAbilitySlot