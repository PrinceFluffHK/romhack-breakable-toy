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
        table.string("regionName").notNullable()
        table.integer("generation").notNullable()
        table.boolean("public").notNullable().defaultsTo(false)
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
