const Model = require("./Model")

class EvoCondition extends Model {
    static get tableName() {
        return "evo-conditions"
    }

    static get relationMappings() {
        const { Evolution, Project } = require("./index")
        return {
            project: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project,
                join: {
                    from: "evo-conditions.projectId",
                    to: "projects.id"
                }
            },
            evolutions: {
                relation: Model.HasManyRelation,
                modelClass: Evolution,
                join: {
                    from: "evo-conditions.id",
                    to: "evolution.conditionId"
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name"],
            properties: {
                name: { type: "string" }
            }
        }
    }
}

module.exports = EvoCondition