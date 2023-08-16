const Model = require("./Model");

class VanillaAbility extends Model {
    static get tableName() {
        return "vanilla-abilities"
    }

    static get relationMappings() {
        const { VanillaAbilitySlot, VanillaPokemon } = require ("./index.js")
        return {
            slots: {
                relation: Model.HasManyRelation,
                modelClass: VanillaAbilitySlot,
                join: {
                    from: "vanilla-abilities.id",
                    to: "vanilla-ability-slots.abilityId"
                }
            },
            pokemon: {
                relation: Model.ManyToManyRelation,
                modelClass: VanillaPokemon,
                join: {
                    from: "vanilla-abilities.id",
                    through: {
                        from: "vanilla-ability-slots.abilityId",
                        to: "vanilla-ability-slots.pokemonId"
                    },
                    to: "vanilla-pokemon.id"
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

module.exports = VanillaAbility