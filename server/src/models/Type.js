const Model = require("./Model")

class Type extends Model {
    static get tableName() {
        return "types"
    }

    static get relationMappings() {
        const { Pokemon } = require("./index")
    }

    static get jsonSchema() {
        return {
            
        }
    }
}

module.exports = Type