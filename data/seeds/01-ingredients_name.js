exports.seed = function (knex, Promise) {
  return knex("ingredients_name").insert([{ ingredient_name: "garlic" }]);
};
