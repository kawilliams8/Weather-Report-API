exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("forecasts", function(table) {
      table.increments("id").primary();
      table.string("day");
      table.string("date");
      table.integer("high");
      table.integer("low");

      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable("forecasts")
  ]);
};
