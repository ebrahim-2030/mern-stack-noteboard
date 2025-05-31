import express from "express";
import notesRoutes from "./src/routes/notesRoutes.js";

// create express app
const app = express();

// notes middleware to handle api/notes endpoints
app.use("/api/notes", notesRoutes);

// run the server on port 5001
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
