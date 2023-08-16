/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.table("project-pokemon", table => {
        table.text("notes").defaultTo("")
        table.dropColumn("catchRate")
    })
}

/**
 * @param {Knex} knex
*/
exports.down = (knex) => {
    return knex.schema.table("project-pokemon", table => {
        table.dropColumn("notes")
        table.integer("catchRate").notNullable()
    })
}
