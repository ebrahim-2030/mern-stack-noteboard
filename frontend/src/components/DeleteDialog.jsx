import { CircleCheck, CircleX, Loader } from "lucide-react";
import React from "react";

const DeleteDialog = ({ onConfirm, onCancel, loading }) => {
  return (
    <div
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 shadow-md w-full max-w-md rounded-none  border-solid border-red-400/80"
    >
      <div className="card-body flex flex-col items-center">
        {/*  title */}
        <h3 className="card-title text-base-content">Sure to Delete note?</h3>
        {/* confirmation message */}
        <p className="text-base-content/70 line-clamp-3">
          Please confirm to permanently delete the note.
        </p>
        {/* action icons */}
        <div className="card-actions justify-between items-center mt-4">
          {/* edit and delete buttons */}
          <div className="flex items-center justify-center w-full gap-2 ">
            {loading ? (
              <button className="animate-spin  text-white/5 cursor-auto">
                <Loader size={26} color="#aaa" />
              </button>
            ) : (
              <button
                onClick={onConfirm}
                className=" text-green-400/80 p-1.5 hover:bg-white/5 rounded-full"
              >
                <CircleCheck size={28} />
              </button>
            )}

            <button
              onClick={onCancel}
              className="text-red-400/80 p-1.5 hover:bg-white/5 rounded-full"
            >
              <CircleX size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
