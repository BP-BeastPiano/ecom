const router = require("express").Router();
const Mail = require("../models/Mail");
const { verifyTokenAndAdmin } = require("./verifyToken");

//ADD

router.post("/add", async (req, res) => {
  const newMail = new Mail(req.body);

  try {
    const savedMail = await newMail.save();    
    res.status(201).json(savedMail);
  } catch (err) {
    res.status(404).json(err);
  }
});

// DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const deletedMail = await Mail.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedMail);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET

router.get("/",  async (req, res) => {
  try {
    const mails = await Mail.find();
    res.status(200).json(mails);
  } catch (error) {
    res.status(500).json(error);
  }
  });


module.exports = router;