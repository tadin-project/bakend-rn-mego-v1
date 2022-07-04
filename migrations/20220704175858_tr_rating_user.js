/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("tr_rating_user", (table) => {
    table.increments("tru_id");
    table.integer("user_id").unsigned();
    table.float("tru_value").defaultTo(0);
    table.text("tru_comment");
    table.integer("tru_reviewers").unsigned();
    table.foreign("user_id").references("user_id").inTable("ms_user");
    table.foreign("tru_reviewers").references("user_id").inTable("ms_user");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("tr_rating_user");
};
