const express = require("express");
const { getRecipeById } = require("./model");

const router = express.Router();

router.get("/:recipe_id", async (req, res) => {
  const { recipe_id } = req.params;
  console.log(recipe_id);
  try {
    const recipe = await getRecipeById(recipe_id);
    res.status(200).json(recipe);
  } catch (e) {
    res.status(500).json({ message: "error getting recipe" });
  }
});

module.exports = router;
