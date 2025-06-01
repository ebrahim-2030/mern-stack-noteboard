import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import api from "../lib/axios";

const Create = () => {
  // state for title and content
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // check for empty fields
    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);

    try {
      // send note data to the backend
      await api.post("/notes", { title, content });

      toast.success("Note created successfully!");
      navigate("/");
    } catch (err) {
      console.log("Error creating note", err);

      // handle rate limit error
      if (err.response.status === 429) {
        toast.error("Slow down! Notes are coming too fast.", {
          duration: 4000,
          icon: "💀",
        });
      }
      toast.error("Failed to create note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto p-4 py-8 ">
        <div className="max-w-2xl mx-auto">
          {/* back button */}
          <Link to={"/"} className="btn btn-ghost mb-5">
            <ArrowLeftIcon className="size-5" />
            Backe to Notes
          </Link>

          {/* note form */}
          <div className="card bg-base-100">
            <div className="card-body text-xl mb-4">
              <h2 className="cart-title">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                {/* title input */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered rounded-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                {/* submit button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn btn-success btn-md rounded-full "
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
