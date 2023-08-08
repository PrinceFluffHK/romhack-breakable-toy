const Model = require("./Model")
const User = require("./User")

class Project extends Model {
    static get tableName() {
        return "projects"
    }

    static get relationMappings() {
        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "projects.creatorId",
                    to: "users.id"
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["creatorId", "project-name", "generation"],
            properties: {
                creatorId: { type: ["string", "integer"] },
                projectName: { type: "string" }
            }
        }
    }
}

module.exports = Project