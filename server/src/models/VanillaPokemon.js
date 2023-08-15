const Model = require("./Model");

class VanillaPokemon extends Model {
    static get tableName() {
        return "vanilla-pokemon";
    }

    static get relationMappings() {
        const { } = require("./index");
        return {
        }
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
                "catchRate",
                "spriteUrl",
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
                catchRate: { type: ["string", "integer"] },
                spriteUrl: { type: "string" },
                nationalNum: { type: ["string", "integer"] },
            }
        };
    }
}

module.exports = VanillaPokemon;
