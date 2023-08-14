/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    knex.schema.createTable("pokemon", (table) => {
        table.bigIncrements("id");
        table
            .bitInteger("projectId")
            .notNullable()
            .index()
            .unsigned()
            .references("projects.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.string("name").notNullable()
        table.bigInteger("regionalNum").notNullable()
        table.bigInteger("nationalNum").notNullable()
        table.text("dexEntry")
        table
            .bitInteger("type1Id")
            .notNullable()
            .index()
            .unsigned()
            .references("types.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .bitInteger("type2Id")
            .notNullable()
            .index()
            .unsigned()
            .references("types.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .bitInteger("ability1Id")
            .notNullable()
            .index()
            .unsigned()
            .references("abilities.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .bitInteger("ability2Id")
            .notNullable()
            .index()
            .unsigned()
            .references("abilities.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .bitInteger("ability3Id")
            .notNullable()
            .index()
            .unsigned()
            .references("abilities.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.integer("baseHp").notNullable().unsigned()
        table.integer("baseAtk").notNullable().unsigned()
        table.integer("baseDef").notNullable().unsigned()
        table.integer("baseSpA").notNullable().unsigned()
        table.integer("baseSpD").notNullable().unsigned()
        table.integer("baseSpe").notNullable().unsigned()
        table.integer("introGen")
        table.integer("catchRate").notNullable()
        table
            .bitInteger("eggGroup1Id")
            .notNullable()
            .index()
            .unsigned()
            .references("egg-groups.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .bitInteger("eggGroup2Id")
            .notNullable()
            .index()
            .unsigned()
            .references("egg-groups.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.string("spriteUrl").notNullable()
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
