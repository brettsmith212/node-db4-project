exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([{ quantity: 12.2, step_id: 1 }]);
};
