import ReactDOM from "react-dom";

const Modal = ({ showModal, children, handleCancel }) => {
  return ReactDOM.createPortal(
    // modal wrapper
    <div
      className={`p-4 absolute inset-0 bg-black/70 flex justify-center items-center z-50 ${
        showModal
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-all duration-500 `}
      onClick={handleCancel}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
