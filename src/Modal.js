import { createPortal } from "react-dom";

function Modal({ show, onClose }) {
  if (!show) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md text-center">
        <h2 className="text-xl font-bold mb-3">Fictional Restaurant</h2>
        <p className="mb-4">This is a fictional restaurant created for Meta's Front-End development capstone project. All images and content are for demonstration purposes only.</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          onClick={onClose}>
          Continue
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}


export default Modal;