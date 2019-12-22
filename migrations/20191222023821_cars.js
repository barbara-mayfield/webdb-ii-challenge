exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
    table.increments("id"),
    table.integer("VIN").notNull().unique(),
    table.text("make").notNull(),
    table.text("model").notNull(),
    table.float("mileage").notNull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
