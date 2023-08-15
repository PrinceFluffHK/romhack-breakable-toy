/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("project-pokemon", (table) => {
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
        table.integer("generation").defaultsTo(null)
        table.bigInteger("nationalNum").notNullable();
        table.bigInteger("regionalNum").defaultsTo(null)
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
    return knex.schema.dropTableIfExists("project-pokemon");
};
