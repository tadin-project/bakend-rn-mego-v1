/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("ms_city", (table) => {
    table.increments("city_id");
    table.string("city_kode").notNullable();
    table.string("city_name").notNullable();
    table.boolean("city_status").defaultTo(true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("ms_city");
};
