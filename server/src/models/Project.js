const Model = require("./Model")

class Project extends Model {
    static get tableName() {
        return "projects"
    }

    static get relationMappings() {
        const { User } = require("./index.js")
        return {
            creator: {
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
            required: ["creatorId", "projectName", "generation"],
            properties: {
                creatorId: { type: ["string", "integer"] },
                projectName: { type: "string" },
                generation: { type: ["string", "integer"] },
                regionName: { type: "string" }
            }
        }
    }
}

module.exports = Project