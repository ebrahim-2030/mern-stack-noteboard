import express from "express";
import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
dotenv.config();

// create express app
const app = express();


const PORT = process.env.PORT || 5001

// connecte to MongoDB
connectDB();

// notes middleware to handle api/notes endpoints
app.use("/api/notes", notesRoutes);

// run the server on port 5001
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
