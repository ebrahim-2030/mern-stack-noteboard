import express from "express";

// create express app
const app = express();


// test GET endpoint for fetchint notes
app.get("/api/notes", (req, res) => {
  res.send("You got 5 notes");
});

// run the server on port 5001
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
