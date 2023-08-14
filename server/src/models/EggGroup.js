const Model = require("./Model")

class EggGroup extends Model {
    static get tableName() {
        return "egg-groups"
    }
    
    static get relationMappings() {
        const { Pokemon, Project, EggGroupSlot } = require("./index")
        return {
            project: {
                relation: Model.BelongsToOneRelation,
                modelClass: Project,
                join: {
                    from: "abilities.projectId",
                    to: "projects.id"
                }
            },
            pokemon: {
                relation: Model.ManyToManyRelation,
                modelClass: Pokemon,
                join: {
                    from: "egg-groups.id",
                    through: {
                        from: "egg-group-slots.eggGroupId",
                        to: "egg-group-slots.pokemonId"
                    },
                    to: "pokemon.id"
                }
            },
            eggGroupSlots: {
                relation: Model.HasManyRelation,
                modelClass: EggGroupSlot,
                join: {
                    from: "egg-groups.id",
                    to: "egg-group-slots.eggGroupId"
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: "object",
            
        }
    }
}

module.exports = EggGroup