exports.seed = function (knex, Promise) {
  return knex("steps").insert([
    {
      step_number: 1,
      step_instructions: "first step instructions",
      recipe_id: 1,
    },
  ]);
};
