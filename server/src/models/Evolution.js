const Model = require("./Model")

class Evolution extends Model {
    static get tableName() {
        return "evolutions"
    }

    static get relationMappings() {
        const { Pokemon, EvoCondition } = require("./index")
        return {
            condition: {
                relation: Model.BelongsToOneRelation,
                modelClass: EvoCondition,
                join: {
                    from: "evolutions.conditionId",
                    to: "evo-conditions.id"
                }
            },
            preEvo: {
                relation: Model.BelongsToOneRelation,
                modelClass: Pokemon,
                join: {
                    from: "evolution.preEvoId",
                    to: "pokemon.id"
                }
            },
            postEvo: {
                relation: Model.BelongsToOneRelation,
                modelClass: Pokemon,
                join: {
                    from: "evolution.postEvoId",
                    to: "pokemon.id"
                }
            },
            project: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project,
                join: {
                    from: "evolution.projectId",
                    to: "projects.id"
                }
            },
        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["parameter", "minLevel"],
            properties: {
                parameter: { type: "string" },
                minLevel: { type: ["string", "integer"] }
            }
        }
    }
}

module.exports = Evolution