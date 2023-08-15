const Model = require("./Model");

class ProjectPokemon extends Model {
    static get tableName() {
        return "project-pokemon";
    }

    static get relationMappings() {
        const { Project } = require("./index");
        return {
            project: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project,
                join: {
                    from: "project-pokemon.projectId",
                    to: "project.id"
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [
                "name",
                "baseHp",
                "baseAtk",
                "baseDef",
                "baseSpA",
                "baseSpD", 
                "baseSpe", 
                "catchRate",
                "spriteUrl",
                "nationalNum",
            ],
            properties: {
                name: { type: "string" },
                baseHp: { type: ["string", "integer"] },
                baseAtk: { type: ["string", "integer"] },
                baseDef: { type: ["string", "integer"] },
                baseSpA: { type: ["string", "integer"] },
                baseSpD: { type: ["string", "integer"] },
                baseSpe: { type: ["string", "integer"] },
                catchRate: { type: ["string", "integer"] },
                spriteUrl: { type: "string" },
                generation: { type: ["string", "integer"] },
                nationalNum: { type: ["string", "integer"] },
            }
        };
    }
}

module.exports = ProjectPokemon;