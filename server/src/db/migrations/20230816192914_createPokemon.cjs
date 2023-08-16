/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("pokemon", (table) => {
        table.bigIncrements("id");
        table.string("name").notNullable();
        table.integer("baseHp").notNullable()
        table.integer("baseAtk").notNullable()
        table.integer("baseDef").notNullable()
        table.integer("baseSpA").notNullable()
        table.integer("baseSpD").notNullable()
        table.integer("baseSpe").notNullable()
        table.integer("evAtk").notNullable()
        table.integer("evHp").notNullable()
        table.integer("evDef").notNullable()
        table.integer("evSpA").notNullable()
        table.integer("evSpD").notNullable()
        table.integer("evSpe").notNullable()
        table.string("spriteUrl").notNullable();
        table.string("profileUrl").notNullable()
        table.text("notes")
        table.integer("generation")
        table.bigInteger("nationalNum").notNullable();
        table.bigInteger("regionalNum")
        table
            .bigInteger("projectId")
            .index()
            .unsigned()
        table.timestamp("createdAt").notNullable().defaultsTo(knex.fn.now());
        table.timestamp("updatedAt").notNullable().defaultsTo(knex.fn.now());
    });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("pokemon");
};
