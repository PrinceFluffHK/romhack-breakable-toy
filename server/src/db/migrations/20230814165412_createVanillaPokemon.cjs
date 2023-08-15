/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("vanilla-pokemon", (table) => {
        table.bigIncrements("id");
        table.string("name").notNullable();
        table.integer("baseHp").notNullable()
        table.integer("evHp").notNullable()
        table.integer("baseAtk").notNullable()
        table.integer("evAtk").notNullable()
        table.integer("baseDef").notNullable()
        table.integer("evDef").notNullable()
        table.integer("baseSpA").notNullable()
        table.integer("evSpA").notNullable()
        table.integer("baseSpD").notNullable()
        table.integer("evSpD").notNullable()
        table.integer("baseSpe").notNullable()
        table.integer("evSpe").notNullable()
        table.integer("catchRate").notNullable();
        table.string("spriteUrl").notNullable();
        table.bigInteger("nationalNum").notNullable();
        table.timestamp("createdAt").notNullable().defaultsTo(knex.fn.now());
        table.timestamp("updatedAt").notNullable().defaultsTo(knex.fn.now());
    });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("vanilla-pokemon");
};
