import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());
// app.use("/api/v1");

const uri =
  "mongodb+srv://michaeledquilan:avBMVN4pNUArKfQP@cluster0.ipfvapa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connectDb() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log("Error: " + error);
    await mongoose.disconnect();
  }
}

app.listen(PORT, async () => {
  await connectDb().catch(console.dir);
  console.log(`Express API started: http://localhost:${PORT}`);
});
