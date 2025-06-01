import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RateLimitedUI from "../components/RateLimitedUI";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";

import api from "../lib/axios";
import NotesNotFound from "../components/NotesNotFound";
import Modal from "../components/Modal";
import DeleteDialog from "../components/DeleteDialog";
import { Loader } from "lucide-react";

const Home = () => {
  // state to track if user is rate limited
  const [isRateLimited, setIsRateLimited] = useState(false);
  // state to store fetched notes
  const [notes, setNotes] = useState([]);
  // loading indicator state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch notes from backend api
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data.data);
        setIsRateLimited(false);
      } catch (err) {
        console.log("Error fetching notes", err);

        if (err.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          // show error toast for other errors
          toast.error("Failed to load notes");
        }
      } finally {
        // stop loading spinner
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      {/* header component */}
      <Header />

      {/* show rate limit message if applicable */}
      {isRateLimited && <RateLimitedUI />}

      <div className="mx-auto max-w-7xl p-4 pt-6">
        {/* show loading message while fetching */}

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <Loader
              size={30}
              color="#aaa"
              className="animate-spin"
              aria-label="Loading"
            />
            <p className="mt-4 text-lg font-medium">Loading Notes...</p>
          </div>
        )}

        {/* render NotesNoteFound component if there is no note */}
        {notes.length === 0 && !isRateLimited && !loading && <NotesNotFound />}

        {/* show notes grid if data available and not rate limited */}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
