/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("evolutions", (table) => {
        table.bigIncrements("id");
        table.integer("minLevel").notNullable().defaultsTo(0)
        table.string("parameter").notNullable().defaultsTo("none")
        table
            .bigInteger("preEvoId")
            .notNullable()
            .index()
            .unsigned()
            .references("pokemon.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .bigInteger("postEvoId")
            .notNullable()
            .index()
            .unsigned()
            .references("pokemon.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .bigInteger("conditionId")
            .notNullable()
            .index()
            .unsigned()
            .references("evo-conditions.id")
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
    return knex.schema.dropTableIfExists("evolutions");
};
