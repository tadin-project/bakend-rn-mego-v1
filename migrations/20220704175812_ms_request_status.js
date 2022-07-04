/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("ms_request_status", (table) => {
    table.increments("rs_id");
    table.string("rs_kode").notNullable();
    table.string("rs_nama").notNullable();
    table.boolean("rs_status").defaultTo(true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("ms_request_status");
};
