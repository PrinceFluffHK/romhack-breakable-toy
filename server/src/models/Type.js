const Model = require("./Model");

class Type extends Model {
    static get tableName() {
        return "types";
    }

    static get relationMappings() {
        const { TypeSlot, Pokemon } = require("./index.js");
        return {
            slots: {
                relation: Model.HasManyRelation,
                modelClass: TypeSlot,
                join: {
                    from: "types.id",
                    to: "type-slots.typeId",
                },
            },
            pokemon: {
                relation: Model.ManyToManyRelation,
                modelClass: Pokemon,
                join: {
                    from: "types.id",
                    through: {
                        from: "type-slots.typeId",
                        to: "type-slots.pokemonId",
                    },
                    to: "pokemon.id",
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

module.exports = Type;
