const Model = require("./Model");

class Pokemon extends Model {
    static get tableName() {
        return "pokemon";
    }

    static get relationMappings() {
        const { Project } = require("./index");
        return {
            project: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project,
                join: {
                    from: "pokemon.projectId",
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
                "nationalNum",
                "baseHp",
                "baseAtk",
                "baseDef",
                "baseSpA",
                "baseSpD", 
                "baseSpe", 
                "catchRate", 
                "spriteUrl"
            ],
            properties: {
                name: { type: "string" },
                nationalNum: { type: ["string", "integer"] },
                dexEntry: { type: "string" },
                baseHp: { type: ["string", "integer"] },
                baseAtk: { type: ["string", "integer"] },
                baseDef: { type: ["string", "integer"] },
                baseSpA: { type: ["string", "integer"] },
                baseSpD: { type: ["string", "integer"] },
                baseSpe: { type: ["string", "integer"] },
                introGen: { type: ["string", "integer"] },
                catchRate: { type: ["string", "integer"] },
                spriteUrl: { type: "string" },
            }
        };
    }
}

module.exports = Pokemon;
