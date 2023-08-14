/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    knex.schema.createTable("evolutions", (table) => {
        table.bigIncrements("id");
        table.string("name").notNullable()
        table.integer("minLevel").notNullable().defaultsTo(0)
        table.string("parameter").notNullable().defaultsTo("none")
        table
            .bitInteger("preEvoId")
            .notNullable()
            .index()
            .unsigned()
            .references("pokemon.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .bitInteger("postEvoId")
            .notNullable()
            .index()
            .unsigned()
            .references("pokemon.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .bitInteger("conditionId")
            .notNullable()
            .index()
            .unsigned()
            .references("evo-conditions.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .bitInteger("projectId")
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
