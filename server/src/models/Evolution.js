const Model = require("./Model");

class Evolution extends Model {
    static get tableName() {
        return "evolutions";
    }

    static get relationMappings() {
        const { EvoTrigger, Pokemon } = require("./index.js");
        return {
            trigger: {
                relation: Model.BelongsToOneRelation,
                modelClass: EvoTrigger,
                join: {
                    from: "evolutions.triggerId",
                    to: "evo-triggers.id",
                },
            },
            preEvo: {
                relation: Model.BelongsToOneRelation,
                modelClass: Pokemon,
                join: {
                    from: "evolutions.preEvoId",
                    to: "pokemon.id",
                },
            },
            postEvo: {
                relation: Model.BelongsToOneRelation,
                modelClass: Pokemon,
                join: {
                    from: "evolutions.postEvoId",
                    to: "pokemon.id",
                },
            },
        };
    }

    static get jsonSchema() {
        return {
            type: "object",
        };
    }
}

module.exports = Evolution;
