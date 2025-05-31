import mongoose from "mongoose";

// notes Schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Notes model
const Note = mongoose.model("Note", noteSchema);

export default Note;
