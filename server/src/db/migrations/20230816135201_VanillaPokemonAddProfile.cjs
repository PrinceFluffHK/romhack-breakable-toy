/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.table("vanilla-pokemon", table => {
        table.string("profileUrl").notNullable()
    })
}

/**
 * @param {Knex} knex
*/
exports.down = (knex) => {
    return knex.schema.table("vanilla-pokemon", table => {
        table.dropColumn("profileUrl").notNullable()
    })
}
