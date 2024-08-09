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
  BibleCertificate: String, // bible pg number
});
const Student = mongoose.model("Student", studentSchema);

export default Student;
