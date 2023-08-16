/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("project-ability-slots", (table) => {
        table.bigIncrements("id");
        table.integer("slotNum").notNullable()
        table
            .bigInteger("abilityId")
            .notNullable()
            .index()
            .unsigned()
            .references("project-abilities.id")
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
    return knex.schema.dropTableIfExists("project-ability-slots");
};
