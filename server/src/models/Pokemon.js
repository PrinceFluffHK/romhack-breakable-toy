const Model = require("./Model");

class Pokemon extends Model {
    static get tableName() {
        return "pokemon";
    }

    static get relationMappings() {
        const { TypeSlot, Type, Ability, AbilitySlot, Evolution } = require("./index");
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

            abilitySlots: {
                relation: Model.HasManyRelation,
                modelClass: AbilitySlot,
                join: {
                    from: "pokemon.id",
                    to: "ability-slots.pokemonId",
                },
            },
            abilities: {
                relation: Model.ManyToManyRelation,
                modelClass: Ability,
                join: {
                    from: "pokemon.id",
                    through: {
                        from: "ability-slots.pokemonId",
                        to: "ability-slots.abilityId"
                    },
                    to: "abilities.id"
                }
            },

            preLinks: {
                relation: Model.HasManyRelation,
                modelClass: Evolution,
                join: {
                    from: "pokemon.id",
                    to: "evolutions.postEvoId"
                }
            },
            postLinks: {
                relation: Model.HasManyRelation,
                modelClass: Evolution,
                join: {
                    from: "pokemon.id",
                    to: "evolutions.preEvoId"
                }
            },

            preEvos: {
                relation: Model.ManyToManyRelation,
                modelClass: Pokemon,
                join: {
                    from: "pokemon.id",
                    through: {
                        from: "evolutions.postEvoId",
                        to: "evolutions.preEvoId"
                    },
                    to: "pokemon.id"
                }
            },
            postEvos: {
                relation: Model.ManyToManyRelation,
                modelClass: Pokemon,
                join: {
                    from: "pokemon.id",
                    through: {
                        from: "evolutions.preEvoId",
                        to: "evolutions.postEvoId"
                    },
                    to: "pokemon.id"
                }
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
