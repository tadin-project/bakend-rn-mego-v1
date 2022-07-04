/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("ms_category", (table) => {
    table.increments("category_id");
    table.string("category_kode").notNullable();
    table.string("category_nama").notNullable();
    table.boolean("category_status").defaultTo(true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("ms_category");
};
