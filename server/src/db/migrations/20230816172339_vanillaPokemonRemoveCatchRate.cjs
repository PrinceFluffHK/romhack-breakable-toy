/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.table("vanilla-pokemon", table => {
        table.dropColumn("catchRate")
    })
}

/**
 * @param {Knex} knex
*/
exports.down = (knex) => {
    return knex.schema.table("vanilla-pokemon", table => {
        table.integer("catchRate").notNullable()
    })
}
