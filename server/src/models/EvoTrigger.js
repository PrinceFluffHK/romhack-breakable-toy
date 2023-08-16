const Model = require("./Model");

class EvoTrigger extends Model {
    static get tableName() {
        return "evo-triggers";
    }

    static get relationMappings() {
        const { Evolution } = require("./index.js");
        return {
            evolutions: {
                relation: Model.HasManyRelation,
                modelClass: Evolution,
                join: {
                    from: "evo-triggers.id",
                    to: "evolutions.triggerId",
                },
            },
        };
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name"],
            properties: {
                name: { type: "string" },
            },
        };
    }
}

module.exports = EvoTrigger;
