import mongoose from "mongoose";

const studentSchema = new mongoose.model({
  name: {
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
  BibleCertificate: String,
});

export default studentSchema;
