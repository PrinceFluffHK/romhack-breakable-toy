const Model = require("./Model");

class VanillaType extends Model {
    static get tableName() {
        return "vanilla-types";
    }

    static get relationMappings() {
        const { VanillaTypeSlot, VanillaPokemon } = require("./index.js");
        return {
            slots: {
                relation: Model.HasManyRelation,
                modelClass: VanillaTypeSlot,
                join: {
                    from: "vanilla-types.id",
                    to: "vanilla-type-slots.typeId",
                },
            },
            pokemon: {
                relation: Model.ManyToManyRelation,
                modelClass: VanillaPokemon,
                join: {
                    from: "vanilla-types.id",
                    through: {
                        from: "vanilla-type-slots.typeId",
                        to: "vanilla-type-slots.pokemonId",
                    },
                    to: "vanilla-pokemon.id",
                },
            },
        };
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name", "iconUrl", "labelUrl"],
            properties: {
                name: { type: "string" },
                iconUrl: { type: "string" },
                labelUrl: { type: "string" },
            },
        };
    }
}

module.exports = VanillaType;
