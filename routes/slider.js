const router = require("express").Router();
const Slider = require("../models/Slider");
const { verifyTokenAndAdmin } = require("./verifyToken");

//ADD

router.post("/add", verifyTokenAndAdmin, async (req, res) => {
  const newSlide = new Slider(req.body);

  try {
    const savedSlide = await newSlide.save();
    res.status(201).json(savedSlide);
  } catch (err) {
    res.status(404).json(err);
  }
});

// DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const deletedSlide = await Slider.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedSlide);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedSlide = await Slider.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSlide);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET SINGLE SLIDER

router.get("/find/:id", async (req, res) => {
  try {
    const slide = await Slider.findById(req.params.id);
    res.status(200).json(slide);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET

router.get("/", async (req, res) => {
  try {
    const slides = await Slider.find();
    res.status(200).json(slides);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
