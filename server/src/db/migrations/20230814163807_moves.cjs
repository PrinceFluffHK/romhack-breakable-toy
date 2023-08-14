/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    knex.schema.createTable("moves", (table) => {
        table.bigIncrements("id");
        table.string("name").notNullable()
        table.integer("basePower")
        table.integer("accuracy")
        table
            .bigInteger("categoryId")
            .notNullable()
            .index()
            .unsigned()
            .references("move-categories.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table.integer("priority").notNullable().defaultsTo(0)
        table.text("effectText")
        table
            .bitInteger("projectId")
            .notNullable()
            .index()
            .unsigned()
            .references("projects.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table.timestamp("createdAt").notNullable().defaultsTo(knex.fn.now());
        table.timestamp("updatedAt").notNullable().defaultsTo(knex.fn.now());
    });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("moves");
};
