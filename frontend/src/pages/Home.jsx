import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RateLimitedUI from "../components/RateLimitedUI";
import toast from "react-hot-toast";
import axios from "axios";
import NoteCard from "../components/NoteCard";

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
        const res = await axios.get("http://localhost:5001/api/notes");
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
  console.log(notes);
  return (
    <div className="min-h-screen">
      {/* header component */}
      <Header />

      {/* show rate limit message if applicable */}
      {isRateLimited && <RateLimitedUI />}

      <div className="mx-auto max-w-7xl p-4 pt-6">
        {/* show loading message while fetching */}
        {loading && <div className="text-center py-10">Loading notes...</div>}

        {/* show notes grid if data available and not rate limited */}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
