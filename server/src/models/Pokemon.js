const Model = require("./Model")

class Pokemon extends Model {
    static get tableName() {
        return "pokemon"
    }

    static get relationMappings() {
        const { } = require("./index")
    }

    static get jsonSchema() {
        return {
            
        }
    }
}

module.exports = Pokemon