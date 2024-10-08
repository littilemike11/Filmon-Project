import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Bio: String,
  GPA: Number,
  School: String,
  SchoolGoal: String,
  Grade: String,
  Prayer: String,
  PrayerNotes: String,
  TigrinyaLevel: String,
  TigrinyaNotes: String,
  Qidasse: String,
  QidasseNotes: String,
  BiblePg: Number, // bible pg number
  BibleNotes: String,
});
const Student = mongoose.model("Student", studentSchema);

export default Student;
