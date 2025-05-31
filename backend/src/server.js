import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";

// create express app
const app = express();

const PORT = process.env.PORT || 5001;

// enable CORS for frontend at localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// parse json requests body
app.use(express.json());

// apply rate limiter middleware to control request rate
app.use(ratelimiter);


// notes middleware to handle api/notes endpoints
app.use("/api/notes", notesRoutes);

// connecte to MongoDB & run the server on port 5001
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
});
