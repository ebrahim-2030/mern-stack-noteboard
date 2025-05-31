import Note from "../models/Note.js";

// get all notes
export const getAllNotes = async (_, res) => {
  try {
    // retrieve all notes from DB descendingly
    const notes = await Note.find().sort({ createdAt: -1 });

    // send success response, if notes found
    if (notes.length > 0) {
      res.status(200).json({
        success: true,
        message: "Note fetched successfully",
        data: notes,
      });
    }
  } catch (err) {
    // log error, and sedn failure response
    console.log("Error in getAllNotes controller", err);
    res.status(500).json({
      message: false,
      message: "Internal server error",
    });
  }
};

// get single note by id
export const getSingleNote = async (req, res) => {
  try {
    // extract note-id from route parameters
    const noteID = req.params.id;

    // find note by id in the DB
    const foundNote = await Note.findById(noteID);

    // return 404, if note not found
    if (!foundNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found with the given id",
      });
    }

    // send success response, if note found
    res.status(200).json({
      success: true,
      message: "Note found successfully",
      data: foundNote,
    });
  } catch (err) {
    // loge the error, and send failure response
    console.log("Error in getSingleNote controller", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// create a new note
export const createNote = async (req, res) => {
  try {
    // extract note data from the body
    const { title, content } = req.body;

    // add new note in the DB
    const newNote = new Note({ title, content });

    // save new note in the DB
    const savedNote = await newNote.save();

    // send success response, if note added successfully
    if (savedNote) {
      res.status(201).json({
        success: true,
        message: "Note created successfully",
        data: savedNote,
      });
    }
  } catch (err) {
    // log the error, and send failure response
    console.log("Error in createNote controller", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// update a note by id
export const updateNote = async (req, res) => {
  try {
    // extract note-id from route parameters
    const noteID = req.params.id;

    // extract note data from the body/form
    const { title, content } = req.body;

    // update the note in the DB & return it
    const updatedNote = await Note.findByIdAndUpdate(
      noteID,
      { title, content },
      { new: true }
    );

    // send 404, if book not found
    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found with the given id",
      });
    }

    // send success response, if book updated
    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (err) {
    // log the error, and send failure response 
    console.log("Error in updateNote controller", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// delete a note by id
export const deleteNote = async (req, res) => {
  try {
    // extract note-id fron route parameters
    const noteID = req.params.id;

    // delete the note from the DB
    const deletedNote = await Note.findByIdAndDelete(noteID);

    // send 404, if bote note found
    if (!deleteNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found with the given id",
      });
    }

    // send success response, if book deleted 
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deletedNote,
    });
  } catch (err) {

    // log the error, and send failure response
    console.log("Error in deleteNote controller", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
