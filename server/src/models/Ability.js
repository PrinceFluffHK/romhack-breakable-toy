const Model = require("./Model");

class Ability extends Model {
    static get tableName() {
        return "abilities"
    }

    static get relationMappings() {
        const { AbilitySlot, Pokemon } = require ("./index.js")
        return {
            slots: {
                relation: Model.HasManyRelation,
                modelClass: AbilitySlot,
                join: {
                    from: "abilities.id",
                    to: "ability-slots.abilityId"
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