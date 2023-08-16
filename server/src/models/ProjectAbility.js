const Model = require("./Model");

class ProjectAbilitySlot extends Model {
    static get tableName() {
        return "vanilla-abilities";
    }

    static get relationMappings() {
        const { VanillaAbilitySlot } = require("./index.js");
        return {
            slots: {
                relation: Model.HasManyRelation,
                modelClass: VanillaAbilitySlot,
                join: {
                    from: "vanilla-abilities.id",
                    to: "vanilla-ability-slots.abilityId",
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

module.exports = ProjectAbilitySlot;
