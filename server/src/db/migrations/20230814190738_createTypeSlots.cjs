/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("type-slots", table => {
        table.bigIncrements("id");
        table.integer("slot").notNullable().unsigned()
        table
            .bigInteger("typeId")
            .notNullable()
            .index()
            .unsigned()
            .references("types.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .bigInteger("pokemonId")
            .notNullable()
            .index()
            .unsigned()
            .references("pokemon.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.timestamp("createdAt").notNullable().defaultsTo(knex.fn.now());
        table.timestamp("updatedAt").notNullable().defaultsTo(knex.fn.now());

    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("type-slots")
}
