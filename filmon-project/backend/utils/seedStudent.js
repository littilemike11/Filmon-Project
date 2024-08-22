import mongoose from "mongoose";
import Student from "../models/studentModel.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";
// import bcrypt from "bcrypt";

const currentFileUrl = import.meta.url;
const currentDir = dirname(fileURLToPath(currentFileUrl));

// Import the 'path' module explicitly
import * as path from "path";

const parentFolder = path.resolve(currentDir, "../");
dotenv.config({ path: path.join(parentFolder, ".env") });
// console.log(process.env.MONGO_URI);

// Connect to MongoDB
mongoose
  //process.env.MONGO_URI gave error
  .connect(
    "mongodb+srv://michaeledquilan:avBMVN4pNUArKfQP@cluster0.ipfvapa.mongodb.net/filmon?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error(err));

const testStudents = [
  {
    Name: "Michael Edquilan",
    GPA: 4.0,
    School: "Color Coded Labs",
    SchoolGoal: "Focusing on coding",
    Grade: "7th",
    Prayer: "test prayer",
    PrayerNotes: "test prayer notes",
    TigrinyaLevel: "level 1",
    TigrinyaNotes: "Idk what tigrinya is",
    Qidasse: "Kul Zegebra 2.0",
    QidasseNotes: "idk what Qidasse is either",
    BiblePg: 0,
    BibleNotes: ":c",
  },
  {
    Name: "Dylan Foley",
    GPA: 2.0,
    School: "Color Coded Labs",
    Grade: "9th",
    Prayer: "dylan prayer",
    TigrinyaLevel: "letters",
    Qidasse: "Kul Zegebra 2.0",
    BiblePg: 10,
  },
  {
    Name: "Elias",
    GPA: 1.0,
    School: "Color Coded Labs",
    Grade: "9th",
    Prayer: "Elias prayer",
    TigrinyaLevel: "words",
    Qidasse: "Kul Zegebra 3.1",
    BiblePg: 100,
  },
  {
    Name: "Filmon",
    GPA: 2.9,
    School: "Walnut Ridge",
    Grade: "11th",
    Prayer: "lord's prayer",
    TigrinyaLevel: "letters",
    Qidasse: "literagy",
    BiblePg: 19,
  },
  {
    Name: "Al",
    GPA: 3.5,
    School: "Harvard",
    Grade: "10th",
    Prayer: "god body",
    TigrinyaLevel: "fluent",
    Qidasse: "literagy",
    BiblePg: 85,
  },
];

// Seed the database with starter data
async function seedData() {
  try {
    // First, clear the database of existing modules
    await Student.deleteMany({});

    // Insert starter modules
    await Student.insertMany(testStudents);

    console.log("Database seeded!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedData();
