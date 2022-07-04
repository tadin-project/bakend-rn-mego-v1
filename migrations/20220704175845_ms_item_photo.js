/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("ms_item_photo", (table) => {
    table.increments("ip_id");
    table.string("ip_nama");
    table.integer("item_id").unsigned();
    table.foreign("item_id").references("item_id").inTable("ms_item");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("ms_item_photo");
};
