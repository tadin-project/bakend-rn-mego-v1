/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("tr_request_item", (table) => {
    table.increments("tri_id");
    table.integer("tri_client").unsigned();
    table.integer("item_id").unsigned();
    table.integer("rs_id").unsigned();
    table.integer("tri_renter").unsigned();
    table.datetime("tri_time").defaultTo(knex.fn.now());

    table.foreign("tri_client").references("user_id").inTable("ms_user");
    table.foreign("tri_renter").references("user_id").inTable("ms_user");
    table.foreign("rs_id").references("rs_id").inTable("ms_request_status");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("tr_request_item");
};
