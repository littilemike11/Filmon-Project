import express from "express";
const router = express.Router();
import Student from "../models/studentModel.js";

//create a student
router.post("/students", async (req, res) => {
  try {
    //get student info
    const {
      Name,
      //Bio,
      GPA,
      School,
      //SchoolGoal: String,
      Grade,
      Prayer,
      //PrayerNotes: String,
      TigrinyaLevel,
      //TigrinyaNotes: String,
      Qidasse,
      //QidasseNotes: String,
      BiblePg,
    } = req.body;

    const student = new Student({
      Name,
      //Bio,
      GPA,
      School,
      //SchoolGoal: String,
      Grade,
      Prayer,
      //PrayerNotes: String,
      TigrinyaLevel,
      //TigrinyaNotes: String,
      Qidasse,
      //QidasseNotes: String,
      BiblePg,
    });
    //save to database
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//get student by id
router.get("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const foundStudent = await Student.findById(id);
    if (!foundStudent) {
      res.status(404).send("Student Not Found");
    } else {
      res.status(200).send(foundStudent);
    }
  } catch (error) {}
});

// get all students
router.get("/students", async (req, res) => {
  try {
    const allStudents = await Student.find();
    res.status(200).send(allStudents);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//update student by id
router.put("/students/:id", async (req, res) => {
  try {
    //get student id
    const id = req.params.id;
    const {
      Name,
      //Bio,
      GPA,
      School,
      //SchoolGoal: String,
      Grade,
      Prayer,
      //PrayerNotes: String,
      TigrinyaLevel,
      //TigrinyaNotes: String,
      Qidasse,
      //QidasseNotes: String,
      BiblePg,
    } = req.body;
    const foundStudent = await Student.findByIdAndUpdate(
      id,
      {
        Name,
        //Bio,
        GPA,
        School,
        //SchoolGoal: String,
        Grade,
        Prayer,
        //PrayerNotes: String,
        TigrinyaLevel,
        //TigrinyaNotes: String,
        Qidasse,
        //QidasseNotes: String,
        BiblePg,
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
      }
    );

    res.status(200).send(foundStudent);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/students/test", (req, res) => {
  res.status(200).json({ message: "good job" });
});

export default router;
