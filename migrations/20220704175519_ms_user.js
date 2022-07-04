/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("ms_user", (table) => {
    table.increments("user_id");
    table.string("user_name").notNullable();
    table.string("user_telp");
    table.text("user_bio");
    table.string("user_fullname");
    table.string("user_profile");
    table.string("user_email").notNullable();
    table.string("password").notNullable();
    table.boolean("user_status").defaultTo(true);
    table.date("register_at").defaultTo(knex.fn.now());
    table.integer("city_id").unsigned();
    table.foreign("city_id").references("city_id").inTable("ms_city");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("ms_user");
};
