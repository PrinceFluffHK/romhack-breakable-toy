const Model = require("./Model");

class ProjectType extends Model {
    static get tableName() {
        return "project-types";
    }

    static get relationMappings() {
        const { ProjectTypeSlot, ProjectPokemon } = require("./index.js");

        return {
            typeSlot: {
                relation: Model.HasManyRelation,
                modelClass: ProjectTypeSlot,
                join: {
                    from: "project-types.id",
                    to: "project-type-slots.typeId",
                },
            },
            pokemon: {
                relation: Model.ManyToManyRelation,
                modelClass: ProjectPokemon,
                join: {
                    from: "project-types.id",
                    through: {
                        from: "project-type-slots.typeId",
                        to: "project-type-slots.pokemonId",
                    },
                    to: "project-pokemon.id",
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

module.exports = ProjectType;
