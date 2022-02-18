const db = require("../data/db-config");

async function getRecipeById(recipe_id) {
  const result = await db("recipe as r")
    .leftJoin("steps as s", "s.recipe_id", "r.recipe_id")
    .join("ingredients as i", "s.step_id", "i.step_id")
    .join("ingredients_name as ing", "ing.ingredients_id", "i.ingredients_id")
    .where("r.recipe_id", recipe_id)
    .select("r.*", "s.*", "i.*", "ing.*")
    .orderBy("s.step_number");

  const recipe = {
    recipe_id: result[0].recipe_id,
    recipe_name: result[0].recipe_name,
    created_at: result[0].created_at,
    steps: [],
  };

  if (result[0].step_id === null) {
    return recipe;
  }

  for (let step of result) {
    recipe.steps.push({
      step_id: step.step_id,
      step_number: step.step_number,
      step_instructions: step.step_instructions,
      ingredients: [],
    });
  }

  if (result[0].ingredient_id === null) {
    return recipe;
  }

  let count = 0;
  for (let ingredient of result) {
    recipe.steps[count].ingredients.push({
      ingredient_id: ingredient.ingredients_id,
      ingredient_name: ingredient.ingredient_name,
      ingredient_quantity: ingredient.ingredient_quantity,
    });
    count++;
  }

  return recipe;
}

module.exports = {
  getRecipeById,
};
