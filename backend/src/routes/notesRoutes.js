import express from "express";

// import notes controller functions 
import {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";

const router = express.Router();

// endpoint to get all notes
router.get("/", getAllNotes);

// endpoint to get single note
router.get("/:id", getSingleNote);

// endpoint to create a new note
router.post("/", createNote);

// endpoint to update a note
router.put("/:id", updateNote);

// endpoint to delete a note
router.delete("/:id", deleteNote);


export default router;
