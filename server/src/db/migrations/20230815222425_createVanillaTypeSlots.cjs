/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("vanilla-type-slots", (table) => {
        table.bigIncrements("id");
        table.integer("slotNum").notNullable();
        table
            .bigInteger("typeId")
            .notNullable()
            .index()
            .unsigned()
            .references("vanilla-types.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .bigInteger("pokemonId")
            .notNullable()
            .index()
            .unsigned()
            .references("vanilla-pokemon.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.timestamp("createdAt").notNullable().defaultsTo(knex.fn.now());
        table.timestamp("updatedAt").notNullable().defaultsTo(knex.fn.now());
    });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("vanilla-type-slots");
};
