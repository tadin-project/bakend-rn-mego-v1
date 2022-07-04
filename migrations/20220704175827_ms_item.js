/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("ms_item", (table) => {
    table.increments("item_id");
    table.string("item_nama").notNullable();
    table.decimal("item_harga").defaultTo(0);
    table.text("item_desc");
    table.boolean("item_status").defaultTo(true);
    table.integer("category_id").unsigned();
    table.integer("user_id").unsigned();
    table
      .foreign("category_id")
      .references("category_id")
      .inTable("ms_category");
    table.foreign("user_id").references("user_id").inTable("ms_user");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("ms_item");
};
