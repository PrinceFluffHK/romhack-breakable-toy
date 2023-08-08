/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("projects", table => {
        table.bigIncrements("id")
        table.bigInteger("creatorId").notNullable().index().references("users.id")
        table.string("projectName").notNullable()
        table.integer("generation").notNullable()
        table.string("regionName")
        table.timestamp("createdAt").notNullable().defaultsTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultsTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
*/
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("projects")
}
