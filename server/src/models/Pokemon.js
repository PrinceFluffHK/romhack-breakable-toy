const Model = require("./Model");

class Pokemon extends Model {
    static get tableName() {
        return "pokemon";
    }

    static get relationMappings() {
        const { TypeSlot, Type } = require("./index");
        return {
            typeSlots: {
                relation: Model.HasManyRelation,
                modelClass: TypeSlot,
                join: {
                    from: "pokemon.id",
                    to: "type-slots.pokemonId",
                },
            },
            types: {
                relation: Model.ManyToManyRelation,
                modelClass: Type,
                join: {
                    from: "pokemon.id",
                    through: {
                        from: "type-slots.pokemonId",
                        to: "type-slots.typeId",
                    },
                    to: "types.id",
                },
            },
        };
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [
                "name",
                "baseHp",
                "evHp",
                "baseAtk",
                "evAtk",
                "baseDef",
                "evDef",
                "baseSpA",
                "evSpA",
                "baseSpD",
                "evSpD",
                "baseSpe",
                "evSpe",
                "spriteUrl",
                "profileUrl",
            ],
            properties: {
                name: { type: "string" },
                baseHp: { type: ["string", "integer"] },
                evHp: { type: ["string", "integer"] },
                baseAtk: { type: ["string", "integer"] },
                evAtk: { type: ["string", "integer"] },
                baseDef: { type: ["string", "integer"] },
                evDef: { type: ["string", "integer"] },
                baseSpA: { type: ["string", "integer"] },
                evSpA: { type: ["string", "integer"] },
                baseSpD: { type: ["string", "integer"] },
                evSpD: { type: ["string", "integer"] },
                baseSpe: { type: ["string", "integer"] },
                evSpe: { type: ["string", "integer"] },
                spriteUrl: { type: "string" },
                profileUrl: { type: "string" },
            },
        };
    }
}

module.exports = Pokemon;
