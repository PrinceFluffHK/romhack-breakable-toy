// /**
//  * @typedef {import("knex")} Knex
//  */

// /**
//  * @param {Knex} knex
//  */
// exports.up = async (knex) => {
//     return knex.schema.table("evolutions", table => {
//         table.string("gender")
//         table.string("heldItem")
//         table.string("usedItem")
//         table.string("knownMove")
//         table.string("location")
//         table.integer("minAffection")
//         table.integer("minBeauty")
//         table.integer("minHappiness")
//         table.boolean("needsOverworldRain")
//         table.bigInteger("partySpeciesId").index().unsigned()
//         table.bigInteger("partyTypeId").index().unsigned()
//         table.bigInteger("partyTypeId").index().unsigned()

        
//     })
// }

// /**
//  * @param {Knex} knex
//  */
// exports.down = (knex) => {}
