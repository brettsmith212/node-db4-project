exports.seed = function (knex, Promise) {
  return knex("recipe").insert([{ recipe_name: "First Recipe" }]);
};
