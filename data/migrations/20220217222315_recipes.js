exports.up = function (knex) {
  return knex.schema
    .createTable("recipe", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name", 128).unique().notNullable();
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      // tbl
      //   .integer("step_id")
      //   .unsigned()
      //   .notNullable()
      //   .references("step_id")
      //   .inTable("steps");
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.integer("step_number").notNullable();
      tbl.string("step_instructions").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("recipe_id")
        .inTable("recipe");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredients_id");
      tbl.decimal("quantity");
      tbl
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps");
    })
    .createTable("ingredients_name", (tbl) => {
      tbl.increments("ingredient_name_id");
      tbl.string("ingredient_name").unique();
      tbl
        .integer("ingredients_id")
        .unsigned()
        .references("ingredients_id")
        .inTable("ingredients");
    });
};

exports.down = function (knex) {
  knex.scheme
    .dropTableIfExists("ingredients_name")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipe");
};
