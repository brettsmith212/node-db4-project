exports.seed = function (knex, Promise) {
  return knex("steps").insert([
    {
      step_number: 1,
      step_instructions: "first step instructions",
      ingredients_id: 1,
    },
  ]);
};
