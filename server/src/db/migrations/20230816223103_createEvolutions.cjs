/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("evolutions", table => {
        table.bigIncrements("id")
        table.string("parameter")
        table.integer("levelReq")
        table
            .bigInteger("preEvoId")
            .notNullable()
            .index()
            .unsigned()
            .references("pokemon.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        table
            .bigInteger("postEvoId")
            .notNullable()
            .index()
            .unsigned()
            .references("pokemon.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        table
            .bigInteger("triggerId")
            .notNullable()
            .index()
            .unsigned()
            .references("evo-triggers.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        table
            .bigInteger("projectId")
            .index()
            .unsigned()
        table.timestamp("createdAt").notNullable().defaultsTo(knex.fn.now());
        table.timestamp("updatedAt").notNullable().defaultsTo(knex.fn.now());
    })
}

/**
 * @param {Knex} knex
*/
exports.down = (knex) => {
    return knex.schema.createTable("evolutions")
}
