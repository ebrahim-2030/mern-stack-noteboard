import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import toast from "react-hot-toast";
import api from "../lib/axios";

import { formatDate } from "../lib/utils";
import Modal from "./Modal";
import DeleteDialog from "./DeleteDialog";
import { useState } from "react";

const NoteCard = ({ note, setNotes }) => {
  const [showModal, setShowModal] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [loading, setLoading] = useState(false);

  //  handle note deleting
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n._id !== id));

      toast.success("Note deleted");
    } catch (err) {
      console.log("Error in deleting note", err);
      toast.error("Failed to delete note");
    } finally {
      setLoading(false);

      setShowModal(false);
      setNoteToDelete(null);
    }
  };

  // open modal and set which note to delete
  const handleShowModal = (e, id) => {
    e.preventDefault();
    setNoteToDelete(id);
    setShowModal(true);
  };

  // cancel modal
  const handleCancel = () => {
    setShowModal(false);
    setNoteToDelete(null);
  };

  // confirm modal delete
  const handleConfirm = () => {
    if (noteToDelete) {
      handleDelete(noteToDelete);
    }
  };

  return (
    <div>
      <Link
        to={`/note/${note._id}`}
        className="card bg-base-100  
      border-t-4 border-success border"
      >
        <div className="card-body">
          {/* note title */}
          <h3 className="card-title text-success">{note.title}</h3>
          {/* note content preview with max 3 lines */}
          <p className="text-base-content/70 line-clamp-3">{note.content}</p>
          {/* footer with created date and action icons */}
          <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm text-base-content/60">
              {formatDate(new Date(note.createdAt))}
            </span>
            {/* edit and delete buttons */}
            <div className="flex items-center gap-2">
              <PenSquareIcon className="size-5" />
              <button
                onClick={(e) => handleShowModal(e, note._id)}
                className="text-red-400/80 p-1.5 hover:bg-white/5 rounded-full"
              >
                <Trash2Icon className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </Link>

      {/* deleting dialog modal  */}
      <Modal showModal={showModal} handleCancel={handleCancel}>
        <DeleteDialog
          loading={loading}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </Modal>
    </div>
  );
};

export default NoteCard;
