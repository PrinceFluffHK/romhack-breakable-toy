const Model = require("./Model");

class ProjectTypeSlot extends Model {
    static get tableName() {
        return "project-type-slots";
    }

    static get relationMappings() {
        const { ProjectType, ProjectPokemon } = require("./index.js");

        return {
            type: {
                relation: Model.BelongsToOneRelation,
                modelClass: ProjectType,
                join: {
                    from: "project-type-slots.typeId",
                    to: "project-types.id",
                },
            },
            pokemon: {
                relation: Model.BelongsToOneRelation,
                modelClass: ProjectPokemon,
                join: {
                    from: "project-type-slots.pokemonId",
                    to: "project-pokemon.id",
                },
            },
        };
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["slotNum"],
            properties: {
                slotNum: { type: "string" },
            },
        };
    }
}

module.exports = ProjectTypeSlot;
