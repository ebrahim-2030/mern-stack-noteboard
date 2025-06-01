import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import api from "../lib/axios";
import { ArrowLeftIcon, Loader, Plus, Trash2Icon } from "lucide-react";
import DeleteDialog from "../components/DeleteDialog";
import Modal from "../components/Modal";

const Details = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data.data);
      } catch (err) {
        console.log("Error in fetching note", err);
        toast.error("Failed to fetch note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);


  // handle note deleting
  const handleDelete = async () => {
    setLoading(true);
    try {
      await api.delete(`/notes/${id}`);
      // setNotes((prev) => prev.filter((n) => n._id !== id));
      toast.success("Note deleted");
      navigate("/");
    } catch (err) {
      console.log("Error in deleting note", err);
      toast.error("Failed to delete note");
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  // cancel modal
  const handleCancel = () => {
    setShowModal(false);
  };

  // confirm modal delete
  const handleConfirm = () => {
    handleDelete();
    setLoading(false);
  };

  // handle note updating
  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add both fields");
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/")
    } catch (err) {
      console.log("Error in not updating", err);
      toast.error("Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500">
        <Loader
          size={30}
          color="#aaa"
          className="animate-spin"
          aria-label="Loading"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <div className="p-4 max-w-2xl  mx-auto">
        <div className="flex justify-between items-center">
          {/* back button */}
          <Link to={"/"} className="btn btn-ghost ">
            <ArrowLeftIcon className="size-5" />
            Backe to Notes
          </Link>
          {/* link to create a new note */}
          <div>
            <button
              onClick={setShowModal}
              className=" flex items-center btn btn-md  bg-red-500/70 hover:bg-red-500/60 or rounded-full gap-2"
            >
              <Trash2Icon className="size-5" />
              <span>Delete Note</span>
            </button>
          </div>
        </div>
        <div className="card bg-base-100 mt-8">
          <div className="card-body">
            {/* title */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Note Title"
                className="input input-bordered rounded-full"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
              />
            </div>
            {/* content input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Content</span>
              </label>
              <textarea
                type="text"
                placeholder="Write your note here..."
                className="textarea textarea-bordered h-32"
                value={note.content}
                onChange={(e) => setNote({ ...note, content: e.target.value })}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="btn btn-success btn-md"
                disabled={saving}
                onClick={handleSave}
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>

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

export default Details;
