exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { quantity: 12.2, ingredient_name_id: 1 },
  ]);
};
