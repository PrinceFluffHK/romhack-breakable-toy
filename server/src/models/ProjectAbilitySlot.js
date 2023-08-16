const Model = require("./Model");

class ProjectAbilitySlot extends Model {
    static get tableName() {
        return "vanilla-abilities"
    }

    static get relationMappings() {
        const {} = require ("./index.js")
        return {

        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [""],
            properties: {

            }
        }
    }
}

module.exports = ProjectAbilitySlot