/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("tr_notification", (table) => {
    table.increments("tn_id");
    table.integer("user_id").unsigned();
    table.integer("tn_renter").unsigned();
    table
      .dateTime("created_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table
      .dateTime("updated_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));

    table.foreign("user_id").references("user_id").inTable("ms_user");
    table.foreign("tn_renter").references("user_id").inTable("ms_user");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("tr_notification");
};
