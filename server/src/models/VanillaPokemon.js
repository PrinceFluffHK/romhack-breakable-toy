const Model = require("./Model");

class VanillaPokemon extends Model {
    static get tableName() {
        return "vanilla-pokemon";
    }

    static get relationMappings() {
        const { VanillaTypeSlot, VanillaType } = require("./index");
        return {
            typeSlots: {
                relation: Model.HasManyRelation,
                modelClass: VanillaTypeSlot,
                join: {
                    from: "vanilla-pokemon.id",
                    to: "vanilla-type-slots.pokemonId",
                },
            },
            types: {
                relation: Model.ManyToManyRelation,
                modelClass: VanillaType,
                join: {
                    from: "vanilla-pokemon.id",
                    through: {
                        from: "vanilla-type-slots.pokemonId",
                        to: "vanilla-type-slots.typeId",
                    },
                    to: "vanilla-types.id",
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
                "nationalNum",
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
                nationalNum: { type: ["string", "integer"] },
            },
        };
    }
}

module.exports = VanillaPokemon;
