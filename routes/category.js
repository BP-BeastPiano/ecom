const router = require("express").Router();
const Category = require("../models/Category");
const { verifyTokenAndAdmin } = require("./verifyToken");

//ADD

router.post("/add", verifyTokenAndAdmin, async (req, res) => {
  const newCategory = new Category(req.body);

  try {
    const savedCategory = await newCategory.save();    
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(404).json(err);
  }
});

// GET

router.get("/",  async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
  });

  // UPDATE

  router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(500).json(err);
    }
  });

  // DELETE

  router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (error) {
      res.status(500).json(err);
    }
  })

module.exports = router;