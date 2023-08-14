const Model = require("./Model")

class EggGroup extends Model {
    static get tableName() {
        return "egg-groups"
    }

    static get relationMappings() {
        const { Pokemon } = require("./index")
        return {

        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            
        }
    }
}

module.exports = EggGroup