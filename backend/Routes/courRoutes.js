const express = require("express");
const Cour = require("../models/modelCours");
const isProf =require("../middlewares/isProf");
const isAuth =require("../middlewares/passport");
const router = express.Router();

router.post("/addCour", isAuth(),isProf,async (req, res) => {
    try {
        const newCour = new Cour({...req.body,user:req.user._id});
        await newCour.save();
        res.send({ cour: newCour, message: "cour succesffuly add" });
      } catch (err) {
        res.status(400).send(err.message);
      }
});

//get All courses
router.get("/courses", async (req, res) => {
  try {
    const allCourses = await Cour.find({}).populate("user","FirstName");
    res.send({ allCourses});
  } catch (err) {
    res.status(400).send(err.message);
  }
});
module.exports = router;