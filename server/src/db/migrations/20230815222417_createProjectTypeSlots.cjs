/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("project-type-slots", (table) => {
        table.bigIncrements("id");
        table.integer("slotNum").notNullable()
        table
            .bigInteger("typeId")
            .notNullable()
            .index()
            .unsigned()
            .references("project-types.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .bigInteger("pokemonId")
            .notNullable()
            .index()
            .unsigned()
            .references("project-pokemon.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .bigInteger("projectId")
            .notNullable()
            .index()
            .unsigned()
            .references("projects.id")
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
    return knex.schema.dropTableIfExists("project-type-slots");
};
